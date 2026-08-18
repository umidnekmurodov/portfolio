import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const boxRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="pad" id="contact">
      <div className="wrap">
        <div className="contact-box reveal" ref={boxRef}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            bog'lanish
          </div>
          <h2>Keling, birga loyiha qilaylik</h2>
          <p>Savol, taklif yoki hamkorlik uchun menga yozing — imkon qadar tez javob beraman.</p>
          <div className="contact-actions">
            <a href="mailto:umidnekmurodov1@gmail.com" className="btn btn-primary">
              umidnekmurodov1@gmail.com
            </a>
            <a
              href="https://t.me/umid_nekmurodov"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Telegram
            </a>
            <a
              href="https://github.com/umidnekmurodov"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub profilim
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
