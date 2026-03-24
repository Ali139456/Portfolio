"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 500 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null!);
    const mouseRef = useRef({ x: 0, y: 0 });

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            // Neon color palette: cyan, purple, pink
            const colorChoice = Math.random();
            if (colorChoice < 0.4) {
                colors[i * 3] = 0;
                colors[i * 3 + 1] = 0.94;
                colors[i * 3 + 2] = 1;
            } else if (colorChoice < 0.7) {
                colors[i * 3] = 0.66;
                colors[i * 3 + 1] = 0.33;
                colors[i * 3 + 2] = 0.97;
            } else {
                colors[i * 3] = 0.93;
                colors[i * 3 + 1] = 0.29;
                colors[i * 3 + 2] = 0.6;
            }

            sizes[i] = Math.random() * 2 + 0.5;
        }

        return { positions, colors, sizes };
    }, [count]);

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
            mesh.current.rotation.y = state.clock.elapsedTime * 0.03;

            // Subtle mouse-following
            mesh.current.rotation.x += mouseRef.current.y * 0.02;
            mesh.current.rotation.y += mouseRef.current.x * 0.02;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles.positions, 3]}
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[particles.colors, 3]}
                    count={count}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function FloatingOrb({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
            ref.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
            ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
            ref.current.rotation.z = state.clock.elapsedTime * 0.2 * speed;
        }
    });

    return (
        <mesh ref={ref} position={position}>
            <icosahedronGeometry args={[0.3, 1]} />
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.15}
                wireframe
            />
        </mesh>
    );
}

function GlowRing({ position, color, speed = 0.5 }: { position: [number, number, number]; color: string; speed?: number }) {
    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * speed;
            ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
        }
    });

    return (
        <mesh ref={ref} position={position}>
            <torusGeometry args={[0.8, 0.02, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} />
        </mesh>
    );
}

export default function ParticleField() {
    return (
        <div className="three-canvas-container">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                style={{ background: "transparent" }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 1.5]}
            >
                <Particles count={400} />
                <FloatingOrb position={[-3, 2, -2]} color="#00f0ff" speed={0.8} />
                <FloatingOrb position={[3, -1, -3]} color="#a855f7" speed={1.2} />
                <FloatingOrb position={[1, 3, -4]} color="#ec4899" speed={0.6} />
                <GlowRing position={[-2, -2, -3]} color="#00f0ff" speed={0.3} />
                <GlowRing position={[2, 1, -5]} color="#a855f7" speed={0.4} />
            </Canvas>
        </div>
    );
}
