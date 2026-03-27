"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const contactChipClass =
    "inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 max-w-full rounded-full border border-slate-200/50 bg-white/40 px-3 py-1 sm:px-4 sm:py-1.5 shadow-[0_1px_10px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-sky-200/60 hover:bg-white/55 hover:shadow-[0_4px_20px_rgba(56,189,248,0.08)] font-space";

const contactLabelClass =
    "text-[9px] font-semibold text-sky-600/90 uppercase tracking-[0.22em] font-space shrink-0 leading-none";

const contactDividerClass =
    "h-2.5 sm:h-3 w-px shrink-0 bg-gradient-to-b from-transparent via-slate-300/55 to-transparent";

const contactValueClass =
    "text-[11px] sm:text-xs text-slate-600 font-medium font-space leading-tight text-center sm:text-left";

/** Slimmer chips for WhatsApp + Location on one row (mobile). */
const contactChipPairClass =
    "inline-flex flex-nowrap items-center justify-center gap-x-1.5 sm:gap-x-2 shrink-0 rounded-full border border-slate-200/50 bg-white/40 px-2 py-1 sm:px-3.5 sm:py-1.5 shadow-[0_1px_10px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-sky-200/60 hover:bg-white/55 hover:shadow-[0_4px_20px_rgba(56,189,248,0.08)] font-space";

const contactLabelPairClass =
    "text-[8px] sm:text-[9px] font-semibold text-sky-600/90 uppercase tracking-[0.14em] sm:tracking-[0.22em] font-space shrink-0 leading-none";

const contactDividerPairClass =
    "h-2 sm:h-2.5 w-px shrink-0 bg-gradient-to-b from-transparent via-slate-300/55 to-transparent";

const contactValuePairClass =
    "text-[10px] sm:text-xs text-slate-600 font-medium font-space leading-none whitespace-nowrap";

const HERO_HEADING_LINE1_PARTS: { text: string; className: string }[] = [
    { text: "Muhammad", className: "text-slate-900" },
    { text: " ", className: "text-slate-900" },
    { text: "Ali", className: "text-slate-900" },
];

const HERO_HEADING_LINE2_PARTS: { text: string; className: string }[] = [{ text: "Shibli", className: "holo-text" }];

const HERO_LINE1_CHARS: { char: string; className: string }[] = HERO_HEADING_LINE1_PARTS.flatMap((part) =>
    Array.from(part.text, (char) => ({ char, className: part.className })),
);

const HERO_LINE2_CHARS: { char: string; className: string }[] = HERO_HEADING_LINE2_PARTS.flatMap((part) =>
    Array.from(part.text, (char) => ({ char, className: part.className })),
);

const HERO_LETTER_STAGGER = 0.09;
const HERO_LETTER_BASE_DELAY = 0.22;
const HERO_LETTER_DURATION = 0.55;
const HERO_LETTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-x-clip overflow-y-visible">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-20 pb-[35px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="relative z-10 flex flex-col items-center overflow-visible text-center lg:items-start lg:text-left">
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

                        <h1 className="mb-6 w-full max-w-full overflow-visible pb-1 text-5xl font-bold tracking-tighter leading-[1.08] font-space sm:text-6xl sm:leading-[1.06] md:text-7xl md:leading-[1.05] lg:text-8xl lg:leading-[1.04]">
                            <span className="sr-only">Muhammad Ali Shibli</span>
                            <span className="block w-full overflow-visible">
                                {HERO_LINE1_CHARS.map((item, i) => (
                                    <motion.span
                                        key={`hero-l1-${i}`}
                                        initial={{ opacity: 0, y: 28 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: HERO_LETTER_BASE_DELAY + i * HERO_LETTER_STAGGER,
                                            duration: HERO_LETTER_DURATION,
                                            ease: HERO_LETTER_EASE,
                                        }}
                                        className={`inline-block overflow-visible align-baseline ${item.className}`}
                                        aria-hidden
                                    >
                                        {item.char === " " ? "\u00A0" : item.char}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="mt-1 block w-full overflow-visible sm:mt-1.5">
                                {HERO_LINE2_CHARS.map((item, i) => (
                                    <motion.span
                                        key={`hero-l2-${i}`}
                                        initial={{ opacity: 0, y: 28 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay:
                                                HERO_LETTER_BASE_DELAY +
                                                (HERO_LINE1_CHARS.length + i) * HERO_LETTER_STAGGER,
                                            duration: HERO_LETTER_DURATION,
                                            ease: HERO_LETTER_EASE,
                                        }}
                                        className={`inline-block overflow-visible align-baseline px-[0.5px] ${item.className}`}
                                        aria-hidden
                                    >
                                        {item.char}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="mb-10 w-full max-w-lg mx-auto lg:mx-0"
                        >
                            <p className="text-lg md:text-xl text-slate-600 font-medium font-space leading-relaxed">
                                <span className="text-slate-900 font-semibold">Full-stack developer</span> with{" "}
                                <span className="text-slate-900 font-semibold">3+ years</span> of experience — I ship fast
                                web apps with the MERN stack, Next.js, and polished Shopify / WIX builds for global clients.
                            </p>
                            <p className="text-slate-500 text-base mt-3 block">
                                APIs, databases, payments & performance—without sacrificing clean UI.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-row flex-nowrap items-stretch justify-center gap-2 sm:gap-4 w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:w-auto lg:justify-start"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="group relative flex flex-1 sm:flex-initial min-w-0 justify-center items-center px-3.5 py-2.5 sm:px-8 sm:py-4 rounded-full font-bold uppercase tracking-wide sm:tracking-widest text-xs sm:text-sm font-space overflow-hidden transition-all duration-500 shadow-lg shadow-sky-500/25 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 text-white hover:shadow-xl hover:shadow-indigo-500/30"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-3 whitespace-nowrap">
                                    View live work
                                    <ArrowRight
                                        className="group-hover:translate-x-1 transition-transform w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] shrink-0"
                                        aria-hidden
                                    />
                                </span>
                            </button>

                            <a
                                href="#contact"
                                className="flex flex-1 sm:flex-initial min-w-0 justify-center items-center px-3.5 py-2.5 sm:px-8 sm:py-4 rounded-full border border-slate-200 bg-white/90 text-slate-700 font-semibold uppercase tracking-wide sm:tracking-widest text-xs sm:text-sm font-space hover:border-sky-300 hover:text-sky-800 transition-all duration-300 shadow-sm whitespace-nowrap text-center"
                            >
                                Let&apos;s talk
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex items-center justify-center w-full lg:justify-end"
                    >
                        <div className="relative mx-auto w-full max-w-[280px] aspect-[3/4] sm:max-w-[320px] md:max-w-[360px] lg:mx-0 lg:w-[420px] lg:h-[520px] lg:max-w-none lg:aspect-auto">
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
                                    sizes="(max-width: 1024px) 90vw, 420px"
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
                    className="flex w-full flex-col items-center gap-2.5 border-t border-slate-200/50 pt-8 sm:gap-3 lg:pt-14 lg:flex-row lg:flex-nowrap lg:justify-center lg:gap-3 lg:overflow-x-auto lg:overscroll-x-contain lg:px-1 lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden"
                >
                    <a
                        href="mailto:alimirza0006@gmail.com"
                        className={`${contactChipClass} shrink-0 lg:max-w-none`}
                    >
                        <span className={contactLabelClass}>Email</span>
                        <span className={contactDividerClass} aria-hidden />
                        <span className={`${contactValueClass} text-slate-700 break-all lg:break-normal lg:whitespace-nowrap`}>
                            alimirza0006@gmail.com
                        </span>
                    </a>

                    <div className="flex w-full max-w-full flex-row flex-nowrap items-center justify-center gap-1.5 overflow-x-auto overscroll-x-contain px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2.5 lg:contents lg:overflow-visible lg:px-0">
                        <a
                            href="https://wa.me/923175858934"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${contactChipPairClass} shrink-0 lg:px-4 lg:py-1.5 lg:gap-x-2`}
                        >
                            <span className={`${contactLabelPairClass} lg:text-[9px] lg:tracking-[0.22em]`}>WhatsApp</span>
                            <span className={`${contactDividerPairClass} lg:!h-3`} aria-hidden />
                            <span className={`${contactValuePairClass} lg:text-xs`}>+92 317 5858934</span>
                        </a>
                        <div className={`${contactChipPairClass} shrink-0 lg:px-4 lg:py-1.5 lg:gap-x-2`}>
                            <span className={`${contactLabelPairClass} lg:text-[9px] lg:tracking-[0.22em]`}>Location</span>
                            <span className={`${contactDividerPairClass} lg:!h-3`} aria-hidden />
                            <span className={`${contactValuePairClass} lg:text-xs`}>Rawalpindi, Pakistan</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
