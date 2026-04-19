import { useEffect, useRef } from 'react'

const primarySkills = [
  { name: 'Backend Development (APIs)' },
  { name: 'Docker & Containerization' },
  { name: 'NGINX (Reverse Proxy, SSL)' },
  { name: 'AWS ECS / Fargate Deployment' },
  { name: 'Authentication (OAuth, TOTP)' },
]

const secondarySkills = {
  Development: ['Node.js', 'Python/Django', 'React', 'REST API Design'],
  Database: ['MySQL', 'MongoDB'],
  Infrastructure: ['Docker Compose', 'AWS Basics', 'Environment Configs'],
}

const practices = [
  'REST API Design',
  'OWASP Practices',
  'Authentication Systems',
  'Deployment Workflows',
  'Git Version Control',
  'CI/CD Basics',
  'API Testing (Postman)',
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )

    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-28 relative bg-panel/40">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neon/60 tracking-widest">[02]</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            core capabilities
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* PRIMARY SKILLS (Hero Focus) */}
        <div className="reveal mb-14">
          <h3 className="font-mono text-sm text-muted uppercase mb-6">
            <span className="text-neon/60">// </span>primary focus
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {primarySkills.map((skill) => (
              <div
                key={skill.name}
                className="border border-neon/20 bg-surface clip-corner p-4 hover:border-neon/40 transition"
              >
                <p className="font-mono text-sm text-white/80">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECONDARY SKILLS */}
        <div className="reveal grid md:grid-cols-3 gap-6 mb-14">

          {Object.entries(secondarySkills).map(([group, items]) => (
            <div
              key={group}
              className="border border-border clip-corner bg-surface p-5"
            >
              <h4 className="font-mono text-xs text-neon/70 uppercase mb-3">
                {group}
              </h4>

              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs text-white/60 hover:text-white transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PRACTICES (LOW EMPHASIS) */}
        <div className="reveal">
          <h3 className="font-mono text-sm text-muted tracking-widest mb-6 uppercase">
            <span className="text-neon/60">// </span>engineering practices
          </h3>

          <div className="flex flex-wrap gap-2">
            {practices.map((p) => (
              <span
                key={p}
                className="font-mono text-xs border border-border text-white/50 px-3 py-1 clip-corner-sm hover:border-neon/30 hover:text-neon transition"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER HIGHLIGHT */}
        <div className="reveal mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: 'Backend', sub: 'primary focus' },
            { val: 'Deploy', sub: 'production systems' },
            { val: 'Security', sub: 'auth & access' },
            { val: 'Infra', sub: 'dockerized apps' },
          ].map((item) => (
            <div
              key={item.val}
              className="border border-border clip-corner p-4 bg-surface text-center"
            >
              <div className="font-mono text-sm text-neon">{item.val}</div>
              <div className="font-mono text-xs text-muted mt-1">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}