"use client";

import { motion } from "motion/react";
import { Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef } from "react";

interface RecitationCardProps {
    stepLabel: string;
    title: string;
    arabic: string;
    phonetic: string;
    translation: string;
    audioUrl?: string; // Optionnel : si un fichier audio est disponible
    repetitions?: number;
}

export function RecitationCard({ stepLabel, title, arabic, phonetic, translation, audioUrl, repetitions = 1 }: RecitationCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioUrl) return; // Si pas d'audio, on ne fait rien

        if (isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        } else {
            // Créé l'audio si nécessaire
            if (!audioRef.current) {
                audioRef.current = new Audio(audioUrl);
                audioRef.current.onended = () => setIsPlaying(false);
            }
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-brand-line/40 bg-brand-panel/40 backdrop-blur-xl p-8 hover:bg-zinc-800/60 transition-colors shadow-2xl"
        >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <span className="text-xs font-bold text-brand-warm uppercase tracking-widest bg-brand-warm/10 px-3 py-1 rounded-full border border-brand-gold-400/25">
                        {stepLabel}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-pearl mt-3">{title}</h3>
                </div>

                {audioUrl && (
                    <button
                        onClick={togglePlay}
                        className={`shrink-0 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 shadow-xl border ${isPlaying
                                ? "bg-brand-warm border-brand-gold-400 text-brand-pearl animate-pulse"
                                : "bg-brand-panel-elevated hover:bg-brand-warm/20 text-brand-warm border-brand-line/40 hover:border-brand-warm/50"
                            }`}
                        aria-label="Écouter la récitation"
                    >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                    </button>
                )}
            </div>

            {/* Arabic - Center stage */}
            <div className="text-right py-6 mb-6 border-b border-t border-brand-line/30">
                <p className="text-3xl md:text-5xl font-arabic text-brand-soft leading-[1.8] tracking-wider select-text" dir="rtl">
                    {arabic}
                </p>
                {repetitions > 1 && (
                    <span className="inline-block mt-4 px-3 py-1 rounded-md bg-brand-gold-400/20 text-brand-gold-300 text-xs font-bold border border-brand-gold-400/30">
                        À dire {repetitions} fois
                    </span>
                )}
            </div>

            {/* Phonetic & Translation Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                        <Volume2 className="h-4 w-4" /> Prononciation
                    </h4>
                    <p className="text-lg text-brand-warm/90 font-medium leading-relaxed bg-zinc-950/50 p-4 rounded-2xl border border-brand-line/30">
                        {phonetic}
                    </p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Sens global</h4>
                    <p className="text-lg text-brand-soft leading-relaxed italic border-l-2 border-zinc-700 pl-4 py-2">
                        "{translation}"
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
