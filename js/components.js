/**
 * Dynamic Component Renderer and Config Binder
 * Connects SERVER_CONFIG from js/config.js directly to the DOM
 */

const SiteComponents = {
  init() {
    const config = window.SERVER_CONFIG;
    if (!config) {
      console.error("SERVER_CONFIG not found in window. Make sure js/config.js is loaded first.");
      return;
    }

    this.bindTextElements(config);
    this.bindLinkElements(config);
    this.renderServerInfoCards(config);
    this.renderFeatures(config);
    this.renderHowToJoinSteps(config);
    this.renderStaff(config);
    this.renderRules(config);
    this.renderGallery(config, 'all');
    this.setupGalleryFilters(config);
  },

  // Bind single text fields across all elements with [data-config]
  bindTextElements(config) {
    document.querySelectorAll('[data-config]').forEach(elem => {
      const key = elem.getAttribute('data-config');
      if (key && config[key] !== undefined) {
        if (key === 'PLAYER_COUNT' && typeof config[key] === 'object') {
          elem.textContent = `${config[key].online} / ${config[key].max}`;
        } else {
          elem.textContent = config[key];
        }
      }
    });

    // Special online count badge
    const onlineBadges = document.querySelectorAll('.status-count');
    onlineBadges.forEach(badge => {
      if (config.PLAYER_COUNT) {
        badge.textContent = `${config.PLAYER_COUNT.online}/${config.PLAYER_COUNT.max} Online`;
      }
    });
  },

  // Bind links like Discord URL, Store URL across all matching buttons/anchors
  bindLinkElements(config) {
    document.querySelectorAll('[data-config-href]').forEach(elem => {
      const key = elem.getAttribute('data-config-href');
      if (key && config[key]) {
        elem.setAttribute('href', config[key]);
        elem.setAttribute('target', '_blank');
        elem.setAttribute('rel', 'noopener noreferrer');
      }
    });
  },

  // Render Section 2: Server Info Cards
  renderServerInfoCards(config) {
    const container = document.getElementById('server-info-grid');
    if (!container) return;

    const cards = [
      {
        icon: "🎮",
        label: "Game Mode",
        value: config.GAME_MODE || "Survival / SMP"
      },
      {
        icon: "⚡",
        label: "Minecraft Version",
        value: config.SERVER_VERSION || "1.20.4+"
      },
      {
        icon: "📱",
        label: "Platform Support",
        value: config.JAVA_BEDROCK_SUPPORT || "Java & Bedrock"
      },
      {
        icon: "🌐",
        label: "Server Location",
        value: config.SERVER_LOCATION || "North America"
      },
      {
        icon: "👥",
        label: "Current Players",
        value: config.PLAYER_COUNT ? `${config.PLAYER_COUNT.online} / ${config.PLAYER_COUNT.max} Online` : "100+ Online"
      },
      {
        icon: "🛡️",
        label: "Server Uptime",
        value: config.UPTIME || "99.9%"
      }
    ];

    container.innerHTML = cards.map(card => `
      <div class="info-card">
        <div class="info-icon-wrapper">${card.icon}</div>
        <div class="info-content">
          <div class="info-label">${card.label}</div>
          <div class="info-value">${card.value}</div>
        </div>
      </div>
    `).join('');
  },

  // Render Section 3: Features
  renderFeatures(config) {
    const container = document.getElementById('features-grid');
    if (!container || !config.FEATURES) return;

    container.innerHTML = config.FEATURES.map(feat => `
      <div class="feature-card">
        <div class="feature-top">
          <div class="feature-icon">${feat.icon}</div>
          <span class="feature-highlight">${feat.highlight}</span>
        </div>
        <h3 class="feature-title">${feat.title}</h3>
        <p class="feature-desc">${feat.description}</p>
      </div>
    `).join('');
  },

  // Render Section 4: How To Join Steps
  renderHowToJoinSteps(config) {
    const container = document.getElementById('steps-wrapper');
    if (!container) return;

    const steps = [
      {
        num: "1",
        title: "Open Minecraft",
        desc: "Launch your Minecraft client (Java Edition or Bedrock Edition supported)."
      },
      {
        num: "2",
        title: "Add Server IP",
        desc: `Navigate to Multiplayer > Add Server and enter <strong>${config.SERVER_IP}</strong> as the server address.`,
        actionHtml: `<button class="btn btn-outline btn-sm copy-ip-btn" data-ip="${config.SERVER_IP}">📋 Copy IP: ${config.SERVER_IP}</button>`
      },
      {
        num: "3",
        title: "Join & Play!",
        desc: "Click Join Server! Claim your land, connect with the community, and begin your journey."
      }
    ];

    container.innerHTML = steps.map(step => `
      <div class="step-card">
        <div class="step-number">${step.num}</div>
        <h3 class="step-title">${step.title}</h3>
        <p class="step-desc">${step.desc}</p>
        ${step.actionHtml ? `<div class="step-action-box">${step.actionHtml}</div>` : ''}
      </div>
    `).join('');
  },

  // Render Section 6: Staff Team
  renderStaff(config) {
    const container = document.getElementById('staff-grid');
    if (!container || !config.STAFF) return;

    container.innerHTML = config.STAFF.map(member => `
      <div class="staff-card">
        <div class="staff-avatar-wrapper">
          <img class="staff-avatar" src="${member.avatar}" alt="${member.name}" loading="lazy" onerror="this.src='https://mc-heads.net/avatar/MHM/100'">
        </div>
        <h3 class="staff-name">${member.name}</h3>
        <span class="staff-role-badge role-${member.roleBadge || 'moderator'}">${member.role}</span>
        <p class="staff-desc">${member.description}</p>
      </div>
    `).join('');
  },

  // Render Section 7: Server Rules
  renderRules(config) {
    const container = document.getElementById('rules-list');
    if (!container || !config.RULES) return;

    container.innerHTML = config.RULES.map(rule => `
      <div class="rule-card">
        <div class="rule-num">${rule.number}</div>
        <div class="rule-body">
          <h3 class="rule-title">${rule.title}</h3>
          <p class="rule-desc">${rule.description}</p>
        </div>
      </div>
    `).join('');
  },

  // Render Section 8: Gallery Grid & Filter System
  renderGallery(config, filterCategory = 'all') {
    const container = document.getElementById('gallery-grid');
    if (!container || !config.GALLERY_IMAGES) return;

    const filtered = filterCategory === 'all' 
      ? config.GALLERY_IMAGES 
      : config.GALLERY_IMAGES.filter(img => img.category.toLowerCase() === filterCategory.toLowerCase());

    container.innerHTML = filtered.map((item, index) => `
      <div class="gallery-card" data-index="${index}" data-title="${item.title}" data-img="${item.image}" data-desc="${item.description}">
        <div class="gallery-img-wrapper">
          <img class="gallery-img" src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">🔍</div>
        </div>
        <div class="gallery-info">
          <h3 class="gallery-item-title">${item.title}</h3>
          <p class="gallery-item-desc">${item.description}</p>
        </div>
      </div>
    `).join('');

    // Attach Lightbox Handlers
    container.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const img = card.getAttribute('data-img');
        const desc = card.getAttribute('data-desc');
        this.openLightbox(title, img, desc);
      });
    });
  },

  setupGalleryFilters(config) {
    const filterContainer = document.getElementById('gallery-filter-bar');
    if (!filterContainer) return;

    const categories = ['all', 'Spawn', 'Survival', 'PvP', 'Economy', 'Events', 'Builds'];
    filterContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>
    `).join('');

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        this.renderGallery(config, cat);
      });
    });
  },

  openLightbox(title, imgSrc, desc) {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    const img = modal.querySelector('.lightbox-img');
    const titleElem = modal.querySelector('.lightbox-title');
    const descElem = modal.querySelector('.lightbox-desc');

    if (img) img.src = imgSrc;
    if (titleElem) titleElem.textContent = title;
    if (descElem) descElem.textContent = desc;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
};

if (typeof window !== 'undefined') {
  window.SiteComponents = SiteComponents;
}
