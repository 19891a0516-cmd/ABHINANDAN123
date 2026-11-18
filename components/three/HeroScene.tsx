'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import RadarOrb from './objects/RadarOrb';
import NeuralCrystal from './objects/NeuralCrystal';
import NetworkOrb from './objects/NetworkOrb';

function ParallaxRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 6.4));

  useFrame(() => {
    target.current.x = pointer.x * 0.6;
    target.current.y = pointer.y * 0.35;
    camera.position.x += (target.current.x - camera.position.x) * 0.04;
    camera.position.y += (target.current.y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  const [canvasEnabled, setCanvasEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const smallScreen = window.matchMedia('(max-width: 640px)');
    const lowPower = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
    const update = () => setCanvasEnabled(!reducedMotion.matches && !smallScreen.matches && !lowPower);

    update();
    reducedMotion.addEventListener('change', update);
    smallScreen.addEventListener('change', update);
    return () => {
      reducedMotion.removeEventListener('change', update);
      smallScreen.removeEventListener('change', update);
    };
  }, []);

  if (!canvasEnabled) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,79,135,0.2),transparent_18%),radial-gradient(circle_at_55%_45%,rgba(91,75,255,0.24),transparent_44%)]"
      />
    );
  }

  return (
    <Canvas
      dpr={[1, 1.35]}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={0.6} color="#ffffff" castShadow />
        <pointLight position={[-3, -2, 2]} color="#5B4BFF" intensity={2} />
        <pointLight position={[3, 2, -2]} color="#FF4F87" intensity={2} />

        <fog attach="fog" args={['#0A0A0A', 8, 14]} />

        <RadarOrb position={[-2.1, 0.4, 0]} />
        <NeuralCrystal position={[2.1, -0.3, -0.6]} />
        <NetworkOrb position={[0, -1.05, -1.4]} />

        <ParallaxRig />
      </Suspense>
    </Canvas>
  );
}
