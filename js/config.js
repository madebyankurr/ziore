/**
 * =================================================================
 * MINECRAFT SERVER CONFIGURATION
 * =================================================================
 * Edit this file to update all server details across the entire website.
 * No need to edit HTML code directly!
 */

const SERVER_CONFIG = {
  // Basic Server Details
  SERVER_NAME: "Ziore SMP",
  SERVER_TAGLINE: "Your next Minecraft adventure starts here.",
  SERVER_DESCRIPTION: "Experience a thriving Survival SMP with custom biomes, a player-driven economy, custom PvP arenas, and an active friendly community.",
  SERVER_IP: "play.ziore.com",
  BEDROCK_PORT: "19132",
  DISCORD_URL: "https://discord.gg/example",
  STORE_URL: "https://store.ziore.com",

  // Server Info & Stats
  SERVER_VERSION: "1.20.4 - 1.20.6",
  GAME_MODE: "Survival / SMP",
  SERVER_LOCATION: "North America (US East)",
  JAVA_BEDROCK_SUPPORT: "Java & Bedrock Edition",
  PLAYER_COUNT: {
    online: 142,
    max: 250
  },
  SERVER_STATUS: "online", // "online" or "offline" or "maintenance"
  UPTIME: "99.98%",

  // Key Features
  FEATURES: [
    {
      id: "pvp",
      icon: "⚔️",
      title: "Custom PvP",
      description: "Engage in balanced duels, custom arenas, competitive tournaments, and earn exclusive ranks and titles.",
      highlight: "Competitive Arenas"
    },
    {
      id: "smp",
      icon: "🌍",
      title: "Survival / SMP",
      description: "Explore custom biomes, grief-protected land claiming, player warps, and a completely vanilla+ gameplay experience.",
      highlight: "Grief Protection"
    },
    {
      id: "economy",
      icon: "💰",
      title: "Player Economy",
      description: "Thriving market with player shops, auctions, job progressions, and a fair non-pay-to-win economy system.",
      highlight: "Player Shops & Jobs"
    },
    {
      id: "events",
      icon: "🎁",
      title: "Community Events",
      description: "Join weekly building contests, boss raids, treasure hunts, and seasonal holiday festivals with big rewards.",
      highlight: "Weekly Prizes"
    },
    {
      id: "builds",
      icon: "🏰",
      title: "Player Showcase",
      description: "Build massive megastructures, custom kingdoms, and showcases with full protection and unlimited world limits.",
      highlight: "Infinite Worlds"
    },
    {
      id: "anticheat",
      icon: "🛡️",
      title: "Advanced Anti-Cheat",
      description: "Enterprise-grade anticheat and 24/7 moderation ensuring a fair, lag-free, and friendly gaming environment.",
      highlight: "Fair Play Guaranteed"
    }
  ],

  // Staff Team
  STAFF: [
    {
      name: "Alex_Craft",
      role: "Owner & Founder",
      roleBadge: "owner",
      avatar: "https://mc-heads.net/avatar/Alex_Craft/100",
      description: "Server founder and lead developer. Creating fun experiences since 2019."
    },
    {
      name: "Ember_Knight",
      role: "Lead Admin",
      roleBadge: "admin",
      avatar: "https://mc-heads.net/avatar/Ember_Knight/100",
      description: "Oversees daily operations, player support, and community events."
    },
    {
      name: "Pixel_Sage",
      role: "Lead Developer",
      roleBadge: "developer",
      avatar: "https://mc-heads.net/avatar/Pixel_Sage/100",
      description: "Custom plugin developer making magic happen behind the scenes."
    },
    {
      name: "Aura_Warden",
      role: "Head Moderator",
      roleBadge: "moderator",
      avatar: "https://mc-heads.net/avatar/Aura_Warden/100",
      description: "Dedicated to keeping our chat wholesome and our server safe."
    }
  ],

  // Server Rules
  RULES: [
    {
      number: "01",
      title: "Respect Other Players",
      description: "Treat everyone with kindness. Harassment, toxicity, hate speech, and discrimination will not be tolerated."
    },
    {
      number: "02",
      title: "No Cheating or Hacked Clients",
      description: "X-ray, flight, auto-clickers, macro exploits, or unapproved modded clients give unfair advantages and result in an instant ban."
    },
    {
      number: "03",
      title: "No Griefing or Stealing",
      description: "Respect other players' builds and property. Griefing claimed or unclaimed land is strictly forbidden."
    },
    {
      number: "04",
      title: "No Spamming or Advertising",
      description: "Keep global chat readable. Do not promote other servers, external sites, or flood chat with repetitive messages."
    },
    {
      number: "05",
      title: "Follow Staff Instructions",
      description: "Staff members are here to keep the server fun and safe. Please follow their guidance and report any issues politely."
    }
  ],

  // Recurring Popup Config
  POPUP: {
    enabled: true,
    image: "popup.jpg",
    intervalMs: 15000, // 15 seconds
    title: "Ziore SMP Announcement"
  },

  // Gallery Images / Screenshots
  GALLERY_IMAGES: [
    {
      title: "Spawn City Square",
      category: "Spawn",
      description: "The bustling heart of our kingdom where new adventures begin.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><defs><linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%2387CEEB'/><stop offset='100%25' stop-color='%23E0F7FA'/></linearGradient><linearGradient id='grass' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%237CB342'/><stop offset='100%25' stop-color='%23558B2F'/></linearGradient></defs><rect width='600' height='260' fill='url(%23sky)'/><rect y='260' width='600' height='140' fill='url(%23grass)'/><path d='M80 260 L120 180 L160 260 L200 150 L240 260 L280 190 L320 260' stroke='%238D6E63' stroke-width='8' fill='none'/><rect x='220' y='180' width='160' height='100' fill='%23D7CCC8' stroke='%235D4037' stroke-width='4'/><polygon points='220,180 300,110 380,180' fill='%23C62828'/><rect x='280' y='220' width='40' height='60' fill='%234E342E'/><circle cx='100' cy='80' r='35' fill='%23FFF9C4'/><text x='300' y='360' font-family='sans-serif' font-size='20' font-weight='bold' fill='%23FFFFFF' text-anchor='middle'>🏰 SPAWN CITY SQUARE</text></svg>"
    },
    {
      title: "Custom PvP Arena",
      category: "PvP",
      description: "Gladiator arena for high-stakes duels and community tournaments.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><defs><linearGradient id='pvpsky' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%23FFF3E0'/><stop offset='100%25' stop-color='%23FFE0B2'/></linearGradient></defs><rect width='600' height='400' fill='url(%23pvpsky)'/><ellipse cx='300' cy='280' rx='240' ry='90' fill='%23D7CCC8' stroke='%238D6E63' stroke-width='6'/><rect x='100' y='160' width='40' height='120' fill='%23B0BEC5'/><rect x='460' y='160' width='40' height='120' fill='%23B0BEC5'/><path d='M100 160 L120 130 L140 160 Z' fill='%232E7D32'/><path d='M460 160 L480 130 L500 160 Z' fill='%232E7D32'/><text x='300' y='280' font-family='sans-serif' font-size='28' fill='%23D32F2F' text-anchor='middle'>⚔️ COLOSSEUM ARENA</text><text x='300' y='360' font-family='sans-serif' font-size='18' font-weight='bold' fill='%23424242' text-anchor='middle'>PvP Tournament Grounds</text></svg>"
    },
    {
      title: "Community Shopping District",
      category: "Economy",
      description: "Player-owned shops and trade markets filled with rare goods.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23F1F8E9'/><rect x='50' y='200' width='140' height='150' fill='%23FFE0B2' stroke='%23E65100' stroke-width='4'/><polygon points='40,200 120,140 200,200' fill='%23FB8C00'/><rect x='230' y='180' width='140' height='170' fill='%23C8E6C9' stroke='%232E7D32' stroke-width='4'/><polygon points='220,180 300,120 380,180' fill='%2343A047'/><rect x='410' y='210' width='140' height='140' fill='%23BBDEFB' stroke='%231565C0' stroke-width='4'/><polygon points='400,210 480,150 560,210' fill='%231E88E5'/><text x='300' y='380' font-family='sans-serif' font-size='20' font-weight='bold' fill='%2333691E' text-anchor='middle'>🛍️ SHOPPING DISTRICT</text></svg>"
    },
    {
      title: "Dragon World Boss Event",
      category: "Events",
      description: "Hundreds of players uniting during our weekend world boss event.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23F3E5F5'/><path d='M150 220 Q 300 80 450 220' stroke='%237B1FA2' stroke-width='12' fill='none'/><polygon points='300,100 270,160 330,160' fill='%23AB47BC'/><circle cx='200' cy='280' r='12' fill='%2343A047'/><circle cx='250' cy='290' r='12' fill='%231E88E5'/><circle cx='350' cy='290' r='12' fill='%23FB8C00'/><circle cx='400' cy='280' r='12' fill='%23E53935'/><text x='300' y='360' font-family='sans-serif' font-size='20' font-weight='bold' fill='%234A148C' text-anchor='middle'>🐉 WORLD BOSS EVENT</text></svg>"
    },
    {
      title: "Custom Survival Realm",
      category: "Survival",
      description: "Custom biome terrain generation featuring giant crystal caverns and sky islands.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23E0F2FE'/><ellipse cx='200' cy='180' rx='100' ry='30' fill='%2381C784' stroke='%23388E3C' stroke-width='4'/><path d='M100 180 Q 200 260 300 180 Z' fill='%238D6E63'/><ellipse cx='420' cy='130' rx='80' ry='24' fill='%2381C784' stroke='%23388E3C' stroke-width='4'/><path d='M340 130 Q 420 200 500 130 Z' fill='%238D6E63'/><rect y='320' width='600' height='80' fill='%234CAF50'/><text x='300' y='370' font-family='sans-serif' font-size='20' font-weight='bold' fill='%231B5E20' text-anchor='middle'>🌍 FLOATING ISLES REALM</text></svg>"
    },
    {
      title: "Player Castle Monument",
      category: "Builds",
      description: "Grand community castle built entirely in survival mode by player guild 'Aether Alliance'.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23FFF8E1'/><rect x='150' y='140' width='300' height='200' fill='%23CFD8DC' stroke='%23455A64' stroke-width='6'/><rect x='120' y='100' width='70' height='240' fill='%23B0BEC5' stroke='%2337474F' stroke-width='4'/><rect x='410' y='100' width='70' height='240' fill='%23B0BEC5' stroke='%2337474F' stroke-width='4'/><polygon points='120,100 155,40 190,100' fill='%23D32F2F'/><polygon points='410,100 445,40 480,100' fill='%23D32F2F'/><rect x='260' y='240' width='80' height='100' fill='%235D4037'/><text x='300' y='380' font-family='sans-serif' font-size='20' font-weight='bold' fill='%2337474F' text-anchor='middle'>🏰 GRAND CASTLE MONUMENT</text></svg>"
    }
  ],

  // Easter Egg Config
  EASTER_EGGS: {
    konamiCodeUnlocked: false,
    grassBlockClicks: 0,
    requiredClicksToBreak: 5
  }
};

// Freeze or make accessible globally
if (typeof window !== 'undefined') {
  window.SERVER_CONFIG = SERVER_CONFIG;
}
