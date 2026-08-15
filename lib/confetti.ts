import confetti from "canvas-confetti";

export function fireCelebrationConfetti() {
  if (typeof window === "undefined") return;

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
    colors: [
      "#cea687", // brand gold-400
      "#f0d1bc", // brand warm
      "#ddbca3", // brand gold-300
      "#e6edf5", // brand pearl
      "#a7c6b4", // brand success / emerald
      "#ffd700", // gold
      "#ffffff", // pure white sparkles
    ],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // 1. First main central burst
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    shapes: ["circle"],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

  // 2. Fireworks side cannons (left & right) with short delays
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 70,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.75 },
    });
    confetti({
      ...defaults,
      particleCount: 70,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.75 },
    });
  }, 250);

  // 3. Gentle golden shower
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 50,
      spread: 80,
      origin: { x: 0.5, y: 0.4 },
      startVelocity: 35,
      scalar: 1.1,
    });
  }, 500);
}
