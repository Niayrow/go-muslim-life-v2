"use client";

import { motion } from "motion/react";
import { AlertTriangle, AlertCircle, EyeOff, FastForward } from "lucide-react";

export function ErreursContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME AVERTISSEMENT DOUX) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-brand-warm/20 bg-brand-panel p-6 md:p-10 text-center md:text-left shadow-2xl group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-warm/10 rounded-full blur-[80px] group-hover:bg-red-500/10 transition-colors duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-brand-warm/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <AlertTriangle className="h-10 w-10 md:h-12 md:w-12 text-brand-warm drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-brand-gold-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <AlertCircle className="h-3 w-3" /> Attention
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Les Pièges à Éviter
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            Parfois, de petites mauvaises habitudes se glissent silencieusement dans notre prière. Voici les erreurs les plus fréquentes avec leur solution.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- CARTES ERREURS --- */}
            <div className="grid lg:grid-cols-2 gap-4 md:gap-6">

                {/* Erreur 1 : La Course */}
                <div className="bg-brand-warm/10 border border-brand-warm/10 rounded-[1.5rem] p-6 hover:bg-brand-warm/10 transition-all flex flex-col justify-between">
                    <div>
                        <div className="bg-brand-warm/10 w-fit p-3 rounded-xl mb-4 text-brand-warm">
                            <FastForward className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-pearl mb-2">1. Prier beaucoup trop vite ("Le Picorage")</h3>
                        <p className="text-sm text-brand-mist leading-relaxed">
                            C'est l'erreur la plus dangereuse. Le Prophète ﷺ a vu un homme prier tellement vite qu'il lui a dit : <i>"Retourne prier car tu n'as pas prié."</i>
                            Ne pas marquer d'arrêt à chaque position (le dos bien droit avant de redescendre) rend la prière invalide.
                        </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-brand-warm/10">
                        <span className="text-xs font-bold text-brand-warm uppercase tracking-widest">Le remède</span>
                        <p className="text-sm text-brand-warm mt-1">Marquez une pause de 1 à 2 secondes d'immobilité totale (Tuma'nina) à chaque étape avant de bouger.</p>
                    </div>
                </div>

                {/* Erreur 2 : Le Regard */}
                <div className="bg-orange-950/10 border border-orange-500/10 rounded-[1.5rem] p-6 hover:bg-orange-950/20 transition-all flex flex-col justify-between">
                    <div>
                        <div className="bg-orange-500/10 w-fit p-3 rounded-xl mb-4 text-orange-400">
                            <EyeOff className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-pearl mb-2">2. Regarder en l'air (Le Plafond)</h3>
                        <p className="text-sm text-brand-mist leading-relaxed">
                            Interdiction absolue, sous peine de voir sa vue confisquée par Allah. Le regard doit être fixé vers le sol là où l'on pose son front, jamais en haut.
                        </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-orange-500/10">
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Le remède</span>
                        <p className="text-sm text-orange-200 mt-1">Tracez un point imaginaire sur votre tapis de prière et ne le quittez pas des yeux, depuis le début (debout) jusqu'à la prosternation.</p>
                    </div>
                </div>

                {/* Erreur 3 : Les Avant-Bras au sol */}
                <div className="bg-brand-gold-400/10 border border-brand-gold-400/10 rounded-[1.5rem] p-6 hover:bg-brand-gold-400/10 transition-all flex flex-col justify-between">
                    <div>
                        <div className="bg-brand-gold-400/10 w-fit p-3 rounded-xl mb-4 text-brand-gold-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-pearl mb-2">3. Les bras plats au sol</h3>
                        <p className="text-sm text-brand-mist leading-relaxed">
                            Lors du Sujud (prosternation), vos avant-bras et vos coudes ne doivent pas toucher le sol, à la manière d'un chien qui s'affaisse. Seules les paumes des mains touchent le tapis.
                        </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-brand-gold-400/10">
                        <span className="text-xs font-bold text-brand-gold-400 uppercase tracking-widest">Le remède</span>
                        <p className="text-sm text-brand-warm mt-1">Décollez vos coudes et gardez les aisselles bien dégagées du corps quand il n'y a personne autour de vous.</p>
                    </div>
                </div>

                {/* Erreur 4 : Bouger constamment */}
                <div className="bg-purple-950/10 border border-purple-500/10 rounded-[1.5rem] p-6 hover:bg-purple-950/20 transition-all flex flex-col justify-between">
                    <div>
                        <div className="bg-purple-500/10 w-fit p-3 rounded-xl mb-4 text-purple-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" /><path d="M14 14l-4 4" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-pearl mb-2">4. L'agitation inutile</h3>
                        <p className="text-sm text-brand-mist leading-relaxed">
                            Tripoter sa montre, rajuster ses vêtements 5 fois de suite, se gratter sans cesse... Les mouvements répétitifs sans vraie raison annulent la prière.
                        </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-500/10">
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Le remède</span>
                        <p className="text-sm text-purple-200 mt-1">Sentez la présence d'Allah. Vous tenez-vous droit ou bougez-vous dans tous les sens devant votre patron ? Imaginez devant qui vous êtes.</p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
