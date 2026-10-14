"use client"

class LusionAudioEngine {
  private ctx: AudioContext | null = null
  private enabled = false
  private ambientGain: GainNode | null = null
  private ambientOsc1: OscillatorNode | null = null
  private ambientOsc2: OscillatorNode | null = null

  public isEnabled() {
    return this.enabled
  }

  private ensureContext() {
    if (typeof window === "undefined") return null
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {})
    }
    return this.ctx
  }

  public toggle(): boolean {
    this.enabled = !this.enabled
    const ctx = this.ensureContext()
    if (!ctx) return this.enabled

    if (this.enabled) {
      this.startAmbient()
      this.playClick(660)
    } else {
      this.stopAmbient()
    }
    return this.enabled
  }

  private startAmbient() {
    const ctx = this.ensureContext()
    if (!ctx || this.ambientGain) return
    try {
      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.001, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.018, ctx.currentTime + 1.2)
      gain.connect(ctx.destination)

      const osc1 = ctx.createOscillator()
      osc1.type = "sine"
      osc1.frequency.setValueAtTime(110, ctx.currentTime)

      const osc2 = ctx.createOscillator()
      osc2.type = "triangle"
      osc2.frequency.setValueAtTime(164.81, ctx.currentTime)

      const filter = ctx.createBiquadFilter()
      filter.type = "lowpass"
      filter.frequency.setValueAtTime(240, ctx.currentTime)

      osc1.connect(filter)
      osc2.connect(filter)
      filter.connect(gain)

      osc1.start()
      osc2.start()

      this.ambientGain = gain
      this.ambientOsc1 = osc1
      this.ambientOsc2 = osc2
    } catch {
      // Ignore audio errors when autoplay is blocked
    }
  }

  private stopAmbient() {
    if (!this.ctx || !this.ambientGain) return
    try {
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4)
      setTimeout(() => {
        try {
          this.ambientOsc1?.stop()
          this.ambientOsc2?.stop()
          this.ambientOsc1?.disconnect()
          this.ambientOsc2?.disconnect()
          this.ambientGain?.disconnect()
        } catch {}
        this.ambientOsc1 = null
        this.ambientOsc2 = null
        this.ambientGain = null
      }, 420)
    } catch {}
  }

  public playHover() {
    if (!this.enabled) return
    const ctx = this.ensureContext()
    if (!ctx) return
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = "sine"
      osc.frequency.setValueAtTime(480, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(720, ctx.currentTime + 0.065)

      gain.gain.setValueAtTime(0.025, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.07)

      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.075)
    } catch {}
  }

  public playClick(freq = 520) {
    if (!this.enabled) return
    const ctx = this.ensureContext()
    if (!ctx) return
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = "triangle"
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + 0.11)

      gain.gain.setValueAtTime(0.045, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12)

      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.125)
    } catch {}
  }
}

export const lusionAudio = new LusionAudioEngine()
