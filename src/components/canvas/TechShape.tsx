'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/components/theme/ThemeProvider';

export default function TechShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  // Quiet, monochrome wireframe — dark line on light, light line on dark.
  const color = theme === 'dark' ? '#3f3f46' : '#d4d4d8';

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.05;
      meshRef.current.rotation.y = t * 0.08;
    }
  });

  return (
    <Sphere args={[1, 48, 48]} ref={meshRef} scale={2.2}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.25}
        speed={0.8}
        roughness={1}
        metalness={0}
        wireframe={true}
      />
    </Sphere>
  );
}
