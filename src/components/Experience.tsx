import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'eTap - Electronic Transfer & Advance Processing Inc.',
    period: '2024 — Present',
    location: 'Makati, PH',
    achievements: [
      'Built backend APIs for a mobile platform that allows kiosk customers to spend their remaining balance (“sukli”) on digital services including e-load, top-ups, and bill payments',
      'Contributed to the end-to-end development of a fintech platform from scratch, supporting the company’s transition from traditional kiosk cash handling into a more scalable digital payment ecosystem',
      'Helped design and organize backend architecture and microservice structure to support scalability, service isolation, and future feature expansion',
      'Implemented OAuth-based authentication and user-level TOTP verification to strengthen account security and protect financial transactions',
      'Integrated Firebase App Check and backend validation layers to reduce unauthorized API access and improve application integrity',
      'Collaborated with cross-functional teams in developing solutions aligned with financial compliance constraints, particularly around digital fund handling and customer convenience',
    ],
  },
  {
    role: 'Web Developer',
    company: 'LARC - Laguna Aquatech Resource Corporation',
    period: '2023 — 2024',
    location: 'Laguna, PH',
    achievements: [
      'Served as the sole developer for multiple internal business systems used to streamline warehouse, fleet, and HR operations across the company',
      'Developed a warehouse management system for inventory monitoring, stock usage tracking, and operational reporting, improving visibility into day-to-day warehouse activities',
      'Built a vehicle dispatch and reservation platform for scheduling company vehicles, tracking trip duration and distance, and optimizing fleet resource allocation',
      'Developed an HR leave management system with automated email notifications to simplify leave filing and approval processes',
      'Maintained and enhanced internal web applications, supporting operational efficiency through custom business process automation',
    ],
  },
]

const educations = [
  {
    course: 'B.S. Information Technology',
    university: 'Cavite State University',
    period: '',
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeExp, setActiveExp] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
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
          {/* Left: company selector */}
          <div className="reveal space-y-2">
            {experiences.map((e, i) => (
              <button
                key={i}
                onClick={() => setActiveExp(i)}
                className={`w-full cursor-pointer text-left border clip-corner p-4 transition-all duration-200 group ${activeExp === i
                  ? 'border-neon/50 bg-neon/5 text-neon'
                  : 'border-border text-muted hover:border-neon/20 hover:text-white'
                  }`}
              >
                <div className={`font-mono text-xs font-semibold ${activeExp === i ? 'text-neon' : 'text-white/70'}`}>
                  {e.company}
                </div>
                <div className="font-mono text-xs text-muted mt-1">{e.period}</div>
              </button>
            ))}

            {/* Education */}
            {educations.map((e) => (
              <div className="border border-border clip-corner p-4 mt-6">
                <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">education</div>
                <div className="font-mono text-xs text-white/70 font-semibold">{e.course}</div>
                <div className="font-mono text-xs text-muted">{e.university}</div>
                <div className="font-mono text-xs text-muted">{e.period}</div>
              </div>
            ))}
          </div>

          {/* Right: details */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="border border-border clip-corner bg-surface p-7">
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
                  <span>📍 {exp.location}</span>
                </div>
              </div>

              {/* Stack */}
              {/* <div className="flex flex-wrap gap-2 mb-6">
                {exp.stack.map(s => (
                  <span key={s} className="font-mono text-xs bg-panel border border-border text-white/60 px-2 py-1 clip-corner-sm">
                    {s}
                  </span>
                ))}
              </div> */}

              {/* Achievements */}
              <div className="space-y-3">
                {exp.achievements.map((a, i) => (
                  <div key={i} className="flex gap-3 group">
                    <span className="text-neon mt-0.5 flex-shrink-0 text-sm group-hover:scale-110 transition-transform">▸</span>
                    <p className="font-body text-sm text-white/65 leading-relaxed group-hover:text-white/80 transition-colors">
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications row */}
        {/* <div className="reveal mt-14">
          <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
            <span className="text-neon/60">// </span>certifications & continuous learning
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'AWS Certified Solutions Architect', org: 'Amazon Web Services', year: '2023' },
              { name: 'Certified Kubernetes Administrator', org: 'CNCF', year: '2022' },
              { name: 'Google Cloud Professional DE', org: 'Google Cloud', year: '2023' },
              { name: 'MongoDB Developer Cert.', org: 'MongoDB University', year: '2021' },
            ].map(cert => (
              <div key={cert.name} className="border border-border clip-corner p-4 hover:border-neon/30 transition-colors group">
                <div className="font-mono text-xs text-white/70 group-hover:text-neon transition-colors mb-1 font-semibold leading-tight">
                  {cert.name}
                </div>
                <div className="font-mono text-xs text-muted">{cert.org}</div>
                <div className="font-mono text-xs text-neon/50 mt-2">{cert.year}</div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  )
}