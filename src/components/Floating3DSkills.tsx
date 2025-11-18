import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface SkillOrbProps {
  position: [number, number, number];
  skill: string;
  color: string;
}

const SkillOrb = ({ position, skill, color }: SkillOrbProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.3;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.2}
          height={0.05}
          curveSegments={12}
        >
          {skill}
          <meshStandardMaterial color={color} />
        </Text3D>
      </Center>
    </group>
  );
};

const Floating3DSkills = () => {
  const skills = [
    { skill: 'React', position: [-2, 1, 0] as [number, number, number], color: '#00ffff' },
    { skill: 'Three.js', position: [2, 0.5, -1] as [number, number, number], color: '#a855f7' },
    { skill: 'TypeScript', position: [0, 2, -2] as [number, number, number], color: '#ec4899' },
  ];

  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
        {skills.map((item, index) => (
          <SkillOrb key={index} {...item} />
        ))}
      </Canvas>
    </div>
  );
};

export default Floating3DSkills;
