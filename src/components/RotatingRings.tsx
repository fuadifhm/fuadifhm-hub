import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

interface RingProps {
  radius: number;
  tube: number;
  speed: number;
  color: string;
  axis: 'x' | 'y' | 'z';
}

const Ring = ({ radius, tube, speed, color, axis }: RingProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const rotation = state.clock.getElapsedTime() * speed;
      if (axis === 'x') meshRef.current.rotation.x = rotation;
      if (axis === 'y') meshRef.current.rotation.y = rotation;
      if (axis === 'z') meshRef.current.rotation.z = rotation;
    }
  });

  return (
    <Torus ref={meshRef} args={[radius, tube, 16, 50]}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </Torus>
  );
};

const RotatingRings = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Ring radius={2} tube={0.1} speed={0.5} color="#00ffff" axis="x" />
        <Ring radius={2.5} tube={0.08} speed={0.3} color="#a855f7" axis="y" />
        <Ring radius={3} tube={0.06} speed={0.7} color="#ec4899" axis="z" />
      </Canvas>
    </div>
  );
};

export default RotatingRings;
