import { useEffect, useRef, useState } from 'react'

type Project = {
  id: string
  name: string
  tagline: string
  desc: string
  tags: string[]
  metrics: string[]
  type: string
  accent: string
}

const workProjects: Project[] = [
  {
    id: '01',
    name: 'MyeTap App',
    tagline: 'Mobile platform for using Mysukli from eTap kiosks',
    desc: 'Backend platform powering eTap’s first mobile application, enabling customers to use their Mysukli from eTap kiosks for e-load, bill payments, top-ups, and other digital transactions. Contributed to backend architecture, system migration, security, and production deployment.',
    tags: ['Django/DRF', 'MySQL', 'MongoDB', 'Docker', 'AWS ECS/Fargate'],
    metrics: ['Microservices', 'Backend Migration', 'Auth & Security', 'Production Deployment'],
    type: 'eTap Inc.',
    accent: '#00ff88',
  },
  {
    id: '02',
    name: 'Warehouse Management System',
    tagline: 'Inventory monitoring & operational reporting',
    desc: 'Internal warehouse system used by staff to monitor inventory, track stock usage, and generate operational reports, reducing reliance on manual tracking across daily warehouse activities.',
    tags: ['CodeIgniter', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    metrics: ['Inventory tracking', 'Stock usage', 'Operational reporting'],
    type: 'LARC',
    accent: '#0095ff',
  },
  {
    id: '03',
    name: 'Vehicle Dispatch System',
    tagline: 'Fleet scheduling & resource management',
    desc: 'Internal fleet management system for reserving company vehicles, scheduling trips, and tracking trip duration and distance, helping improve fleet resource allocation across the organization.',
    tags: ['CodeIgniter', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    metrics: ['Vehicle reservation', 'Trip scheduling', 'Trip tracking'],
    type: 'LARC',
    accent: '#0095ff',
  },
  {
    id: '04',
    name: 'HR Leave System',
    tagline: 'Leave management & approval workflow',
    desc: 'Internal HR system for employee leave filing and approval workflows, with automated email notifications that streamlined communication between staff, managers, and HR.',
    tags: ['CodeIgniter', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Mailer'],
    metrics: ['Leave filing', 'Approval workflow', 'Email notifications'],
    type: 'LARC',
    accent: '#0095ff',
  },
]

const sideProjects: Project[] = [
  {
    id: '05',
    name: 'Bakeshop eCommerce Platform',
    tagline: 'Production eCommerce & business management platform',
    desc: 'Production full-stack platform built for a bakeshop business, providing a customer storefront and administrative dashboard for product management, customized orders, availability controls, and order workflows. Includes a product costing and pricing system for calculating costs, expenses, margins, and suggested selling prices.',
    tags: ['NestJS', 'React', 'MySQL', 'Prisma', 'Docker', 'AWS EC2', 'NGINX'],
    metrics: ['eCommerce', 'Product customization', 'Order management', 'Costing & pricing'],
    type: 'Side Project',
    accent: '#ff6b6b',
  },
  {
    id: '06',
    name: 'Information System',
    tagline: 'Logbook & reporting system',
    desc: 'Full-stack information system for managing logs, reports, certifications, and operational records through structured CRUD workflows and administrative tools.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    metrics: ['Report system', 'CRUD workflows', 'Admin panel'],
    type: 'Side Project',
    accent: '#a78bfa',
  },
  {
    id: '07',
    name: 'Shoe E-Commerce',
    tagline: 'Full-stack eCommerce platform',
    desc: 'Full-stack eCommerce platform with customer shopping workflows and an administrative dashboard for managing products, inventory, orders, and payments, including Stripe integration and Cloudinary-based product media.',
    tags: ['MERN', 'Stripe', 'Cloudinary', 'JWT'],
    metrics: ['Shopping cart', 'Payments', 'Admin dashboard'],
    type: 'Side Project',
    accent: '#f59e0b',
  },
]

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

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

  const toggle = (id: string) => setExpanded((cur) => (cur === id ? null : id))

  const renderCard = (p: Project) => {
    const isOpen = expanded === p.id

    return (
      <div
        key={p.id}
        className="group border clip-corner bg-panel hover:bg-neon/5 transition cursor-pointer border-border hover:border-neon/30 text-white/70"
        onClick={() => toggle(p.id)}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/60">
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

          {isOpen && (
            <p className="text-sm text-white/60 mb-4 border-t border-border/60 pt-3">
              {p.desc}
            </p>
          )}

          {/* Metrics */}
          <div className="mb-3">
            <p className="font-mono text-[10px] text-white mb-2 uppercase">
              Highlights
            </p>
            <div className="flex flex-wrap gap-2">
              {p.metrics.map((m) => (
                <span
                  key={m}
                  className="font-mono text-xs text-neon/80 bg-neon/10 border border-neon/30 px-2 py-0.5"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="font-mono text-[10px] text-white mb-2 uppercase">
              Tech
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-muted bg-surface border border-border px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer toggle (click bubbles to the card, so no handler needed here) */}
        <button
          type="button"
          aria-expanded={isOpen}
          className={`w-full flex items-center justify-between px-5 py-3 border-t border-border/60 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon ${
            isOpen ? 'text-neon' : 'text-muted group-hover:text-neon/70'
          }`}
        >
          <span>{isOpen ? 'Hide details' : 'Details'}</span>
          <Chevron open={isOpen} />
        </button>
      </div>
    )
  }

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