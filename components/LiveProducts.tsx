"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Activity } from "lucide-react";

import Link from "next/link";
import { liveProductsData } from "@/data/products";

const LiveProducts = () => {
    return (
        <section id="products" className="relative z-10 pt-16 pb-[35px]">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
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
                        className="inline-block px-4 py-1.5 rounded-full border border-sky-200 bg-white text-sky-800 text-xs font-semibold uppercase tracking-[0.2em] mb-6 font-space shadow-sm"
                    >
                        Live on the web
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space tracking-tight text-slate-900">
                        Client sites <span className="holo-text">in production</span>
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto font-space text-lg leading-relaxed">
                        Live code, real traffic: Next.js and Vercel up front, Supabase underneath, Strapi and Resend
                        where it fits.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {liveProductsData.map((product, index) => (
                        <motion.div
                            key={product.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/live-products/${product.slug}`}
                                className="rounded-2xl border border-sky-200/70 bg-[#EFF8FF] p-6 flex flex-col h-full items-center text-center transition-all duration-300 hover:border-sky-300 group cursor-pointer sm:items-stretch sm:text-left"
                            >
                                <div className="mb-4 flex w-full flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex flex-col items-center sm:items-start">
                                        <div className="mb-1 flex items-center gap-2">
                                            <h3 className="text-slate-900 font-bold font-space text-lg group-hover:text-sky-800 transition-colors">
                                                {product.name}
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-sky-700 sm:justify-start">
                                            <Activity size={12} className="animate-pulse" />
                                            <span>LIVE</span>
                                        </div>
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(`https://${product.url}`, "_blank");
                                        }}
                                        className="p-2 rounded-lg bg-white/90 text-slate-500 hover:text-sky-800 hover:bg-white transition-colors z-10 relative"
                                        aria-label={`Visit ${product.name}`}
                                    >
                                        <ExternalLink size={16} />
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-space">
                                    {product.description}
                                </p>

                                <div className="mt-auto flex flex-wrap justify-center gap-2 sm:justify-start">
                                    {product.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] uppercase px-2 py-1 rounded-md bg-white/95 text-slate-600 border border-sky-200/70 font-mono tracking-wider group-hover:border-sky-300 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-sky-800 font-space font-semibold opacity-0 group-hover:opacity-100 transition-opacity sm:justify-start">
                                    <CheckCircle2 size={14} />
                                    View case notes
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveProducts;
