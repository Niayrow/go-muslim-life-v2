"use client";

import { motion } from "motion/react";
import { Star, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export function SunnahContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME GOLD/BONUS) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-brand-gold-400/20 bg-brand-panel p-6 md:p-10 text-center md:text-left shadow-2xl group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold-400/10 rounded-full blur-[80px] group-hover:bg-yellow-500/10 transition-colors duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-brand-gold-400/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <Star className="h-10 w-10 md:h-12 md:w-12 text-brand-gold-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-brand-gold-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Sparkles className="h-3 w-3" /> Les Bonus
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Les Sunnahs
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            Une fois que vous maîtrisez le minimum, ajoutez ces éléments que le Prophète ﷺ nous a enseignés. Ce sont des "multiplicateurs de récompenses" qui embellissent votre prière sans être obligatoires.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LES BONUS LIST (GRID) --- */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Sparkles className="text-brand-gold-400 h-5 w-5" />
                    <h3 className="text-xl md:text-2xl font-bold text-brand-pearl">Avant & Pendant la prière</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* 1. L'Iqama */}
                    <div className="bg-zinc-800/80 border border-brand-line/30 p-5 rounded-2xl hover:bg-zinc-800 transition-colors flex gap-4">
                        <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold-400/20 text-brand-gold-400 flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 className="font-bold text-brand-pearl text-lg mb-1">L'Iqama (Appel)</h4>
                            <p className="text-sm text-brand-mist leading-relaxed">Faire le petit appel à la prière juste avant de commencer (même seul à la maison). C'est très recommandé.</p>
                        </div>
                    </div>

                    {/* 2. Dua d'ouverture */}
                    <div className="bg-zinc-800/80 border border-brand-line/30 p-5 rounded-2xl hover:bg-zinc-800 transition-colors flex gap-4">
                        <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold-400/20 text-brand-gold-400 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 className="font-bold text-brand-pearl text-lg mb-1">L'Invocation d'Ouverture</h4>
                            <p className="text-sm text-brand-mist leading-relaxed">Après le premier "Allahu Akbar", dire une petite invocation (ex: <i>Subhānaka Allāhumma...</i>) avant de réciter la Fatiha.</p>
                        </div>
                    </div>

                    {/* 3. Amin à voix haute */}
                    <div className="bg-zinc-800/80 border border-brand-line/30 p-5 rounded-2xl hover:bg-zinc-800 transition-colors flex gap-4">
                        <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold-400/20 text-brand-gold-400 flex items-center justify-center font-bold">3</div>
                        <div>
                            <h4 className="font-bold text-brand-pearl text-lg mb-1">Dire "Amine"</h4>
                            <p className="text-sm text-brand-mist leading-relaxed">Après la Fatiha, prononcer "Amine" ("Allah exauce"), à voix haute lors des prières à voix haute.</p>
                        </div>
                    </div>

                    {/* 4. Autre Sourate */}
                    <div className="bg-zinc-800/80 border border-brand-line/30 p-5 rounded-2xl hover:bg-zinc-800 transition-colors flex gap-4">
                        <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold-400/20 text-brand-gold-400 flex items-center justify-center font-bold">4</div>
                        <div>
                            <h4 className="font-bold text-brand-pearl text-lg mb-1">Une sourate en plus</h4>
                            <p className="text-sm text-brand-mist leading-relaxed">Réciter une autre petite sourate (comme Al-Ikhlas, Al-Falaq) <strong>après</strong> la Fatiha lors des 2 premières Rak'ats.</p>
                        </div>
                    </div>

                    {/* 5. Plus de 3x */}
                    <div className="bg-zinc-800/80 border border-brand-line/30 p-5 rounded-2xl hover:bg-zinc-800 transition-colors flex gap-4">
                        <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold-400/20 text-brand-gold-400 flex items-center justify-center font-bold">5</div>
                        <div>
                            <h4 className="font-bold text-brand-pearl text-lg mb-1">Augmenter les rappels</h4>
                            <p className="text-sm text-brand-mist leading-relaxed">Dire <i>Subhāna Rabbiya...</i> plus de 3 fois dans l'inclinaison/prosternation (5, 7 ou 9 fois par exemple).</p>
                        </div>
                    </div>

                    {/* 6. Le Geste du doigt */}
                    <div className="bg-zinc-800/80 border border-brand-line/30 p-5 rounded-2xl hover:bg-zinc-800 transition-colors flex gap-4">
                        <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold-400/20 text-brand-gold-400 flex items-center justify-center font-bold">6</div>
                        <div>
                            <h4 className="font-bold text-brand-pearl text-lg mb-1">Le Mouvement du doigt</h4>
                            <p className="text-sm text-brand-mist leading-relaxed">Lever l'index ou le bouger légèrement pendant le Tashahhud (la récitation assise à la fin).</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- LA REGLE D'OR BANNER --- */}
            <div className="rounded-[1.5rem] bg-brand-warm/10 border border-brand-gold-400/25 p-6 md:p-8 flex items-start md:items-center gap-6 shadow-sm">
                <div className="hidden md:flex shrink-0 h-14 w-14 rounded-full bg-brand-warm/10 items-center justify-center text-brand-warm border border-brand-gold-400/25">
                    <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                    <h4 className="font-bold text-lg md:text-xl text-brand-gold-300 mb-2">Règle Majeure</h4>
                    <p className="text-brand-soft/80 text-sm md:text-base leading-relaxed">
                        Si vous oubliez une Sunnah (même réciter une autre sourate après la Fatiha), <strong>votre prière reste totalement valide</strong>. Vous n'avez pas besoin de la refaire ni de faire une prosternation de réparation. C'est juste un bonus en moins !
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
