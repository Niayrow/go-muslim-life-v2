"use client";

import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, Check, XCircle, AlertTriangle, Sparkles } from "lucide-react";

export function QuiContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-brand-panel border border-brand-line/30 p-6 md:p-10 shadow-lg group">
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-blue-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-green-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-green-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <CheckCircle2 className="h-3 w-3" /> Les Conditions
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Obligation
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            Une règle divine simple pour dissiper les doutes : tout le monde n'est pas concerné au même moment.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- GRID : OBLIGATOIRE VS NON-OBLIGATOIRE --- */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* CARTE VERTE (OBLIGATOIRE) */}
                <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-green-500/20 bg-green-950/20 backdrop-blur-2xl p-6 md:p-8 hover:bg-green-900/30 transition-all duration-500 shadow-inner">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <CheckCircle2 className="h-32 w-32 text-green-400" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 shadow-sm border border-green-500/30">
                                <Check className="h-6 w-6" strokeWidth={3} />
                            </div>
                            <h3 className="font-bold text-2xl text-green-100">C'est Requis</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Tu es Musulman(e)",
                                "Tu as atteint la puberté",
                                "Tu es sain d'esprit"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-brand-panel-elevated/50 border border-green-500/10">
                                    <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]" />
                                    <span className="font-medium text-green-50">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CARTE ROSE (NON REQUIS) */}
                <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-brand-warm/20 bg-brand-warm/10 backdrop-blur-2xl p-6 md:p-8 hover:bg-brand-warm/20 transition-all duration-500 shadow-inner">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <XCircle className="h-32 w-32 text-brand-warm" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-2xl bg-brand-warm/20 flex items-center justify-center text-brand-warm shadow-sm border border-brand-warm/30">
                                <XCircle className="h-6 w-6" strokeWidth={2.5} />
                            </div>
                            <h3 className="font-bold text-2xl text-brand-soft">Ce n'est pas requis</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Enfant (avant la puberté)",
                                "Inconscient / Malade mental",
                                "Femmes (menstrues/lochies)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-brand-panel-elevated/50 border border-brand-warm/10">
                                    <div className="h-2 w-2 rounded-full bg-brand-warm/50" />
                                    <span className="font-medium text-brand-soft opacity-80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- NOTE IMPORTANTE (BLUE GLASS) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-blue-500/20 bg-blue-900/10 backdrop-blur-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="shrink-0 p-4 rounded-2xl bg-blue-500/20 text-blue-400 shadow-sm border border-blue-500/30">
                        <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-lg text-blue-100">Cas particuliers importants</h4>
                        <p className="text-sm md:text-base text-blue-200/80 leading-relaxed">
                            La maladie physique, le travail intense ou le voyage n'enlèvent <span className="text-brand-pearl font-bold underline decoration-blue-500/50 underline-offset-4">jamais</span> l'obligation de la prière.
                            <br className="mb-2 block" />
                            Cependant, Allah a facilité la pratique : on peut prier assis si on ne peut pas tenir debout, ou regrouper les prières. Nous verrons ces facilités au chapitre 12.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
