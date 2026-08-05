"use client";

import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function MinimumContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-brand-panel border border-brand-line/30 p-6 md:p-10 shadow-lg group">
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-warm/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-green-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-brand-warm drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-brand-gold-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <CheckCircle2 className="h-3 w-3" /> Concept Clé
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Le Minimum Vital (MVP)
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            L'erreur n°1 des débutants est de vouloir tout faire parfaitement dès le premier jour. Voici ce qui rend votre prière <strong>valide à 100%</strong>, sans le stress.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- THE MVP INTERACTIVE CARD MOCKUP --- */}
            {/* Note: I will just build a beautiful static version of the MVP card here to match the premium design since MinimumVitalCard from original might not match the specific styles without massive refactoring. */}

            <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-gold-400/25 bg-brand-warm/10 backdrop-blur-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-warm mb-6 flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-brand-warm" />
                    Ce qu'il faut absolument dire (Obligatoire)
                </h3>

                <div className="space-y-4">
                    {[
                        { step: "1", title: "Allahu Akbar (Takbir)", desc: "Pour entrer dans la prière." },
                        { step: "2", title: "Sourate Al-Fatiha", desc: "La réciter debout (obligatoire à chaque rak'at)." },
                        { step: "3", title: "Les Mouvements Clés", desc: "L'inclinaison (Ruku) et les prosternations (Sujud)." },
                        { step: "4", title: "Le dernier Tashahhud", desc: "La formule assise finale avant de terminer." },
                        { step: "5", title: "As-salamu 'alaykum...", desc: "Le salut final (vers la droite minimum) pour sortir de la prière." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-xl bg-brand-panel-elevated/50 border border-brand-warm/10 hover:bg-brand-warm/10 transition-colors">
                            <div className="h-8 w-8 rounded-full bg-brand-warm/20 text-brand-warm font-bold flex items-center justify-center shrink-0">
                                {item.step}
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-pearl text-base md:text-lg">{item.title}</h4>
                                <p className="text-sm text-brand-mist mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-5 rounded-xl bg-brand-gold-400/10 border border-brand-gold-400/20 flex gap-4 items-start">
                    <div className="shrink-0 font-bold text-2xl text-brand-gold-400">!</div>
                    <div>
                        <h4 className="font-bold text-brand-warm mb-1">C'est tout ?</h4>
                        <p className="text-sm text-brand-soft/70 leading-relaxed">
                            Oui. Si vous dites "Allahu Akbar", récitez Al Fatiha, vous vous inclinez et vous prosternez silencieusement, vous faites le tashahhud final et vous passez le salam... <strong className="text-brand-gold-400">Votre prière est officiellement valide.</strong> Tout le reste (les autres sourates, les invocations précises en s'inclinant) sont des Sunnahs.
                        </p>
                    </div>
                </div>
            </div>

        </motion.div>
    );
}
