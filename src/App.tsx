const projects = [
  {
    name: 'TravelHub App',
    tag: 'Expo · App Store',
    blurb:
      'Sole engineer on the iOS app: tour search, JWT, CRM hooks, T-Bank payments. Live on the App Store with TestFlight + OTA.',
    href: 'https://github.com/s1kata/app',
    live: 'https://travelhub63.ru',
  },
  {
    name: 'TravelHub Web',
    tag: 'PHP · MySQL',
    blurb:
      'Agency site and backend: live tour search, booking, payments, CRM — staging → production owned end-to-end.',
    href: 'https://github.com/s1kata/travelhub-v2',
    live: 'https://travelhub63.ru',
  },
  {
    name: 'Go search sidecar',
    tag: 'Go · latency',
    blurb:
      'Small Go service caching TravelHub search — ~50ms path instead of the slow PHP route. Same product, snappier UX.',
    href: 'https://github.com/s1kata/microservice',
  },
  {
    name: 'AI contract parser',
    tag: 'FastAPI · LLM',
    blurb:
      'Telegram bot + FastAPI that digests contracts with an LLM — practical agentic workflow, not a demo notebook.',
    href: 'https://github.com/s1kata/ai-parser',
  },
] as const

const links = [
  { label: 'GitHub', href: 'https://github.com/s1kata' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ilyas-mardaliev-30a811433' },
  { label: 'Resume', href: 'https://github.com/s1kata/resume' },
  { label: 'Email', href: 'mailto:gememix76141@gmail.com' },
] as const

export default function App() {
  return (
    <div className="page">
      <div className="grain" aria-hidden />
      <div className="orb orb-a" aria-hidden />
      <div className="orb orb-b" aria-hidden />

      <header className="nav">
        <span className="mark">IM</span>
        <nav>
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow mono">AI-native · full-stack · remote</p>
          <h1 className="brand">Ilyas Mardaliev</h1>
          <p className="lede">
            I ship production software end-to-end. Cursor and Claude write most of the lines —
            I own architecture, review, and releases.
          </p>
          <div className="cta">
            <a className="btn primary" href="mailto:gememix76141@gmail.com">
              Get in touch
            </a>
            <a className="btn ghost" href="https://travelhub63.ru" target="_blank" rel="noreferrer">
              See TravelHub live
            </a>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>Commercial product first. Side tools that actually run.</p>
          </div>
          <ul className="project-list">
            {projects.map((p, i) => (
              <li key={p.name} style={{ animationDelay: `${0.08 * i}s` }}>
                <div className="project-meta">
                  <span className="mono">{p.tag}</span>
                  <div className="project-links">
                    <a href={p.href} target="_blank" rel="noreferrer">
                      Code
                    </a>
                    {'live' in p && p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="how">
          <h2>How I work</h2>
          <p>
            Specs → agentic coding (Cursor / Claude) → hard review → ship. Stack in daily use:
            TypeScript, React Native / Expo, PHP, Go, Python. Based in Russia, open to remote
            worldwide.
          </p>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} Ilyas Mardaliev</span>
        <a href="https://github.com/s1kata" target="_blank" rel="noreferrer">
          github.com/s1kata
        </a>
      </footer>
    </div>
  )
}
