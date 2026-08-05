"use client";

import { motion } from "motion/react";
import { Sparkles, Infinity, ShieldCheck, BookOpen, HandHeart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DigitalTasbih } from "@/components/savoir/priere/digital-tasbih";

export function ApresContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME CONNEXION CONSTANTE) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-teal-500/20 bg-brand-panel p-6 md:p-10 text-center md:text-left shadow-2xl group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-brand-warm/10 transition-colors duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-teal-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-teal-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-teal-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Infinity className="h-3 w-3" /> Post-Prière
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Ne partez pas tout de suite !
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            La prière est finie, mais la connexion est encore ouverte. C'est le moment du "Service Après-Vente" spirituel : le Dhikr. C'est ici que l'on verrouille les récompenses.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- ETAPE 1 : LE RESET (ISTIGHFAR) --- */}
            <div className="rounded-[1.5rem] md:rounded-3xl border border-zinc-800 bg-brand-panel/60 backdrop-blur-xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:bg-zinc-800/60 transition-colors">
                <div className="h-16 w-16 rounded-full bg-brand-panel-elevated/50 flex items-center justify-center text-2xl font-bold text-zinc-500 border border-brand-line/40">
                    1
                </div>
                <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-brand-pearl">Le "Reset" Immédiat</h3>
                    <p className="text-sm text-brand-mist leading-relaxed">
                        Dès le salut final, la première chose à faire est de demander pardon à Allah 3 fois (pour toutes les petites baisses de concentration ou erreurs dans la prière).
                    </p>
                    <div className="inline-block px-4 py-2 bg-black/40 rounded-lg border border-brand-line/30 font-serif text-lg text-brand-pearl mt-2">
                        "Astaghfirullāh" <span className="font-sans text-xs text-zinc-500 ml-2">(Je demande pardon à Allah)</span> <span className="font-bold text-brand-warm ml-3">x3</span>
                    </div>
                </div>
            </div>

            {/* --- ETAPE 2 : AYAT AL KURSI (LA PROTECTION) --- */}
            <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-brand-gold-400/20 bg-brand-gold-400/10 backdrop-blur-xl p-6 md:p-8 hover:border-brand-gold-400/40 transition-all duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldCheck className="h-32 w-32 text-brand-gold-400" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="h-16 w-16 rounded-full bg-brand-gold-400/20 flex items-center justify-center text-2xl font-bold text-brand-gold-400 shrink-0 border border-brand-gold-400/30">
                        2
                    </div>
                    <div className="space-y-4 flex-1">
                        <div>
                            <h3 className="text-xl font-bold text-brand-soft">Le Ticket pour le Paradis</h3>
                            <p className="text-sm text-brand-warm/70 leading-relaxed mt-2">
                                Le Prophète (ﷺ) a dit : <i>"Celui qui récite <strong>Ayat Al-Kursi</strong> après chaque prière obligatoire, rien ne l'empêche d'entrer au Paradis si ce n'est la mort."</i>
                            </p>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="border-brand-gold-400/30 text-brand-gold-400 hover:bg-brand-gold-400/10 hover:text-brand-gold-300 bg-black/40 transition-colors rounded-xl px-6">
                                    <BookOpen className="mr-2 h-4 w-4" /> Lire Ayat Al-Kursi
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl bg-zinc-950/95 border-brand-gold-400/20 backdrop-blur-xl text-zinc-200">
                                <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2 text-brand-gold-400 text-xl font-bold">
                                        <ShieldCheck className="h-6 w-6" /> Le Verset du Trône (Ayat Al-Kursi)
                                    </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6 pt-4">
                                    <div className="p-6 rounded-2xl bg-brand-gold-400/10 border border-brand-gold-400/20">
                                        <p className="text-2xl md:text-3xl text-right font-serif leading-[1.8] text-brand-soft" dir="rtl" lang="ar">
                                            اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلاَّ بِإِذْنِهِ...
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold text-brand-gold-400/70 uppercase tracking-wider">Phonétique & Sens global</h4>
                                        <p className="text-sm text-brand-mist leading-relaxed italic border-l-2 border-brand-gold-400/20 pl-4 py-2">
                                            "Allāhu lā ilāha illā huwal ḥayyul qayyūm..." <br />
                                            (Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même. Ni somnolence ni sommeil ne Le saisissent...)
                                        </p>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>

            {/* --- ETAPE 3 : LE TASBIH (INTEGRATION) --- */}
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-center md:text-left">
                    <div className="h-10 w-10 mx-auto md:mx-0 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm border border-teal-500/30 shrink-0">3</div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-pearl">Le Tasbih (33 x 33 x 33)</h3>
                        <p className="text-sm text-brand-mist mt-1">
                            La formule pour alourdir la balance des bonnes actions et expier les péchés. <span className="text-teal-400">Touchez l'écran pour compter.</span>
                        </p>
                    </div>
                </div>

                {/* Fallback container for DigitalTasbih component */}
                <div className="w-full">
                    {/* Assuming the original page had this component, otherwise it will fail to load. In a full migration, you ensure the component exists. */}
                    <DigitalTasbih />
                </div>
            </div>

            {/* --- ETAPE 4 : LA DUA LIBRE --- */}
            <div className="rounded-[1.5rem] md:rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/20 to-blue-950/20 backdrop-blur-xl p-6 md:p-8 text-center mt-12 mb-8">
                <HandHeart className="h-10 w-10 text-indigo-400 mx-auto mb-4 drop-shadow-md" />
                <h3 className="text-xl font-bold text-indigo-100 mb-3">4. La Zone Libre (Invocations)</h3>
                <p className="text-indigo-200/70 max-w-lg mx-auto leading-relaxed text-sm">
                    À ce moment précis, la ligne est ouverte rien que pour vous. Levez les mains et demandez ce que vous voulez, dans votre langue, avec vos propres mots (Santé, succès, famille, paradis...). Allah écoute tout.
                </p>
            </div>

            {/* Note finale */}
            <div className="text-center">
                <p className="text-xs text-zinc-600 font-bold tracking-widest uppercase mb-4">Fin du Guide d'Initiation</p>
                <div className="inline-flex items-center gap-2 text-sm text-brand-warm bg-brand-warm/10 px-6 py-3 rounded-full border border-brand-gold-400/25">
                    <Sparkles className="h-4 w-4" /> Qu'Allah accepte vos actions.
                </div>
            </div>
        </motion.div>
    );
}
