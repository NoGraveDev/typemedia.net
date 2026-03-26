#!/usr/bin/env node
/**
 * Scrape beret dog data from Doginal Dogs marketplace
 * For each beret inscription, gets: dog ID, owner wallet, owner X handle, image URL
 */

const fs = require('fs');
const { execSync } = require('child_process');

const inscriptions = fs.readFileSync('beret-inscriptions.txt', 'utf-8')
  .trim().split('\n')
  .map(line => line.replace('/inscription/', ''));

// Type Media members (handle -> true) for cross-reference
const TYPE_MEMBERS = new Set([
  'rivaura', 'luismeta', 'Javimedia', 'lil_defi', 'coinism', 'GuyTypeAura', 'ScadMeta',
  'DJAlevy8', 'emeta777', 'AimDontMiss', 'Whats_Tm_Like', 'leahbluewater', 'SteezType',
  'jaymeta', 'peak_arf', 'SwitchMetaX', 'Lxpold', 'Ajmetax', 'ThunderAuraX', 'mellowmeta',
  'dxmeta', 'MotionMetaX', 'Humble_Reminder', 'hBUDS_', 's1xkr', 'francinemeta', 'gruvemeta',
  'baileycMETA', 'rafmeta', 'Briggsmeta', 'Mavmetax', 'tall_data', 'yamameta', 'Rockmetax',
  'Chuckmetax', 'SparKMetaX', 'Pixiemetax1', 'xrayzone', 'MilkMetax', 'realmjmetax',
  'GirlKageX', 'slickmetax', 'corey_on_x', 'chaxaurax', 'Bjaura', 'goosemetax',
  'godsburnt', 'shieldmetax', 'barkmeta', 'edgemeta', 'Veemeta'
]);

// Also lowercase versions for case-insensitive matching
const TYPE_MEMBERS_LOWER = new Set([...TYPE_MEMBERS].map(h => h.toLowerCase()));

async function scrapeDog(inscriptionId) {
  const url = `https://market.doginaldogs.com/inscription/${inscriptionId}`;
  try {
    // Use agent-browser to open and snapshot
    execSync(`agent-browser open "${url}"`, { timeout: 10000, stdio: 'pipe' });
    // Wait a bit for page load
    execSync('sleep 1');
    const snapshot = execSync('agent-browser snapshot -c', { timeout: 10000, encoding: 'utf-8' });
    
    // Extract dog ID
    const dogIdMatch = snapshot.match(/Dog ID #(\d+)/);
    const dogId = dogIdMatch ? dogIdMatch[1] : null;
    
    // Extract owner wallet
    const ownerMatch = snapshot.match(/Owner\s+([A-Za-z0-9]{34})/);
    const owner = ownerMatch ? ownerMatch[1] : null;
    
    // Extract X handle
    const handleMatch = snapshot.match(/@([A-Za-z0-9_]+).*twitter\.com|twitter\.com\/([A-Za-z0-9_]+)/);
    let xHandle = null;
    if (handleMatch) {
      xHandle = handleMatch[1] || handleMatch[2];
    }
    // Also try the link pattern
    if (!xHandle) {
      const linkMatch = snapshot.match(/link "@([^"]+)"/);
      if (linkMatch) xHandle = linkMatch[1];
    }
    
    // Check if this is a Type Media member
    const isTypeMember = xHandle && TYPE_MEMBERS_LOWER.has(xHandle.toLowerCase());
    
    return { inscriptionId, dogId, owner, xHandle, isTypeMember };
  } catch (e) {
    return { inscriptionId, dogId: null, owner: null, xHandle: null, isTypeMember: false, error: e.message };
  }
}

async function main() {
  console.log(`Scraping ${inscriptions.length} beret dogs...`);
  const results = [];
  
  for (let i = 0; i < inscriptions.length; i++) {
    const id = inscriptions[i];
    console.log(`[${i+1}/${inscriptions.length}] ${id.substring(0, 16)}...`);
    const result = await scrapeDog(id);
    results.push(result);
    if (result.dogId) {
      console.log(`  Dog #${result.dogId} | Owner: ${result.xHandle || result.owner || 'unknown'} ${result.isTypeMember ? '★ TYPE MEDIA' : ''}`);
    } else {
      console.log(`  Error: ${result.error || 'no data'}`);
    }
  }
  
  // Save all results
  fs.writeFileSync('beret-results.json', JSON.stringify(results, null, 2));
  
  // Filter Type Media members only
  const typeBerets = results.filter(r => r.isTypeMember);
  console.log(`\n=== TYPE MEDIA BERET HOLDERS (${typeBerets.length}) ===`);
  typeBerets.forEach(r => {
    console.log(`Dog #${r.dogId} — @${r.xHandle}`);
  });
  
  fs.writeFileSync('type-berets.json', JSON.stringify(typeBerets, null, 2));
  
  // Close browser
  execSync('agent-browser close', { stdio: 'pipe' });
}

main().catch(console.error);
