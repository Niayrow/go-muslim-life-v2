"use client";

import { motion } from "motion/react";
import { HelpCircle, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export function WaswasContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME DOUTE/RÉSOLUTION) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-slate-500/20 bg-brand-panel p-6 md:p-10 text-center md:text-left shadow-2xl group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-slate-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <HelpCircle className="h-10 w-10 md:h-12 md:w-12 text-slate-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <ShieldCheck className="h-3 w-3" /> Gérer les doutes
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Les Waswas (Doutes)
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            "Est-ce que j'ai fait 3 ou 4 rak'ats ?" "Est-ce que j'ai perdu mes ablutions ?" Ces doutes (insufflés par le diable) sont normaux. Voici la règle d'or pour les détruire.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- RÈGLE FONDAMENTALE --- */}
            <div className="rounded-[1.5rem] bg-indigo-950/20 border border-indigo-500/20 p-6 md:p-8 flex items-start gap-4 shadow-sm">
                <div className="shrink-0 p-3 bg-indigo-500/10 text-indigo-400 rounded-xl mt-1">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-indigo-200 mb-2">La Certitude ne disparaît pas avec le Doute</h3>
                    <p className="text-indigo-100/80 leading-relaxed text-sm md:text-base">
                        Si vous êtes <strong>certain</strong> d'avoir fait vos ablutions ce matin, mais que vous avez un <i>léger doute</i> de les avoir perdues... <strong>Vous avez toujours vos ablutions.</strong> Ignorez le doute.
                    </p>
                </div>
            </div>

            {/* --- SCÉNARIOS DE DOUTES (CARTES) --- */}
            <h3 className="text-xl font-bold text-brand-pearl pt-4">Les Scénarios Fréquents</h3>
            <div className="grid md:grid-cols-2 gap-4">

                {/* Doute Rakats */}
                <div className="bg-zinc-800/80 border border-brand-line/30 p-6 rounded-2xl hover:bg-zinc-800 transition-all">
                    <h4 className="font-bold text-brand-pearl flex items-center gap-2 mb-3">
                        <AlertCircle className="h-5 w-5 text-brand-gold-400" /> "3 ou 4 Rak'ats ?"
                    </h4>
                    <p className="text-sm text-brand-mist leading-relaxed mb-4">
                        En plein milieu de la prière, vous ne savez plus à quelle unité vous êtes.
                    </p>
                    <div className="bg-brand-panel-elevated/50 p-3 rounded-lg border border-brand-line/30">
                        <span className="text-xs font-bold text-brand-warm uppercase tracking-widest block mb-1">Solution</span>
                        <p className="text-sm text-brand-soft">Bâtissez sur le Minimum. Si vous doutez entre 3 et 4, considérez que c'est <strong>3</strong> (la certitude) et ajoutez-en une. Puis faites une prosternation de l'oubli.</p>
                    </div>
                </div>

                {/* Doute Dégagement Gaz */}
                <div className="bg-zinc-800/80 border border-brand-line/30 p-6 rounded-2xl hover:bg-zinc-800 transition-all">
                    <h4 className="font-bold text-brand-pearl flex items-center gap-2 mb-3">
                        <AlertCircle className="h-5 w-5 text-brand-gold-400" /> "J'ai senti quelque chose..."
                    </h4>
                    <p className="text-sm text-brand-mist leading-relaxed mb-4">
                        Vous ressentez un gargouillement dans le ventre et doutez d'avoir perdu les ablutions en pleine prière.
                    </p>
                    <div className="bg-brand-panel-elevated/50 p-3 rounded-lg border border-brand-line/30">
                        <span className="text-xs font-bold text-brand-warm uppercase tracking-widest block mb-1">Solution</span>
                        <p className="text-sm text-brand-soft">Le Prophète ﷺ a dit : "Ne quitte pas la prière jusqu'à entendre un bruit ou sentir une odeur". Si ce n'est qu'une sensation interne, <strong>ignorez-la</strong> et continuez.</p>
                    </div>
                </div>

            </div>

            {/* --- LA PROSTERNATION DE L'OUBLI (SUJUD SAHW) --- */}
            <div className="mt-8 rounded-[1.5rem] bg-brand-gold-400/10 border border-brand-gold-400/20 p-6 md:p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-gold-400/10 rounded-lg text-brand-gold-400">
                        <AlertCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-soft">La Prosternation de l'Oubli (Sujud Sahw)</h3>
                </div>

                <p className="text-sm md:text-base text-brand-soft mb-6 leading-relaxed">
                    C'est un cadeau d'Allah. Si vous avez oublié quelque chose ou si vous avez douté et bâti sur le minimum, vous n'avez pas à refaire toute la prière. Vous faites juste deux prosternations supplémentaires à la fin.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/30 border border-brand-gold-400/10 p-5 rounded-2xl relative">
                        <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded bg-brand-gold-400/20 text-brand-gold-300">Oubli / Doute</span>
                        <h4 className="font-bold text-brand-pearl mb-2">Avant le Salam</h4>
                        <p className="text-sm text-brand-mist leading-relaxed">
                            Si vous avez oublié une partie obligatoire et rattrapé, faites deux prosternations juste après le Tashahhud final, puis faites le Salam pour terminer.
                        </p>
                    </div>
                    <div className="bg-black/30 border border-brand-gold-400/10 p-5 rounded-2xl relative">
                        <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded bg-brand-gold-400/20 text-brand-gold-300">Ajout</span>
                        <h4 className="font-bold text-brand-pearl mb-2">Après le Salam</h4>
                        <p className="text-sm text-brand-mist leading-relaxed">
                            Si vous avez fait une Rak'at en trop par erreur. Vous terminez votre prière normalement par le Salam. Puis vous refaites deux prosternations, et un nouveau Salam.
                        </p>
                    </div>
                </div>
                <div className="mt-4 text-center text-xs text-brand-warm/50 italic">
                    Note : Dans le doute (Avant ou Après), si vous le faites avant le Salam, c'est valide dans tous les cas. InshaAllah.
                </div>
            </div>
        </motion.div>
    );
}
