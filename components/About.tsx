"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, ShoppingBag, ShieldCheck } from "lucide-react";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    index: number;
}

function TiltCard({ icon, title, description, gradient, index }: CardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative group cursor-default"
        >
            <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-sky-200 flex flex-col items-center text-center md:items-start md:text-left">
                <div
                    className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10 ${gradient}`}
                />

                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden bg-sky-50 border border-sky-100"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <div className="relative z-10 text-sky-600">{icon}</div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 font-space" style={{ transform: "translateZ(25px)" }}>
                    {title}
                </h3>
                <p
                    className="text-slate-600 text-sm leading-relaxed font-space"
                    style={{ transform: "translateZ(15px)" }}
                >
                    {description}
                </p>

                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-slate-200/80 rounded-tr-lg group-hover:border-sky-200 transition-colors duration-500" />
            </div>
        </motion.div>
    );
}

const About = () => {
    const cards = [
        {
            icon: <Code2 size={28} />,
            title: "Full-stack web",
            description:
                "MERN & Next.js apps with REST APIs, auth-ready patterns, and UI that stays fast on real devices, not just demos.",
            gradient: "bg-gradient-to-r from-sky-200/40 to-indigo-200/40",
        },
        {
            icon: <ShoppingBag size={28} />,
            title: "Shopify & WIX",
            description:
                "Storefronts that convert: theme work, integrations, payments, and performance tuning for international buyers.",
            gradient: "bg-gradient-to-r from-emerald-200/40 to-cyan-200/40",
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Security-aware delivery",
            description:
                "Background in cyber security & OSINT: sensible validation, safer defaults, and fewer surprises in production.",
            gradient: "bg-gradient-to-r from-violet-200/40 to-fuchsia-200/40",
        },
    ];

    return (
        <section id="about" className="pt-0 pb-[35px] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-sky-200 bg-white text-sky-700 text-xs font-semibold uppercase tracking-[0.2em] mb-6 font-space shadow-sm"
                    >
                        About
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space tracking-tight text-slate-900">
                        Code that ships. <span className="holo-text">UX that feels right.</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto font-space text-lg leading-relaxed">
                        I&apos;m a full-stack developer with a cyber security foundation, building scalable web apps, polished
                        commerce experiences, and integrations that hold up when traffic hits.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
                    {cards.map((card, index) => (
                        <TiltCard key={index} {...card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
