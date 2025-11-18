import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
  color: string;
  scale?: number;
}

const FloatingShape = ({ position, geometry, color, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.5;
    }
  });

  const renderGeometry = () => {
    const props = {
      ref: meshRef,
      position,
      scale,
    };

    const material = (
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    );

    switch (geometry) {
      case 'box':
        return (
          <Box {...props}>
            {material}
          </Box>
        );
      case 'sphere':
        return (
          <Sphere {...props} args={[1, 16, 16]}>
            {material}
          </Sphere>
        );
      case 'torus':
        return (
          <Torus {...props} args={[1, 0.4, 16, 32]}>
            {material}
          </Torus>
        );
      case 'octahedron':
        return (
          <Octahedron {...props}>
            {material}
          </Octahedron>
        );
      default:
        return null;
    }
  };

  return renderGeometry();
};

const GeometricShapes = () => {
  const shapes: FloatingShapeProps[] = [
    { position: [-3, 2, -2], geometry: 'box', color: '#00ffff', scale: 0.8 },
    { position: [3, -2, -3], geometry: 'sphere', color: '#a855f7', scale: 0.6 },
    { position: [0, 3, -4], geometry: 'torus', color: '#ec4899', scale: 0.5 },
    { position: [-2, -1, -2], geometry: 'octahedron', color: '#00ffff', scale: 0.7 },
    { position: [2, 1, -5], geometry: 'box', color: '#a855f7', scale: 0.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};

export default GeometricShapes;
