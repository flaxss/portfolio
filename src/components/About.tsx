import { useEffect, useRef } from 'react'

const traits = [
  {
    icon: '🏗️',
    title: 'Systems Thinker',
    desc: 'I decompose complex problems into elegant, maintainable architectures. Every service I build is designed with failure modes, scalability, and observability in mind from day one.',
  },
  {
    icon: '🤝',
    title: 'Cross-Team Collaborator',
    desc: 'I bridge the gap between engineering, product, and operations. I write documentation people actually read and mentored 6 junior engineers into productive contributors.',
  },
  {
    icon: '🔬',
    title: 'Data-Driven Debugger',
    desc: "When production breaks at 3am, I'm methodical — not panicked. I trace root causes through logs, metrics, and distributed traces before making a single code change.",
  },
  {
    icon: '📦',
    title: 'Async Communicator',
    desc: 'I default to clear written communication — RFCs, ADRs, incident post-mortems, and detailed PR descriptions. Remote-first teams run on written clarity.',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neon/60 tracking-widest">[01]</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">about_me</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="reveal">
              {/* Avatar placeholder with geometric design */}
              <div className="w-full aspect-square max-w-xs relative clip-corner border border-neon/20 bg-panel overflow-hidden group">
                <div className="absolute inset-0 grid-bg opacity-50" />
                {/* Geometric avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-neon/10 border-2 border-neon/30 flex items-center justify-center">
                      <span className="font-mono text-4xl font-bold text-neon neon-glow">AR</span>
                    </div>
                    <div className="absolute -inset-4 border border-neon/10 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute -inset-8 border border-neon/5 rounded-full animate-[spin_30s_linear_reverse_infinite]" />
                  </div>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-neon/40" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-neon/40" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-panel via-panel/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-mono text-xs text-neon">online and caffeinated ☕</p>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-1 space-y-2">
              {[
                ['location', 'Manila, Philippines'],
                ['timezone', 'UTC+8 (flexible)'],
                ['languages', 'English, Filipino'],
                ['availability', 'Open to offers'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 font-mono text-xs">
                  <span className="text-neon/60 w-24 flex-shrink-0">{k}:</span>
                  <span className="text-white/70">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio + soft skills */}
          <div className="lg:col-span-3 space-y-8">
            <div className="reveal">
              <h2 className="font-display text-3xl lg:text-4xl text-white font-bold mb-4">
                I build things that{' '}
                <span className="text-neon neon-glow">don't break</span>
                <br />
                at scale.
              </h2>
              <p className="text-white/60 leading-relaxed font-body">
                I'm a backend engineer with 5+ years of experience designing and shipping high-throughput distributed
                systems. My stack spans Go, TypeScript/Node.js, PostgreSQL, Redis, Kafka, and cloud-native
                infrastructure on AWS and GCP.
              </p>
              <p className="text-white/60 leading-relaxed font-body mt-4">
                I care deeply about code that future engineers can reason about — clean interfaces, observable systems,
                and documentation that doesn't rot. Outside of code I contribute to OSS, write technical deep-dives,
                and mentor junior devs.
              </p>
            </div>

            {/* Soft skill cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {traits.map((t, i) => (
                <div
                  key={t.title}
                  className={`reveal reveal-delay-${i + 1} group border border-border hover:border-neon/30 bg-panel clip-corner p-5 transition-all duration-300 hover:bg-neon/5`}
                >
                  <div className="text-2xl mb-3">{t.icon}</div>
                  <h3 className="font-mono text-sm font-semibold text-white mb-2 group-hover:text-neon transition-colors">
                    {t.title}
                  </h3>
                  <p className="font-body text-xs text-white/50 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}