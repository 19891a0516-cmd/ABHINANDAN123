'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import * as THREE from 'three';

const V1_FLOW: [number, number, number][] = [
  [-3.35, -0.35, 0],
  [-2.55, 0.4, 0.2],
  [-1.75, -0.15, 0],
  [-1.1, 0.32, 0.1],
  [-0.55, 0, 0],
];

const PLUS_FLOW: [number, number, number][] = [
  [0.55, -0.15, 0],
  [1.25, 0.42, 0.15],
  [2, -0.3, 0],
  [2.75, 0.32, 0.1],
  [3.4, 0, 0],
];

function FlowPath({ points, color }: { points: [number, number, number][]; color: string }) {
  const pulse = useRef<THREE.Mesh>(null);
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points.map(([x, y, z]) => new THREE.Vector3(x, y, z))),
    [points],
  );
  const linePoints = useMemo(() => curve.getPoints(64), [curve]);

  useFrame(({ clock }) => {
    if (pulse.current) {
      pulse.current.position.copy(curve.getPoint((clock.elapsedTime * 0.08) % 1));
    }
  });

  return (
    <>
      <Line points={linePoints} color={color} lineWidth={1.3} transparent opacity={0.55} />
      <mesh ref={pulse}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  );
}

function RadarSequence() {
  const rotations = [0.3, -0.2, 0.18];

  return (
    <group>
      {rotations.map((rotation, index) => (
        <group key={index} position={[-2.95 + index * 0.38, 0, -0.35 + index * 0.22]} rotation={[0.25, rotation, 0]}>
          <mesh>
            <circleGeometry args={[0.48, 6]} />
            <meshBasicMaterial color={index === 2 ? '#FF4F87' : '#9C8CFF'} wireframe transparent opacity={0.64} />
          </mesh>
          <mesh position={[0, 0, 0.015]}>
            <octahedronGeometry args={[0.22 + index * 0.04, 0]} />
            <meshStandardMaterial
              color={index === 2 ? '#FF4F87' : '#8B7BFF'}
              emissive={index === 2 ? '#FF4F87' : '#594BFF'}
              emissiveIntensity={0.7}
              metalness={0.5}
              roughness={0.28}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ConvolutionBlock() {
  return (
    <group position={[-1.45, 0, 0]}>
      {[0, 1, 2].map((layer) => (
        <mesh key={layer} position={[layer * 0.11, 0, layer * 0.12]} rotation={[0.35, 0.5, 0.2]}>
          <boxGeometry args={[0.42, 0.42, 0.32]} />
          <meshStandardMaterial
            color={layer === 2 ? '#FF4F87' : '#8274FF'}
            emissive={layer === 2 ? '#FF4F87' : '#5B4BFF'}
            emissiveIntensity={0.45}
            metalness={0.65}
            roughness={0.25}
            transparent
            opacity={0.78}
          />
        </mesh>
      ))}
    </group>
  );
}

function FeatureSequence() {
  return (
    <group position={[1.15, 0, 0]}>
      {Array.from({ length: 7 }, (_, index) => {
        const height = 0.18 + ((index * 7) % 5) * 0.07;
        return (
          <mesh key={index} position={[index * 0.18, (index % 2 ? 0.1 : -0.08), 0]} scale={[0.11, height, 0.11]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={index === 5 ? '#FF4F87' : '#58D5C2'}
              emissive={index === 5 ? '#FF4F87' : '#18A897'}
              emissiveIntensity={0.45}
              metalness={0.55}
              roughness={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function StateSpaceCoil() {
  const curve = useMemo(() => {
    const points = Array.from({ length: 48 }, (_, index) => {
      const progress = index / 47;
      const angle = progress * Math.PI * 5;
      return new THREE.Vector3(
        2.25 + Math.cos(angle) * (0.25 + progress * 0.18),
        Math.sin(angle) * (0.28 + progress * 0.14),
        progress * 0.65 - 0.32,
      );
    });
    return new THREE.CatmullRomCurve3(points);
  }, []);

  return (
    <mesh>
      <tubeGeometry args={[curve, 96, 0.025, 8, false]} />
      <meshStandardMaterial color="#58D5C2" emissive="#17A996" emissiveIntensity={0.9} metalness={0.4} roughness={0.25} />
    </mesh>
  );
}

function EvolutionModel() {
  const model = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (model.current) {
      model.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.16) * 0.08;
      model.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.035;
    }
  });

  return (
    <group ref={model} scale={1.25}>
      <ambientLight intensity={0.7} />
      <pointLight position={[-3, 2, 3]} color="#FF4F87" intensity={30} />
      <pointLight position={[3, -1, 2]} color="#5B4BFF" intensity={24} />
      <pointLight position={[0, 2, -2]} color="#58D5C2" intensity={18} />
      <Float speed={0.7} rotationIntensity={0.06} floatIntensity={0.12}>
        <RadarSequence />
        <ConvolutionBlock />
        <FeatureSequence />
        <StateSpaceCoil />
      </Float>
      <FlowPath points={V1_FLOW} color="#FF79A7" />
      <FlowPath points={PLUS_FLOW} color="#58D5C2" />
    </group>
  );
}

export default function EvolutionScene() {
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
      <div className="grid h-full grid-cols-2 items-center gap-5 px-6 text-center text-xs font-mono uppercase tracking-wider text-white/70 sm:text-sm">
        <p>Radar-chart sequences → CNN → BiLSTM</p>
        <p>Feature sequences → state-space and attention</p>
      </div>
    );
  }

  return (
    <Canvas
      aria-label="Conceptual 3D comparison of RadarSeq v1 image sequences and RadarSeq++ feature sequences"
      dpr={[1, 1.3]}
      camera={{ position: [0, 0, 8.6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <EvolutionModel />
    </Canvas>
  );
}
