#!/bin/bash
# Scrape all beret dogs, find their owners, match to Type Media members
cd /Users/vexornex28/.openclaw/workspace/typemedia.net

python3 << 'PYEOF'
import json, urllib.parse, urllib.request, time, sys

BASE = "https://market.doginaldogs.com/api/trpc"

def trpc_get(procedure, params):
    input_json = json.dumps({"0": {"json": params}})
    encoded = urllib.parse.quote(input_json)
    url = f"{BASE}/{procedure}?batch=1&input={encoded}"
    req = urllib.request.Request(url)
    req.add_header('Accept', '*/*')
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read())
        return data[0]['result']['data']['json']

# Type Media members (case-insensitive)
TYPE_MEMBERS = {h.lower() for h in [
    'rivaura', 'luismeta', 'Javimedia', 'lil_defi', 'coinism', 'GuyTypeAura', 'ScadMeta',
    'DJAlevy8', 'emeta777', 'AimDontMiss', 'Whats_Tm_Like', 'leahbluewater', 'SteezType',
    'jaymeta', 'peak_arf', 'SwitchMetaX', 'Lxpold', 'Ajmetax', 'ThunderAuraX', 'mellowmeta',
    'dxmeta', 'MotionMetaX', 'Humble_Reminder', 'hBUDS_', 's1xkr', 'francinemeta', 'gruvemeta',
    'baileycMETA', 'rafmeta', 'Briggsmeta', 'Mavmetax', 'tall_data', 'yamameta', 'Rockmetax',
    'Chuckmetax', 'SparKMetaX', 'Pixiemetax1', 'xrayzone', 'MilkMetax', 'realmjmetax',
    'GirlKageX', 'slickmetax', 'corey_on_x', 'chaxaurax', 'Bjaura', 'goosemetax',
    'godsburnt', 'shieldmetax', 'barkmeta', 'edgemeta', 'Veemeta',
    'typemedia'  # treasury
]}

# Step 1: Get all unlisted beret dogs
print("Fetching unlisted beret dogs...")
unlisted = trpc_get("inscriptions.getUnlistedDogs", {
    "limit": 200, "sortBy": "dogNumber", "sortOrder": "asc",
    "filters": {"head": ["Beret"]}, "direction": "forward"
})
dogs_unlisted = unlisted['dogs']
print(f"  Found {len(dogs_unlisted)} unlisted")

# Step 2: Get listed beret dogs
print("Fetching listed beret dogs...")
listed = trpc_get("listings.getAll", {
    "limit": 200, "sortBy": "price", "sortOrder": "asc",
    "filters": {"head": ["Beret"]}, "direction": "forward"
})
dogs_listed = listed['listings']
print(f"  Found {len(dogs_listed)} listed")

# Combine all inscription IDs
all_inscriptions = []
for d in dogs_unlisted:
    all_inscriptions.append({
        'inscriptionId': d['inscriptionId'],
        'dogNumber': d['dogNumber'],
        'name': d.get('name', f"Doginal Dog #{d['dogNumber']}"),
    })
for d in dogs_listed:
    # Get dog number from inscription details later
    all_inscriptions.append({
        'inscriptionId': d['inscriptionId'],
        'dogNumber': None,
        'sellerAddress': d.get('sellerAddress'),
    })

print(f"\nTotal beret dogs: {len(all_inscriptions)}")

# Step 3: For each inscription, get owner address
print("\nFetching owner details...")
owner_cache = {}  # address -> twitter profile
results = []
errors = 0

for i, dog in enumerate(all_inscriptions):
    insc_id = dog['inscriptionId']
    try:
        details = trpc_get("wallet.getInscriptionDetails", {"inscriptionId": insc_id})
        owner_addr = details.get('ownerAddress')
        dog_id = details.get('dogId', dog.get('dogNumber'))
        
        # Get twitter profile for owner
        twitter = None
        if owner_addr:
            if owner_addr in owner_cache:
                twitter = owner_cache[owner_addr]
            else:
                try:
                    twitter = trpc_get("twitter.getProfile", {"walletAddress": owner_addr})
                    owner_cache[owner_addr] = twitter
                except:
                    owner_cache[owner_addr] = None
        
        username = twitter['username'] if twitter else None
        is_type = username and username.lower() in TYPE_MEMBERS
        
        result = {
            'dogId': dog_id,
            'inscriptionId': insc_id,
            'ownerAddress': owner_addr,
            'xHandle': username,
            'displayName': twitter.get('displayName') if twitter else None,
            'avatarUrl': twitter.get('avatarUrl') if twitter else None,
            'isTypeMember': is_type,
        }
        results.append(result)
        
        marker = '★ TYPE' if is_type else ''
        handle_str = f"@{username}" if username else (owner_addr[:12] + '...' if owner_addr else '???')
        sys.stdout.write(f"\r[{i+1}/{len(all_inscriptions)}] Dog #{dog_id} → {handle_str} {marker}     ")
        sys.stdout.flush()
        
        time.sleep(0.15)  # Be nice to the API
        
    except Exception as e:
        errors += 1
        results.append({
            'dogId': dog.get('dogNumber'),
            'inscriptionId': insc_id,
            'error': str(e),
            'isTypeMember': False,
        })
        sys.stdout.write(f"\r[{i+1}/{len(all_inscriptions)}] Error: {str(e)[:50]}     ")
        sys.stdout.flush()
        time.sleep(0.3)

print(f"\n\nDone! {len(results)} dogs processed, {errors} errors")

# Save all results
with open('beret-all-results.json', 'w') as f:
    json.dump(results, f, indent=2)

# Filter Type Media members
type_berets = [r for r in results if r.get('isTypeMember')]
print(f"\n{'='*50}")
print(f"TYPE MEDIA BERET HOLDERS: {len(type_berets)}")
print(f"{'='*50}")
for r in sorted(type_berets, key=lambda x: x.get('dogId', 0)):
    print(f"  Dog #{r['dogId']} — @{r['xHandle']} ({r.get('displayName', '')})")

with open('type-berets.json', 'w') as f:
    json.dump(type_berets, f, indent=2)

print(f"\nResults saved to beret-all-results.json and type-berets.json")
PYEOF
