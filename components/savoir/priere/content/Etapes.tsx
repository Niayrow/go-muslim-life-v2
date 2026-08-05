"use client";

import { motion } from "motion/react";
import { Sparkles, Footprints, Lightbulb } from "lucide-react";
import { PrayerStepsCarousel } from "@/components/savoir/priere/prayer-steps-carousel";

export function EtapesContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME GUIDE) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-violet-500/20 bg-brand-panel p-6 md:p-10 text-center md:text-left shadow-2xl group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-fuchsia-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <Footprints className="h-10 w-10 md:h-12 md:w-12 text-violet-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-violet-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Sparkles className="h-3 w-3" /> Guide Pratique
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            La Prière Pas à Pas
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            Voici le déroulé d'une unité de prière (Rak'at). Prenez votre temps sur chaque étape. C'est un dialogue, pas une course.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LE CARROUSEL INTERACTIF --- */}
            <div className="my-8">
                {/* Note: PrayerStepsCarousel will need to be made transparent/dark theme compatible if it's not already. Let's wrap it nicely. */}
                <div className="rounded-[1.5rem] bg-brand-panel-elevated/50 border border-brand-line/30 p-4 md:p-8 backdrop-blur-sm">
                    <PrayerStepsCarousel />
                </div>
            </div>

            {/* --- ASTUCE RAKATS --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-brand-gold-400/20 bg-brand-gold-400/10 backdrop-blur-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="shrink-0 p-4 rounded-2xl bg-brand-gold-400/20 text-brand-gold-400 shadow-sm border border-brand-gold-400/30">
                        <Lightbulb className="h-6 w-6" />
                    </div>
                    <div className="space-y-4 w-full">
                        <h4 className="font-bold text-brand-soft text-xl">Combien de fois répéter l'unité ci-dessus ?</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                            <div className="bg-brand-panel-elevated/50 p-4 rounded-2xl border border-brand-gold-400/10 text-center hover:bg-brand-panel-elevated transition-colors">
                                <span className="block text-xs font-bold text-brand-gold-400 uppercase tracking-wider mb-2">Fajr (Matin)</span>
                                <span className="text-3xl md:text-4xl font-black text-brand-pearl">2 <span className="text-base font-normal text-brand-mist">fois</span></span>
                            </div>
                            <div className="bg-brand-panel-elevated/50 p-4 rounded-2xl border border-brand-gold-400/10 text-center hover:bg-brand-panel-elevated transition-colors">
                                <span className="block text-xs font-bold text-brand-gold-400 uppercase tracking-wider mb-2">Maghrib</span>
                                <span className="text-3xl md:text-4xl font-black text-brand-pearl">3 <span className="text-base font-normal text-brand-mist">fois</span></span>
                            </div>
                            <div className="bg-brand-panel-elevated/50 p-4 rounded-2xl border border-brand-gold-400/10 text-center hover:bg-brand-panel-elevated transition-colors">
                                <span className="block text-xs font-bold text-brand-gold-400 uppercase tracking-wider mb-2">Dhuhr, Asr, Isha</span>
                                <span className="text-3xl md:text-4xl font-black text-brand-pearl">4 <span className="text-base font-normal text-brand-mist">fois</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
