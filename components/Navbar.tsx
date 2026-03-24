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
        { name: "Stack", href: "#tech" },
        { name: "Live", href: "#products" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
                    ? "bg-white/85 backdrop-blur-xl py-3 border-b border-slate-100 shadow-sm"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="group relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-0.5 font-bold text-2xl tracking-tighter font-space text-slate-900"
                        >
                            <span>M</span>
                            <span className="holo-text">AS</span>
                            <span className="text-sky-600">.</span>
                        </motion.div>
                        <div className="absolute -inset-4 bg-sky-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.5 }}
                                className="flex items-center h-full"
                            >
                                <Link
                                    href={link.href}
                                    className="relative px-3 py-2.5 flex items-center text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-[0.12em] font-space group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-sky-500 to-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <a href="#contact" className="ml-4 relative group flex items-center h-full">
                                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-300 text-sky-800 text-[13px] font-semibold uppercase tracking-[0.12em] font-space transition-all duration-300 group-hover:border-sky-500 group-hover:bg-sky-50 group-hover:shadow-md">
                                    Contact
                                    <MoveUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative z-[110] p-2 text-slate-900"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[99] bg-white/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i + 0.15 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-3xl font-bold text-slate-900 hover:text-sky-600 transition-colors font-space tracking-tight"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-4 px-8 py-3 rounded-full border-2 border-sky-500 text-sky-700 text-lg font-bold tracking-wider font-space bg-sky-50"
                        >
                            CONTACT
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
