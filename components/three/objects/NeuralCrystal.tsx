'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { themeColors } from '@/lib/theme';

/**
 * "AI Neural Crystal" — a faceted icosahedron crystal with a refractive
 * glass-like material and a slow independent rotation, plus a thin
 * wireframe shell that counter-rotates for a layered, alive feel.
 */
export default function NeuralCrystal({ position = [0, 0, 0] as [number, number, number] }) {
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.22;
      core.current.rotation.x += delta * 0.09;
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.6}>
      <group position={position}>
        <mesh ref={core}>
          <icosahedronGeometry args={[0.95, 0]} />
          <meshPhysicalMaterial
            color={themeColors.accentSoft}
            emissive={themeColors.accent}
            emissiveIntensity={0.12}
            roughness={0.36}
            metalness={0.04}
            transparent
            opacity={0.95}
          />
        </mesh>

        <mesh ref={shell} scale={1.35}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshBasicMaterial color={themeColors.accentSoft} wireframe transparent opacity={0.32} />
        </mesh>

        <pointLight color={themeColors.accent} intensity={2.4} distance={4.5} decay={2} />
        <pointLight color={themeColors.accentStrong} intensity={1.3} distance={3} decay={2} position={[0.6, 0.6, 0.6]} />
      </group>
    </Float>
  );
}
