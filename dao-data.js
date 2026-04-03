/*
 * DAO RANKINGS DATA - Type Media
 * 
 * Live data fetched from Google Sheets on page load.
 * Handle mapping kept locally (sheet doesn't have X handles).
 * Falls back to static data if fetch fails.
 */

const DAO_SHEET_URL = 'https://docs.google.com/spreadsheets/d/19i33cleSCFMOXEWS5RxBfh_LzZTlQ63cSg_hFTOLH4I/export?format=csv&gid=1548131125';

// Local handle mapping: name (lowercase) → X handle
const DAO_HANDLE_MAP = {
    'javi': 'Javimedia',
    'yama': 'yamameta',
    'mav': 'Mavmetax',
    'luis': 'luismeta',
    'trax': 'traxmetax',
    'guy': 'GuyTypeAura',
    'chuck': 'Chuckmetax',
    'duval': 'Duvalx',
    'coin': 'coinism',
    'xray': 'xrayzone',
    'gruve': 'gruvemeta',
    'raf': 'rafmeta',
    'motion': 'MotionMetaX',
    'hawaii': 'HawaiiSol',
    'scad': 'ScadMeta',
    'thunder': 'ThunderAuraX',
    'defi': 'lil_defi',
    'hbuds': 'hBUDS_',
    'switch': 'SwitchMetaX',
    'devin': 'devinteerfilms',
    'mellow': 'mellowmeta',
    'funk': 'Funkchan',
    'dj': 'DJAlevy8',
    'humble': 'Humble_Reminder',
    'pixie': 'Pixiemetax1',
    'geezy': 'geezymeta',
    'e': 'emeta777',
    'slick': 'slickmetax',
    'francine': 'francinemeta',
    'girl': 'GirlKageX',
    'shield': 'shieldmetax',
    'bailey': 'baileycMETA',
    'briggs': 'Briggsmeta',
    'jay': 'jaymeta',
    'aim': 'AimDontMiss',
    'creep': 's1xkr',
    'chax/steez': 'chaxaurax',
};

// Static fallback (used if Google Sheets fetch fails)
const DAO_MEMBERS_STATIC = [
    { rank: 1, name: "Javi", handle: "Javimedia", shares: 8.5 },
    { rank: 2, name: "Yama", handle: "yamameta", shares: 8 },
    { rank: 3, name: "Mav", handle: "Mavmetax", shares: 5 },
    { rank: 4, name: "Luis", handle: "luismeta", shares: 4.5 },
    { rank: 5, name: "Duval", handle: "Duvalx", shares: 4.5 },
    { rank: 6, name: "Trax", handle: "traxmetax", shares: 4.5 },
    { rank: 7, name: "Guy", handle: "GuyTypeAura", shares: 4 },
    { rank: 8, name: "Chuck", handle: "Chuckmetax", shares: 3.5 },
    { rank: 9, name: "Coin", handle: "coinism", shares: 3 },
    { rank: 10, name: "Drew", handle: null, shares: 3 },
    { rank: 11, name: "XRay", handle: "xrayzone", shares: 3 },
    { rank: 12, name: "Gruve", handle: "gruvemeta", shares: 2.5 },
    { rank: 13, name: "Raf", handle: "rafmeta", shares: 2.5 },
    { rank: 14, name: "Motion", handle: "MotionMetaX", shares: 2.5 },
    { rank: 15, name: "Hawaii", handle: "HawaiiSol", shares: 2.5 },
    { rank: 16, name: "Scad", handle: "ScadMeta", shares: 2 },
    { rank: 17, name: "Thunder", handle: "ThunderAuraX", shares: 2 },
    { rank: 18, name: "BradX", handle: null, shares: 2 },
    { rank: 19, name: "Defi", handle: "lil_defi", shares: 2 },
    { rank: 20, name: "hBuds", handle: "hBUDS_", shares: 2 },
    { rank: 21, name: "Switch", handle: "SwitchMetaX", shares: 2 },
    { rank: 22, name: "Devin", handle: "devinteerfilms", shares: 2 },
    { rank: 23, name: "Mellow", handle: "mellowmeta", shares: 1.5 },
    { rank: 24, name: "Funk", handle: "Funkchan", shares: 1.5 },
    { rank: 25, name: "DJ", handle: "DJAlevy8", shares: 1.5 },
    { rank: 26, name: "Zeal", handle: null, shares: 1 },
    { rank: 27, name: "Blessed", handle: null, shares: 1 },
    { rank: 28, name: "Humble", handle: "Humble_Reminder", shares: 1 },
    { rank: 29, name: "Pixie", handle: "Pixiemetax1", shares: 1 },
    { rank: 30, name: "Geezy", handle: "geezymeta", shares: 1 },
    { rank: 31, name: "E", handle: "emeta777", shares: 1 },
    { rank: 32, name: "Slick", handle: "slickmetax", shares: 1 },
    { rank: 33, name: "Zeke", handle: null, shares: 1 },
    { rank: 34, name: "Roll", handle: null, shares: 1 },
    { rank: 35, name: "Francine", handle: "francinemeta", shares: 0.5 },
    { rank: 36, name: "Java", handle: null, shares: 0.5 },
    { rank: 37, name: "Girl", handle: "GirlKageX", shares: 0.5 },
    { rank: 38, name: "Zain", handle: null, shares: 0.5 },
    { rank: 39, name: "Shield", handle: "shieldmetax", shares: 0.5 },
    { rank: 40, name: "Troy", handle: null, shares: 0.5 },
    { rank: 41, name: "Lone", handle: null, shares: 0.5 },
    { rank: 42, name: "Bailey", handle: "baileycMETA", shares: 0.5 },
    { rank: 43, name: "Briggs", handle: "Briggsmeta", shares: 0.5 },
    { rank: 44, name: "Jay", handle: "jaymeta", shares: 0.5 },
    { rank: 45, name: "Aim", handle: "AimDontMiss", shares: 0.5 },
    { rank: 46, name: "Tea", handle: null, shares: 0.5 },
    { rank: 47, name: "Creep", handle: "s1xkr", shares: 0.5 },
    { rank: 48, name: "4given", handle: null, shares: 0.5 },
    { rank: 49, name: "Manda", handle: null, shares: 0.5 },
    { rank: 50, name: "Solgods", handle: null, shares: 0.5 },
    { rank: 51, name: "Rise", handle: null, shares: 0.5 },
    { rank: 52, name: "Anthem", handle: null, shares: 0.5 },
    { rank: 53, name: "Deeze", handle: null, shares: 0.5 },
    { rank: 54, name: "Stix", handle: null, shares: 0.5 },
    { rank: 55, name: "Chax/Steez", handle: "chaxaurax", shares: 0.5 },
    { rank: 56, name: "Nox", handle: null, shares: 0.5 },
];

// Live DAO_MEMBERS — populated by fetchDaoData() or falls back to static
let DAO_MEMBERS = [...DAO_MEMBERS_STATIC];

async function fetchDaoData() {
    try {
        const res = await fetch(DAO_SHEET_URL);
        if (!res.ok) throw new Error('Sheet fetch failed');
        const csv = await res.text();
        const lines = csv.trim().split('\n');
        const members = [];
        
        for (let i = 1; i < lines.length; i++) {
            const cols = lines[i].split(',');
            const rank = parseInt(cols[0]);
            const name = (cols[1] || '').trim();
            const shares = parseFloat(cols[2]);
            
            if (!rank || !name || isNaN(shares)) continue;
            
            const handle = DAO_HANDLE_MAP[name.toLowerCase()] || null;
            members.push({ rank, name, handle, shares });
        }
        
        if (members.length > 0) {
            DAO_MEMBERS = members;
            console.log(`[DAO] Live data loaded: ${members.length} members from Google Sheets`);
            return true;
        }
    } catch (e) {
        console.warn('[DAO] Fetch failed, using static fallback:', e.message);
    }
    return false;
}
