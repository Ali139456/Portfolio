"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-sky-200 bg-white/80 shadow-sm mb-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
                            </span>
                            <span className="text-sm text-sky-700 font-medium font-space tracking-wide">
                                Open to full-stack & web projects
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6 font-space"
                        >
                            <span className="text-slate-900">Muhammad Ali </span>
                            <span className="holo-text">Shibli</span>
                            <span className="text-sky-600">.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="mb-10"
                        >
                            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg font-space leading-relaxed">
                                <span className="text-slate-900 font-semibold">Full-stack developer</span> — I ship fast web
                                apps with the MERN stack, Next.js, and polished Shopify / WIX builds for global clients.
                            </p>
                            <p className="text-slate-500 text-base mt-3 block">
                                APIs, databases, payments & performance—without sacrificing clean UI.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="group relative px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm font-space overflow-hidden transition-all duration-500 shadow-lg shadow-sky-500/25 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 text-white hover:shadow-xl hover:shadow-indigo-500/30"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    View live work
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                </span>
                            </button>

                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-full border border-slate-200 bg-white/90 text-slate-700 font-semibold uppercase tracking-widest text-sm font-space hover:border-sky-300 hover:text-sky-800 transition-all duration-300 shadow-sm"
                            >
                                Let&apos;s talk
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-[420px] h-[520px]">
                            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                <div
                                    className="absolute inset-0 animate-float-slow"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 30% 40%, rgba(56,189,248,0.35), transparent 55%), radial-gradient(circle at 70% 60%, rgba(167,139,250,0.3), transparent 50%)",
                                    }}
                                />
                            </div>

                            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white shadow-xl shadow-sky-200/50 group bg-white">
                                <Image
                                    src="/profile-ali.png"
                                    alt="Muhammad Ali Shibli"
                                    fill
                                    className="object-cover object-top transition-all duration-700 group-hover:scale-[1.02]"
                                    priority
                                    sizes="420px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-sky-50/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                                <motion.div
                                    animate={{ y: ["-100%", "200%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
                                />
                            </div>

                            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-sky-400/50 rounded-tl-xl" />
                            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-violet-400/50 rounded-br-xl" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-x-12 gap-y-6 mt-20 pt-8 border-t border-slate-200/80"
                >
                    {[
                        { label: "Email", value: "alimirza0006@gmail.com" },
                        { label: "WhatsApp", value: "+92 317 5858934" },
                        { label: "Location", value: "Rawalpindi, Pakistan" },
                    ].map((item) => (
                        <div key={item.label} className="flex gap-3 items-baseline">
                            <span className="text-[11px] font-bold text-sky-600 uppercase tracking-[0.2em] font-space">
                                {item.label}
                            </span>
                            <span className="text-slate-600 font-medium text-sm font-space">{item.value}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
