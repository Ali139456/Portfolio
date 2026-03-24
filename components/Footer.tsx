"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const socials = [
        { icon: <Github size={20} />, href: "https://github.com/Ali139456", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/muhammad-ali-shibli-790919198/", label: "LinkedIn" },
        { icon: <MessageCircle size={20} />, href: "https://wa.me/923175858934", label: "WhatsApp" },
        { icon: <Mail size={20} />, href: "mailto:alimirza0006@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative border-t border-slate-200 mt-20 overflow-hidden bg-white/60">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-200/25 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <Link href="/" className="inline-block">
                            <h2 className="text-2xl font-bold tracking-tighter font-space text-slate-900">
                                M<span className="holo-text">AS</span>
                                <span className="text-sky-600">.</span>
                            </h2>
                        </Link>
                        <p className="text-slate-500 text-sm mt-2 font-space">Full-stack developer · MERN · Next.js · Shopify</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-4"
                    >
                        {socials.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.08 }}
                                className="p-3 rounded-xl glass-card text-slate-500 hover:text-sky-700 hover:border-sky-200 transition-all duration-300 border border-transparent"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-sm text-center md:text-right font-space"
                    >
                        <p>&copy; {new Date().getFullYear()} Muhammad Ali Shibli.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
