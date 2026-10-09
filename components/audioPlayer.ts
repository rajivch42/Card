// Web Audio API Synthesizer & Audio Manager for Indian Wedding Music (Jashn-e-Bahara Flute & Sitar Theme)

class WeddingAudioPlayer {
  private audioEl: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlaying: boolean = false;
  private synthInterval: any = null;
  private masterGain: GainNode | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      const savedMute = localStorage.getItem("wedding_muted");
      if (savedMute !== null) {
        this.isMuted = savedMute === "true";
      }
    }
  }

  public init() {
    if (typeof window === "undefined") return;

    if (!this.audioEl) {
      this.audioEl = new Audio("/audio/jashn_e_bahara.mp3");
      this.audioEl.loop = true;
      this.audioEl.volume = 0.65;
    }

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.35, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
  }

  public async play() {
    this.init();
    this.isPlaying = true;

    // Try HTML5 audio file first
    let filePlayed = false;
    if (this.audioEl) {
      try {
        this.audioEl.muted = this.isMuted;
        await this.audioEl.play();
        filePlayed = true;
      } catch (err) {
        console.log("Audio file playback waiting or unavailable, engaging Indian Flute Synthesizer");
      }
    }

    // If audio file is missing or not yet loaded, start the beautiful flute melody synth
    if (!filePlayed && this.ctx) {
      if (this.ctx.state === "suspended") {
        await this.ctx.resume();
      }
      this.startBansuriSynthesizer();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("wedding_muted", String(this.isMuted));
    }

    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
    }

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.35, this.ctx.currentTime, 0.1);
    }

    return this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public pause() {
    if (this.audioEl) {
      this.audioEl.pause();
    }
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    this.isPlaying = false;
  }

  // Melodic Bansuri Flute + Tanpura drone playing Jashn-e-Bahara melody
  private startBansuriSynthesizer() {
    if (!this.ctx || !this.masterGain || this.synthInterval) return;

    // Tanpura Drone (Sa - Pa drone chords)
    const playTanpuraChord = () => {
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      [130.81, 196.0, 261.63].forEach((freq) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.015, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 4.5);
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(t);
        osc.stop(t + 4.5);
      });
    };

    // Melody notes for "Kehne ko Jashn-e-bahara hai..." in Indian Raag scale
    // Notes frequencies (Hz): G3, C4, D4, E4, F#4, G4, A4, B4, C5
    const notes = [
      { f: 392.0, d: 0.8 }, // Pa (Keh-)
      { f: 523.25, d: 0.9 }, // Sa (-ne)
      { f: 587.33, d: 0.7 }, // Re (ko)
      { f: 659.25, d: 1.2 }, // Ga (Jashn-)
      { f: 587.33, d: 0.6 }, // Re (-e-)
      { f: 523.25, d: 1.4 }, // Sa (-baha-)
      { f: 493.88, d: 0.8 }, // Ni (-ra)
      { f: 523.25, d: 1.8 }, // Sa (hai...)
      { f: 0, d: 0.5 }, // breath pause
      { f: 659.25, d: 0.8 }, // Ga (Ishq)
      { f: 783.99, d: 1.0 }, // Pa (yeh)
      { f: 880.0, d: 0.9 }, // Dha (dekh-)
      { f: 783.99, d: 0.7 }, // Pa (-ke)
      { f: 659.25, d: 1.2 }, // Ga (hai-)
      { f: 587.33, d: 1.4 }, // Re (-raan)
      { f: 523.25, d: 2.0 }, // Sa (hai...)
    ];

    let noteIndex = 0;
    const playNextNote = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      if (noteIndex === 0) {
        playTanpuraChord();
      }

      const note = notes[noteIndex];
      noteIndex = (noteIndex + 1) % notes.length;

      if (note.f > 0) {
        const t = this.ctx.currentTime;
        // Warm bamboo flute harmonics (Fundamental + gentle 2nd & 3rd harmonics)
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const fluteGain = this.ctx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(note.f, t);

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(note.f * 2, t);

        // Flute attack, breath swell, and gentle decay
        fluteGain.gain.setValueAtTime(0.0001, t);
        fluteGain.gain.linearRampToValueAtTime(0.08, t + 0.12);
        fluteGain.gain.exponentialRampToValueAtTime(0.001, t + note.d);

        osc1.connect(fluteGain);
        osc2.connect(fluteGain);
        fluteGain.connect(this.masterGain);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + note.d);
        osc2.stop(t + note.d);
      }

      this.synthInterval = setTimeout(playNextNote, note.d * 1000);
    };

    playNextNote();
  }
}

export const audioPlayer = new WeddingAudioPlayer();
