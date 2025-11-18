import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const HelixStrand = ({ offset = 0, color = '#00ffff' }: { offset?: number; color?: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const spheres = 30;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5 + offset;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: spheres }).map((_, i) => {
        const y = (i / spheres) * 10 - 5;
        const angle = (i / spheres) * Math.PI * 4 + offset;
        const x = Math.cos(angle) * 1.5;
        const z = Math.sin(angle) * 1.5;

        return (
          <Sphere key={i} position={[x, y, z]} args={[0.15, 16, 16]}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
          </Sphere>
        );
      })}
    </group>
  );
};

const DNAHelix = () => {
  return (
    <div className="fixed top-20 right-10 w-32 h-96 pointer-events-none z-10 opacity-30 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <HelixStrand offset={0} color="#00ffff" />
        <HelixStrand offset={Math.PI} color="#a855f7" />
      </Canvas>
    </div>
  );
};

export default DNAHelix;
