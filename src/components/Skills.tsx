import { useScrollReveal } from '../hooks/useScrollReveal'

interface Skill {
  name: string
  icon: React.ReactNode
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m8 3-5 9 5 9M16 3l5 9-5 9" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 17V7l8-4 8 4v10l-8 4-8-4Z" />
        <path d="M4 7l8 4 8-4M12 11v10" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="2.4" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z" />
        <path d="M3 8l9 5 9-5M12 13v8" />
      </svg>
    ),
  },
  {
    name: 'HTML5',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v16" />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3h18M4 3l1.6 17L12 22l6.4-2L20 3" />
        <path d="M8 8h8l-.5 5.5L12 15l-3.5-1.5L8.3 11" />
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6" cy="6" r="2.3" />
        <circle cx="6" cy="18" r="2.3" />
        <circle cx="18" cy="12" r="2.3" />
        <path d="M6 8.3V15.7M8.1 12H15.8M8.3 7 15.7 11" />
      </svg>
    ),
  },
  {
    name: 'REST API',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r=".8" fill="currentColor" stroke="none" />
        <circle cx="7" cy="17" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

function SkillCard({ skill }: { skill: Skill }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div className="skill-card reveal" ref={ref}>
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
    </div>
  )
}

export default function Skills() {
  const headRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="pad" id="skills">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow">nimalarni bilaman</div>
          <h2>Texnik ko'nikmalar</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
