"use client";

import { motion } from "motion/react";
import { Briefcase, Plane, Heart, CheckCircle2, Footprints, Star, Sparkles } from "lucide-react";

export function QuotidienContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME PRACTIQUE) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-cyan-500/20 bg-brand-panel p-6 md:p-10 text-center md:text-left shadow-2xl group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <Briefcase className="h-10 w-10 md:h-12 md:w-12 text-cyan-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Sparkles className="h-3 w-3" /> Solutions Pratiques
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            La Prière dans la Vraie Vie
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            L'Islam n'est pas fait pour vous compliquer la vie, mais pour l'accompagner. Allah a prévu des facilités (Rukhsah) pour le travail, le voyage et la maladie.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LE SUPER HACK : MASAH --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-brand-gold-400/25 bg-brand-warm/10 backdrop-blur-xl p-6 md:p-8 hover:border-brand-warm/40 transition-all duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Footprints className="h-32 w-32 text-brand-warm" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 rounded-xl bg-brand-warm/20 flex items-center justify-center text-brand-warm">
                            <Star className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-warm">Le "Hack" au travail : Masah sur les chaussettes</h3>
                    </div>

                    <p className="text-brand-soft/80 leading-relaxed mb-6 text-sm md:text-base">
                        C'est la solution n°1 pour prier au bureau sans mettre de l'eau partout. Au lieu de laver vos pieds à chaque fois, vous pouvez simplement passer les mains mouillées sur vos chaussettes.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-black/20 p-4 rounded-xl border border-brand-warm/10">
                            <h4 className="font-bold text-brand-gold-300 text-sm mb-1">1. Condition préalable</h4>
                            <p className="text-xs text-brand-mist">Avoir fait des ablutions complètes (en lavant les pieds) <strong>AVANT</strong> d'enfiler les chaussettes ce matin.</p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-xl border border-brand-warm/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-brand-warm/10 rounded-bl-xl flex items-center justify-center text-brand-warm font-bold text-[10px]">!</div>
                            <h4 className="font-bold text-brand-gold-300 text-sm mb-1">2. Le Geste exact</h4>
                            <p className="text-xs text-brand-mist">Passer les mains mouillées <strong>uniquement sur le DESSUS</strong> du pied (orteils vers cheville). Jamais en dessous.</p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-xl border border-brand-warm/10">
                            <h4 className="font-bold text-brand-gold-300 text-sm mb-1">3. Durée : 24 heures</h4>
                            <p className="text-xs text-brand-mist">Valable 24h pour le résident. Idéal pour tenir toute la journée de travail jusqu'au soir.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- GRID DES SCÉNARIOS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                {/* 1. TRAVAIL / ÉCOLE */}
                <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-line/30 bg-brand-panel-elevated/50 backdrop-blur-xl p-6 hover:bg-brand-panel-elevated transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold text-lg text-brand-pearl">Au Travail / École</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-brand-mist">
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                            <span><strong>Le lieu :</strong> Toute la terre est pure. Un bureau vide, un vestiaire, un escalier de secours propre suffisent.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                            <span><strong>Le temps :</strong> Une prière prend 5 à 7 minutes. C'est le temps d'une pause café.</span>
                        </li>
                    </ul>
                </div>

                {/* 2. MALADIE / FATIGUE */}
                <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-line/30 bg-brand-panel-elevated/50 backdrop-blur-xl p-6 hover:bg-brand-panel-elevated transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-brand-warm/20 rounded-xl text-brand-warm">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold text-lg text-brand-pearl">Maladie & Grossesse</h4>
                    </div>
                    <p className="text-sm text-brand-mist leading-relaxed mb-3">La règle est simple : <strong>"Prie debout. Si tu ne peux pas, alors assis. Si tu ne peux pas, alors allongé."</strong></p>
                    <div className="p-3 bg-brand-warm/10 rounded-lg border border-brand-warm/20 text-brand-warm text-xs">
                        <strong>Assis sur une chaise :</strong> Inclinez légèrement le buste pour le Ruku. Pour le Sujud, inclinez-vous beaucoup plus bas (sans toucher le sol).
                    </div>
                </div>

                {/* 3. VOYAGE */}
                <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-line/30 bg-brand-panel-elevated/50 backdrop-blur-xl p-6 hover:bg-brand-panel-elevated transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-orange-500/20 rounded-xl text-orange-400">
                            <Plane className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold text-lg text-brand-pearl">Le Voyageur</h4>
                    </div>
                    <p className="text-sm text-brand-mist mb-3">Dès que vous quittez votre ville (+80km), Allah vous offre deux cadeaux de voyage :</p>
                    <ul className="space-y-2 text-sm text-brand-mist">
                        <li><span className="text-orange-400 font-bold">1. Qasr :</span> Les prières de 4 rak'ats (Dhuhr, Asr, Isha) passent à 2 rak'ats.</li>
                        <li><span className="text-orange-400 font-bold">2. Jam' :</span> Vous pouvez regrouper Dhuhr avec Asr, et Maghrib avec Isha (en les priant l'une après l'autre).</li>
                    </ul>
                </div>

                {/* 4. RATTRAPAGE */}
                <div className="rounded-[1.5rem] md:rounded-3xl border border-brand-line/30 bg-brand-panel-elevated/50 backdrop-blur-xl p-6 hover:bg-brand-panel-elevated transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-purple-500/20 rounded-xl text-purple-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <h4 className="font-bold text-lg text-brand-pearl">Oubli et Sommeil</h4>
                    </div>
                    <p className="text-sm text-brand-mist mb-3 italic">
                        "Celui qui dort ou oublie une prière, qu'il la prie dès qu'il s'en souvient."
                    </p>
                    <div className="p-3 bg-purple-950/30 rounded-lg border border-purple-500/20 text-purple-200 text-xs">
                        <strong>Exemple (L'Ordre) :</strong> Si vous rentrez et que l'heure du Maghrib a commencé alors que vous avez raté l'Asr : Faites l'Asr d'abord (rattrapage), puis le Maghrib tout de suite après.
                    </div>
                </div>
            </div>

            {/* --- FAQ RAPIDE --- */}
            <div className="space-y-3 pt-6 border-t border-brand-line/40">
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider ml-2">Questions Flash</h4>

                <div className="rounded-2xl border border-brand-line/30 bg-brand-panel-elevated/50 p-4 flex gap-4 items-center">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-mist"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
                    </div>
                    <div className="text-sm">
                        <span className="font-bold text-brand-pearl block mb-1">Puis-je prier assis dans ma voiture ou le train ?</span>
                        <span className="text-brand-mist">Seulement si vous avez la certitude que l'heure de la prière sera terminée avant d'arriver à destination et que vous ne pouvez pas prier debout dans le train. (La direction de la prière Kaba est souhaitable mais pas invalidante si vous ne pouvez pas vous tourner).</span>
                    </div>
                </div>

                <div className="rounded-2xl border border-brand-line/30 bg-brand-panel-elevated/50 p-4 flex gap-4 items-center">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                        <Footprints className="h-4 w-4 text-brand-mist" />
                    </div>
                    <div className="text-sm">
                        <span className="font-bold text-brand-pearl block mb-1">Prier avec ses chaussures ?</span>
                        <span className="text-brand-mist">Oui, c'est totalement autorisé si elles sont propres (pas d'impuretés visibles sous la semelle type urine, selles). C'est même une sunnah pratiquée en extérieur.</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
