import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  const email = "jeff_molato@yahoo.com"
  const linked_in = "https://www.linkedin.com/in/jefferson-regencia-078345288"
  const github = "https://github.com/flaxss"

  const contacts = [
    { key: 'email', icon: '✉', label: 'Email', value: email, href: `mailto:${email}` },
    { key: 'linkedin', icon: '🔗', label: 'LinkedIn', value: linked_in, href: linked_in },
    { key: 'github', icon: '⌥', label: 'GitHub', value: github, href: github },
  ]

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neon/60 tracking-widest">[05]</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">contact</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: message */}
          <div className="reveal space-y-6">
            <h2 className="font-display text-3xl lg:text-4xl text-white font-bold">
              Let's build something{' '}
              <span className="text-neon neon-glow">reliable</span>{' '}
              together.
            </h2>

            <p className="font-body text-white/60 leading-relaxed">
              I'm a backend-focused developer building APIs, internal tools, and application
              backends for real-world use. I work with containerized environments and contribute
              to deployment workflows using Docker, NGINX, and AWS Fargate within existing
              infrastructure setups, collaborating with SRE teams on service integration at the
              network level.
            </p>
          </div>

          {/* Right: contact links + form */}
          <div className="reveal reveal-delay-2 space-y-4">
            {/* Contact links */}
            {contacts.map(c => (
              <div
                key={c.key}
                className="group flex items-center justify-between border border-border clip-corner p-4 hover:border-neon/40 hover:bg-neon/5 transition-all duration-200"
              >
                <a href={c.href} target='_blank' className="flex items-center gap-4">
                  <span className="font-mono text-lg">{c.icon}</span>
                  <div>
                    <div className="font-mono text-xs text-muted">{c.label}</div>
                    <div className="font-mono text-sm text-white/80 group-hover:text-neon transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
                <button
                  onClick={() => copy(c.value, c.key)}
                  className="font-mono text-xs border border-border text-muted px-3 py-1 clip-corner-sm hover:border-neon/40 hover:text-neon transition-all duration-200"
                >
                  {copied === c.key ? '✓ copied' : 'copy'}
                </button>
              </div>
            ))}

            {/* Quick message hint */}
            <div className="border border-dashed border-border clip-corner p-5 text-center">
              <p className="font-mono text-xs text-muted">
                Available for backend engineering opportunities or system design work. DM me on{' '}
                <a href={linked_in} target="_blank" rel="noopener noreferrer" className="text-neon">
                  LinkedIn
                </a>
                {' '}or shoot me an{' '}
                <a href={`mailto:${email}`} className="text-neon">
                  email
                </a>
                <br />
                I respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border">
          <span className="font-mono text-xs text-muted">
            © 2026 Jefferson Regencia
          </span>
        </div>
      </div>
    </section>
  )
}