import { useEffect, useRef } from 'react'

const stats = [
  { val: '3+', label: 'years experience' },
  { val: '6+', label: 'systems built' },
  { val: 'deployment', label: 'docker • ci/cd • aws' }
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle('visible', e.isIntersecting)
        ),
      { threshold: 0.1 }
    )

    ref.current
      ?.querySelectorAll('.reveal')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">

        {/* Label */}
        <p className="reveal font-mono text-xs text-neon/70 mb-6">
          // software engineer
        </p>

        {/* Title */}
        <h1 className="reveal font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Jefferson</span>{' '}
          <span className="text-neon neon-glow">Regencia</span>
        </h1>

        {/* Subtitle */}
        <p className="reveal text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {/* I design and build scalable backend systems for web and mobile applications —
          from architecture to production deployment. */}

          Backend engineer building APIs and backend systems for web and mobile applications -
            I like turning ideas into working, deployable services.
        </p>

        {/* CTA */}
        <div className="reveal flex justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="font-mono text-sm bg-neon text-black px-6 py-3 clip-corner font-semibold hover:shadow-[0_0_24px_#00ff8860] transition"
          >
            view_projects()
          </a>

          <a
            href="#contact"
            className="font-mono text-sm border border-border px-6 py-3 clip-corner text-white/70 hover:border-neon hover:text-neon transition"
          >
            get_in_touch()
          </a>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-3 gap-6 border-t border-border pt-6 max-w-lg mx-auto">
          {stats.map(({ val, label }) => (
            <div key={label}>
              <div className="text-neon font-mono text-xl font-bold">
                {val}
              </div>
              <div className="text-xs text-muted font-mono">
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}