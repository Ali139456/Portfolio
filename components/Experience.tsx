"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Check } from "lucide-react";

interface ExperienceItem {
    title: string;
    company: string;
    duration: string;
    achievements: string[];
    tags: string[];
    gradient: "aurora" | "cosmic";
    nodeFrom: string;
    nodeVia: string;
    nodeTo: string;
}

const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            title: "Full-Stack Developer",
            company: "Digitalis Global",
            duration: "Dec 2025 – Present",
            achievements: [
                "Build and maintain full-stack web apps with the MERN stack.",
                "Customize and optimize Shopify and WIX sites for international clients.",
                "Integrate REST APIs, third-party services, and payment gateways.",
                "Ship responsive UI/UX and tune performance end-to-end.",
                "Apply secure coding practices; use AI-assisted tooling (e.g. Cursor) to move faster with quality.",
            ],
            tags: ["MERN", "Next.js", "Shopify", "WIX", "REST", "Payments"],
            gradient: "aurora",
            nodeFrom: "from-sky-400",
            nodeVia: "via-cyan-400",
            nodeTo: "to-indigo-500",
        },
        {
            title: "Research Officer (Frontend & OSINT)",
            company: "Private firm",
            duration: "Jan 2024 – Sep 2025",
            achievements: [
                "Developed structured, responsive frontend interfaces.",
                "Conducted OSINT research and open-source intelligence gathering.",
                "Performed digital footprint analysis and data verification.",
                "Collaborated with backend teams on secure web-based systems.",
                "Applied performance optimization and secure coding practices.",
            ],
            tags: ["React", "OSINT", "Security", "Frontend"],
            gradient: "cosmic",
            nodeFrom: "from-violet-500",
            nodeVia: "via-fuchsia-500",
            nodeTo: "to-rose-500",
        },
    ];

    return (
        <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
            {/* Atmospheric background */}
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_50%,rgba(167,139,250,0.12),transparent_50%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(34,211,238,0.1),transparent_45%)]"
                aria-hidden
            />
            <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-sky-300/25 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" aria-hidden />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,white,transparent)]"
                style={{
                    backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
                aria-hidden
            />

            <div className="container relative z-10 mx-auto max-w-5xl px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-800 shadow-sm backdrop-blur-md font-space"
                    >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
                        Career trajectory
                    </motion.span>
                    <h2 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl font-space">
                        Where I&apos;ve{" "}
                        <span className="holo-text">built & shipped</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 md:text-lg font-space">
                        High-impact roles across product engineering and research—shipping fast, staying secure.
                    </p>
                </motion.div>

                {/* Timeline + cards */}
                <div className="relative">
                    {/* Vertical rail */}
                    <div
                        className="absolute left-[22px] top-12 bottom-12 hidden w-[3px] overflow-hidden rounded-full md:block"
                        aria-hidden
                    >
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full w-full origin-top bg-gradient-to-b from-sky-400 via-indigo-500 to-violet-600 opacity-90 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                        />
                    </div>

                    <motion.ul
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            show: { transition: { staggerChildren: 0.18 } },
                            hidden: {},
                        }}
                        className="space-y-14 md:space-y-20"
                    >
                        {experiences.map((exp, index) => {
                            const isCurrent = exp.duration.includes("Present");
                            const wm = String(index + 1).padStart(2, "0");

                            return (
                                <motion.li
                                    key={`${exp.company}-${exp.title}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 36 },
                                        show: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                                        },
                                    }}
                                    className="relative flex flex-col gap-6 md:flex-row md:gap-10"
                                >
                                    {/* Mobile node */}
                                    <div className="flex items-center gap-4 md:hidden">
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.nodeFrom} ${exp.nodeVia} ${exp.nodeTo} text-sm font-black text-white shadow-lg ring-4 ring-white font-mono`}
                                        >
                                            {wm}
                                        </div>
                                        {isCurrent && (
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                                                <Sparkles className="h-3 w-3" />
                                                Active
                                            </span>
                                        )}
                                    </div>

                                    {/* Desktop node */}
                                    <div className="relative hidden shrink-0 md:flex md:w-14 md:flex-col md:items-center">
                                        <motion.div
                                            whileHover={{ scale: 1.06 }}
                                            className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.nodeFrom} ${exp.nodeVia} ${exp.nodeTo} text-sm font-black text-white shadow-[0_8px_30px_-6px_rgba(59,130,246,0.55)] ring-4 ring-white font-mono`}
                                        >
                                            {wm}
                                        </motion.div>
                                    </div>

                                    {/* Card shell — gradient border */}
                                    <div className="min-w-0 flex-1">
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                            className={`group relative rounded-[1.35rem] p-[1px] bg-gradient-to-br shadow-2xl shadow-slate-900/5 transition-shadow duration-500 hover:shadow-[0_24px_60px_-12px_rgba(59,130,246,0.2)] ${
                                                exp.gradient === "aurora"
                                                    ? "from-sky-400/90 via-indigo-400/70 to-violet-500/90"
                                                    : "from-violet-500/85 via-fuchsia-400/65 to-rose-400/85"
                                            }`}
                                        >
                                            <div className="relative overflow-hidden rounded-[1.3rem] bg-white/95 backdrop-blur-xl">
                                                {/* Watermark */}
                                                <span
                                                    className="pointer-events-none absolute -right-2 -top-3 select-none text-[5.5rem] font-black leading-none text-slate-100/90 md:text-[7rem] font-space"
                                                    aria-hidden
                                                >
                                                    {wm}
                                                </span>

                                                {/* Top sheen */}
                                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                                                <div className="relative p-6 sm:p-8 md:p-9">
                                                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                                                        <div>
                                                            <div className="mb-2 flex flex-wrap items-center gap-2">
                                                                <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl font-space md:text-[1.65rem]">
                                                                    {exp.title}
                                                                </h3>
                                                                {isCurrent && (
                                                                    <span className="hidden items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 md:inline-flex">
                                                                        <Sparkles className="h-3 w-3" />
                                                                        Current
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="bg-gradient-to-r from-sky-700 to-indigo-600 bg-clip-text text-lg font-semibold text-transparent font-space">
                                                                {exp.company}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-xs font-mono text-slate-600 backdrop-blur-sm">
                                                            <Calendar className="h-3.5 w-3.5 text-violet-500" />
                                                            {exp.duration}
                                                        </div>
                                                    </div>

                                                    <ul className="mb-8 space-y-3">
                                                        {exp.achievements.map((line, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex gap-3 text-sm leading-relaxed text-slate-600 font-space sm:text-[0.9375rem]"
                                                            >
                                                                <span
                                                                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${exp.nodeFrom} ${exp.nodeVia} ${exp.nodeTo} shadow-sm`}
                                                                >
                                                                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                                                                </span>
                                                                <span>{line}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                                                        {exp.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="rounded-lg border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm font-mono"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
