export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      {/* Scan line animation */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,255,136,0.015) 50%, transparent 100%)',
          backgroundSize: '100% 200px',
          animation: 'scan 12s linear infinite',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: identity */}
        <div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-none mb-2 tracking-tight">
            <span className="text-white">Jefferson</span>
            <br />
            <span className="text-neon neon-glow">Regencia</span>
          </h1>

          <div className="font-mono text-sm text-muted mt-4 mb-8 flex items-center gap-3">
            <span className="text-neon">▸</span>
            <span>Backend Software Engineer</span>
            <span className="text-border">|</span>
            <span>Philippines 🇵🇭</span>
          </div>

          <p className="font-body text-base text-white/60 leading-relaxed max-w-md mb-10">
            I architect and build the invisible machinery that powers products —
            from high-throughput APIs to event-driven pipelines and cloud-native infrastructure.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="font-mono text-sm bg-neon text-surface px-6 py-3 clip-corner font-semibold hover:shadow-[0_0_24px_#00ff8860] transition-all duration-300 group"
            >
              view_projects()
              <span className="opacity-0 group-hover:opacity-100 ml-1 transition-opacity">→</span>
            </a>
            <a
              href="#contact"
              className="font-mono text-sm border border-muted text-white/70 px-6 py-3 clip-corner hover:border-neon/60 hover:text-neon transition-all duration-300"
            >
              get_in_touch()
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { val: '5+', label: 'years exp' },
              { val: '40+', label: 'projects shipped' },
              { val: '99.9%', label: 'uptime avg' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-mono text-2xl font-bold text-neon neon-glow">{val}</div>
                <div className="font-mono text-xs text-muted mt-1 tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal */}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-muted tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon/40 to-transparent" />
      </div>
    </section>
  )
}