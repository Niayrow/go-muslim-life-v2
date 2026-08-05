"use client";

import { motion } from "motion/react";
import { Heart, Sparkles, Star, Lightbulb, Quote, ShieldCheck } from "lucide-react";

export function PourquoiContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-brand-panel border border-brand-line/30 p-6 md:p-10 shadow-lg group">
                {/* Fond animé abstrait (Rose/Bleu theme) */}
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-warm/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-blue-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <Heart className="h-10 w-10 md:h-12 md:w-12 text-brand-warm drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-brand-gold-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Sparkles className="h-3 w-3" /> L'Essence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Pourquoi la Prière ?
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            Ce n'est pas une simple gymnastique ni une taxe à payer à Dieu. C'est le <span className="text-brand-warm font-bold">fil de vie</span> entre le Créateur et sa créature.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- CARTE RÉVÉLATION (VIOLET/BLUE GLASS) --- */}
            <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-blue-500/20 bg-blue-900/10 backdrop-blur-2xl p-6 md:p-8 hover:bg-blue-900/20 transition-all duration-500 shadow-inner">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Star className="h-20 w-20 md:h-24 md:w-24 text-blue-400 rotate-12" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" /> Une Révélation Unique
                </h3>

                <div className="space-y-4 text-brand-soft leading-relaxed relative z-10 text-sm md:text-base">
                    <p>Saviez-vous que toutes les obligations (le Jeûne, la Zakat, le Hajj) ont été révélées au Prophète (ﷺ) sur Terre par l'ange Jibril ?</p>
                    <p className="font-bold text-blue-400">Toutes, sauf une : La Prière (Salat).</p>
                    <p>Pour la Prière, Allah a fait monter le Prophète (ﷺ) à travers les sept cieux lors du voyage nocturne (<strong>Isra & Mi'raj</strong>) pour lui donner cet ordre directement, sans intermédiaire.</p>

                    <div className="mt-6 p-4 rounded-xl bg-brand-panel-elevated/50 border border-brand-line/40 backdrop-blur-md flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <p className="text-sm font-medium text-blue-100">Cela montre son statut unique : c'est le cadeau qu'Allah nous a donné directement au Ciel.</p>
                    </div>
                </div>
            </div>

            {/* --- GRID : NETTOYAGE & 5 FOIS --- */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* CITATION */}
                <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-warm/30 bg-brand-warm/10 backdrop-blur-xl p-6 flex flex-col justify-between h-full">
                    <div>
                        <Quote className="h-8 w-8 text-brand-warm mb-4 opacity-40" />
                        <p className="italic text-base md:text-lg text-brand-soft font-medium leading-relaxed mb-4">
                            "Imaginez qu'il y a une rivière devant la porte de l'un d'entre vous et qu'il s'y lave 5 fois par jour. Resterait-il de la saleté sur lui ?"
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-brand-warm/30">
                        <div className="h-8 w-1 bg-brand-warm rounded-full" />
                        <div>
                            <p className="text-sm font-bold text-brand-gold-300">Prophète Muhammad (ﷺ)</p>
                            <p className="text-xs text-brand-warm/60">Le Nettoyage Spirituel</p>
                        </div>
                    </div>
                </div>

                {/* LOGIQUE DES 5 PRIÈRES */}
                <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-line/30 bg-brand-panel/60 backdrop-blur-xl p-6 shadow-inner">
                    <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-brand-pearl">
                        <Lightbulb className="text-brand-gold-400 h-5 w-5 md:h-6 md:w-6" /> Pourquoi 5 fois ?
                    </h3>
                    <p className="text-sm text-brand-mist leading-relaxed mb-4">
                        Imaginez que vous plongiez sous l'eau (la vie d'ici-bas). Vous devez remonter à la surface régulièrement pour respirer.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3 p-3 rounded-xl bg-brand-panel-elevated/50 border border-brand-line/30 transition-colors hover:bg-brand-warm/10">
                            <div className="h-2 w-2 rounded-full bg-brand-warm" />
                            <div>
                                <span className="block text-xs font-bold text-brand-warm uppercase">Fajr</span>
                                <span className="text-xs text-zinc-500">L'oxygène avant de plonger.</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 p-3 rounded-xl bg-brand-panel-elevated/50 border border-brand-line/30 transition-colors hover:bg-blue-500/10">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <div>
                                <span className="block text-xs font-bold text-blue-400 uppercase">Dhuhr & Asr</span>
                                <span className="text-xs text-zinc-500">Remonter au milieu du tumulte.</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 p-3 rounded-xl bg-brand-panel-elevated/50 border border-brand-line/30 transition-colors hover:bg-green-500/10">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <div>
                                <span className="block text-xs font-bold text-green-400 uppercase">Maghrib & Isha</span>
                                <span className="text-xs text-zinc-500">Se laver du stress avant de dormir.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- NOTE DE FIN (PILIER) --- */}
            <div className="rounded-[1.5rem] bg-white text-black p-6 flex flex-col md:flex-row gap-4 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <div className="shrink-0 p-3 bg-black/5 rounded-full h-fit w-fit">
                    <ShieldCheck className="h-6 w-6 text-zinc-800" />
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-1">Le Pilier Central</h4>
                    <p className="text-sm opacity-80 leading-relaxed font-medium">
                        La prière est le premier acte sur lequel nous serons interrogés. Si elle est valide, tout le reste suit. C'est la colonne vertébrale de votre foi. Sans elle, tout s'effondre ; avec elle, tout tient.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
