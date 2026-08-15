'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

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
          <MeshTransmissionMaterial
            color="#5B4BFF"
            thickness={0.6}
            roughness={0.08}
            transmission={0.94}
            ior={1.3}
            chromaticAberration={0.04}
            distortion={0.15}
            distortionScale={0.3}
            temporalDistortion={0.1}
          />
        </mesh>

        <mesh ref={shell} scale={1.35}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshBasicMaterial color="#FF4F87" wireframe transparent opacity={0.25} />
        </mesh>

        <pointLight color="#5B4BFF" intensity={5} distance={4.5} decay={2} />
        <pointLight color="#FF4F87" intensity={2.5} distance={3} decay={2} position={[0.6, 0.6, 0.6]} />
      </group>
    </Float>
  );
}
