import { useScrollReveal } from '../hooks/useScrollReveal'

interface Project {
  href: string
  coverClass: string
  coverLabel: string
  title: string
  desc: string
  tags: string[]
}

const projects: Project[] = [
  {
    href: 'https://nexora-shop-app-rwpv.vercel.app',
    coverClass: 'cover-1',
    coverLabel: '<Nexora />',
    title: 'Nexora',
    desc: "Onlayn do'kon platformasi — mahsulotlarni ko'rish, savatga qo'shish va buyurtma berish jarayonlarini o'z ichiga oladi.",
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    href: '#',
    coverClass: 'cover-2',
    coverLabel: '<Toyxona />',
    title: "To'yxona",
    desc: "To'yxonalarni bron qilish tizimi — mavjud sanalarni ko'rish va buyurtma berish imkoniyatini beradi.",
    tags: ['React', 'TypeScript'],
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

function ProjectCard({ project }: { project: Project }) {
  const ref = useScrollReveal<HTMLAnchorElement>()
  const isExternal = project.href !== '#'

  return (
    <a
      href={project.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="project-card reveal"
      ref={ref}
    >
      <div className={`project-cover ${project.coverClass}`}>
        <span className="cover-mono">{project.coverLabel}</span>
      </div>
      <div className="project-body">
        <div className="project-top">
          <div className="project-title">{project.title}</div>
          <div className="project-arrow">
            <ArrowIcon />
          </div>
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  const headRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="pad" id="projects">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow">loyihalarim</div>
          <h2>Amalga oshirgan ishlarim</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
