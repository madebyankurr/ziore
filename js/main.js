/**
 * Main Application Script for Aetheria SMP Website
 * Handles interactivity, toast notifications, easter eggs, clipboard actions, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Components & Particles
  if (window.SiteComponents) {
    window.SiteComponents.init();
  }

  if (window.HeroParticles) {
    new window.HeroParticles('hero-canvas');
  }

  // 2. Navbar Scroll State & Mobile Navigation
  setupNavigation();

  // 3. Copy Server IP Functionality
  setupCopyIPButtons();

  // 4. Lightbox Modal Listeners
  setupLightboxModal();

  // 5. Interactive Block Mining & Easter Eggs
  setupBlockMiningEasterEgg();

  // 6. Konami Code Easter Egg
  setupKonamiCode();

  // 7. Initial Welcome Achievement Toast
  setTimeout(() => {
    showToast("Achievement Unlocked: Found the Server!", "achievement", "🏆");
  }, 1200);
});

/* --- Navigation & Navbar Logic --- */
function setupNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkAnchors = document.querySelectorAll('.nav-link');

  // Sticky Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile Menu Drawer Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isActive = navLinks.classList.contains('active');
      navLinks.classList.toggle('active', !isActive);
      mobileToggle.classList.toggle('active', !isActive);
      mobileToggle.setAttribute('aria-expanded', !isActive);
    });

    // Close menu when clicking links
    navLinkAnchors.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Nav Link Scroll Observer
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkAnchors.forEach(anchor => {
          if (anchor.getAttribute('href') === `#${id}`) {
            anchor.classList.add('active');
          } else {
            anchor.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --- Clipboard / Copy IP Buttons --- */
function setupCopyIPButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-ip-btn');
    if (!btn) return;

    const config = window.SERVER_CONFIG || {};
    const ip = btn.getAttribute('data-ip') || config.SERVER_IP || 'play.aetheriamc.com';

    copyToClipboard(ip).then(success => {
      if (success) {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span>✓ COPIED!</span>`;
        btn.classList.add('btn-primary');
        
        showToast(`Server IP <strong>${ip}</strong> copied to clipboard!`, "success", "📋");

        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2500);
      } else {
        showToast(`Failed to copy. Server IP is ${ip}`, "error", "⚠️");
      }
    });
  });
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
  } else {
    return Promise.resolve(fallbackCopy(text));
  }
}

function fallbackCopy(text) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    return false;
  }
}

/* --- Toast Notification Manager --- */
function showToast(message, type = "info", icon = "ℹ️") {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'achievement' ? 'toast-achievement' : ''}`;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-message">${message}</div>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation frame
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove toast
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 3800);
}

/* --- Lightbox Event Delegation --- */
function setupLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.lightbox-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => window.SiteComponents.closeLightbox());
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.SiteComponents.closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.SiteComponents.closeLightbox();
    }
  });
}

/* --- Interactive Block Mining Easter Egg --- */
function setupBlockMiningEasterEgg() {
  const grassBlocks = document.querySelectorAll('.interactive-grass-block, .mining-block');
  let clickCount = 0;
  const targetClicks = 5;

  grassBlocks.forEach(block => {
    block.addEventListener('click', () => {
      clickCount++;

      // Shake animation
      block.style.transform = `scale(0.92) rotate(${Math.random() * 8 - 4}deg)`;
      setTimeout(() => {
        block.style.transform = '';
      }, 150);

      // Create pixel particle burst on block
      createPixelParticles(block);

      if (clickCount >= targetClicks) {
        clickCount = 0;
        showToast("Achievement Unlocked: Master Miner!", "achievement", "⛏️");
        
        // Temporarily change block icon/glow
        const originalContent = block.innerHTML;
        block.innerHTML = '💎';
        block.style.backgroundColor = '#80DEEA';
        
        setTimeout(() => {
          block.innerHTML = originalContent;
          block.style.backgroundColor = '';
        }, 2000);
      }
    });
  });
}

function createPixelParticles(element) {
  const rect = element.getBoundingClientRect();
  const particleCount = 8;
  const colors = ['#81C784', '#558B2F', '#795548', '#FFE082'];

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.style.position = 'fixed';
    p.style.left = `${rect.left + rect.width / 2}px`;
    p.style.top = `${rect.top + rect.height / 2}px`;
    p.style.width = '8px';
    p.style.height = '8px';
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.zIndex = '9999';
    p.style.pointerEvents = 'none';
    p.style.borderRadius = '2px';

    document.body.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 40 + 20;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    p.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 500,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
    }).onfinish = () => p.remove();
  }
}

/* --- Konami Code Easter Egg Sequence --- */
function setupKonamiCode() {
  const pattern = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let current = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === pattern[current] || e.key.toLowerCase() === pattern[current]) {
      current++;
      if (current === pattern.length) {
        current = 0;
        showToast("Achievement Unlocked: Secret Code Unlocked!", "achievement", "🕹️");
        document.body.style.animation = "rainbowGlow 2s ease";
        setTimeout(() => {
          document.body.style.animation = "";
        }, 2000);
      }
    } else {
      current = 0;
    }
  });
}
