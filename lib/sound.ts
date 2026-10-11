"use client";

// Micro-haptic sound synthesizer using Web Audio API
// Follows Apple WWDC "Designing Audio-Haptic Experiences"
// Fired on pointer-down/commit for meaningful physical moments with zero latency

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export function setSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("sound_enabled", enabled ? "true" : "false");
    } catch {}
  }
}

export function isSoundEnabled(): boolean {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("sound_enabled");
      if (stored !== null) return stored === "true";
    } catch {}
  }
  return soundEnabled;
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Plays a subtle, tactile Apple-style click sound (like Taptic Engine tick)
 * Respects user preferences and prefers-reduced-motion.
 */
export function playHapticClick(type: "tap" | "pop" | "switch" | "sheet" = "tap") {
  if (!soundEnabled) return;
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === "tap") {
      // Ultra-short, dry tactile tick (8ms)
      osc.type = "sine";
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.012);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.014);

      osc.start(now);
      osc.stop(now + 0.015);
    } else if (type === "pop") {
      // Pleasant light confirmation pop
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.025);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.start(now);
      osc.stop(now + 0.036);
    } else if (type === "switch") {
      // Toggle flip sound
      osc.type = "sine";
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(360, now + 0.018);

      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

      osc.start(now);
      osc.stop(now + 0.023);
    } else if (type === "sheet") {
      // Sheet snap sound
      osc.type = "sine";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.03);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.start(now);
      osc.stop(now + 0.036);
    }
  } catch {
    // Graceful fallback if Web Audio is unsupported or blocked
  }
}
