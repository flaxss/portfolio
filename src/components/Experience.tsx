import { useEffect, useRef, useState } from 'react'

type Experience = {
  role: string
  company: string
  period: string
  location: string
  achievements: string[]
}

type Education = {
  course: string
  university: string
  period?: string
}

const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'eTap - Electronic Transfer & Advance Processing Inc.',
    period: '2026 — Present',
    location: 'Makati, PH',
    achievements: [
      'Own backend enhancements and optimization work that improves maintainability, deployment efficiency, and operational reliability',
      'Design and ship backend solutions for new features and changing business requirements, from technical approach through integration and testing',
      'Strengthen backend security in line with the OWASP Top 10, covering authentication, authorization, input validation, and common application-level risks',
      'Run production deployments in the engineering rotation, working with SRE on configuration, service integration, and release readiness using Docker, NGINX, and AWS ECS/Fargate',
      'Helped restructure the backend deployment by folding Celery and Celery Beat into the application service, which cut deployment touchpoints and reduced user disruption from service restarts',
      'Mentor junior developers through code reviews, debugging sessions, and technical guidance',
      'Investigate and resolve production issues to keep the platform stable',
    ],
  },
  {
    role: 'Software Engineer (Junior)',
    company: 'eTap - Electronic Transfer & Advance Processing Inc.',
    period: '2024 — 2026',
    location: 'Makati, PH',
    achievements: [
      'Helped build the company’s first mobile platform from the ground up as part of a small backend team',
      'Developed and maintained REST APIs that let customers use their Mysukli at eTap kiosks for e-load, top-ups, bill payments, and other digital transactions',
      'Shaped the backend architecture and the move toward a microservice-based system, enabling service isolation and future feature expansion',
      'Took part in the full backend migration from Sails.js/MongoDB to Django REST Framework/MySQL, covering API redevelopment, data migration, service integration, and functional validation',
      'Implemented OAuth, user-level TOTP, and Firebase App Check for authentication and security',
      'Worked across MongoDB and MySQL to support data requirements throughout the migration',
    ],
  },
  {
    role: 'Junior Programmer',
    company: 'LARC - Laguna Aquatech Resource Corporation',
    period: '2023 — 2024',
    location: 'Laguna, PH',
    achievements: [
      'Sole developer for several internal business systems used by roughly 20–100 staff across warehouse, fleet, and HR',
      'Built a warehouse management system for inventory monitoring, stock usage tracking, and reporting, replacing much of the manual daily tracking',
      'Built a vehicle dispatch and reservation platform that schedules company vehicles and tracks trip duration and distance to improve fleet allocation',
      'Built an HR leave management system with automated email notifications to streamline filing and approval for staff and managers',
      'Maintained and extended existing internal web apps, automating business processes to improve day-to-day efficiency',
    ],
  },
]

const educations: Education[] = [
  {
    course: 'B.S. Information Technology',
    university: 'Cavite State University',
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeExp, setActiveExp] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // reveal once, no re-animating on scroll
          }
        }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const exp = experiences[activeExp]

  return (
    <section id="experience" ref={ref} className="py-28 relative bg-panel/40">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neon/60 tracking-widest">[04]</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">experience</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: role selector */}
          <div className="reveal space-y-2">
            <div role="tablist" aria-label="Work experience" className="space-y-2">
              {experiences.map((e, i) => {
                const isActive = activeExp === i
                return (
                  <button
                    key={`${e.company}-${e.period}`}
                    id={`exp-tab-${i}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls="exp-panel"
                    onClick={() => setActiveExp(i)}
                    className={`w-full cursor-pointer text-left border clip-corner p-4 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon ${
                      isActive
                        ? 'border-neon/50 bg-neon/5 text-neon'
                        : 'border-border text-muted hover:border-neon/20 hover:text-white'
                    }`}
                  >
                    <div className={`font-mono text-xs font-semibold ${isActive ? 'text-neon' : 'text-white/70'}`}>
                      {e.role}
                    </div>
                    <div className="font-mono text-xs text-muted mt-1">{e.company.split(' - ')[0]}</div>
                    <div className="font-mono text-xs text-muted">{e.period}</div>
                  </button>
                )
              })}
            </div>

            {/* Education */}
            {educations.map((e) => (
              <div key={`${e.course}-${e.university}`} className="border border-border clip-corner p-4 mt-6">
                <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">education</div>
                <div className="font-mono text-xs text-white/70 font-semibold">{e.course}</div>
                <div className="font-mono text-xs text-muted">{e.university}</div>
                {e.period && <div className="font-mono text-xs text-muted">{e.period}</div>}
              </div>
            ))}
          </div>

          {/* Right: details */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div
              id="exp-panel"
              role="tabpanel"
              aria-labelledby={`exp-tab-${activeExp}`}
              className="border border-border clip-corner bg-surface p-7"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-mono text-xl font-bold text-white">{exp.role}</h3>
                  <span className="font-mono text-xs border border-neon/30 text-neon px-2 py-1 clip-corner-sm bg-neon/5">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-xs text-muted">
                  <span>{exp.company}</span>
                  <span>
                    <span aria-hidden="true">📍 </span>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex gap-3 group">
                    <span
                      aria-hidden="true"
                      className="text-neon mt-0.5 flex-shrink-0 text-sm group-hover:scale-110 transition-transform"
                    >
                      ▸
                    </span>
                    <p className="font-body text-sm text-white/65 leading-relaxed group-hover:text-white/80 transition-colors">
                      {a}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}