'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * "Radar sphere" — a glass orb wrapped in animated rings with a rotating
 * radar-sweep wedge and a soft neon glow. Rotates forever, floats gently.
 */
export default function RadarOrb({
  position = [0, 0, 0],
  color = '#FF4F87',
}: {
  position?: [number, number, number];
  color?: THREE.ColorRepresentation;
}) {
  const group = useRef<THREE.Group>(null);
  const sweep = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15;
    if (sweep.current) sweep.current.rotation.z += delta * 0.8;
    if (ring1.current) ring1.current.rotation.x += delta * 0.06;
    if (ring2.current) ring2.current.rotation.y -= delta * 0.05;
  });

  const wedge = new THREE.Shape();
  wedge.moveTo(0, 0);
  wedge.absarc(0, 0, 1.35, 0, Math.PI / 4, false);
  wedge.lineTo(0, 0);

  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={1.1}>
      <group ref={group} position={position}>
        {/* glass core */}
        <mesh>
          <sphereGeometry args={[0.85, 64, 64]} />
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.28}
            roughness={0.05}
            metalness={0.1}
            distort={0.18}
            speed={1.4}
          />
        </mesh>

        {/* inner glow */}
        <mesh scale={0.5}>
          <sphereGeometry args={[0.85, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>

        {/* rings */}
        <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.15, 0.008, 8, 96]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
        </mesh>
        <mesh ref={ring2} rotation={[Math.PI / 2.4, 0.4, 0]}>
          <torusGeometry args={[1.4, 0.006, 8, 96]} />
          <meshBasicMaterial color="#5B4BFF" transparent opacity={0.3} />
        </mesh>

        {/* radar sweep wedge */}
        <mesh ref={sweep} rotation={[-Math.PI / 2, 0, 0]}>
          <shapeGeometry args={[wedge]} />
          <meshBasicMaterial color="#FF4F87" transparent opacity={0.22} side={THREE.DoubleSide} />
        </mesh>

        <pointLight color={color} intensity={4} distance={4} decay={2} />
      </group>
    </Float>
  );
}
