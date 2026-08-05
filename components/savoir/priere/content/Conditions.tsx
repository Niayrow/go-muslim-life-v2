"use client";

import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, Heart, Droplet, Lightbulb } from "lucide-react";

export function ConditionsContent() {
    const conditions = [
        { id: "islam", label: "1. Être Musulman(e)", desc: "La base de tout acte d'adoration." },
        { id: "raison", label: "2. La Raison (Sain d'esprit)", desc: "Être conscient (ni ivre, ni fou, ni endormi)." },
        { id: "wudu", label: "3. La Pureté (Wudu)", desc: "Avoir ses ablutions (petites ou grandes)." },
        { id: "awrah", label: "4. Couvrir la Nudité (Awrah)", desc: "Vêtements amples et opaques couvrant les zones obligatoires." },
        { id: "heure", label: "5. L'Heure", desc: "Le temps de la prière doit être rentré." },
        { id: "qibla", label: "6. La Qibla", desc: "S'orienter vers la Ka'ba (La Mecque)." },
        { id: "niyya", label: "7. L'Intention (Niyya)", desc: "Savoir dans son cœur quelle prière on fait." }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
        >
            {/* --- EN-TÊTE IMMERSIF --- */}
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-brand-panel border border-brand-line/30 p-6 md:p-10 shadow-lg group">
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-brand-warm/10 transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/40 shadow-lg backdrop-blur-md rotate-3 transition-transform hover:rotate-6 duration-500">
                        <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-blue-400 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel-elevated/50 border border-brand-line/40 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <CheckCircle2 className="h-3 w-3" /> Pré-requis
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-pearl tracking-tight leading-tight">
                            Les 7 Clés de Validité
                        </h2>
                        <p className="text-base md:text-lg text-brand-mist leading-relaxed max-w-2xl">
                            Avant même de lever les mains, votre prière doit respecter ces conditions. Si une seule manque, la porte de la connexion ne s'ouvre pas.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LISTE DES CONDITIONS --- */}
            <div className="relative rounded-[1.5rem] md:rounded-3xl border border-brand-line/30 bg-brand-panel/60 backdrop-blur-xl p-6 md:p-8">

                {/* Info Banner */}
                <div className="mb-8 flex gap-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 shadow-sm">
                    <Lightbulb className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-blue-200 leading-relaxed font-medium">
                        Ce sont les <strong>conditions obligatoires</strong>. C'est comme s'assurer d'avoir du réseau, de la batterie et le bon numéro avant de passer un appel important.
                    </p>
                </div>

                <div className="space-y-4 relative">
                    {/* Ligne verticale (Timeline) desktop only */}
                    <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500/30 via-brand-warm/20 to-transparent hidden md:block" />

                    {conditions.map((item, index) => (
                        <div key={item.id} className="relative flex items-start gap-4 md:gap-6 group">
                            {/* Icone Cercle */}
                            <div className="shrink-0 relative z-10 h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-brand-panel border border-brand-line/40 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                                {index === 2 ? <Droplet className="h-5 w-5 md:h-6 md:w-6 text-zinc-500 group-hover:text-blue-400 transition-colors" /> :
                                    index === 0 ? <Heart className="h-5 w-5 md:h-6 md:w-6 text-zinc-500 group-hover:text-brand-warm transition-colors" /> :
                                        <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-zinc-500 group-hover:text-green-400 transition-colors" />}
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 p-4 md:p-5 rounded-2xl bg-brand-panel-elevated/50 border border-brand-line/30 hover:bg-brand-panel-elevated transition-colors backdrop-blur-md shadow-sm">
                                <h4 className="font-bold text-brand-pearl text-base md:text-lg">{item.label}</h4>
                                <p className="text-sm text-brand-mist mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
