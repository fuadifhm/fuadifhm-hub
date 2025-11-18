import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedWave = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useRef<THREE.PlaneGeometry>(null);

  useFrame((state) => {
    if (!meshRef.current || !geometry.current) return;

    const time = state.clock.getElapsedTime();
    const positions = geometry.current.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      const waveX = Math.sin(x * 0.5 + time) * 0.3;
      const waveY = Math.sin(y * 0.5 + time * 0.8) * 0.3;
      
      positions.setZ(i, waveX + waveY);
    }

    positions.needsUpdate = true;
    geometry.current.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, -5]}>
      <planeGeometry ref={geometry} args={[20, 20, 50, 50]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
};

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#a855f7" intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={0.3} />
        <AnimatedWave />
      </Canvas>
    </div>
  );
};

export default WaveBackground;
