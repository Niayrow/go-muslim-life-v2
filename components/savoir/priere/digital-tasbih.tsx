"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DigitalTasbih() {
    const [count, setCount] = useState(0);
    const [phase, setPhase] = useState(0); // 0: SubhanAllah, 1: Alhamdulillah, 2: Allahu Akbar, 3: Fini

    const phases = [
        { name: "SubhanAllah", trans: "Gloire à Allah", color: "text-brand-warm", strokeColor: "text-brand-warm", bg: "bg-brand-warm", target: 33 },
        { name: "Alhamdulillah", trans: "Louange à Allah", color: "text-blue-500", strokeColor: "text-blue-500", bg: "bg-blue-500", target: 33 },
        { name: "Allahu Akbar", trans: "Allah est le Plus Grand", color: "text-brand-warm", strokeColor: "text-brand-warm", bg: "bg-brand-warm", target: 33 },
    ];

    const handleClick = () => {
        if (phase >= 3) return;

        if (count + 1 >= phases[phase].target) {
            if (phase === 2) {
                setPhase(3);
            } else {
                setPhase(p => p + 1);
                setCount(0);
            }
            if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(50);
        } else {
            setCount(c => c + 1);
        }
    };

    const reset = () => {
        setCount(0);
        setPhase(0);
    };

    if (phase === 3) {
        return (
            <div className="rounded-[1.5rem] md:rounded-3xl border border-dashed border-brand-warm/30 bg-brand-warm/10 p-8 text-center animate-in zoom-in backdrop-blur-xl">
                <CheckCircle2 className="h-16 w-16 text-brand-warm mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-warm">Dhikr Terminé !</h3>
                <p className="text-brand-mist mb-6 mt-2">Qu'Allah accepte vos actions.</p>
                <Button onClick={reset} variant="outline" className="border-brand-gold-400/25 text-brand-warm hover:bg-brand-warm/10 hover:text-brand-gold-300 transition-colors">
                    Recommencer
                </Button>
            </div>
        );
    }

    const currentPhase = phases[phase];
    const progress = (count / currentPhase.target) * 100;

    return (
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-brand-line/40 bg-brand-panel/60 backdrop-blur-2xl p-6 md:p-10 shadow-inner select-none transition-colors duration-500">
            <div className="flex flex-col items-center justify-center gap-6 text-center relative z-10">
                <div className="space-y-1">
                    <h4 className={`text-3xl md:text-4xl font-black ${currentPhase.color} transition-colors duration-500`}>
                        {currentPhase.name}
                    </h4>
                    <p className="text-sm text-brand-mist font-medium uppercase tracking-widest">
                        {currentPhase.trans}
                    </p>
                </div>

                <button
                    onClick={handleClick}
                    className="group relative h-40 w-40 md:h-48 md:w-48 rounded-full flex items-center justify-center bg-black/40 border border-brand-line/30 shadow-2xl active:scale-95 transition-all duration-150 outline-none tap-highlight-transparent"
                >
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="8" className="text-brand-pearl/5" />
                        <circle
                            cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="8"
                            strokeDasharray="289.026"
                            strokeDashoffset={289.026 - (progress / 100) * 289.026}
                            strokeLinecap="round"
                            className={`${currentPhase.strokeColor} transition-all duration-300 ease-out`}
                        />
                    </svg>

                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-6xl font-black text-brand-pearl tabular-nums leading-none">{count}</span>
                        <span className="text-xs text-zinc-500 font-medium mt-1">/ {currentPhase.target}</span>
                    </div>
                </button>

                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
                    Appuyez sur le cercle pour compter
                </p>
            </div>
        </div>
    );
}
