'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { stages } from '@/lib/data';
import { themeColors } from '@/lib/theme';
import RadarOrb from './objects/RadarOrb';
import NeuralCrystal from './objects/NeuralCrystal';
import NetworkOrb from './objects/NetworkOrb';

function StageTrajectory({ activeStageIndex }: { activeStageIndex: number }) {
  const activeRing = useRef<THREE.Mesh>(null);
  const points = useMemo(
    () => [
      new THREE.Vector3(-2.2, -0.55, 0.72),
      new THREE.Vector3(-1.1, 0.48, 0.72),
      new THREE.Vector3(0, 0.08, 0.72),
      new THREE.Vector3(1.1, 0.58, 0.72),
      new THREE.Vector3(2.2, -0.3, 0.72),
    ],
    [],
  );
  const linePositions = useMemo(() => {
    const curvePoints = new THREE.CatmullRomCurve3(points).getPoints(80);
    const vertices: number[] = [];
    for (let index = 0; index < curvePoints.length - 1; index++) {
      vertices.push(
        curvePoints[index].x, curvePoints[index].y, curvePoints[index].z,
        curvePoints[index + 1].x, curvePoints[index + 1].y, curvePoints[index + 1].z,
      );
    }
    return new Float32Array(vertices);
  }, [points]);

  useFrame((state) => {
    if (activeRing.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.4) * 0.08;
      activeRing.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={themeColors.border} transparent opacity={0.75} />
      </lineSegments>
      {stages.map((stage, index) => (
        <group key={stage.name} position={points[index]}>
          <mesh scale={index === activeStageIndex ? 1.35 : 1}>
            <sphereGeometry args={[0.075, 20, 20]} />
            <meshStandardMaterial
              color={stage.color}
              emissive={stage.color}
              emissiveIntensity={index === activeStageIndex ? 1.4 : 0.35}
            />
          </mesh>
          {index === activeStageIndex && (
            <mesh ref={activeRing}>
              <torusGeometry args={[0.16, 0.012, 8, 48]} />
              <meshBasicMaterial color={stage.color} transparent opacity={0.8} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

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

export default function HeroScene({ activeStageIndex }: { activeStageIndex: number }) {
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
        className="hero-3d-fallback absolute inset-0"
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
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} color={themeColors.ink} castShadow />
        <pointLight position={[-3, -2, 2]} color={themeColors.accent} intensity={1.4} />
        <pointLight position={[3, 2, -2]} color={themeColors.accentSoft} intensity={1.2} />

        <fog attach="fog" args={[themeColors.background, 8, 14]} />

        <RadarOrb position={[-2.1, 0.4, 0]} color={stages[activeStageIndex].color} />
        <NeuralCrystal position={[2.1, -0.3, -0.6]} />
        <NetworkOrb position={[0, -1.05, -1.4]} />

        <StageTrajectory activeStageIndex={activeStageIndex} />
        <ParallaxRig />
      </Suspense>
    </Canvas>
  );
}
