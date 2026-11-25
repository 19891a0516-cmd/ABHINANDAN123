'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { stages } from '@/lib/data';
import { themeColors } from '@/lib/theme';

const NODE_COLORS = [
  ...stages.map((stage) => stage.color),
  themeColors.node.blue,
  themeColors.node.violet,
];

/**
 * "Data Network Orb" — a wireframe sphere seeded with coloured node points
 * and connecting edges between nearby nodes, like a small knowledge graph.
 * Slowly rotates and pulses.
 */
export default function NetworkOrb({ position = [0, 0, 0] as [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const pulse = useRef<THREE.Mesh>(null);

  const { nodePositions, nodeColors, linePositions } = useMemo(() => {
    const count = 26;
    const radius = 1.05;
    const positions: THREE.Vector3[] = [];
    const colors: string[] = [];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const v = new THREE.Vector3(
        Math.cos(theta) * Math.sin(phi) * radius,
        Math.sin(theta) * Math.sin(phi) * radius,
        Math.cos(phi) * radius
      );
      positions.push(v);
      colors.push(NODE_COLORS[i % NODE_COLORS.length]);
    }

    const lines: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 0.85) {
          lines.push(positions[i].x, positions[i].y, positions[i].z);
          lines.push(positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }

    return { nodePositions: positions, nodeColors: colors, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
    if (pulse.current) {
      const t = state.clock.getElapsedTime();
      const s = 1 + Math.sin(t * 1.2) * 0.06;
      pulse.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={0.9} rotationIntensity={0.2} floatIntensity={1.3}>
      <group ref={group} position={position}>
        <mesh ref={pulse}>
          <sphereGeometry args={[1.05, 24, 24]} />
          <meshBasicMaterial color={themeColors.border} wireframe transparent opacity={0.8} />
        </mesh>

        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color={themeColors.border} transparent opacity={0.36} />
        </lineSegments>

        {nodePositions.map((v, i) => (
          <mesh key={i} position={v}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color={nodeColors[i]} />
          </mesh>
        ))}

        <pointLight color={themeColors.accent} intensity={1.8} distance={4} decay={2} />
      </group>
    </Float>
  );
}
