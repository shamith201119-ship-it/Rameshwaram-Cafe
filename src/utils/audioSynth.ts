// Web Audio API Synthesizer for Sizzle & Coffee Pour FX
class SoundFX {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private sizzleNode: AudioBufferSourceNode | null = null;
  private gainNode: GainNode | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSizzle();
    } else {
      this.playSizzle();
    }
    return this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public playSizzle() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    // Create 2-second pink/white noise buffer for sizzle effect
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Pink noise filter simulation
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Gain factor
    }

    this.sizzleNode = this.ctx.createBufferSource();
    this.sizzleNode.buffer = buffer;
    this.sizzleNode.loop = true;

    // High pass filter to give crispy tawa sizzle tone
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1800;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);

    this.sizzleNode.connect(filter);
    filter.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);

    this.sizzleNode.start();
  }

  public stopSizzle() {
    if (this.sizzleNode) {
      try {
        this.sizzleNode.stop();
        this.sizzleNode.disconnect();
      } catch {
        // Ignore if already stopped
      }
      this.sizzleNode = null;
    }
  }

  public triggerClickSizzle() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
}

export const soundFX = new SoundFX();
