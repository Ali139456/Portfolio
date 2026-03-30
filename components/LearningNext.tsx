"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, BookOpen, Target } from "lucide-react";

const goals = [
    {
        icon: <Smartphone size={26} />,
        title: "Mobile app development",
        description:
            "Shipping native-quality experiences on iOS and Android: performance, gestures, offline-aware flows, and store-ready polish.",
    },
    {
        icon: <BookOpen size={26} />,
        title: "Stack I’m exploring",
        description:
            "React Native and Expo first, with room for platform APIs and a pragmatic path toward Flutter or native tooling where it pays off.",
    },
    {
        icon: <Target size={26} />,
        title: "Why it’s the next target",
        description:
            "Web is home base; apps let the same product thinking meet users in their pocket with push, deep links, and habits that live outside the browser.",
    },
];

const LearningNext = () => {
    return (
        <section id="next" className="relative pt-16 pb-[35px]">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-violet-200 bg-white text-violet-700 text-xs font-semibold uppercase tracking-[0.2em] mb-6 font-space shadow-sm"
                    >
                        Learning & focus
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space tracking-tight text-slate-900">
                        Next up: <span className="holo-text">app development</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto font-space text-lg leading-relaxed">
                        I’m doubling down on mobile, turning full-stack and product instincts into apps people open every day, not just visit in a tab.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {goals.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-8 h-full border border-transparent hover:border-violet-200/80 transition-all duration-500 flex flex-col items-center text-center md:items-start md:text-left"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-violet-50 border border-violet-100 text-violet-600">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 font-space">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-space">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningNext;
