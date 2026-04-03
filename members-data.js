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
    { handle: "@Javimedia", avatar: "avatars/javimedia.jpg" },
    { handle: "@lil_defi", avatar: "avatars/lil_defi.jpg" },
    { handle: "@coinism", avatar: "avatars/coinism.jpg" },
    { handle: "@GuyTypeAura", avatar: "avatars/guytypeaura.jpg" },
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
    { handle: "@slickmetax", avatar: "avatars/slickmetax.jpg" },
    { handle: "@corey_on_x", avatar: "avatars/corey_on_x.jpg" },
    { handle: "@chaxaurax", avatar: "avatars/chaxaurax.jpg" },
    { handle: "@Bjaura", avatar: "avatars/bjaura.jpg" },
    { handle: "@goosemetax", avatar: "avatars/goosemetax.jpg" },
    { handle: "@HawaiiSol", avatar: "avatars/hawaiisol.jpg" },
    { handle: "@GraveMetaX", avatar: "avatars/gravemetax.jpg" },
    { handle: "@devinteerfilms", avatar: "avatars/devinteerfilms.jpg" },
];

// ── Profile Data (fetched from X) ──────────────────────
const PROFILES = {
    "rivaura": { name: "Riv", bio: "ceo @typemedia | creator @doginaldogs", followers: 10472, verified: true },
    "luismeta": { name: "Luis", bio: "AI Expert | Software Engineer | Building 👨\u200d💻 | COO @typemedia", followers: 8541, verified: true },
    "Javimedia": { name: "Javi", bio: "Chief Art Officer @typemedia | Space Host", followers: 4554, verified: true },
    "lil_defi": { name: "Defi", bio: "CMO @doginaldogs | Professional networker | Bridging Web2 and Web3 industries | Entrepreneur", followers: 15699, verified: true },
    "coinism": { name: "Coin", bio: "Artist | Creative Director | Crypto changed my life | HipHop | Comedy | Comics | MMA | @DoginalDogs & @TypeMedia DM for Marketing", followers: 4295, verified: false },
    "GuyTypeAura": { name: "Guy", bio: "Space host helping you face your fears || Live daily @ 1pm ET || Come Face Your Fears || @doginaldogs @TypeMedia", followers: 6052, verified: true },
    "ScadMeta": { name: "Scad", bio: "Sports, Finance, World News • Host of Type Sports space at 8pm EST • Profitable Sports Betting • @DoginalDogs + @TypeMedia", followers: 5943, verified: true },
    "DJAlevy8": { name: "DJ", bio: "DJ Alevy8 🎧 | Founder & CEO — iNFiN8 | Creative Systems | Veteran 🇺🇸", followers: 7063, verified: true },
    "emeta777": { name: "E", bio: "🐶 @doginaldogs", followers: 4595, verified: true },
    "AimDontMiss": { name: "Aim", bio: "@doginaldogs 🐶 / @typemedia 🎞️ / Spaces Host 🎙️ / Wife / Mom / Lead by Jesus 💕 / Unity In Multiplicity 🫶🏼", followers: 7084, verified: true },
    "Whats_Tm_Like": { name: "Tomorrow", bio: "Youtube What's Tomorrow Like??? Crypto | Metals | Economics", followers: 4079, verified: true },
    "leahbluewater": { name: "Leah", bio: "🎙️The Kickoff • 🎥 In Finance Today", followers: 16508, verified: true },
    "SteezType": { name: "Steez", bio: "Social Media Coordinator | Content Editor @typemedia @doginaldogs type jawn ngl", followers: 1353, verified: true },
    "jaymeta": { name: "Jay", bio: "Humanitarian | Hiking thru life with convos that connect hearts & holders • Faith. Friendships. Good vibes.", followers: 9575, verified: true },
    "peak_arf": { name: "Peak", bio: "web3 enthusiast | @typemedia space host | @seal_xrp community member", followers: 2966, verified: true },
    "SwitchMetaX": { name: "Switch", bio: "We both know what memories can bring, they bring diamonds and rust. #Carnivore #2A @DoginalDogs", followers: 1940, verified: true },
    "Lxpold": { name: "LX", bio: "SEEIN THE VISION? | God First.", followers: 3522, verified: true },
    "Ajmetax": { name: "AJ", bio: "🎙️ Space Host | 🇳🇬 Yoruba Boy | Community Builder | Content Creator & Writer | 💰 Crypto Enthusiast & Money Maxi", followers: 7081, verified: true },
    "ThunderAuraX": { name: "Thunder", bio: "Day one 0-0 mentality. Let's go! Let's get positive energy roaring! Winners win, losers lose. Type Army @TypeMediaX @doginaldogs", followers: 3257, verified: true },
    "mellowmeta": { name: "Mellow", bio: "Community Supporter | @doginaldogs content creator | @typemedia Spaces Host 8pm EST", followers: 5689, verified: true },
    "dxmeta": { name: "Danielle", bio: "Faith Over Fear | Master Connector | Community Builder | Content Creator | Spaces Host 🎙️", followers: 9721, verified: true },
    "MotionMetaX": { name: "Motion", bio: "HIM @doginaldogs | Visionary | Builder | Songwriter", followers: 6464, verified: true },
    "Humble_Reminder": { name: "Humble", bio: "YHWH | Crypto Enthusiast | Creative Thinker | Educator | Doginal Dogs | Mining Mafia 🟧 ⛏️ | Type Media Jawn", followers: 5020, verified: true },
    "hBUDS_": { name: "ℏBUDS", bio: "ℏBUDS™ : 420 1/1 NFTs | 7 NFTs every Monday @ 4:20pm EST on SentX | Only on @Hedera", followers: 2277, verified: true },
    "s1xkr": { name: "Creep", bio: "Leadership & Strategy Specialist | creator | sometimes I rap", followers: 11705, verified: true },
    "francinemeta": { name: "Francine", bio: "Web3 Marketer | Content Creator | Type Media", followers: 16125, verified: true },
    "gruvemeta": { name: "Gruve", bio: "GOD IS GOOD, Digital Art Creator, Crypto, Web3, TRUTH SEEKER, 🥇 X-GAMES", followers: 5582, verified: true },
    "baileycMETA": { name: "Bailey", bio: "Vice President of @Dogwartsdao | 6 years in crypto", followers: 4128, verified: true },
    "rafmeta": { name: "Raf", bio: "🍕| Visionary | Sports | Personal Development | NFTs", followers: 4559, verified: true },
    "Briggsmeta": { name: "Briggs", bio: "Truth Teller | Screen Printer | Pattern Recognizer | Car Enthusiast | Built for the Charts Born for the ride. 🇺🇸", followers: 4534, verified: true },
    "Mavmetax": { name: "Mav", bio: "Space Host: Tailspin 7pm 🐶 | 9/11 Responder | DM for Marketing | Ted Talk Meets Coast to Coast | Catholic", followers: 11155, verified: true },
    "tall_data": { name: "Tall", bio: "Business News & Satirical Content. CMO @doginaldogs. True wisdom is in knowing you know nothing", followers: 45279, verified: true },
    "yamameta": { name: "Yama", bio: "Tech, Military, Crypto | Providing value everyday | Creator @typemedia @doginaldogs", followers: 5987, verified: true },
    "Rockmetax": { name: "Rock", bio: "WALKING WITH GOD & MY TEAM @DoginalDogs OTF Crypto Spaces Network (CSN) Host & Content Creator. Do Only Good Everyday", followers: 7665, verified: true },
    "Chuckmetax": { name: "Chuck", bio: "Spaces Host AM 4:30-6est. @Doginaldogs Community member for life! Motivation Maxi.", followers: 6468, verified: true },
    "SparKMetaX": { name: "Spark", bio: "God/Source || Crypto enthusiast || Web 3 explorer || Qigong practitioner || Metaphysics @doginaldogs", followers: 7649, verified: true },
    "Pixiemetax1": { name: "Pixie", bio: "My purpose is and has always been to help! From being a mom, to a Registered Nurse to now focusing on financial freedom for myself and those around me 🙌🚀💃", followers: 4520, verified: true },
    "xrayzone": { name: "XRay", bio: "Truth Over Trends | Question Everything | Creator of the ZombieDog AI Chat. Crypto enthusiast Wannabe Digital Artist 😁 ❤️💸", followers: 2275, verified: true },
    "MilkMetax": { name: "Milk", bio: "Starter Wizard Dog Extraordinaire Type @doginaldogsx @typemedia @dogwartsdao God Got It", followers: 1679, verified: true },
    "realmjmetax": { name: "RealMj", bio: "Crypto Spaces Network Host Ex-Yorker who loves political commentary, peace, and prosperity for all!", followers: 4260, verified: true },
    "GirlKageX": { name: "Girl", bio: "Learning & Growing | Type Artist | Weights Make Me Happy | hits speaker sometimes | Wiffey", followers: 4110, verified: true },
    "slickmetax": { name: "Slick", bio: "Web3 Community Builder | Spaces Host 🎙️ @typemedia", followers: 7567, verified: true },
    "corey_on_x": { name: "Corey", bio: "OTF | FTO | DAO", followers: 10089, verified: true },
    "chaxaurax": { name: "Chax", bio: "The King of CTE | Co-Host for @typemedia sports at 8 pm EST | Content Creator", followers: 1134, verified: true },
    "Bjaura": { name: "BJ", bio: "Web3 Advocate & DeFi Staker 🚀 | SOL, BTC & ETH Long-Term | TypeMedia | DM for collabs | Space Host | #CryptoGrind", followers: 1747, verified: true },
    "goosemetax": { name: "Goose", bio: "🪿The Ai Guy | Ai Engineer₃ | 🎤Hosting For: PROTOTYPE@3PM EST | Building a Neuralink Prototype | @Doginaldogs @typemedia", followers: 3386, verified: true },
    "godsburnt": { name: "Shibo", bio: "Financial News & Commentary | @doginaldogs | God First", followers: 128109, verified: true },
    "shieldmetax": { name: "Shield", bio: "CFO @DoginalDogs | Web3 Space Host | Lift Others", followers: 46496, verified: true },
    "barkmeta": { name: "Bark", bio: "Financial News & Commentary. Chief Woof Officer @doginaldogs. With God all things are possible.", followers: 286946, verified: true },
    "edgemeta": { name: "Edge", bio: "@CryptoSpacesNet Spaces Host 🎙️ | Truth maxi, Creator, Skater | @doginaldogs 🐶 | Join The Edge (subs.) TODAY", followers: 13915, verified: true },
    "Veemeta": { name: "Vee", bio: "CSN Host | God is good | Chief Roar Officer @doginaldogs", followers: 24373, verified: true },
    "HawaiiSol": { name: "Hawaii", bio: "Staying active while navigating the Crypto space! 🇺🇸 🇯🇵 | @doginaldogs", followers: 2500, verified: true },
    "GraveMetaX": { name: "Grave", bio: "Audio Engineer • Web3 Creator | Founder of @hBUDS_ @ScribbleXRB @WaveWizardApp | Doginal Dog #420", followers: 3200, verified: true },
    "devinteerfilms": { name: "Devin", bio: "Independent Filmmaker", followers: 500, verified: true },
};

// ── Member Links (from Google Form) ──────────────────
const MEMBER_LINKS = {
    "Lxpold": [
        { type: "youtube", url: "https://youtube.com/@lxpold?si=stnllHM_YAyFWeec" }
    ],
    "emeta777": [
        { type: "website", url: "https://e-meta.co" }
    ],
    "gruvemeta": [
        { type: "youtube", url: "https://youtube.com/user/CryptoCopilots" },
        { type: "linktree", url: "https://allmylinks.com/gruvemeta" },
        { type: "telegram", url: "https://t.me/gruvemeta" }
    ],
    "GuyTypeAura": [
        { type: "kick", url: "https://kick.com/guytypeaura" },
        { type: "instagram", url: "https://www.instagram.com/guytypeaura" },
        { type: "tiktok", url: "https://www.tiktok.com/@guytypeaura" }
    ],
    "ScadMeta": [
        { type: "kick", url: "https://kick.com/scadmeta" },
        { type: "website", url: "https://scadstudios.xyz" }
    ],
    "Mavmetax": [
        { type: "youtube", url: "https://www.youtube.com/@Mavmetax" },
        { type: "website", url: "https://tailspinmedia.com" },
        { type: "kick", url: "https://kick.com/mavmetax" },
        { type: "spotify", url: "https://open.spotify.com/show/5VEzhNhclAw9LGhsUdk3Yd" }
    ],
    "MotionMetaX": [
        { type: "twitch", url: "https://www.twitch.tv/motionmeta" },
        { type: "linktree", url: "https://linktr.ee/MotionMetaX" }
    ],
    "mellowmeta": [
        { type: "kick", url: "https://kick.com/mellowmeta" },
        { type: "website", url: "https://mellowmeta.xyz" }
    ],
    "Humble_Reminder": [
        { type: "website", url: "https://HumbleReminder.com" },
        { type: "website", url: "https://signature.dog/Humble_Reminder" }
    ],
    "yamameta": [
        { type: "website", url: "https://YamaMeta.com" },
        { type: "youtube", url: "https://YouTube.com/@yamameta" }
    ],
    "Javimedia": [
        { type: "kick", url: "https://kick.com/JaviMedia" },
        { type: "website", url: "https://javimedia.art/" }
    ],
    "Briggsmeta": [
        { type: "rumble", url: "https://rumble.com/user/IRS365" },
        { type: "website", url: "https://briggsmetax.xyz" },
        { type: "instagram", url: "https://www.instagram.com/briggsmetax" }
    ],
    "luismeta": [
        { type: "kick", url: "https://kick.com/luismetax" },
        { type: "instagram", url: "https://www.instagram.com/luismetax" },
        { type: "tiktok", url: "https://www.tiktok.com/@luismetax" }
    ],
    "MilkMetax": [
        { type: "instagram", url: "https://www.instagram.com/cleachaz" },
        { type: "spotify", url: "https://open.spotify.com/artist/5WvLDg7bJne3xc1MMkYAJs" },
        { type: "apple-music", url: "https://music.apple.com/us/artist/c-leach/1473756513" },
        { type: "apple-music", url: "https://music.apple.com/us/artist/the-full-speed-family/1856792134" }
    ],
    "chaxaurax": [
        { type: "kick", url: "https://kick.com/chaxaurax" },
        { type: "tiktok", url: "https://www.tiktok.com/@chaxaurax" },
        { type: "instagram", url: "https://www.instagram.com/chase_adam60" }
    ],
    "rivaura": [
        { type: "kick", url: "https://kick.com/rivaura" },
        { type: "instagram", url: "https://www.instagram.com/rivaura1" },
        { type: "tiktok", url: "https://www.tiktok.com/@rivaura1" }
    ],
};

// SVG icons for each platform
const LINK_ICONS = {
    "youtube": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    "kick": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.333 0v24h5.338v-7.229L9.632 24h6.67l-5.093-8.76L16.302 8h-6.67l-2.96 4.527V0z"/></svg>',
    "twitch": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>',
    "instagram": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
    "tiktok": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    "spotify": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
    "apple-music": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0 0 19.7.165a10.104 10.104 0 0 0-1.878-.124C17.074.01 16.326 0 12.003 0h-.008C7.672 0 6.923.01 6.176.04a10.14 10.14 0 0 0-1.878.124A5.023 5.023 0 0 0 2.423.89C1.305 1.624.56 2.624.244 3.934a9.228 9.228 0 0 0-.24 2.19C.003 6.87 0 7.618 0 11.997v.006c0 4.38.003 5.126.004 5.873a9.23 9.23 0 0 0 .24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.024 5.024 0 0 0 1.874.726 10.1 10.1 0 0 0 1.878.123c.748.032 1.496.04 5.82.04h.008c4.323 0 5.072-.008 5.82-.04a10.1 10.1 0 0 0 1.878-.123 5.023 5.023 0 0 0 1.874-.726c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 0 0 .24-2.19c0-.747.003-1.495.003-5.873v-.006c0-4.379-.003-5.127-.003-5.873zM17.5 17.5a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2zm0-6a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v5.5z"/></svg>',
    "rumble": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.255 2.012c-1.455.004-2.833.26-3.66.468-2.2.552-4.174 1.597-5.636 3.417C1.239 8.098.4 10.744.4 13.715c0 2.663 1.24 4.644 3.013 5.89.892.625 1.93 1.008 2.978 1.244.886.2 1.79.3 2.566.355.93.066 1.593.066 1.593.066h.9s.663 0 1.593-.066c.777-.055 1.68-.154 2.566-.355 1.048-.236 2.086-.62 2.978-1.244C20.36 18.36 21.6 16.378 21.6 13.715c0-2.97-.84-5.617-2.559-7.818-1.462-1.82-3.436-2.865-5.635-3.417-.828-.208-2.206-.464-3.66-.468h-.098.608zm-.51 2.89c1.033.067 2.132.23 2.994.447 1.682.422 3.163 1.178 4.244 2.526C20.272 9.567 21 11.622 21 13.715c0 1.84-.8 3.177-2.138 4.114-.67.47-1.447.788-2.246.968-.713.16-1.445.244-2.116.29-.81.054-1.5.053-1.5.053H12s-.69.001-1.5-.054c-.671-.045-1.403-.129-2.116-.29-.8-.179-1.576-.497-2.246-.967C4.8 16.892 4 15.555 4 13.715c0-2.093.728-4.148 2.017-5.84 1.081-1.348 2.562-2.104 4.244-2.526.862-.216 1.961-.38 2.994-.447h-1.51z"/><path d="M10.5 10v7l6-3.5z"/></svg>',
    "telegram": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
    "linktree": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.953 15.066l-.038-4.28 4.09-2.476 4.08 2.478-.04 4.282L12 17.546zM12 .608L0 7.392v9.216L12 23.392l12-6.784V7.392L12 .608zm6.624 14.56l-5.808 3.28V24l6.624-3.744v-5.088h-.816zm-12.432 0v5.088L12.816 24v-5.552l-5.808-3.28h-.816z"/></svg>',
    "website": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    "kik": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.95 0 11.053c0 3.467 1.614 6.553 4.133 8.577-.215 1.313-.59 2.327-1.137 3.116.92-.04 2.088-.39 3.21-.85 1.063-.434 2.04-.956 2.673-1.374A12.507 12.507 0 0 0 12 22.104C18.627 22.104 24 17.156 24 11.053S18.627 0 12 0z"/></svg>',
};

const LINK_COLORS = {
    "youtube": "#FF0000",
    "kick": "#53FC18",
    "twitch": "#9146FF",
    "instagram": "#E4405F",
    "tiktok": "#fff",
    "spotify": "#1DB954",
    "apple-music": "#FA243C",
    "rumble": "#85C742",
    "telegram": "#26A5E4",
    "linktree": "#43E55E",
    "website": "#888",
    "kik": "#82BC23",
};

function formatFollowers(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return n.toString();
}

// ── Render Functions ──────────────────────────────────
function renderCard(m, i, isCouncil) {
    const handle = m.handle.replace('@', '');
    const initial = handle.charAt(0).toUpperCase();
    const avatarHtml = m.avatar
        ? `<img src="${m.avatar}" alt="${m.handle}" loading="lazy">`
        : `<span class="member-initial">${initial}</span>`;
    return `
    <div class="member-card ${isCouncil ? 'council-card' : ''}" style="animation-delay: ${i * 0.04}s" onclick="showProfile('${handle}', this)" role="button" tabindex="0">
        <div class="member-avatar">${avatarHtml}</div>
        <div class="member-handle">${m.handle}</div>
    </div>`;
}

function showProfile(handle, cardEl) {
    const profile = PROFILES[handle];
    const overlay = document.getElementById('profileModal');
    const card = document.getElementById('profileCard');
    if (!overlay || !card) return;

    // Find avatar from member data
    const allMembers = [...COUNCIL, ...MEMBERS];
    const member = allMembers.find(m => m.handle.replace('@','') === handle);
    const avatar = member && member.avatar ? member.avatar : null;

    const name = profile ? profile.name : handle;
    const bio = profile ? profile.bio : '';
    const followers = profile ? formatFollowers(profile.followers) : '—';
    const verified = profile && profile.verified;

    const avatarHtml = avatar
        ? `<img src="${avatar}" alt="${name}" class="modal-avatar">`
        : `<div class="modal-avatar modal-avatar-placeholder">${name.charAt(0).toUpperCase()}</div>`;

    // Build social links row
    const memberLinks = MEMBER_LINKS[handle] || [];
    let linksHtml = '';
    if (memberLinks.length > 0) {
        linksHtml = '<div class="modal-socials">' + memberLinks.map(l => {
            const icon = LINK_ICONS[l.type] || LINK_ICONS['website'];
            const color = LINK_COLORS[l.type] || '#888';
            const label = l.type.replace('-', ' ');
            return `<a href="${l.url}" target="_blank" class="modal-social-icon" title="${label}" style="color:${color}">${icon}</a>`;
        }).join('') + '</div>';
    }

    card.innerHTML = `
        <button class="modal-close" onclick="closeProfile()" aria-label="Close">&times;</button>
        ${avatarHtml}
        <div class="modal-name">
            ${name}
            ${verified ? '<svg class="modal-verified" viewBox="0 0 22 22" width="18" height="18"><path fill="#1d9bf0" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.855-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.272.587.702 1.087 1.24 1.44s1.167.551 1.813.568c.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.225 1.26.276 1.894.146.636-.13 1.22-.435 1.69-.88.445-.47.75-1.056.88-1.693.132-.635.085-1.293-.138-1.9.586-.273 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"/></svg>' : ''}
        </div>
        <div class="modal-handle">@${handle}</div>
        <div class="modal-bio">${bio || 'No bio available'}</div>
        <div class="modal-stats">
            <div class="modal-stat">
                <span class="modal-stat-num">${followers}</span>
                <span class="modal-stat-label">Followers</span>
            </div>
        </div>
        ${linksHtml}
        <a href="https://x.com/${handle}" target="_blank" class="modal-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            View on X
        </a>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProfile() {
    const overlay = document.getElementById('profileModal');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
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

    // Add modal overlay to body
    if (!document.getElementById('profileModal')) {
        const modal = document.createElement('div');
        modal.id = 'profileModal';
        modal.className = 'profile-overlay';
        modal.innerHTML = '<div id="profileCard" class="profile-card"></div>';
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeProfile();
        });
        document.body.appendChild(modal);
    }

    // ESC to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeProfile();
    });
}

document.addEventListener('DOMContentLoaded', renderMembers);
