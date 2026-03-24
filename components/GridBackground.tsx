"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base grid */}
            <div className="absolute inset-0 grid-overlay opacity-40" />

            {/* Perspective grid floor */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[60vh]"
                style={{
                    background: `
                        linear-gradient(to top, transparent 0%, #030712 100%),
                        repeating-linear-gradient(90deg, rgba(0,240,255,0.04) 0px, transparent 1px, transparent 80px),
                        repeating-linear-gradient(0deg, rgba(0,240,255,0.04) 0px, transparent 1px, transparent 80px)
                    `,
                    transform: "perspective(500px) rotateX(60deg)",
                    transformOrigin: "bottom center",
                }}
            />

            {/* Animated gradient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.08, 0.18, 0.08],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Scan line */}
            <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px]"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.15) 30%, rgba(0,240,255,0.3) 50%, rgba(0,240,255,0.15) 70%, transparent 100%)",
                }}
            />

            {/* Noise overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
