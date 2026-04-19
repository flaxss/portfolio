import { useEffect, useRef } from 'react'

const traits = [
  {
    icon: '🛠️',
    title: 'Backend Builder',
    desc: 'I build backend systems for real business use cases — from APIs to internal tools like inventory, dispatch, and HR systems that support daily operations.',
  },
  {
    icon: '🚀',
    title: 'Deployment-Focused Engineer',
    desc: 'I don’t stop at development — I deploy and run systems using Docker, NGINX, and AWS ECS/Fargate to ensure they work in real production environments.',
  },
  {
    icon: '🔐',
    title: 'Security-Aware Developer',
    desc: 'I implement authentication and protection layers such as OAuth-based systems, TOTP verification, and Firebase App Check to secure backend services.',
  },
  {
    icon: '🔧',
    title: 'Practical Problem Solver',
    desc: 'I design and build systems based on real operational needs — like warehouse tracking, vehicle dispatching, and HR leave management systems.',
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
                      <span className="font-mono text-4xl font-bold text-neon neon-glow">JR</span>
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
                ['location', 'Cavite, Philippines'],
                ['timezone', 'UTC+8 (flexible)'],
                ['languages', 'English, Filipino'],
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
                I build systems that{' '}
                <span className="text-neon neon-glow">work reliably</span>
                <br />
                in real-world environments.
              </h2>
              <p className="text-white/60 leading-relaxed font-body">
                I develop backend systems for web and mobile applications, with hands-on experience in deployment,
                containerization, and server configuration. I work with tools like Docker, NGINX, and cloud services
                to run applications in production.
              </p>
              <p className="text-white/60 leading-relaxed font-body mt-4">
                While my focus is backend development, I also have experience with React for building frontend
                interfaces, allowing me to support full feature delivery when needed.
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