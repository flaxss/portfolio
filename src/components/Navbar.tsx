import { useState, useEffect } from 'react'

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
      // wait for layout
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
      })
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navItems.map(i => i.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)

        const rect = el.getBoundingClientRect()
        if (rect.top <= 160) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-border py-3' : 'py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-sm text-neon tracking-widest hover:neon-glow transition-all group">
          <span className="text-muted group-hover:text-neon transition-colors">&gt;_</span>{' '}
          <span className="neon-glow">JR</span>
          <span className="animate-blink text-neon">█</span>
        </a>

        {/* Nav links */}
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-mono text-xs tracking-widest uppercase transition-all duration-200 relative group ${active === item.href.slice(1)
                  ? 'text-neon neon-glow'
                  : 'text-muted hover:text-neon'
                  }`}
              >
                <span className="text-neon/40 mr-1 group-hover:text-neon/80 transition-colors">//</span>
                {item.label}
                {active === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-neon/60" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {/* <a
          href="#contact"
          className="font-mono text-xs border border-neon/40 text-neon px-4 py-2 clip-corner-sm hover:bg-neon/10 hover:border-neon transition-all duration-200 neon-box-glow"
        >
          hire me
        </a> */}
      </div>
    </nav>
  )
}