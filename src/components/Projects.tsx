import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    name: 'HermesMQ',
    tagline: 'High-throughput message broker in Go',
    desc: 'A persistent, durable message queue supporting 500k+ messages/sec with at-least-once delivery guarantees. Implements the RAFT consensus algorithm for leader election across a 3-node cluster.',
    tags: ['Go', 'RAFT', 'gRPC', 'PostgreSQL', 'Prometheus'],
    metrics: ['500k msg/s', '99.99% uptime', '3-node cluster'],
    type: 'OSS / Featured',
    link: '#',
    github: '#',
    accent: '#00ff88',
  },
  {
    id: '02',
    name: 'VaultAPI',
    tagline: 'Zero-trust secrets management platform',
    desc: 'REST and gRPC API for secret rotation, audit trails, and fine-grained RBAC. Integrates with AWS KMS and Vault for key management. Processes 2M+ secret reads/day across 50 microservices.',
    tags: ['Node.js', 'TypeScript', 'AWS KMS', 'Redis', 'Terraform'],
    metrics: ['2M reads/day', '50 services', '<5ms p99'],
    type: 'Work Project',
    link: '#',
    github: null,
    accent: '#f59e0b',
  },
  {
    id: '03',
    name: 'DataStream Pipeline',
    tagline: 'Real-time analytics event pipeline',
    desc: 'End-to-end Kafka-based event streaming system that ingests 10GB+ of telemetry data daily, transforms it through a custom schema registry, and hydrates a Clickhouse data warehouse.',
    tags: ['Kafka', 'Go', 'ClickHouse', 'Kubernetes', 'Avro'],
    metrics: ['10GB+/day', '<200ms latency', '99.95% SLA'],
    type: 'Work Project',
    link: '#',
    github: null,
    accent: '#a78bfa',
  },
  {
    id: '04',
    name: 'pg-migrant',
    tagline: 'Schema migration CLI for PostgreSQL',
    desc: 'A CLI tool for versioned, reversible PostgreSQL schema migrations with branch-aware locking and GitHub Actions integration. Used by 800+ developers on GitHub.',
    tags: ['Go', 'PostgreSQL', 'CLI', 'GitHub Actions'],
    metrics: ['800+ users', '4.8★ rating', '120 GitHub ⭐'],
    type: 'OSS',
    link: '#',
    github: '#',
    accent: '#00ff88',
  },
  {
    id: '05',
    name: 'AuthEngine',
    tagline: 'Drop-in auth microservice with OIDC',
    desc: 'Plug-and-play authentication service supporting OAuth 2.0, OIDC, MFA, and session management. Horizontally scalable with Redis session store. Written to replace Cognito in cost-sensitive setups.',
    tags: ['Go', 'Redis', 'OIDC', 'JWT', 'Docker'],
    metrics: ['10k req/min', 'PKCE support', 'MFA ready'],
    type: 'OSS / Featured',
    link: '#',
    github: '#',
    accent: '#00ff88',
  },
  {
    id: '06',
    name: 'K8s Cost Guardian',
    tagline: 'Kubernetes cost attribution & alerting',
    desc: 'An operator that labels K8s resources by team/product, aggregates cloud costs from AWS Cost Explorer, and sends Slack alerts when teams exceed budget thresholds.',
    tags: ['Go', 'Kubernetes Operator', 'AWS', 'Slack API'],
    metrics: ['$40k/mo saved', '12 teams', 'Real-time alerts'],
    type: 'Work Project',
    link: '#',
    github: null,
    accent: '#f59e0b',
  },
]

const filters = ['all', 'OSS', 'work']

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.type.toLowerCase().includes(filter.toLowerCase()))

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neon/60 tracking-widest">[03]</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">projects</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Filter */}
        <div className="reveal flex gap-3 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs px-4 py-1.5 border clip-corner-sm transition-all duration-200 ${filter === f ? 'border-neon text-neon bg-neon/10' : 'border-border text-muted hover:text-white'
                }`}
            >
              ./{f}
            </button>
          ))}
          <span className="font-mono text-xs text-muted self-center ml-auto">
            {filtered.length} results
          </span>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative border clip-corner bg-panel hover:bg-neon/5 transition-all duration-300 cursor-pointer ${expanded === p.id ? 'border-neon/60' : 'border-border hover:border-neon/30'
                }`}
              onClick={() => setExpanded(expanded === p.id ? null : p.id)}
            >
              {/* Top bar with project number */}
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

              {/* Content */}
              <div className="p-5">
                <h3 className="font-mono text-base font-bold text-white group-hover:text-neon transition-colors mb-1">
                  {p.name}
                </h3>
                <p className="font-mono text-xs text-muted mb-3">{p.tagline}</p>

                {/* Expanded desc */}
                {expanded === p.id && (
                  <p className="font-body text-sm text-white/60 leading-relaxed mb-4 border-t border-border/60 pt-3">
                    {p.desc}
                  </p>
                )}

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.metrics.map(m => (
                    <span key={m} className="font-mono text-xs text-neon/70 bg-neon/5 border border-neon/20 px-2 py-0.5 clip-corner-sm">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-xs text-muted bg-surface border border-border px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer links */}
              <div className="flex gap-3 px-5 py-3 border-t border-border/60">
                {p.github && (
                  <a
                    href={p.github}
                    onClick={e => e.stopPropagation()}
                    className="font-mono text-xs text-muted hover:text-neon transition-colors"
                  >
                    ⌥ github
                  </a>
                )}
                <a
                  href={p.link}
                  onClick={e => e.stopPropagation()}
                  className="font-mono text-xs text-muted hover:text-neon transition-colors"
                >
                  ↗ view
                </a>
                <span className="font-mono text-xs text-muted/40 ml-auto">
                  {expanded === p.id ? '▲ collapse' : '▼ expand'}
                </span>
              </div>

              {/* Neon corner accent on hover */}
              <div
                className="absolute bottom-0 right-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(to left, ${p.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}