"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Failed to send message");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please try again.");
        }
    };

    const contactLinks = [
        {
            icon: <Mail size={22} />,
            title: "Email",
            value: "alimirza0006@gmail.com",
            href: "mailto:alimirza0006@gmail.com",
            className: "text-sky-600 bg-sky-50 border-sky-100",
        },
        {
            icon: <MessageCircle size={22} />,
            title: "WhatsApp",
            value: "+92 317 5858934",
            href: "https://wa.me/923175858934",
            className: "text-emerald-600 bg-emerald-50 border-emerald-100",
        },
        {
            icon: <Linkedin size={22} />,
            title: "LinkedIn",
            value: "Muhammad Ali Shibli",
            href: "https://www.linkedin.com/in/muhammad-ali-shibli-790919198/",
            className: "text-blue-700 bg-blue-50 border-blue-100",
        },
        {
            icon: <Github size={22} />,
            title: "GitHub",
            value: "Ali139456",
            href: "https://github.com/Ali139456",
            className: "text-slate-800 bg-slate-50 border-slate-200",
        },
    ];

    return (
        <section id="contact" className="py-16 relative">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-sky-200 bg-white text-sky-700 text-xs font-semibold uppercase tracking-[0.2em] mb-6 font-space shadow-sm"
                    >
                        Contact
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space tracking-tight text-slate-900">
                        Let&apos;s <span className="holo-text">build something</span>
                    </h2>
                    <p className="text-slate-600 font-space text-lg max-w-xl mx-auto">
                        Full-stack web, Shopify/WIX, or API work—send a short note and I&apos;ll reply within a day.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="space-y-4"
                    >
                        {contactLinks.map((link, i) => (
                            <motion.a
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-4 glass-card p-5 rounded-2xl group transition-all duration-500 hover:border-sky-200 border border-transparent block"
                            >
                                <div
                                    className={`p-3 rounded-xl border ${link.className} group-hover:scale-105 transition-transform`}
                                >
                                    {link.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 font-space text-sm">{link.title}</h3>
                                    <p className="text-slate-600 text-sm font-space">{link.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="glass-card rounded-2xl p-5 mt-4 border-slate-100"
                        >
                            <div className="flex gap-2 mb-3">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                            </div>
                            <div className="font-mono text-sm text-slate-600 space-y-1">
                                <p>
                                    <span className="text-violet-600">const</span> <span className="text-sky-600">availability</span>{" "}
                                    = <span className="text-emerald-600">&quot;open to freelance & roles&quot;</span>;
                                </p>
                                <p>
                                    <span className="text-violet-600">const</span> <span className="text-sky-600">timezone</span> ={" "}
                                    <span className="text-emerald-600">&quot;PKT (GMT+5)&quot;</span>;
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        onSubmit={handleSubmit}
                        className="space-y-5 glass-card p-8 rounded-2xl relative overflow-hidden border-slate-100"
                    >
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-space"
                            >
                                <CheckCircle size={18} />
                                <p className="text-sm">Message sent successfully!</p>
                            </motion.div>
                        )}

                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-space"
                            >
                                <AlertCircle size={18} />
                                <p className="text-sm">{errorMessage}</p>
                            </motion.div>
                        )}

                        {[
                            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                            { id: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                        ].map((field) => (
                            <div key={field.id} className="relative">
                                <label
                                    htmlFor={field.id}
                                    className={`block text-xs font-semibold mb-2 uppercase tracking-[0.15em] transition-colors font-space ${focusedField === field.id ? "text-sky-700" : "text-slate-500"
                                        }`}
                                >
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    value={(formData as Record<string, string>)[field.id]}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField(field.id)}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-300 font-space text-sm"
                                    placeholder={field.placeholder}
                                />
                            </div>
                        ))}

                        <div className="relative">
                            <label
                                htmlFor="message"
                                className={`block text-xs font-semibold mb-2 uppercase tracking-[0.15em] transition-colors font-space ${focusedField === "message" ? "text-sky-700" : "text-slate-500"
                                    }`}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("message")}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-300 font-space text-sm resize-none"
                                placeholder="What are we building?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full relative group rounded-xl overflow-hidden font-space font-bold text-sm uppercase tracking-[0.12em] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-sky-200/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600" />
                            <span className="relative z-10 flex items-center justify-center gap-2 py-4 text-white">
                                {status === "loading" ? "Sending..." : "Send message"}
                                <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
