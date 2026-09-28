/**
 * Floating Minecraft Particle Canvas Effect (Light Theme Friendly)
 */

class HeroParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 28;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (this.isReducedMotion) return;

    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
  }

  init() {
    this.resize();
    this.particles = [];
    
    // Light-themed colors: soft minecraft greens, subtle gold, earthy cream
    const colors = ['rgba(67, 160, 71, 0.25)', 'rgba(46, 125, 50, 0.2)', 'rgba(217, 119, 6, 0.2)', 'rgba(129, 199, 132, 0.3)'];

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 8 + 4, // Blocky pixel sizes
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.02
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  animate() {
    if (this.isReducedMotion) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      // Wrap around canvas edges
      if (p.y < -20) {
        p.y = this.canvas.height + 20;
        p.x = Math.random() * this.canvas.width;
      }
      if (p.x < -20) p.x = this.canvas.width + 20;
      if (p.x > this.canvas.width + 20) p.x = -20;

      // Draw square pixel particles
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Global initialization helper
if (typeof window !== 'undefined') {
  window.HeroParticles = HeroParticles;
}
