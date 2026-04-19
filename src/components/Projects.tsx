import { useEffect, useRef, useState } from 'react'

const workProjects = [
  {
    id: '01',
    name: 'Mobile Application',
    tagline: 'First ever eTap mobile application',
    desc: 'Used for eload, topup and paybill transactions via mobile app system.',
    tags: ['Node.js/Django', 'MongoDB/MySQL', 'Docker', 'Nginx', 'AWS Fargate'],
    metrics: ['Microservice', 'Auth system', 'API protection', 'eKYC'],
    type: 'eTap Inc.',
    accent: '#00ff88',
  },
  {
    id: '02',
    name: 'Warehouse Management System',
    tagline: 'Inventory & reporting system',
    desc: 'Tracks warehouse inventory, manages stock usage, and generates operational reports.',
    tags: ['CodeIgniter', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    metrics: ['Inventory tracking', 'Reporting', 'Internal tool'],
    type: 'LARC',
    accent: '#0095ff',
  },
  {
    id: '03',
    name: 'Vehicle Dispatch System',
    tagline: 'Fleet scheduling & tracking',
    desc: 'Handles vehicle reservations, trip tracking, and usage monitoring.',
    tags: ['CodeIgniter', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    metrics: ['Scheduling', 'Trip tracking', 'Reservation'],
    type: 'LARC',
    accent: '#0095ff',
  },
  {
    id: '04',
    name: 'HR Leave System',
    tagline: 'Leave filing & notifications',
    desc: 'Manages employee leave requests with automated HR email notifications.',
    tags: ['CodeIgniter', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Mailer'],
    metrics: ['Leave tracking', 'Email automation', 'HR system'],
    type: 'LARC',
    accent: '#0095ff',
  },
]

const sideProjects = [
  {
    id: '05',
    name: 'Information System',
    tagline: 'Logbook & reporting system',
    desc: 'Internship system for logs, reports, certifications, and records management.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    metrics: ['Report system', 'CRUD system', 'Admin panel'],
    type: 'Side Project',
    accent: '#a78bfa',
  },
  {
    id: '06',
    name: 'Shoe E-Commerce',
    tagline: 'Full-stack e-commerce platform',
    desc: 'Online store with cart system, product management, and Stripe payment integration.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Stripe', 'Cloudinary', 'Multer'],
    metrics: ['Cart system', 'Payments', 'Admin dashboard'],
    type: 'Side Project',
    accent: '#f59e0b',
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle('visible', e.isIntersecting)
        ),
      { threshold: 0.05 }
    )

    ref.current
      ?.querySelectorAll('.reveal')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const renderCard = (p: any) => (
    <div
      key={p.id}
      className="group border clip-corner bg-panel hover:bg-neon/5 transition cursor-pointer border-border hover:border-neon/30 text-white/70"
      onClick={() => setExpanded(expanded === p.id ? null : p.id)}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border/60">
        <span className="font-mono text-xs text-neon/50">#{p.id}</span>

        <span
          className="font-mono text-xs px-2 py-0.5 clip-corner-sm"
          style={{
            border: `1px solid ${p.accent}40`,
            color: p.accent,
            background: `${p.accent}10`,
          }}
        >
          {p.type}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-mono text-base font-bold text-white group-hover:text-neon mb-1">
          {p.name}
        </h3>

        <p className="font-mono text-xs text-muted mb-3">
          {p.tagline}
        </p>

        {expanded === p.id && (
          <p className="text-sm text-white/60 mb-4 border-t border-border/60 pt-3">
            {p.desc}
          </p>
        )}

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {p.metrics.map((m: string) => (
            <span
              key={m}
              className="font-mono text-xs text-neon/70 bg-neon/5 border border-neon/20 px-2 py-0.5"
            >
              {m}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t: string) => (
            <span
              key={t}
              className="font-mono text-xs text-muted bg-surface border border-border px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" ref={ref} className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neon/60">[03]</span>
          <span className="font-mono text-xs text-muted uppercase">
            projects
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* WORK PROJECTS */}
        <div className="reveal mb-20">
          <h3 className="font-mono text-xs text-muted mb-6 uppercase">
            // work projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workProjects.map(renderCard)}
          </div>
        </div>

        {/* DIVIDER (IMPORTANT VISUAL SPACE) */}
        <div className="h-px bg-border/60 my-16" />

        {/* SIDE PROJECTS */}
        <div className="reveal">
          <h3 className="font-mono text-xs text-muted mb-6 uppercase">
            // personal projects
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {sideProjects.map(renderCard)}
          </div>
        </div>

      </div>
    </section>
  )
}