'use client';

import { Canvas } from '@react-three/fiber';
import TechShape from './TechShape';
import { Suspense } from 'react';

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden opacity-40 dark:opacity-25">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <TechShape />
        </Suspense>
      </Canvas>
    </div>
  );
}
