import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav-row">
        <div className="logo">
          <span className="logo-dot"></span>
          umidjon.dev
        </div>

        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('about')
            }}
          >
            Men haqimda
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('skills')
            }}
          >
            Ko'nikmalar
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('projects')
            }}
          >
            Loyihalar
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
          >
            Bog'lanish
          </a>
        </div>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('contact')
          }}
        >
          Bog'lanish
        </a>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Menyu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
