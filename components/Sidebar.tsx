"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Sidebar = () => {
    const socials = [
        { icon: <Github size={18} />, href: "https://github.com/Ali139456", label: "GitHub" },
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/muhammad-ali-shibli-790919198/", label: "LinkedIn" },
        { icon: <MessageCircle size={18} />, href: "https://wa.me/923175858934", label: "WhatsApp" },
        { icon: <Mail size={18} />, href: "mailto:alimirza0006@gmail.com", label: "Email" },
    ];

    return (
        <div className="fixed left-0 top-0 bottom-0 w-16 hidden lg:flex flex-col items-center justify-center z-50 pointer-events-none">
            <div className="flex flex-col gap-10 pointer-events-auto">
                {socials.map((social, idx) => (
                    <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="text-slate-400 hover:text-sky-600 transition-colors duration-300 p-2 rounded-lg hover:bg-sky-50"
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
