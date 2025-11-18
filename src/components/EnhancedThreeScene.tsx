import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#00ffff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const OrbitingTorus = ({ radius = 4, speed = 1 }: { radius?: number; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * speed;
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
      meshRef.current.rotation.x = time;
      meshRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <Torus ref={meshRef} args={[0.5, 0.2, 16, 32]}>
      <meshStandardMaterial color="#a855f7" wireframe />
    </Torus>
  );
};

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position}>
      <meshStandardMaterial color="#ec4899" wireframe transparent opacity={0.5} />
    </Box>
  );
};

const EnhancedThreeScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#ff00ff" intensity={0.5} />
        <pointLight position={[10, -10, -5]} color="#00ffff" intensity={0.3} />
        
        <AnimatedSphere />
        <OrbitingTorus radius={4} speed={0.5} />
        <OrbitingTorus radius={3.5} speed={0.7} />
        <FloatingCube position={[-3, 2, 0]} />
        <FloatingCube position={[3, -2, 0]} />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default EnhancedThreeScene;
