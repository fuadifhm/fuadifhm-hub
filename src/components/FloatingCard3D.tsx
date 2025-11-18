import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const FloatingCard3D = ({ children, className = '', intensity = 20 }: FloatingCard3DProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * intensity;
    const rotateYValue = (mouseX / (rect.width / 2)) * intensity;

    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 ${className}`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {children}
        {/* 3D Depth Effect */}
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"
          style={{
            transform: 'translateZ(-20px)',
            filter: 'blur(10px)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingCard3D;
