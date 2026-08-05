"use client";

import { motion } from "motion/react";
import { MessageCircleQuestion, Sparkles, BookOpen } from "lucide-react";
import { RecitationCard } from "@/components/savoir/priere/recitation-card";

export function RecitationsContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF (THÈME PAROLES) --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-brand-panel border border-brand-line/30 p-6 md:p-10 shadow-lg group">
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-purple-500/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <MessageCircleQuestion className="h-10 w-10 md:h-12 md:w-12 text-indigo-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-indigo-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Sparkles className="h-3 w-3" /> Les Paroles Sacrées
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Que doit-on dire ?
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            La prière n'est pas une méditation silencieuse, c'est un dialogue. Voici les formules essentielles. Ne vous inquiétez pas pour l'accent au début, <span className="text-indigo-400 font-bold">c'est l'effort qui compte</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- AL-FATIHA (CARTE MAJEURE) --- */}
            <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-brand-gold-400/25 bg-brand-warm/10 backdrop-blur-2xl p-6 md:p-8 hover:bg-brand-warm/20 transition-all duration-500 shadow-lg">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BookOpen className="h-24 w-24 md:h-32 md:w-32 text-brand-warm" />
                </div>

                <div className="relative z-10 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-brand-warm/20 border border-brand-warm/30 text-brand-warm px-3 py-1 text-xs font-bold rounded-full">Pilier Obligatoire</span>
                        <span className="text-xs font-bold text-brand-gold-300 uppercase tracking-widest">Position Debout</span>
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-pearl mb-2">La Fatiha (L'Ouverture)</h3>
                        <p className="text-sm text-brand-warm/70">À réciter entièrement à chaque unité (Rak'at).</p>
                    </div>

                    <div className="space-y-3 bg-black/40 rounded-2xl p-4 md:p-6 border border-brand-warm/10 backdrop-blur-sm shadow-inner">
                        {[
                            { text: "Bismillāhi r-raḥmāni r-raḥīm", trans: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux." },
                            { text: "Al-ḥamdu lillāhi rabbi l-ʿālamīn", trans: "Louange à Allah, Seigneur de l'univers." },
                            { text: "Ar-raḥmāni r-raḥīm", trans: "Le Tout Miséricordieux, le Très Miséricordieux." },
                            { text: "Māliki yawmi d-dīn", trans: "Maître du Jour de la Rétribution." },
                            { text: "Iyyāka naʿbudu wa iyyāka nastaʿīn", trans: "C'est Toi seul que nous adorons, et c'est Toi seul dont nous implorons secours." },
                            { text: "Ihdinā ṣ-ṣirāṭa l-mustaqīm", trans: "Guide-nous dans le droit chemin." },
                            { text: "Ṣirāṭa lladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa-lā ḍ-ḍāllīn", trans: "Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés." }
                        ].map((v, i) => (
                            <div key={i} className="group/verse hover:bg-brand-warm/10 p-3 rounded-xl transition-colors">
                                <p className="font-serif font-bold text-brand-pearl text-lg md:text-xl group-hover/verse:text-brand-warm transition-colors">
                                    <span className="text-brand-warm text-sm md:text-base mr-3 font-sans opacity-50">{i + 1}.</span> {v.text}
                                </p>
                                <p className="text-sm text-brand-mist italic pl-6 md:pl-8 border-l-2 border-brand-gold-400/25 mt-2">{v.trans}</p>
                            </div>
                        ))}
                        <p className="text-right font-bold text-brand-warm mt-4 text-sm px-2">"Amine"</p>
                    </div>
                </div>
            </div>

            {/* --- GRID INVOCATIONS COURTES --- */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <RecitationCard
                    stepLabel="1. Inclinaison (Ruku)"
                    title="Le Ruku"
                    repetitions={3}
                    arabic="سُبْحَانَ رَبِّيَ الْعَظِيمِ"
                    phonetic="Subḥāna Rabbiya l-ʿAẓīm"
                    translation="Gloire et pureté à mon Seigneur l'Immense."
                />
                <RecitationCard
                    stepLabel="2. En se relevant"
                    title="Le Rappel"
                    repetitions={1}
                    arabic="سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ - رَبَّنَا وَلَكَ الْحَمْدُ"
                    phonetic="Samiʿ Allāhu liman ḥamidah. Rabbanā wa laka l-ḥamd."
                    translation="Allah entend celui qui Le loue. Ô notre Seigneur, à Toi la louange."
                />
                <RecitationCard
                    stepLabel="3. Front au sol (Sujud)"
                    title="Le Sujud"
                    repetitions={3}
                    arabic="سُبْحَانَ رَبِّيَ الأَعْلَى"
                    phonetic="Subḥāna Rabbiya l-Aʿlā"
                    translation="Gloire et pureté à mon Seigneur le Très-Haut."
                />
                <RecitationCard
                    stepLabel="4. Assis (Pause)"
                    title="Le Pardon"
                    repetitions={2}
                    arabic="رَبِّ اغْفِرْ لِي"
                    phonetic="Rabbighfir lī"
                    translation="Ô Seigneur, pardonne-moi."
                />
            </div>

            {/* --- TASHAHHUD (LE TEMOIGNAGE) - TEXTES COMPLETS --- */}
            <div className="rounded-[1.5rem] md:rounded-3xl border border-violet-500/20 bg-violet-950/10 backdrop-blur-xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 shadow-sm border border-violet-500/30">
                        <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-brand-pearl">Le Tashahhud Complet</h3>
                        <p className="text-sm text-violet-300/70 mt-1">À réciter en position assise (Index levé).</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Partie 1 : Salutations */}
                    <div className="relative p-5 md:p-6 rounded-2xl bg-black/40 border border-violet-500/10 hover:border-violet-500/30 transition-colors shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
                            <h4 className="font-bold text-violet-300 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-violet-500" /> Partie 1 : Salutations
                            </h4>
                            <span className="text-[10px] md:text-xs font-bold px-2 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 w-fit">
                                Milieu & Fin de prière
                            </span>
                        </div>
                        <p className="font-serif font-bold text-lg md:text-xl mb-4 leading-relaxed text-brand-pearl">
                            "At-taḥiyyātu lillāhi wa ṣ-ṣalawātu wa ṭ-ṭayyibāt. As-salāmu ʿalayka ayyuhā n-nabiyyu wa raḥmatu llāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādi llāhi ṣ-ṣāliḥīn. Ash-hadu an lā ilāha illā Allāh, wa ash-hadu anna Muḥammadan ʿabduhū wa rasūluh."
                        </p>
                        <p className="text-xs md:text-sm text-brand-mist italic border-t border-violet-500/10 pt-4 leading-relaxed">
                            Les salutations sont pour Allah, ainsi que les prières et les bonnes œuvres. Que le salut soit sur toi, ô Prophète, ainsi que la miséricorde d'Allah et Ses bénédictions. Que le salut soit sur nous et sur les serviteurs vertueux d'Allah. Je témoigne qu'il n'y a de divinité qu'Allah et que Muhammad est Son serviteur et messager.
                        </p>
                    </div>

                    {/* Partie 2 : Prière sur le Prophète */}
                    <div className="relative p-5 md:p-6 rounded-2xl bg-black/40 border border-violet-500/10 hover:border-violet-500/30 transition-colors shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
                            <h4 className="font-bold text-violet-300 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-violet-500" /> Partie 2 : Prière sur le Prophète
                            </h4>
                            <span className="text-[10px] md:text-xs font-bold px-2 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 w-fit">
                                Fin uniquement (avant le salam)
                            </span>
                        </div>
                        <p className="font-serif font-bold text-lg md:text-xl mb-4 leading-relaxed text-brand-pearl">
                            "Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad kamā ṣallayta ʿalā Ibrāhīm wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik ʿalā Muḥammad wa ʿalā āli Muḥammad kamā bārakta ʿalā Ibrāhīm wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd."
                        </p>
                        <p className="text-xs md:text-sm text-brand-mist italic border-t border-violet-500/10 pt-4 leading-relaxed">
                            Ô Allah, prie sur Muhammad et sur la famille de Muhammad comme Tu as prié sur Ibrahim et sur la famille d'Ibrahim, Tu es certes Digne de louange et de gloire. Ô Allah, bénis Muhammad et la famille de Muhammad comme Tu as béni Ibrahim et la famille d'Ibrahim, Tu es certes Digne de louange et de gloire.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
