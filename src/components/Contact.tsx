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

  const contacts = [
    { key: 'email', icon: '✉', label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
    { key: 'linkedin', icon: '🔗', label: 'LinkedIn', value: '/in/alexrivera-dev', href: '#' },
    { key: 'github', icon: '⌥', label: 'GitHub', value: 'github.com/alexrivera', href: '#' },
    { key: 'twitter', icon: '✦', label: 'Twitter / X', value: '@alexrivera_eng', href: '#' },
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
              I'm currently open to senior backend or staff engineer roles, especially in fintech,
              developer tooling, or infrastructure. I'm also available for technical consulting
              on distributed systems and API design.
            </p>

            {/* What I'm looking for */}
            <div className="border border-border clip-corner p-5 space-y-2">
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
                <span className="text-neon/60">// </span>open to
              </div>
              {[
                'Full-time backend / platform engineering roles',
                'Remote-first or hybrid teams (UTC+8 ±3h)',
                'Technical consulting (systems design, API audits)',
                'Conference talks & technical writing',
              ].map(item => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="text-neon mt-0.5 flex-shrink-0">▸</span>
                  <span className="font-mono text-xs text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact links + form */}
          <div className="reveal reveal-delay-2 space-y-4">
            {/* Contact links */}
            {contacts.map(c => (
              <div
                key={c.key}
                className="group flex items-center justify-between border border-border clip-corner p-4 hover:border-neon/40 hover:bg-neon/5 transition-all duration-200"
              >
                <a href={c.href} className="flex items-center gap-4">
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
                Prefer a direct channel? DM me on{' '}
                <a href="#" className="text-neon hover:neon-glow transition-all">LinkedIn</a>
                {' '}or shoot me an{' '}
                <a href="mailto:alex@example.com" className="text-neon hover:neon-glow transition-all">email</a>.
                <br />
                I respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted">
            <span className="text-neon/60">alex@portfolio</span>:~$ built with React + Tailwind + TypeScript
          </span>
          <div className="flex gap-6">
            {['github', 'linkedin', 'twitter'].map(s => (
              <a
                key={s}
                href="#"
                className="font-mono text-xs text-muted hover:text-neon transition-colors tracking-widest"
              >
                ./{s}
              </a>
            ))}
          </div>
          <span className="font-mono text-xs text-muted">
            © 2026 Alex Rivera
          </span>
        </div>
      </div>
    </section>
  )
}