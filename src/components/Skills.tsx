import { useEffect, useRef, useState } from 'react'

const techSkills = [
  {
    category: 'Languages',
    icon: '</> ',
    items: [
      { name: 'Go', level: 92 },
      { name: 'TypeScript / Node.js', level: 90 },
      { name: 'Python', level: 78 },
      { name: 'Rust', level: 60 },
      { name: 'SQL', level: 95 },
    ],
  },
  {
    category: 'Databases & Messaging',
    icon: '🗄️ ',
    items: [
      { name: 'PostgreSQL', level: 93 },
      { name: 'Redis', level: 88 },
      { name: 'Apache Kafka', level: 82 },
      { name: 'MongoDB', level: 75 },
      { name: 'Elasticsearch', level: 70 },
    ],
  },
  {
    category: 'Infrastructure & Cloud',
    icon: '☁️ ',
    items: [
      { name: 'AWS (ECS, RDS, SQS, Lambda)', level: 89 },
      { name: 'Kubernetes', level: 83 },
      { name: 'Docker / Compose', level: 95 },
      { name: 'Terraform', level: 80 },
      { name: 'GCP', level: 71 },
    ],
  },
  {
    category: 'Architecture Patterns',
    icon: '🏛️ ',
    items: [
      { name: 'Microservices / gRPC', level: 90 },
      { name: 'Event-Driven / CQRS', level: 85 },
      { name: 'REST & GraphQL API Design', level: 93 },
      { name: 'Domain-Driven Design', level: 82 },
      { name: 'Hexagonal Architecture', level: 78 },
    ],
  },
]

const practicesData = [
  'Test-Driven Development',
  'CI/CD Pipelines',
  'Observability (Prometheus, Grafana, Datadog)',
  'API-First Design',
  'OpenAPI / Swagger',
  'Code Review Culture',
  'Incident Management',
  'ADR Writing',
  'Performance Profiling',
  'SLO/SLA Thinking',
  'Zero-Downtime Deployments',
  'Security Best Practices',
]

interface SkillBarProps {
  name: string
  level: number
  visible: boolean
  delay: number
}

function SkillBar({ name, level, visible, delay }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs text-white/70 group-hover:text-white transition-colors">{name}</span>
        <span className="font-mono text-xs text-neon/70">{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon/60 to-neon rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
            boxShadow: '0 0 8px #00ff8860',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-28 relative bg-panel/40">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-neon/60 tracking-widest">[02]</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">tech_stack</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {techSkills.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className={`font-mono text-xs px-4 py-2 border clip-corner-sm transition-all duration-200 ${
                activeTab === i
                  ? 'border-neon/60 text-neon bg-neon/10'
                  : 'border-border text-muted hover:border-neon/30 hover:text-white/70'
              }`}
            >
              {cat.icon}{cat.category}
            </button>
          ))}
        </div>

        {/* Active tab skill bars */}
        <div className="reveal grid lg:grid-cols-2 gap-4">
          <div className="border border-border clip-corner bg-surface p-6 lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
              {techSkills[activeTab].items.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  visible={visible}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Practices */}
        <div className="reveal mt-12">
          <h3 className="font-mono text-sm text-muted tracking-widest mb-6 uppercase">
            <span className="text-neon/60">// </span>engineering practices
          </h3>
          <div className="flex flex-wrap gap-3">
            {practicesData.map((p) => (
              <span
                key={p}
                className="font-mono text-xs border border-border text-white/50 px-3 py-1.5 clip-corner-sm hover:border-neon/40 hover:text-neon hover:bg-neon/5 transition-all duration-200 cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Numeric highlights */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {[
            { val: '4', unit: 'languages', sub: 'production-grade' },
            { val: '8+', unit: 'databases', sub: 'worked with' },
            { val: '3', unit: 'cloud platforms', sub: 'certified' },
            { val: '12', unit: 'patterns', sub: 'battle-tested' },
          ].map(({ val, unit, sub }) => (
            <div key={unit} className="border border-border clip-corner p-4 bg-surface text-center group hover:border-neon/30 transition-colors">
              <div className="font-mono text-3xl font-bold text-neon neon-glow">{val}</div>
              <div className="font-mono text-xs text-white/70 mt-1">{unit}</div>
              <div className="font-mono text-xs text-muted">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}