/*
 * MEMBERS DATA - Type Media
 * 
 * Council members listed first, then affiliates.
 * Each member needs: handle (with @), avatar (path to PFP or null)
 * Council members have council: true
 */

const COUNCIL = [
    { handle: "@rivaura", avatar: "avatars/rivaura.jpg" },
    { handle: "@luismeta", avatar: "avatars/luismeta.jpg" },
    { handle: "@lil_defi", avatar: "avatars/lil_defi.jpg" },
    { handle: "@coinism", avatar: "avatars/coinism.jpg" },
    { handle: "@GuyTypeAura", avatar: "avatars/guytypeaura.jpg" },
    { handle: "@Javimedia", avatar: "avatars/javimedia.jpg" },
    { handle: "@ScadMeta", avatar: "avatars/scadmeta.jpg" },
];

const MEMBERS = [
    { handle: "@DJAlevy8", avatar: "avatars/djalevy8.jpg" },
    { handle: "@emeta777", avatar: "avatars/emeta777.jpg" },
    { handle: "@AimDontMiss", avatar: "avatars/aimdontmiss.jpg" },
    { handle: "@Whats_Tm_Like", avatar: "avatars/whats_tm_like.jpg" },
    { handle: "@leahbluewater", avatar: "avatars/leahbluewater.jpg" },
    { handle: "@SteezType", avatar: "avatars/steeztype.jpg" },
    { handle: "@jaymeta", avatar: "avatars/jaymeta.jpg" },
    { handle: "@peak_arf", avatar: "avatars/peak_arf.jpg" },
    { handle: "@SwitchMetaX", avatar: "avatars/switchmetax.jpg" },
    { handle: "@Lxpold", avatar: "avatars/lxpold.jpg" },
    { handle: "@Ajmetax", avatar: "avatars/ajmetax.jpg" },
    { handle: "@ThunderAuraX", avatar: "avatars/thunderaurax.jpg" },
    { handle: "@mellowmeta", avatar: "avatars/mellowmeta.jpg" },
    { handle: "@dxmeta", avatar: "avatars/dxmeta.jpg" },
    { handle: "@MotionMetaX", avatar: "avatars/motionmetax.jpg" },
    { handle: "@Humble_Reminder", avatar: "avatars/humble_reminder.jpg" },
    { handle: "@hBUDS_", avatar: "avatars/hbuds_.jpg" },
    { handle: "@s1xkr", avatar: "avatars/s1xkr.jpg" },
    { handle: "@francinemeta", avatar: "avatars/francinemeta.jpg" },
    { handle: "@gruvemeta", avatar: "avatars/gruvemeta.jpg" },
    { handle: "@baileycMETA", avatar: "avatars/baileycmeta.jpg" },
    { handle: "@rafmeta", avatar: "avatars/rafmeta.jpg" },
    { handle: "@Briggsmeta", avatar: "avatars/briggsmeta.jpg" },
    { handle: "@Mavmetax", avatar: "avatars/mavmetax.jpg" },
    { handle: "@tall_data", avatar: "avatars/tall_data.jpg" },
    { handle: "@yamameta", avatar: "avatars/yamameta.jpg" },
    { handle: "@Rockmetax", avatar: "avatars/rockmetax.jpg" },
    { handle: "@Chuckmetax", avatar: "avatars/chuckmetax.jpg" },
    { handle: "@SparKMetaX", avatar: "avatars/sparkmetax.jpg" },
    { handle: "@Pixiemetax1", avatar: "avatars/pixiemetax1.jpg" },
    { handle: "@xrayzone", avatar: "avatars/xrayzone.jpg" },
    { handle: "@MilkMetax", avatar: "avatars/milkmetax.jpg" },
    { handle: "@realmjmetax", avatar: "avatars/realmjmetax.jpg" },
    { handle: "@GirlKageX", avatar: "avatars/girlkagex.jpg" },
];

// ── Render Functions ──────────────────────────────────
function renderCard(m, i, isCouncil) {
    const handle = m.handle.replace('@', '');
    const xUrl = `https://x.com/${handle}`;
    const initial = handle.charAt(0).toUpperCase();
    const avatarHtml = m.avatar
        ? `<img src="${m.avatar}" alt="${m.handle}" loading="lazy">`
        : `<span class="member-initial">${initial}</span>`;
    return `
    <a href="${xUrl}" target="_blank" class="member-card ${isCouncil ? 'council-card' : ''}" style="animation-delay: ${i * 0.04}s">
        <div class="member-avatar">${avatarHtml}</div>
        <div class="member-handle">${m.handle}</div>
    </a>`;
}

function renderMembers() {
    const grid = document.getElementById('membersGrid');
    if (!grid) return;

    const councilSection = `
        <div class="council-section">
            <div class="section-header">
                <h2 class="section-title">Type Media Council</h2>
                <p class="section-subtitle">Leadership & decision makers</p>
            </div>
            <div class="council-grid">
                ${COUNCIL.map((m, i) => renderCard(m, i, true)).join('')}
            </div>
        </div>
        <div class="section-header" style="margin-top: 48px;">
            <h2 class="section-title">Affiliates</h2>
            <p class="section-subtitle">${MEMBERS.length} members strong</p>
        </div>
    `;

    grid.insertAdjacentHTML('beforebegin', councilSection);
    grid.innerHTML = MEMBERS.map((m, i) => renderCard(m, i, false)).join('');
}

document.addEventListener('DOMContentLoaded', renderMembers);
