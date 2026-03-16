/*
 * ASSETS DATA - Type Media Treasury
 * Wallet: DLD7uMv9nMgKVECRgurTisAyTb19X3Tmjv
 * Source: market.doginaldogs.com
 */

const TREASURY_DOGS = [
    { id: 1650, inscription: "f9b3bc90c188be1937bc1505ee8e46f78bf49b899ba6c9a20189844a56bc0abfi0", number: 61338619 },
    { id: 625, inscription: "1f6a3f219df763b97b360ed1cfaba2e602e5956872cf4a0e9ea975f5481fbdadi0", number: 61345367 },
    { id: 7342, inscription: "2f2af37ac901771632e01dc2008828a14c8051a4272f25726659ea97996ebd2ci0", number: 61346034 },
    { id: 7409, inscription: "4c9892990c312c8fa71c3d36d090aa04e080168e46780315892be5cde028d69ci0", number: 61347126 },
    { id: 6821, inscription: "cdcb89e754b6eb843f2bc1cf7aac35a11a94895cd28ebc304c1aa598acad26c5i0", number: 61347137 },
    { id: 7640, inscription: "1fc4df053c210ff40b526a8e407e8482b47ee9a36331d3207e491619e234374ei0", number: 61347462 },
    { id: 6968, inscription: "2918f62732b51eaa083e7fbaf64891e6a6d5ed133ac4257cac40c784e8a3b7d6i0", number: 61347634 },
    { id: 7643, inscription: "19be3faf3801f36d94c19c13f7c51b0ad1b77718672440e75486eafa5bed5d77i0", number: 61347666 },
    { id: 6225, inscription: "ae8cccd516dc7082b642142aaa1ae64876ae6ab043ea06c54d701574625037cfi0", number: 61348665 },
    { id: 7107, inscription: "53547d2eb3448786424d41015ed94da13318f6f3c08fbf6eef7aa257c55e2e36i0", number: 61349601 },
    { id: 3246, inscription: "9906ad07847d30e3ec2b7a33526e09231fbf86ceba54aee671d13270945ba8fbi0", number: 61350426 },
    { id: 3107, inscription: "7e96e555cd9b7b3232216e30db4db345728c78446b6f3448577776f6b5fd7c4bi0", number: 61353444 },
    { id: 9682, inscription: "485bc49e676d1d402c8b45188d8049fe9cff3a596b5d4f01587c1c4188ddbd09i0", number: 61355266 },
    { id: 8826, inscription: "f5a576830326f4107b9d4a46a1fd928b086f76e08872fe5c0d7c20ac43e3b5f0i0", number: 61355549 },
    { id: 8591, inscription: "da06cb4244d457a9b12ed0cc1f566e60be3719ce1ad170f266ff7a4f486e4240i0", number: 61356763 },
    { id: 8096, inscription: "9f8ff59c9cf61fae26186badd7bcc71f2a5d3dd7e1e645fbd2d12867b37abda3i0", number: 61357968 },
];

/*
 * SEAL NFT COLLECTION - XRPL
 * Wallet: rwerjx1ZrbQMXbcorEfizrGm22j9WGbPea
 * Issuer: rHW3Wa9zhJ5BWzKAushDHnjctqeo5CvnFD
 * Source: xrp.cafe
 */
const TREASURY_SEALS = [
    { id: 102, rarity: 564, image: "seals/seal-102.png" },
    { id: 114, rarity: 379, image: "seals/seal-114.png" },
    { id: 170, rarity: 484, image: "seals/seal-170.png" },
    { id: 523, rarity: 694, image: "seals/seal-523.png" },
    { id: 610, rarity: 663, image: "seals/seal-610.png" },
    { id: 889, rarity: 843, image: "seals/seal-889.png" },
];

// ── Render Assets ──────────────────────────────────
function renderAssets() {
    const grid = document.getElementById('assetsGrid');
    const placeholder = document.getElementById('assetsPlaceholder');
    const totalEl = document.getElementById('totalAssets');
    const floorEl = document.getElementById('floorValue');
    const rarestEl = document.getElementById('rarest');

    if (!grid) return;

    // Hide placeholder, show grid
    if (placeholder) placeholder.style.display = 'none';
    grid.style.display = 'grid';

    // Update stats
    if (totalEl) totalEl.textContent = TREASURY_DOGS.length;
    if (floorEl) floorEl.textContent = '—';
    if (rarestEl) rarestEl.textContent = '#' + Math.min(...TREASURY_DOGS.map(d => d.id));

    grid.innerHTML = TREASURY_DOGS.map((dog, i) => {
        const marketUrl = `https://market.doginaldogs.com/inscription/${dog.inscription}`;
        return `
        <a href="${marketUrl}" target="_blank" class="asset-card" style="animation-delay: ${i * 0.05}s">
            <div class="asset-img-wrap">
                <img src="dogs/dog-${dog.id}.png" alt="Doginal Dog #${dog.id}" loading="lazy" class="asset-img">
            </div>
            <div class="asset-info">
                <div class="asset-name">Dog #${dog.id}</div>
                <div class="asset-meta">Inscription #${dog.number.toLocaleString()}</div>
            </div>
        </a>`;
    }).join('');
}

function renderSeals() {
    const section = document.getElementById('sealsSection');
    const grid = document.getElementById('sealsGrid');
    const totalEl = document.getElementById('totalSeals');
    const rarestEl = document.getElementById('rarestSeal');

    if (!grid || !section) return;

    section.style.display = 'block';

    if (totalEl) totalEl.textContent = TREASURY_SEALS.length;
    if (rarestEl) rarestEl.textContent = '#' + Math.min(...TREASURY_SEALS.map(s => s.rarity));

    grid.innerHTML = TREASURY_SEALS.map((seal, i) => {
        const marketUrl = `https://xrp.cafe/usercollection/rwerjx1ZrbQMXbcorEfizrGm22j9WGbPea/rHW3Wa9zhJ5BWzKAushDHnjctqeo5CvnFD/1`;
        return `
        <a href="${marketUrl}" target="_blank" class="asset-card" style="animation-delay: ${i * 0.05}s">
            <div class="asset-img-wrap">
                <img src="${seal.image}" alt="SEAL #${seal.id}" loading="lazy" class="asset-img" style="image-rendering: auto;">
            </div>
            <div class="asset-info">
                <div class="asset-name">SEAL #${seal.id}</div>
                <div class="asset-meta">Rarity ${seal.rarity}</div>
            </div>
        </a>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderAssets();
    renderSeals();
});
