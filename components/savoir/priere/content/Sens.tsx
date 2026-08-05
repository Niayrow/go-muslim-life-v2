"use client";

import { motion } from "motion/react";
import { BrainCircuit, Heart, Eye } from "lucide-react";

export function SensContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME KHUSHU) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-fuchsia-500/20 bg-brand-panel p-6 md:p-10 text-center md:text-left shadow-2xl group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] group-hover:bg-pink-500/10 transition-colors duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-warm/10 rounded-full blur-[80px] group-hover:bg-fuchsia-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <Heart className="h-10 w-10 md:h-12 md:w-12 text-fuchsia-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-fuchsia-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <BrainCircuit className="h-3 w-3" /> Le Coeur (Khushu')
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Au-delà des Gestes
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            Faire de la gymnastique en récitant de l'arabe sans rien comprendre n'est pas le but. La prière est le repos de l'âme si on y met le cœur.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {/* 1. Allahu Akbar */}
                <div className="rounded-[1.5rem] bg-brand-panel-elevated/50 border border-brand-line/40 p-6 hover:bg-brand-panel-elevated transition-all group">
                    <h3 className="text-xl font-bold text-brand-pearl mb-2 group-hover:text-fuchsia-400 transition-colors">"Allahu Akbar"</h3>
                    <p className="text-sm text-brand-mist">
                        Quand vous levez les mains et dites "Dieu est le plus Grand", <strong>vous jetez le monde derrière votre dos</strong>. Le stress, le travail, les problèmes... tout cela est plus petit qu'Allah.
                    </p>
                </div>

                {/* 2. Al-Fatiha */}
                <div className="rounded-[1.5rem] bg-brand-panel-elevated/50 border border-brand-line/40 p-6 hover:bg-brand-panel-elevated transition-all group">
                    <h3 className="text-xl font-bold text-brand-pearl mb-2 group-hover:text-fuchsia-400 transition-colors">La Fatiha</h3>
                    <p className="text-sm text-brand-mist">
                        C'est un dialogue. Le Prophète ﷺ a dit que pour chaque verset de la Fatiha que vous lisez, <strong>Allah vous répond en direct</strong>. Prenez une pause entre chaque verset pour "entendre" Sa réponse.
                    </p>
                </div>

                {/* 3. Le Sujud */}
                <div className="rounded-[1.5rem] bg-brand-panel-elevated/50 border border-brand-line/40 p-6 hover:bg-brand-panel-elevated transition-all group">
                    <h3 className="text-xl font-bold text-brand-pearl mb-2 group-hover:text-fuchsia-400 transition-colors">Le Sujud (Prosternation)</h3>
                    <p className="text-sm text-brand-mist">
                        "Le moment où le serviteur est <strong>le plus proche de son Seigneur</strong> est lorsqu'il est prosterné." C'est le moment de se vider de son orgueil et de faire ses demandes secrètes.
                    </p>
                </div>
            </div>

            {/* --- ASTUCE VISUELLE --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-sky-500/20 bg-sky-950/20 backdrop-blur-xl p-6 md:p-8 flex items-center gap-6">
                <div className="hidden md:flex h-16 w-16 rounded-full bg-sky-500/20 items-center justify-center text-sky-400 shrink-0 border border-sky-500/30 shadow-sm">
                    <Eye className="h-8 w-8" />
                </div>
                <div>
                    <h4 className="font-bold text-sky-300 text-lg md:text-xl mb-2">Où regarder ?</h4>
                    <p className="text-sm md:text-base text-sky-100/80 leading-relaxed">
                        Ne fermez pas les yeux ! (Sauf si vous perdez votre concentration). Gardez les yeux ouverts et fixez <strong>l'endroit où votre front va se poser</strong>. Cela aide incroyablement à vider son esprit et rester focus.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
