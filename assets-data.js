/*
 * ASSETS DATA — Type Media DAO Treasury
 * 
 * To add assets, update the ASSETS array below.
 * Each asset needs: name, id, image (URL)
 * Optional: traits (array of strings), collection (string)
 * 
 * Once Adam provides the real NFT data, replace the 
 * placeholder entries and the grid will populate automatically.
 */

const ASSETS = [
    // ── PLACEHOLDER — Replace with real Doginal NFT data ──
    // Example format:
    // {
    //     name: "Doginal Dog #1234",
    //     id: "#1234",
    //     image: "https://path-to-image.png",
    //     traits: ["Blue Background", "Sunglasses", "Gold Chain"],
    //     collection: "Doginal Dogs",
    //     marketUrl: "https://market.doginaldogs.com/asset/1234"
    // },
];

// ── Render Assets ──────────────────────────────────
function renderAssets() {
    const grid = document.getElementById('assetsGrid');
    const placeholder = document.getElementById('assetsPlaceholder');
    const totalEl = document.getElementById('totalAssets');
    const floorEl = document.getElementById('floorValue');
    const rarestEl = document.getElementById('rarest');
    
    if (!grid) return;

    if (ASSETS.length === 0) {
        grid.style.display = 'none';
        if (placeholder) placeholder.style.display = 'block';
        return;
    }

    // Hide placeholder, show grid
    if (placeholder) placeholder.style.display = 'none';
    grid.style.display = 'grid';

    // Update stats
    if (totalEl) totalEl.textContent = ASSETS.length;
    if (floorEl) floorEl.textContent = `$${(ASSETS.length * 5000).toLocaleString()}`; // Estimated at $5K floor
    if (rarestEl) rarestEl.textContent = ASSETS[0]?.name || '—';

    grid.innerHTML = ASSETS.map((a, i) => {
        const traitsHtml = (a.traits || []).map(t => 
            `<span class="asset-card-trait">${t}</span>`
        ).join('');
        
        const linkWrap = a.marketUrl 
            ? [`<a href="${a.marketUrl}" target="_blank" style="text-decoration:none;color:inherit;">`, `</a>`]
            : ['', ''];

        return `
        ${linkWrap[0]}
        <div class="asset-card" style="animation-delay: ${i * 0.04}s">
            <div class="asset-card-image">
                <img src="${a.image}" alt="${a.name}" loading="lazy">
            </div>
            <div class="asset-card-info">
                <div class="asset-card-name">${a.name}</div>
                <div class="asset-card-id">${a.id}</div>
                ${traitsHtml ? `<div class="asset-card-traits">${traitsHtml}</div>` : ''}
            </div>
        </div>
        ${linkWrap[1]}`;
    }).join('');
}

// Init on load
document.addEventListener('DOMContentLoaded', renderAssets);
