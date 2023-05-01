interface NetworkOptions {
  particleColor?: string;
  background?: string;
  interactive?: boolean;
  speed?: string;
  density?: string | number;
}

interface Velocity {
  x: number;
  y: number;
}

class Particle {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  particleColor: string | undefined;
  x: number;
  y: number;
  velocity: Velocity;

  constructor(network: ParticleNetwork) {
    this.canvas = network.canvas;
    this.ctx = network.ctx;
    this.particleColor = network.options.particleColor;
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * network.options.velocity,
      y: (Math.random() - 0.5) * network.options.velocity,
    };
  }

  update(): void {
    if (this.x > this.canvas.width + 20 || this.x < -20) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y > this.canvas.height + 20 || this.y < -20) {
      this.velocity.y = -this.velocity.y;
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  draw(): void {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.particleColor ?? "#fff";
    this.ctx.globalAlpha = 0.7;
    const particleSize = 3; // Change this value to increase or decrease the size of the particles
    this.ctx.arc(this.x, this.y, particleSize, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

class ParticleNetwork {
  element: HTMLElement;
  options: NetworkOptions & {velocity: number; density: number};
  particles!: Particle[];
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  interactiveParticle?: Particle;
  resizeTimeout?: number;

  constructor(element: HTMLElement, options: NetworkOptions = {}) {
    this.element = element;
    this.options = {
      particleColor: options.particleColor || "#fff",
      background:
        options.background ||
        "https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg",
      interactive:
        options.interactive !== undefined ? options.interactive : true,
      velocity: this.setVelocity(options.speed),
      density: this.setDensity(options.density),
    };
    this.init();
  }

  init(): void {
    this.particles = [];
    this.setupCanvas();
    this.populateParticles();
    this.animate();
    this.bindEvents();
  }

  setupCanvas(): void {
    this.canvas = document.createElement("canvas");
    this.element.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.canvas.width = this.element.offsetWidth;
    this.canvas.height = this.element.offsetHeight;

    this.canvas.style.position = "absolute";
    this.canvas.style.zIndex = "20";
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.bottom = "0";
    this.canvas.style.right = "0";
  }

  populateParticles(): void {
    for (
      let i = 0;
      i < (this.canvas.width * this.canvas.height) / this.options.density;
      i++
    ) {
      this.particles.push(new Particle(this));
    }
  }

 animate(): void {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  for (let i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
    this.particles[i].draw();

    if (this.options.interactive && i !== this.particles.length - 1 && this.interactiveParticle) {
      const distance = Math.sqrt(
        Math.pow(this.interactiveParticle.x - this.particles[i].x, 2) +
          Math.pow(this.interactiveParticle.y - this.particles[i].y, 2)
      );

      if (distance <= 120) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.options.particleColor as string;
        this.ctx.globalAlpha = (120 - distance) / 120;
        this.ctx.lineWidth = 0.7;
        this.ctx.moveTo(this.interactiveParticle.x, this.interactiveParticle.y);
        this.ctx.lineTo(this.particles[i].x, this.particles[i].y);
        this.ctx.stroke();
      }
    }

    for (let j = this.particles.length - 1; j > i; j--) {
      const distance = Math.sqrt(
        Math.pow(this.particles[i].x - this.particles[j].x, 2) +
          Math.pow(this.particles[i].y - this.particles[j].y, 2)
      );

      if (distance > 120) continue;

      this.ctx.beginPath();
      this.ctx.strokeStyle = this.options.particleColor as string;
      this.ctx.globalAlpha = (120 - distance) / 120;
      this.ctx.lineWidth = 0.7;
      this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
      this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
      this.ctx.stroke();
    }
  }

  if (this.options.velocity !== 0) {
    requestAnimationFrame(this.animate.bind(this));
  }
}

  setVelocity(speed?: string): number {
    if (speed === "fast") {
      return 0.90;
    } else if (speed === "slow") {
      return 0.33;
    } else if (speed === "none") {
      return 0;
    } else {
      return 0.66;
    }
  }

  setDensity(density?: string | number): number {
    if (density === "high") {
      return 5000;
    } else if (density === "low") {
      return 20000;
    } else if (!isNaN(parseInt(String(density), 10))) {
      return parseInt(String(density), 10);
    } else {
      return 10000;
    }
  }

  bindEvents(): void {
    window.addEventListener("resize", () => {
      if (
        this.element.offsetWidth === this.canvas.width &&
        this.element.offsetHeight === this.canvas.height
      ) {
        return;
      }

      this.canvas.width = this.element.offsetWidth;
      this.canvas.height = this.element.offsetHeight;

      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(() => {
        this.particles = [];
        for (
          let i = 0;
          i < (this.canvas.width * this.canvas.height) / this.options.density;
          i++
        ) {
          this.particles.push(new Particle(this));
        }
        if (this.options.interactive && this.interactiveParticle) {
          this.particles.push(this.interactiveParticle);
        }
        requestAnimationFrame(this.animate.bind(this));
      }, 500);
    });

    if (this.options.interactive) {
      this.interactiveParticle = new Particle(this);
      this.interactiveParticle.velocity = {x: 0, y: 0};
      this.particles.push(this.interactiveParticle);

      this.canvas.addEventListener("mousemove", (event) => {
        this.interactiveParticle!.x = event.clientX - this.canvas.offsetLeft;
        this.interactiveParticle!.y = event.clientY - this.canvas.offsetTop;
      });

      this.canvas.addEventListener("mouseup", (event) => {
        this.interactiveParticle!.velocity = {
          x: (Math.random() - 0.5) * this.options.velocity,
          y: (Math.random() - 0.5) * this.options.velocity,
        };
        this.interactiveParticle = new Particle(this);
        this.interactiveParticle.velocity = {x: 0, y: 0};
        this.particles.push(this.interactiveParticle);
      });
    }
  }
}

export default ParticleNetwork;
