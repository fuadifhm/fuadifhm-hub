import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  alpha: number;
}

const MouseParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      'rgba(168, 85, 247, ', // primary (purple)
      'rgba(0, 255, 255, ',   // cyan
      'rgba(236, 72, 153, ',  // pink
    ];

    const createParticle = (x: number, y: number, isTrail: boolean = false) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = isTrail ? Math.random() * 2 + 1 : Math.random() * 1.5;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: isTrail ? Math.random() * 4 + 2 : Math.random() * 2 + 1,
        life: 1,
        maxLife: isTrail ? 60 : 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create particles on mouse move
      frameRef.current++;
      if (frameRef.current % 2 === 0) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY));
      }

      // Create more particles when hovering
      if (isHoveringRef.current && frameRef.current % 1 === 0) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push(createParticle(e.clientX, e.clientY, true));
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        isHoveringRef.current = true;
      } else {
        isHoveringRef.current = false;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // gravity
        particle.vx *= 0.98; // friction
        particle.vy *= 0.98;

        const lifeRatio = particle.life / particle.maxLife;
        particle.alpha = 1 - lifeRatio;

        if (particle.life >= particle.maxLife || particle.alpha <= 0) {
          return false;
        }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(0, particle.color + particle.alpha + ')');
        gradient.addColorStop(0.5, particle.color + (particle.alpha * 0.5) + ')');
        gradient.addColorStop(1, particle.color + '0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        return true;
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
    />
  );
};

export default MouseParticles;
