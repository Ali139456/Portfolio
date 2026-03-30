"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiSupabase,
    SiRedis,
    SiDocker,
    SiGit,
    SiGithubactions,
    SiVercel,
    SiShopify,
    SiPostman,
    SiExpress,
} from "react-icons/si";
import { Database, Layers, Globe } from "lucide-react";

interface ToolSkill {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface SkillCategory {
    title: string;
    description: string;
    skills: ToolSkill[];
}

const categories: SkillCategory[] = [
    {
        title: "Frontend & UI",
        description: "Modern component-driven interfaces",
        skills: [
            { name: "React", icon: <SiReact size={28} />, color: "text-sky-500" },
            { name: "Next.js", icon: <SiNextdotjs size={28} />, color: "text-slate-900" },
            { name: "TypeScript", icon: <SiTypescript size={28} />, color: "text-blue-600" },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, color: "text-cyan-500" },
        ],
    },
    {
        title: "Backend & APIs",
        description: "Services, integrations, and performance",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs size={28} />, color: "text-green-600" },
            { name: "Express", icon: <SiExpress size={28} />, color: "text-slate-700" },
            { name: "REST APIs", icon: <Globe size={28} />, color: "text-indigo-500" },
            { name: "Postman", icon: <SiPostman size={28} />, color: "text-orange-500" },
        ],
    },
    {
        title: "Data & realtime",
        description: "Databases you actually deploy",
        skills: [
            { name: "MongoDB", icon: <SiMongodb size={28} />, color: "text-green-600" },
            { name: "PostgreSQL", icon: <SiPostgresql size={28} />, color: "text-blue-700" },
            { name: "Supabase", icon: <SiSupabase size={28} />, color: "text-emerald-500" },
            { name: "Redis", icon: <SiRedis size={28} />, color: "text-red-600" },
        ],
    },
    {
        title: "Commerce & CMS",
        description: "Storefronts and no-code platforms",
        skills: [
            { name: "Shopify", icon: <SiShopify size={28} />, color: "text-green-700" },
            { name: "Wix Studio", icon: <Layers size={28} />, color: "text-violet-600" },
            { name: "Headless patterns", icon: <Database size={28} />, color: "text-sky-600" },
        ],
    },
    {
        title: "DevOps & delivery",
        description: "Ship with confidence",
        skills: [
            { name: "Git", icon: <SiGit size={28} />, color: "text-orange-600" },
            { name: "GitHub Actions", icon: <SiGithubactions size={28} />, color: "text-blue-500" },
            { name: "Docker", icon: <SiDocker size={28} />, color: "text-sky-600" },
            { name: "Vercel", icon: <SiVercel size={28} />, color: "text-slate-900" },
        ],
    },
];

const highlights = [
    {
        title: "MERN & Next.js",
        body: "APIs, SSR/ISR where it helps, and client UX that stays snappy.",
        accent: "from-sky-500 to-indigo-500",
    },
    {
        title: "Database",
        body: "MongoDB & Postgres/Supabase patterns: indexes, auth hooks, and sensible schemas.",
        accent: "from-emerald-500 to-cyan-500",
    },
    {
        title: "Commerce",
        body: "Shopify + WIX builds: themes, apps, payments, and speed for real customers.",
        accent: "from-violet-500 to-fuchsia-500",
    },
];

const TechStack = () => {
    return (
        <section id="skills" className="relative pt-16 pb-[35px]">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
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
                        className="inline-block px-4 py-1.5 rounded-full border border-indigo-200 bg-white text-indigo-700 text-xs font-semibold uppercase tracking-[0.2em] mb-6 font-space shadow-sm"
                    >
                        Skills
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space tracking-tight text-slate-900">
                        From first pixel to <span className="holo-text">last deploy</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto font-space text-lg leading-relaxed">
                        Battle-tested tools I reach for daily, so client builds and side projects ship fast, stay
                        maintainable, and don&apos;t fall over when traffic shows up.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {highlights.map((h, index) => (
                        <motion.div
                            key={h.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm shadow-sky-100/50 text-center md:text-left"
                        >
                            <div className={`h-1 w-14 rounded-full bg-gradient-to-r ${h.accent} mb-4 mx-auto md:mx-0`} />
                            <h3 className="text-lg font-bold text-slate-900 mb-2 font-space">{h.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-space">{h.body}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="space-y-14">
                    {categories.map((category, catIndex) => (
                        <div key={category.title}>
                            <motion.div
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.04, duration: 0.45 }}
                                className="flex flex-col items-center text-center gap-2 mb-6 border-b border-slate-200 pb-3 md:flex-row md:items-baseline md:gap-4 md:text-left"
                            >
                                <h3 className="text-xl font-bold text-slate-900 font-space">{category.title}</h3>
                                <span className="text-xs text-slate-500 font-mono">{`// ${category.description}`}</span>
                            </motion.div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.35, delay: index * 0.04 }}
                                        whileHover={{ y: -3 }}
                                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-white/90 shadow-sm hover:border-sky-200 hover:shadow-md transition-all duration-300 cursor-default aspect-square"
                                    >
                                        <div className={`${skill.color} mb-2 drop-shadow-sm`}>
                                            {skill.icon}
                                        </div>
                                        <span className="text-center font-medium text-slate-700 text-xs font-space">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
