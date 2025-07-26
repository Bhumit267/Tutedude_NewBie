import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  icon: string;
  color: string;
}

interface ParticleFieldProps {
  particleCount?: number;
  className?: string;
}

const ingredients = ['🧅', '🍅', '🌶️', '🥕', '🥔', '🌽', '🥬', '🫑'];
const colors = ['text-orange-400', 'text-green-400', 'text-yellow-400', 'text-red-400'];

export const ParticleField: React.FC<ParticleFieldProps> = ({ 
  particleCount = 50, 
  className = '' 
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 0.5,
      icon: ingredients[Math.floor(Math.random() * ingredients.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(initialParticles);
  }, [particleCount]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} opacity-20`}
          style={{
            fontSize: `${particle.size}px`,
          }}
          animate={{
            x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 50,
            y: particle.y + Math.cos(Date.now() * 0.001 + particle.id) * 30,
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {particle.icon}
        </motion.div>
      ))}
    </div>
  );
};
