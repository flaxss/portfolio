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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
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
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    setActive(id)
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', `#${id}`)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-border py-3' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm text-neon tracking-widest hover:neon-glow transition-all group"
        >
          <span className="text-muted group-hover:text-neon transition-colors">
            &gt;_
          </span>{' '}
          <span className="neon-glow">JR</span>
          <span className="animate-blink text-neon">█</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNav(item.href.slice(1))}
                className={`font-mono text-xs tracking-widest uppercase transition-all relative group ${
                  active === item.href.slice(1)
                    ? 'text-neon neon-glow'
                    : 'text-muted hover:text-neon'
                }`}
              >
                <span className="text-neon/40 mr-1">//</span>
                {item.label}

                {active === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-neon/60" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-neon transition ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`h-0.5 w-6 bg-neon transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-neon transition ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-border">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href.slice(1))}
                className={`text-left font-mono text-sm uppercase tracking-widest ${
                  active === item.href.slice(1)
                    ? 'text-neon'
                    : 'text-muted'
                }`}
              >
                // {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}