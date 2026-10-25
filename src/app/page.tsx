import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Asterisk,
  Network,
  Server,
  Workflow,
  ShieldCheck,
  Cable,
  AppWindow,
  Fingerprint,
  Cloud,
} from "lucide-react";
import {
  portfolio,
  capabilities,
  projects,
  projectCategories,
  vision,
} from "@/config/portfolio";
import {
  Navigation,
  Identity,
  Signature,
  Reveal,
  Progress,
  CurrentYear,
} from "@/components/editorial/interactions";
import Image from "next/image";
import TimelineDemo from "@/components/timeline-demo";
import { ContactForm } from "@/components/editorial/contact-form";
const icons = [
  Network,
  Server,
  Workflow,
  ShieldCheck,
  Cable,
  AppWindow,
  Fingerprint,
  Cloud,
];
function Chapter({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={"chapter " + (light ? "chapter-light" : "")}>
      <span>
        {number} / {children}
      </span>
      <span className="chapter-plus">+</span>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Progress />
      <Navigation />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span>
              <span className="tiny-square" /> INDEPENDENT THINKER. TECHNOLOGY
              BUILDER.
            </span>
            <span>EST. 2022 — ALWAYS EVOLVING</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                BUILT FROM
                <br />
                THE <span className="blue-text">GROUND</span>
                <br />
                <span className="up-word">
                  UP.
                  <svg viewBox="0 0 180 60" aria-hidden="true">
                    <path d="M5 49C50 28 94 22 165 8M135 5L170 7L155 35" />
                  </svg>
                </span>
              </h1>
              <div className="hero-intro">
                <span className="small-index">01 —</span>
                <div>
                  <Identity />
                  <p>{portfolio.introduction}</p>
                  <a className="text-link" href="#story">
                    THIS IS MY STORY <ArrowDown size={16} />
                  </a>
                </div>
              </div>
              <Signature />
            </div>
            <div className="hero-visual">
              <div className="visual-top">
                <span>NOT A STRAIGHT LINE. A WAY FORWARD.</span>
                <Asterisk size={17} />
              </div>
              <div className="founder-portrait">
                <span className="portrait-orbit" aria-hidden="true" />
                <span className="portrait-annotation">VIGNESH / FOUNDER</span>
                <Image
                  src={portfolio.portrait.src}
                  alt={portfolio.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 580px) 100vw, 46vw"
                  className="portrait-image"
                />
              </div>
              <div className="visual-caption">
                <span>FIG. 01 / VIGNESH — FOUNDER, INFEARA</span>
                <span>
                  2022 <ArrowRight size={13} /> 2026
                </span>
              </div>
              <div className="visual-sticker">
                THE NEXT
                <br />
                CHAPTER IS
                <br />
                <strong>OURS TO BUILD. ↗</strong>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-chapter">
              <span className="small-index">CHAPTER 01 / THE JOURNEY</span>
              <p>
                From managing infrastructure
                <br />
                to building the future of technology.
              </p>
            </div>
            <div className="metrics">
              {portfolio.metrics.map((m) => (
                <div key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
            <a
              className="scroll-button"
              href="#story"
              aria-label="Scroll to the founder story"
            >
              <ArrowDown size={24} />
            </a>
          </div>
          <div className="metrics-note">
            FIGURES PROVIDED BY THE FOUNDER · WAITLIST ≠ PAYING CUSTOMERS
          </div>
        </section>
        <section id="story" className="story section wrap">
          <Chapter number="02">THE PERSON BEHIND THE WORK</Chapter>
          <Reveal>
            <div className="section-title-row">
              <h2>
                WHERE IT
                <br />
                ALL BEGAN<span className="orange">.</span>
              </h2>
              <span className="small-index">
                A PERSONAL NOTE
                <br />
                FROM VIGNESH
              </span>
            </div>
            <div className="story-grid">
              <div className="story-statement">
                <span className="quote-mark">“</span>
                <h3>
                  YOUR BEGINNING
                  <br />
                  DOESN’T DEFINE
                  <br />
                  YOUR <span className="blue-text">CEILING.</span>
                </h3>
                <div className="story-note">
                  <span className="tiny-square" /> ROOTED IN HARD WORK.
                  <br />
                  DRIVEN BY WHAT COMES NEXT.
                </div>
              </div>
              <div className="story-text">
                {portfolio.biography.map((p, i) => (
                  <p key={p} className={i === 3 ? "story-emphasis" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        <section id="experience" className="experience section">
          <div className="wrap">
            <Chapter number="03">EXPERIENCE, NOT SHORTCUTS</Chapter>
            <Reveal>
              <div className="section-title-row">
                <h2>
                  EVERY YEAR
                  <br />
                  BUILT THE NEXT<span className="orange">.</span>
                </h2>
                <p>
                  From foundational infrastructure work
                  <br />
                  to building a technology company.
                </p>
              </div>
            </Reveal>
            <TimelineDemo />
            <div className="timeline-end">
              <span /> THE NEXT CHAPTER IS UNDER CONSTRUCTION.{" "}
              <ArrowUpRight size={20} />
            </div>
          </div>
        </section>
        <section id="capabilities" className="capabilities section wrap">
          <Chapter number="04">THE ENGINEERING TOOLKIT</Chapter>
          <Reveal>
            <div className="section-title-row">
              <h2>
                TECHNOLOGY THAT
                <br />
                WORKS IN THE
                <br />
                <span className="blue-text">REAL WORLD.</span>
              </h2>
              <p>
                Practical engineering across infrastructure,
                <br />
                security, automation, and software.
              </p>
            </div>
          </Reveal>
          <div className="capability-list">
            {capabilities.map((c, i) => {
              const Icon = icons[i];
              return (
                <Reveal
                  key={c.title}
                  className={
                    "capability " + (i === 2 ? "capability-featured" : "")
                  }
                >
                  <span className="cap-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="cap-heading">
                    <Icon size={27} strokeWidth={1.3} />
                    <h3>{c.title}</h3>
                  </div>
                  <div className="cap-copy">
                    <p>{c.description}</p>
                    <div className="tags">
                      {c.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
        <section id="work" className="work section">
          <div className="wrap">
            <Chapter number="05">SELECTED DIRECTIONS</Chapter>
            <Reveal>
              <div className="section-title-row">
                <h2>
                  WORK THAT MOVES
                  <br />
                  THINGS <span className="blue-text">FORWARD.</span>
                </h2>
                <p>
                  Real problems. Thoughtful engineering.
                  <br />A closer look at the work.
                </p>
              </div>
            </Reveal>
            <div className="work-layout">
              <div className="work-illustration">
                <div className="monitor-top">
                  <span>INFRASTRUCTURE / SYSTEM VIEW</span>
                  <span>CONCEPT</span>
                </div>
                <svg
                  viewBox="0 0 600 300"
                  role="img"
                  aria-label="Conceptual network topology showing connected infrastructure nodes"
                >
                  <g stroke="#EAE6DE" strokeWidth="1" fill="none">
                    <path
                      d="M300 65V130M100 200V130H500V200M300 130V200"
                      strokeDasharray="5 5"
                    />
                    {[100, 300, 500].map((x) => (
                      <g key={x}>
                        <rect x={x - 40} y="200" width="80" height="55" />
                        <path d={`M${x - 30} 218h60m-60 12h60`} />
                        <circle cx={x + 25} cy="243" r="2" fill="#EF8557" />
                      </g>
                    ))}
                    <path d="M250 25h100v60H250zM260 40h80M260 52h80M260 64h80" />
                    <circle
                      cx="300"
                      cy="130"
                      r="10"
                      fill="#EF8557"
                      stroke="none"
                    />
                  </g>
                  <g
                    fill="#EAE6DE"
                    fontFamily="monospace"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    <text x="300" y="106">
                      VISIBILITY LAYER
                    </text>
                    <text x="100" y="280">
                      ON-PREMISES
                    </text>
                    <text x="300" y="280">
                      APPLICATIONS
                    </text>
                    <text x="500" y="280">
                      CLOUD
                    </text>
                  </g>
                </svg>
                <div className="work-caption">
                  ABSTRACT TECHNICAL ILLUSTRATION — NOT A CLIENT SCREENSHOT
                </div>
              </div>
              <div className="work-directions">
                <span className="eyebrow">
                  AREAS OF WORK / CASE STUDIES TO FOLLOW
                </span>
                {projectCategories.map((p, i) => (
                  <div key={p}>
                    <span>0{i + 1}</span>
                    <h3>{p}</h3>
                    <ArrowUpRight size={19} />
                  </div>
                ))}
                <p className="work-disclaimer">
                  These are showcase categories, not published case studies.
                  Only confirmed projects will appear with a problem statement,
                  technical approach, stack, and verified outcome.
                </p>
              </div>
            </div>
            {projects
              .filter((p) => p.confirmed)
              .map((p) => (
                <article className="published-project" key={p.name}>
                  <span className="eyebrow">{p.category}</span>
                  <h3>{p.name}</h3>
                  <dl>
                    <dt>Problem</dt>
                    <dd>{p.problem}</dd>
                    <dt>Technical approach</dt>
                    <dd>{p.approach}</dd>
                    <dt>Technology stack</dt>
                    <dd>{p.stack.join(" · ")}</dd>
                    <dt>Outcome</dt>
                    <dd>{p.outcome}</dd>
                  </dl>
                  {p.caseStudyUrl && (
                    <a className="text-link" href={p.caseStudyUrl}>
                      READ CASE STUDY <ArrowUpRight size={16} />
                    </a>
                  )}
                </article>
              ))}
          </div>
        </section>
        <section id="infeara" className="company section">
          <div className="wrap">
            <Chapter number="06" light>
              THE COMPANY BEHIND THE NEXT CHAPTER
            </Chapter>
            <Reveal>
              <div className="company-top">
                <div className="company-logo">
                  <span className="brand-symbol">
                    i<span>↗</span>
                  </span>
                  infeara<small>TECHNOLOGIES</small>
                </div>
                <span className="small-index">
                  FOUNDED IN 2025
                  <br />
                  BUILT WITH INTENT.
                </span>
              </div>
              <h2>
                BUILT TO HELP
                <br />
                BUSINESSES
                <br />
                <span>BUILD BETTER.</span>
              </h2>
              <div className="company-bottom">
                <div>
                  {portfolio.companyDescription.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {portfolio.companyUrl ? (
                    <a
                      className="button coral"
                      href={portfolio.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      EXPLORE INFEARA TECHNOLOGIES <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <a className="button coral" href="#contact">
                      LET’S TALK ABOUT INFEARA <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
                <ul>
                  {portfolio.companyServices.map((s, i) => (
                    <li key={s}>
                      <span>0{i + 1}</span>
                      {s}
                      <ArrowUpRight size={15} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
        <section id="vision" className="vision section wrap">
          <Chapter number="07">A DIRECTION, NOT A FINISH LINE</Chapter>
          <Reveal>
            <div className="vision-top">
              <div>
                <span className="eyebrow">THE NEXT STAGE / FUTURE VISION</span>
                <div className="year-display">
                  2027<span>↗</span>
                </div>
              </div>
              <p>
                THE FUTURE
                <br />
                IS BUILT
                <br />
                <span className="blue-text">TOGETHER.</span>
              </p>
            </div>
            <div className="vision-grid">
              <div>
                <h2>
                  I DON’T JUST WANT TO BUILD TECHNOLOGY.
                  <br />
                  <span className="blue-text">
                    I WANT TO HELP THE PEOPLE BUILDING THE FUTURE.
                  </span>
                </h2>
                <p>
                  My long-term ambition is to build a technology partner for
                  early-stage startups — a partner that helps founders establish
                  their infrastructure, secure their environments, automate
                  repetitive operations, and develop the software required to
                  bring their ideas to life.
                </p>
                <span className="vision-note">
                  <Asterisk size={23} /> AN AMBITION IN PROGRESS.
                  <br />
                  NOT AN EXISTING PARTNERSHIP PROGRAM.
                </span>
              </div>
              <div className="vision-pillars">
                {vision.map(([title, desc], i) => (
                  <div key={title}>
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        <section id="contact" className="contact section">
          <div className="wrap">
            <Chapter number="08">GOOD THINGS START WITH A CONVERSATION</Chapter>
            <Reveal>
              <div className="contact-grid">
                <div>
                  <h2>
                    LET’S BUILD
                    <br />
                    WHAT COMES
                    <br />
                    <span className="blue-text">NEXT.</span>
                    <ArrowUpRight className="contact-arrow" />
                  </h2>
                  <p>
                    Have an infrastructure challenge, an automation opportunity,
                    or a startup idea that needs a reliable technology
                    foundation? Let’s discuss what we can build together.
                  </p>
                  <div className="contact-details">
                    {portfolio.email ? (
                      <a
                        className="text-link"
                        href={"mailto:" + portfolio.email}
                      >
                        {portfolio.email}
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                    {portfolio.linkedin ? (
                      <a
                        className="text-link"
                        href={portfolio.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        CONNECT WITH ME ON LINKEDIN <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <div className="footer-top">
          <div className="footer-wordmark">
            VIGNESH<span className="orange">.</span>
            <p>Infrastructure. Automation. Software. Startups.</p>
          </div>
          <div className="footer-links">
            <a href="#story">STORY</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#work">WORK</a>
            <a href="#contact">
              CONTACT <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <CurrentYear /> VIGNESH
          </span>
          <span>STILL LEARNING. STILL BUILDING. JUST GETTING STARTED.</span>
          <a href="#">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
