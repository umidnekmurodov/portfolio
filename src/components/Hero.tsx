import { useEffect, useRef, useState } from 'react'

type Segment = [string, string]

const script: Segment[] = [
  ['const ', ''],
  ['developer', 'tk-key'],
  [' = {', ''],
  ['\n  name', 'tk-key'],
  [': ', ''],
  ['"Umidjon Nekmurodov"', 'tk-str'],
  [',', 'tk-punc'],
  ['\n  role', 'tk-key'],
  [': ', ''],
  ['"Frontend Developer"', 'tk-str'],
  [',', 'tk-punc'],
  ['\n  stack', 'tk-key'],
  [': [', ''],
  ['"React"', 'tk-str'],
  [', ', ''],
  ['"TypeScript"', 'tk-str'],
  [', ', ''],
  ['"Node.js"', 'tk-str'],
  ['],', 'tk-punc'],
  ['\n  university', 'tk-key'],
  [': ', ''],
  ['"PDP University"', 'tk-str'],
  [',', 'tk-punc'],
  ['\n};', ''],
]

const fullText = script.map(([t]) => t).join('')

function buildHtml(charCount: number): string {
  let html = ''
  let idx = 0
  for (const [text, cls] of script) {
    const slice = fullText.slice(0, charCount).slice(idx, idx + text.length)
    if (slice) {
      html += cls ? `<span class="${cls}">${slice}</span>` : slice
    }
    idx += text.length
  }
  return html.replace(/\n/g, '<br/>')
}

export default function Hero() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [done, setDone] = useState(false)

  // IntersectionObserver — faqat ko'ringanda boshlash
  useEffect(() => {
    const el = terminalRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Typing effekti
  useEffect(() => {
    if (!started || done) return

    if (charCount > fullText.length) {
      setDone(true)
      return
    }

    const timer = setTimeout(() => {
      setCharCount((prev) => prev + 2)
    }, 14)

    return () => clearTimeout(timer)
  }, [started, charCount, done])

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="about">
      <div className="wrap hero-grid">
        {/* Terminal — chap qism */}
        <div className="terminal-stage">
          <div className="badge badge-1">
            <i></i>React
          </div>
          <div className="badge badge-2">
            <i></i>TypeScript
          </div>
          <div className="badge badge-3">
            <i></i>Node.js
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-name">umidjon.dev — profile.ts</span>
            </div>
            <div
              className="terminal-body"
              id="typeTarget"
              ref={terminalRef}
              dangerouslySetInnerHTML={{
                __html: done
                  ? buildHtml(fullText.length) + '<span class="cursor"></span>'
                  : buildHtml(charCount),
              }}
            />
          </div>
        </div>

        {/* Hero matn — o'ng qism */}
        <div className="hero-text-col">
          <div className="eyebrow">salom, men</div>
          <h1 className="hero-name">
            Nekmurodov
            <br />
            Umidjon
          </h1>
          <div className="hero-role">// Frontend Developer — React &amp; TypeScript</div>
          <p className="hero-text">
            PDP University'da 3-kursda tahsil olaman. React va TypeScript yordamida zamonaviy, tez
            va foydalanuvchiga qulay veb-ilovalar yarataman — kodning ortidagi har bir tafsilotga
            alohida e'tibor beraman.
          </p>
          <div className="cta-row">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('projects')
              }}
            >
              Loyihalarim
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('contact')
              }}
            >
              Bog'lanish
            </a>
          </div>
          <div className="social-row">
            <a
              href="https://github.com/umidnekmurodov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
            </a>
            <a
              href="https://t.me/umid_nekmurodov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m21 4-19 8 6 2 2 6 3-4 5 3 3-15Z" />
                <path d="m8 14 11-9-8 10" />
              </svg>
            </a>
            <a href="mailto:umidnekmurodov1@gmail.com" aria-label="Email">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 5h16v14H4z" />
                <path d="m4 6 8 7 8-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
