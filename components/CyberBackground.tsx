"use client";

import React, { useEffect, useRef } from "react";

/** Soft hex grid for a light, dev-portfolio feel */
export default function CyberBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const hexSize = 32;
        const hexWidth = hexSize * 2;
        const hexHeight = Math.sqrt(3) * hexSize;
        const hexXDist = hexSize * 1.5;

        let hexGrid: { x: number; y: number; glow: number; targetGlow: number; type: string }[] = [];

        const initGrid = () => {
            hexGrid = [];
            const cols = Math.ceil(width / hexXDist) + 2;
            const rows = Math.ceil(height / hexHeight) + 2;

            for (let row = -1; row < rows; row++) {
                for (let col = -1; col < cols; col++) {
                    let x = col * hexXDist;
                    let y = row * hexHeight;
                    if (col % 2 !== 0) {
                        y += hexHeight / 2;
                    }
                    hexGrid.push({ x, y, glow: 0, targetGlow: 0, type: "normal" });
                }
            }
        };

        initGrid();

        let mouseX = -1000;
        let mouseY = -1000;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const drawHexagon = (x: number, y: number, fillColor: string, strokeColor: string) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const hx = x + hexSize * Math.cos(angle);
                const hy = y + hexSize * Math.sin(angle);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();

            if (fillColor) {
                ctx.fillStyle = fillColor;
                ctx.fill();
            }
            if (strokeColor) {
                ctx.strokeStyle = strokeColor;
                ctx.stroke();
            }
        };

        let animationFrame: number;
        let tick = 0;

        const animate = () => {
            ctx.fillStyle = "#f0f6ff";
            ctx.fillRect(0, 0, width, height);
            ctx.lineWidth = 1;

            tick++;

            if (tick % 8 === 0) {
                const randomHex = hexGrid[Math.floor(Math.random() * hexGrid.length)];
                if (randomHex.targetGlow === 0) {
                    randomHex.targetGlow = Math.random() > 0.85 ? 0.55 : 0.2;
                    randomHex.type = Math.random() > 0.94 ? "accent" : "normal";
                }
            }

            hexGrid.forEach((hex) => {
                const dx = hex.x - mouseX;
                const dy = hex.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    hex.targetGlow = Math.max(hex.targetGlow, 0.45 * (1 - dist / 200));
                    hex.type = "hover";
                } else if (hex.type === "hover" && hex.targetGlow === 0) {
                    hex.type = "normal";
                }

                if (hex.glow < hex.targetGlow) {
                    hex.glow += 0.018;
                    if (hex.glow >= hex.targetGlow) hex.targetGlow = 0;
                } else {
                    hex.glow -= 0.006;
                    if (hex.glow < 0) hex.glow = 0;
                }

                const baseOpacity = 0.07;
                let strokeOp = baseOpacity;
                let fillOp = 0;
                let r = 2,
                    g = 132,
                    b = 199;

                if (hex.glow > 0) {
                    if (hex.type === "accent") {
                        r = 168;
                        g = 85;
                        b = 247;
                    } else if (hex.type === "hover") {
                        r = 14;
                        g = 165;
                        b = 233;
                    }
                    strokeOp += hex.glow * 0.35;
                    fillOp += hex.glow * 0.06;
                }

                drawHexagon(
                    hex.x,
                    hex.y,
                    fillOp > 0 ? `rgba(${r}, ${g}, ${b}, ${fillOp})` : "",
                    `rgba(${r}, ${g}, ${b}, ${strokeOp})`
                );
            });

            animationFrame = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initGrid();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.92)_0%,transparent_55%),radial-gradient(ellipse_at_bottom,rgba(224,231,255,0.5)_0%,transparent_50%)]" />
        </div>
    );
}
