// Web Audio & HTML5 Audio Controller for Jashn-e-Bahara Flute & Sitar Theme

class WeddingAudioPlayer {
  private audioEl: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private isPlaying: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      // Clear any previous muted state to ensure audio starts audible on envelope open
      this.isMuted = false;
      try {
        localStorage.removeItem("wedding_muted");
      } catch (e) {}
    }
  }

  public init() {
    if (typeof window === "undefined") return;

    if (!this.audioEl) {
      // Check for DOM audio element first, else create new Audio
      const domAudio = document.getElementById("wedding-bg-audio") as HTMLAudioElement | null;
      if (domAudio) {
        this.audioEl = domAudio;
      } else {
        this.audioEl = new Audio("/audio/jashn_e_bahara.mp3");
      }
      this.audioEl.loop = true;
      this.audioEl.volume = 0.9;
      this.audioEl.preload = "auto";
    }
  }

  public async play() {
    if (typeof window === "undefined") return;
    this.init();
    this.isMuted = false;
    this.isPlaying = true;

    if (this.audioEl) {
      try {
        this.audioEl.muted = false;
        this.audioEl.volume = 0.9;
        const playPromise = this.audioEl.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (err) {
        console.warn("Direct audio play waiting for user gesture:", err);
        // Fallback: try alternate audio filename
        if (this.audioEl.src.includes("jashn_e_bahara.mp3")) {
          this.audioEl.src = "/audio/Jashn-E-Bahaaraa (Instrumental - Flute).mp3";
          try {
            await this.audioEl.play();
          } catch (e) {
            console.warn("Alternate audio play error:", e);
          }
        }
      }
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("wedding_muted", String(this.isMuted));
      } catch (e) {}
    }

    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
      if (!this.isMuted && this.audioEl.paused) {
        this.audioEl.play().catch(() => {});
      }
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
    this.isPlaying = false;
  }
}

export const audioPlayer = new WeddingAudioPlayer();
