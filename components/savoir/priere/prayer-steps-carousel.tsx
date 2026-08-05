"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ChevronLeft,
    ChevronRight,
    PlayCircle,
    PauseCircle,
    Info,
    RefreshCw,
    Volume2,
    MicOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// DONNÉES DES ÉTAPES
const STEPS = [
    {
        id: 1,
        title: "1. L'Ouverture (Takbir)",
        arabic: "اللهُ أَكْبَر",
        phonetic: "Allahu Akbar",
        trans: "Dieu est le Plus Grand",
        desc: "Levez les mains au niveau des épaules ou des oreilles. C'est le signal de départ.",
        position: "Debout, regard vers le sol.",
        color: "emerald",
        audioSrc: "/audio/takbir.mp3",
    },
    {
        id: 2,
        title: "2. La Lecture (Fatiha)",
        arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ...",
        phonetic: "Al-Fatiha...",
        trans: "Au nom d'Allah...",
        desc: "Réciter la Fatiha est obligatoire dans chaque unité (Rak'at).",
        position: "Debout, mains croisées.",
        color: "blue",
        audioSrc: "https://server8.mp3quran.net/afs/001.mp3",
    },
    {
        id: 3,
        title: "3. L'Inclinaison (Ruku)",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيم",
        phonetic: "Subhana Rabbiyal 'Adhim (x3)",
        trans: "Gloire à mon Seigneur l'Immense",
        desc: "Inclinez-vous le dos plat. Vos mains agrippent vos genoux.",
        position: "Incliné à 90°.",
        color: "amber",
        audioSrc: "/audio/ruku.mp3",
    },
    {
        id: 4,
        title: "4. Le Redressement",
        arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
        phonetic: "Sami'Allahu liman hamidah",
        trans: "Dieu entend celui qui Le loue",
        desc: "Remontez en position debout.",
        position: "Debout, bras le long du corps.",
        color: "blue",
        audioSrc: "/audio/sami.mp3",
    },
    {
        id: 5,
        title: "5. La Prosternation (Sujud)",
        arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى",
        phonetic: "Subhana Rabbiyal A'la (x3)",
        trans: "Gloire à mon Seigneur le Très-Haut",
        desc: "Posez 7 os au sol : Front+Nez, Mains, Genoux, Orteils.",
        position: "Front au sol.",
        color: "violet",
        audioSrc: "/audio/sujud.mp3",
    },
    {
        id: 6,
        title: "6. L'Assise",
        arabic: "رَبِّ اغْفِرْ لِي",
        phonetic: "Rabbighfir li (x2)",
        trans: "Seigneur pardonne-moi",
        desc: "Asseyez-vous sur votre jambe gauche.",
        position: "Assis.",
        color: "blue",
        audioSrc: "/audio/rabbighfir.mp3",
    },
    {
        id: 7,
        title: "7. Deuxième Prosternation",
        arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى",
        phonetic: "Subhana Rabbiyal A'la (x3)",
        trans: "Gloire à mon Seigneur le Très-Haut",
        desc: "Exactement comme la première.",
        position: "Front au sol.",
        color: "violet",
        audioSrc: "/audio/sujud.mp3",
    },
    {
        id: 8,
        title: "8. Le Témoignage (Tashahhud)",
        arabic: "التَّحِيَّاتُ لِلَّهِ...",
        phonetic: "At-Tahiyyati lillahi...",
        trans: "Les salutations sont pour Allah...",
        desc: "À réciter en position assise à la fin.",
        position: "Assis, index levé.",
        color: "emerald",
        audioSrc: "/audio/tashahhud.mp3",
    },
    {
        id: 9,
        title: "9. Le Salut Final (Taslim)",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّه",
        phonetic: "Assalamu aleykum wa rahmatullah",
        trans: "Que la paix soit sur vous",
        desc: "Tournez la tête à droite, puis à gauche.",
        position: "Tête tournée.",
        color: "emerald",
        audioSrc: "/audio/taslim.mp3",
    },
];

export function PrayerStepsCarousel() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioError, setAudioError] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const step = STEPS[currentStep];
    const progress = ((currentStep + 1) / STEPS.length) * 100;

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
    };

    const playAudio = () => {
        if (!step.audioSrc) return;

        if (!audioRef.current || audioRef.current.src !== step.audioSrc) {
            audioRef.current = new Audio(step.audioSrc);

            audioRef.current.onerror = () => {
                setAudioError(true);
                setIsPlaying(false);
            };

            audioRef.current.onended = () => {
                setIsPlaying(false);
            };
        }

        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                    setAudioError(false);
                })
                .catch((error) => {
                    console.log("Lecture impossible:", error);
                    setIsPlaying(false);
                });
        }
    };

    const toggleAudio = () => {
        if (isPlaying) stopAudio();
        else playAudio();
    };

    useEffect(() => {
        stopAudio();
        setAudioError(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);

    useEffect(() => {
        return () => stopAudio();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const nextStep = () => {
        if (currentStep < STEPS.length - 1) setCurrentStep((c) => c + 1);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep((c) => c - 1);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                <span>
                    Étape {currentStep + 1}/{STEPS.length}
                </span>
                <div className="h-2 flex-1 rounded-full bg-brand-panel-elevated overflow-hidden">
                    <div
                        className="h-full rounded-full bg-brand-warm transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-lg min-h-[450px] flex flex-col">
                <div className={`h-2 bg-${step.color}-500 w-full transition-colors duration-500`} />

                <div className="flex-1 p-6 md:p-8 flex flex-col items-center text-center justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 w-full max-w-lg"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                {step.title}
                            </h3>

                            <div
                                className={`mx-auto w-24 h-24 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/20 flex items-center justify-center text-${step.color}-600 border-4 border-brand-line dark:border-zinc-800 shadow-xl relative`}
                            >
                                {isPlaying ? (
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                    >
                                        <Volume2 size={36} />
                                    </motion.div>
                                ) : (
                                    <span className="text-3xl font-bold">{step.id}</span>
                                )}

                                {audioError && (
                                    <div
                                        className="absolute -bottom-1 -right-1 bg-muted text-muted-foreground p-1.5 rounded-full shadow-sm border border-border"
                                        title="Audio non disponible"
                                    >
                                        <MicOff size={14} />
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={toggleAudio}
                                className={`w-full text-left bg-muted/40 rounded-2xl p-5 border transition-all duration-300 relative group overflow-hidden
                ${isPlaying
                                        ? "border-brand-warm bg-brand-warm/10 dark:bg-brand-warm/10 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]"
                                        : "border-border/50 hover:bg-muted/60 hover:border-brand-warm/30"
                                    }
                ${audioError ? "opacity-70 cursor-not-allowed" : ""}
                `}
                            >
                                <div className="absolute right-3 top-3 transition-colors">
                                    {isPlaying ? (
                                        <PauseCircle className="w-10 h-10 text-brand-warm drop-shadow-md" />
                                    ) : (
                                        <PlayCircle
                                            className={`w-10 h-10 transition-colors ${audioError
                                                ? "text-muted-foreground/20"
                                                : "text-muted-foreground/30 group-hover:text-brand-warm"
                                                }`}
                                        />
                                    )}
                                </div>

                                <p
                                    className="font-serif text-2xl md:text-3xl text-right mb-4 leading-relaxed dir-rtl pr-12"
                                    dir="rtl"
                                    lang="ar"
                                >
                                    {step.arabic}
                                </p>

                                <p
                                    className={`font-bold text-lg mb-1 transition-colors ${isPlaying
                                        ? "text-brand-warm dark:text-brand-warm"
                                        : "text-brand-warm/80 dark:text-brand-warm/80"
                                        }`}
                                >
                                    &quot;{step.phonetic}&quot;
                                </p>

                                <p className="text-sm text-muted-foreground italic">({step.trans})</p>

                                {isPlaying && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-brand-warm"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                    />
                                )}
                            </button>

                            <div className="text-sm md:text-base text-muted-foreground leading-relaxed bg-background/50 p-4 rounded-xl border border-border/50">
                                <p>{step.desc}</p>
                                <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                                    <Info size={14} /> Position :{" "}
                                    <span className="text-foreground">{step.position}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="p-4 border-t border-border bg-muted/20 flex justify-between items-center">
                    <Button
                        variant="ghost"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="rounded-xl h-12 px-6"
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
                    </Button>

                    <div className="flex gap-1.5">
                        {STEPS.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentStep ? `bg-${step.color}-500 w-6` : "bg-muted-foreground/20"
                                    }`}
                            />
                        ))}
                    </div>

                    {currentStep === STEPS.length - 1 ? (
                        <Button
                            onClick={() => setCurrentStep(0)}
                            className="bg-brand-warm hover:bg-brand-warm text-brand-pearl rounded-xl h-12 px-6"
                        >
                            <RefreshCw className="mr-2 h-4 w-4" /> Recommencer
                        </Button>
                    ) : (
                        <Button
                            onClick={nextStep}
                            className="bg-foreground text-background hover:bg-foreground/90 rounded-xl h-12 px-6"
                        >
                            Suivant <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
