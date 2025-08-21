import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random star positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Create stars in a spherical distribution
      const radius = Math.random() * 100 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Vary star colors (blue-white to warm white)
      const intensity = 0.5 + Math.random() * 0.5;
      const temperature = Math.random();
      
      if (temperature > 0.7) {
        // Warm white/yellow stars
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity * 0.9;
        colors[i * 3 + 2] = intensity * 0.7;
      } else if (temperature > 0.3) {
        // Pure white stars
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity;
        colors[i * 3 + 2] = intensity;
      } else {
        // Blue-white stars
        colors[i * 3] = intensity * 0.8;
        colors[i * 3 + 1] = intensity * 0.9;
        colors[i * 3 + 2] = intensity;
      }
    }
    
    return [positions, colors];
  }, []);

  // Slow rotation animation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.01;
      ref.current.rotation.y -= delta * 0.005;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={2}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const NebulaClouds = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    const colors = new Float32Array(800 * 3);
    
    for (let i = 0; i < 800; i++) {
      // Create nebula clouds in clusters
      const cluster = Math.floor(Math.random() * 3);
      const clusterCenter = [
        (cluster - 1) * 40,
        (Math.random() - 0.5) * 30,
        -30 - Math.random() * 40
      ];
      
      positions[i * 3] = clusterCenter[0] + (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = clusterCenter[1] + (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = clusterCenter[2] + (Math.random() - 0.5) * 25;
      
      // Nebula colors (purple, blue, pink)
      const nebulaType = Math.random();
      const intensity = 0.3 + Math.random() * 0.4;
      
      if (nebulaType > 0.66) {
        // Purple nebula
        colors[i * 3] = intensity * 0.8;
        colors[i * 3 + 1] = intensity * 0.3;
        colors[i * 3 + 2] = intensity;
      } else if (nebulaType > 0.33) {
        // Blue nebula
        colors[i * 3] = intensity * 0.2;
        colors[i * 3 + 1] = intensity * 0.6;
        colors[i * 3 + 2] = intensity;
      } else {
        // Pink nebula
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity * 0.4;
        colors[i * 3 + 2] = intensity * 0.7;
      }
    }
    
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.002;
      ref.current.rotation.y -= delta * 0.001;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        size={8}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
};

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: "radial-gradient(ellipse at bottom, #0d1b2a 0%, #04080f 100%)" }}
      >
        <Stars />
        <NebulaClouds />
      </Canvas>
    </div>
  );
};