"use client";

import { motion } from "motion/react";
import { Droplet, Info, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";

export function WuduContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-brand-panel border border-brand-line/30 p-6 md:p-10 shadow-lg group">
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-blue-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <Droplet className="h-10 w-10 md:h-12 md:w-12 text-cyan-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Droplet className="h-3 w-3" /> Purification
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Les Ablutions
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            La clé de la prière est la purification. Ce n'est pas qu'un lavage physique, c'est l'eau qui efface les petits péchés de vos membres.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LES 4 PILIERS DU WUDU --- */}
            <div className="relative rounded-[1.5rem] md:rounded-3xl border border-brand-line/30 bg-brand-panel/60 backdrop-blur-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-pearl mb-6 flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-cyan-400" />
                    Le Minimum Obligatoire (Coran 5:6)
                </h3>

                <p className="text-sm md:text-base text-brand-mist mb-8 leading-relaxed">
                    Si vous n'avez pas beaucoup de temps ou d'eau, voici exactement ce que le Coran exige pour que vos ablutions soient valides (après avoir mis l'intention) :
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {/* Progression Line (Desktop) */}
                    <div className="absolute top-1/2 left-8 right-8 h-1 bg-brand-panel-elevated/50 -translate-y-1/2 hidden lg:block rounded-full" />

                    {[
                        { num: 1, title: "Visage", desc: "Laver tout le visage (du front au menton)." },
                        { num: 2, title: "Bras", desc: "Laver les bras jusqu'aux coudes inclus." },
                        { num: 3, title: "Tête", desc: "Passer les mains mouillées sur la tête." },
                        { num: 4, title: "Pieds", desc: "Laver les pieds jusqu'aux chevilles incluses." }
                    ].map((step) => (
                        <div key={step.num} className="relative bg-zinc-800/80 border border-brand-line/30 rounded-2xl p-5 hover:bg-zinc-800 transition-colors shadow-sm group">
                            <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                {step.num}
                            </div>
                            <h4 className="font-bold text-brand-pearl text-lg text-center lg:text-left">{step.title}</h4>
                            <p className="text-sm text-brand-mist text-center lg:text-left mt-2 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SUNNAH VS OBLIGATOIRE CARDS --- */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-[1.5rem] md:rounded-3xl border border-cyan-500/20 bg-cyan-900/10 backdrop-blur-xl p-6 hover:bg-cyan-900/20 transition-all duration-300">
                    <h3 className="font-bold text-lg text-cyan-200 flex items-center gap-2 mb-4">
                        <Info className="h-5 w-5" /> Et le reste ? (Gargarisme, etc.)
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-soft">
                        Laver les mains au début, se gargariser, nettoyer le nez, laver les oreilles... Ce sont des <strong className="text-cyan-300">Sunnahs</strong> (actes très recommandés du Prophète ﷺ). <br className="mb-2" />
                        Les faire augmente énormément votre récompense, mais si vous les oubliez, <strong>vos ablutions restent valides</strong> tant que les 4 piliers ci-dessus sont faits.
                    </p>
                </div>

                <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-warm/20 bg-brand-warm/10 backdrop-blur-xl p-6 hover:bg-brand-warm/20 transition-all duration-300">
                    <h3 className="font-bold text-lg text-brand-warm flex items-center gap-2 mb-4">
                        <AlertTriangle className="h-5 w-5" /> Les Annulatifs
                    </h3>
                    <ul className="space-y-3 text-sm text-brand-soft">
                        <li className="flex gap-2 items-start">
                            <ArrowRight className="h-4 w-4 shrink-0 text-brand-warm mt-0.5" />
                            Besoin naturel (urine, selles) ou gaz.
                        </li>
                        <li className="flex gap-2 items-start">
                            <ArrowRight className="h-4 w-4 shrink-0 text-brand-warm mt-0.5" />
                            Sommeil profond (où l'on perd conscience de son corps).
                        </li>
                        <li className="flex gap-2 items-start">
                            <ArrowRight className="h-4 w-4 shrink-0 text-brand-warm mt-0.5" />
                            Perte de raison (évanouissement, etc.).
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
