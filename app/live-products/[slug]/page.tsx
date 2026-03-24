import { liveProductsData } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle, Activity, Sparkles } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return liveProductsData.map((project) => ({
        slug: project.slug,
    }));
}

export default async function LiveProductPage({ params }: Props) {
    const { slug } = await params;
    const project = liveProductsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-transparent text-slate-900 selection:bg-emerald-100 selection:text-slate-900">
            <article className="pt-4 pb-20 relative z-10">
                <div className="container mx-auto px-6 mb-16">
                    <Link
                        href="/#products"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-8 group font-space"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to live sites
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 flex-wrap">
                                <span className="px-3 py-1 flex items-center gap-2 text-xs rounded-full border border-emerald-200 text-emerald-800 bg-emerald-50 font-mono tracking-widest">
                                    <Activity size={12} className="animate-pulse" /> LIVE
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl md:leading-tight font-bold font-space text-slate-900">
                                {project.name}
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed font-space max-w-lg">{project.description}</p>

                            <a
                                href={`https://${project.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-bold hover:shadow-lg transition-all duration-300 font-space mt-2 shadow-emerald-200"
                            >
                                <ExternalLink size={18} />
                                Open live site
                            </a>
                        </div>

                        <div className="relative aspect-square rounded-3xl flex items-center justify-center border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 overflow-hidden group max-w-[400px] mx-auto shadow-inner">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)] group-hover:scale-105 transition-transform duration-700" />
                            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center gap-4">
                                <Sparkles size={72} className="text-emerald-500 drop-shadow-sm" />
                                <div className="text-emerald-700/80 font-mono text-sm tracking-widest uppercase">{project.slug}</div>
                            </div>
                            <div className="absolute inset-4 rounded-2xl border border-dashed border-emerald-200/80 animate-[spin_24s_linear_infinite]" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-12">
                            <section className="glass-card rounded-2xl p-8 border-slate-100">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 font-space text-slate-900">
                                    <span className="w-1.5 h-8 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full" />
                                    Overview
                                </h2>
                                <p className="text-slate-600 leading-loose text-lg font-space">{project.longDescription}</p>
                            </section>

                            <section className="glass-card rounded-2xl p-8 border-slate-100">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 font-space text-slate-900">
                                    <span className="w-1.5 h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />
                                    What I focus on
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <div className="shrink-0 mt-1 p-1.5 bg-emerald-50 rounded-md border border-emerald-100">
                                                <CheckCircle className="text-emerald-600" size={14} />
                                            </div>
                                            <span className="text-slate-600 font-space text-sm leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <div className="glass-card rounded-2xl p-8 sticky top-24 border-slate-100">
                                <h3 className="text-lg font-bold mb-6 border-b border-slate-100 pb-4 font-space text-slate-900">
                                    Tech stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack?.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs bg-emerald-50 border border-emerald-100 rounded-md text-emerald-900 font-mono tracking-wide"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-lg font-bold mb-6 border-b border-slate-100 pb-4 font-space text-slate-900">
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-[10px] rounded-sm bg-slate-50 border border-slate-100 text-slate-600 uppercase tracking-widest font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
