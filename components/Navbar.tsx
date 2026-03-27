"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoveUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Live", href: "#products" },
    ];

    const glassNavClass = scrolled
        ? "bg-white/45 border-white/80 shadow-[0_8px_32px_rgba(15,23,42,0.1),inset_0_1px_0_0_rgba(255,255,255,0.85)] ring-white/55"
        : "bg-white/35 border-white/65 shadow-[0_8px_32px_rgba(56,189,248,0.14),inset_0_1px_0_0_rgba(255,255,255,0.65)] ring-white/45";

    const contactGlassClass = scrolled
        ? "border-white/75 bg-white/40 backdrop-blur-2xl shadow-[0_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_0_rgba(255,255,255,0.8)] ring-white/50 hover:bg-white/55 hover:border-sky-200/80"
        : "border-sky-300/90 bg-white/45 backdrop-blur-xl shadow-sm ring-sky-200/40 hover:border-sky-400 hover:bg-white/70";

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                    ? "border-b border-white/50 bg-white/35 py-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150"
                    : "border-b border-transparent bg-transparent py-5 md:py-6"
                    }`}
            >
                <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between min-h-[52px]">
                    <Link href="/" className="group relative z-[102] shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-0.5 font-bold text-2xl tracking-tighter font-space text-slate-900"
                        >
                            <span>M</span>
                            <span className="holo-text">AS</span>
                        </motion.div>
                        <div className="absolute -inset-4 bg-sky-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>

                    {/* Centered glass nav — desktop */}
                    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block z-[101]">
                        <div
                            className={`flex items-center gap-0.5 rounded-full border px-2 py-1.5 backdrop-blur-2xl backdrop-saturate-150 ring-1 transition-all duration-500 ${glassNavClass}`}
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.08 * i, duration: 0.45 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="group/link relative flex items-center justify-center rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition-colors hover:bg-white/50 hover:text-slate-900 font-space"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 opacity-0 transition-all duration-300 group-hover/link:w-1/2 group-hover/link:opacity-100" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 z-[102] shrink-0 ml-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.45 }}
                            className="hidden md:block"
                        >
                            <a href="#contact" className="group relative flex items-center">
                                <div
                                    className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] font-space text-sky-800 ring-1 transition-all duration-500 group-hover:shadow-md ${contactGlassClass}`}
                                >
                                    Contact
                                    <MoveUpRight
                                        size={14}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </div>
                            </a>
                        </motion.div>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`md:hidden relative rounded-xl p-2 text-slate-900 ring-1 transition-all duration-500 ${scrolled ? "border-white/70 bg-white/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] backdrop-blur-2xl backdrop-saturate-150 ring-white/45" : "border-white/60 bg-white/45 shadow-sm ring-white/40 backdrop-blur-xl"}`}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-6 px-6"
                    >
                        <div
                            className="absolute inset-0 bg-white/75 backdrop-blur-2xl"
                            aria-hidden
                        />
                        <div className="relative flex flex-col items-center gap-3 rounded-3xl border border-white/70 bg-white/40 px-8 py-10 backdrop-blur-2xl shadow-[0_24px_64px_rgba(15,23,42,0.12)] ring-1 ring-white/60 max-w-sm w-full">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.08 * i + 0.1 }}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block w-full text-center py-3 text-lg font-bold text-slate-800 hover:text-sky-700 transition-colors font-space tracking-tight rounded-xl hover:bg-white/50"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 w-full py-3.5 rounded-2xl border border-sky-300/80 bg-gradient-to-r from-sky-500/90 to-indigo-600/90 text-white text-sm font-bold tracking-wider font-space text-center shadow-lg shadow-sky-500/25"
                            >
                                CONTACT
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
