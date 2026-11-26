import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  MotionConfig,
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  ChevronDown,
  ChevronUp,
  Code2,
  Download,
  Gamepad2,
  Github,
  GraduationCap,
  Linkedin,
  Menu,
  X,
} from 'lucide-react';
import {
  CONTACTS,
  NAV_LINKS,
  PLATFORM_FILTERS,
  PLATFORM_ICONS,
  PORTFOLIO_DATA,
} from './data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const EASE_EDITORIAL = [0.16, 1, 0.3, 1];

const REVEAL_VIEWPORT = { once: true, amount: 0.15 };

function getInitialFilter() {
  const param = new URLSearchParams(window.location.search).get('kategori');
  return PLATFORM_FILTERS.includes(param) ? param : 'Semua';
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState(getInitialFilter);
  const [expandedProject, setExpandedProject] = useState('Cursed Priest');
  const [activeSection, setActiveSection] = useState(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState(PORTFOLIO_DATA.disciplines[0].id);

  const rootRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  const featuredProject =
    filter === 'Semua' ? PORTFOLIO_DATA.projects.find((p) => p.featured) : null;

  const gridProjects =
    filter === 'Semua'
      ? PORTFOLIO_DATA.projects.filter((p) => !p.featured)
      : PORTFOLIO_DATA.projects.filter((p) => p.platform === filter);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (filter === 'Semua') {
      url.searchParams.delete('kategori');
    } else {
      url.searchParams.set('kategori', filter);
    }
    window.history.replaceState({}, '', url);
  }, [filter]);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.id);

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      if (scrollY < 160) {
        setActiveSection(null);
        return;
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 40) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 140 <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  // GSAP: Coordinated Hero Entrance + ScrollTrigger Timeline & Schematic Sequences
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // 1. Coordinated Hero Entrance Timeline
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.55 } });
        heroTl
          .from('.hero-status', { y: 12, opacity: 0 })
          .from('.hero-title', { y: 18, opacity: 0 }, '-=0.38')
          .from('.hero-summary', { y: 14, opacity: 0 }, '-=0.38')
          .from('.hero-actions', { y: 12, opacity: 0 }, '-=0.38')
          .from('.discipline-panel', { y: 18, opacity: 0 }, '-=0.42')
          .from(
            '.discipline-item',
            { y: 10, opacity: 0, stagger: 0.06, duration: 0.4 },
            '-=0.35',
          );

        // 2. Featured Schematic Sequential Reveal (ScrollTrigger)
        const schematicNodes = gsap.utils.toArray('.schematic-node');
        if (schematicNodes.length > 0) {
          gsap.from(schematicNodes, {
            y: 12,
            opacity: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.featured-visual',
              start: 'top 85%',
              once: true,
            },
          });
        }

        // 3. Experience Timeline Progression (ScrollTrigger)
        gsap.from('.timeline-item', {
          x: -14,
          opacity: 0,
          duration: 0.48,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top 82%',
            once: true,
          },
        });

        gsap.from('.credential-card', {
          y: 16,
          opacity: 0,
          duration: 0.48,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.credentials-stack',
            start: 'top 82%',
            once: true,
          },
        });
      });

      return () => mm.revert();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleDisciplineFilter = (platformId) => {
    setSelectedDiscipline(platformId);
    setFilter(platformId);
    document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth' });
  };

  const revealInitial = shouldReduceMotion ? false : { opacity: 0, y: 16 };
  const revealAnimate = { opacity: 1, y: 0 };

  return (
    <MotionConfig reducedMotion="user">
      <div ref={rootRef}>
        <a href="#main" className="skip-link">
          Langsung ke konten utama
        </a>

        <header className="site-header">
          <div className="wrap nav-bar">
            <a href="#beranda" className="brand-link" onClick={() => setMenuOpen(false)}>
              <span className="brand-mark" aria-hidden="true">
                {PORTFOLIO_DATA.initials}
              </span>
              <span>{PORTFOLIO_DATA.name}</span>
            </a>

            <nav aria-label="Navigasi utama">
              <ul id="nav-menu" className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {NAV_LINKS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={`nav-link ${isActive ? 'is-active' : ''}`}
                        aria-current={isActive ? 'location' : undefined}
                        onClick={() => setMenuOpen(false)}
                      >
                        {isActive && !shouldReduceMotion ? (
                          <Motion.span
                            layoutId="nav-active-pill"
                            className="nav-active-pill"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                            aria-hidden="true"
                          />
                        ) : isActive ? (
                          <span className="nav-active-pill" aria-hidden="true" />
                        ) : null}
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                <li className="nav-cv-mobile">
                  <a
                    href={PORTFOLIO_DATA.social.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ width: '100%' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Download size={16} aria-hidden="true" />
                    Unduh CV
                  </a>
                </li>
              </ul>
            </nav>

            <div className="nav-actions">
              <Motion.a
                href={PORTFOLIO_DATA.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost btn--compact nav-cv-desktop"
                whileTap={{ scale: 0.97 }}
              >
                <Download size={15} aria-hidden="true" />
                Unduh CV
              </Motion.a>

              <button
                type="button"
                className="nav-toggle"
                aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
                aria-expanded={menuOpen}
                aria-controls="nav-menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {!shouldReduceMotion ? (
            <Motion.div
              className="scroll-progress-bar"
              style={{ scaleX }}
              aria-hidden="true"
            />
          ) : null}
        </header>

        <main id="main">
          {/* HERO */}
          <section id="beranda" className="hero" aria-labelledby="hero-heading">
            <div className="wrap hero-grid">
              <div>
                <p className="hero-status">
                  <span className="status-dot" aria-hidden="true" />
                  <span>
                    {PORTFOLIO_DATA.status} · {PORTFOLIO_DATA.location}
                  </span>
                </p>

                <h1 id="hero-heading" className="hero-title">
                  Membangun aplikasi <span className="hero-title-accent">web, Android</span>, game
                  3D, dan model AI.
                </h1>

                <p className="hero-summary">{PORTFOLIO_DATA.heroSummary}</p>

                <div className="hero-actions">
                  <Motion.a href="#proyek" className="btn" whileTap={{ scale: 0.97 }}>
                    Lihat Karya
                  </Motion.a>
                  <Motion.a
                    href={PORTFOLIO_DATA.social.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost"
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download size={16} aria-hidden="true" />
                    Unduh CV
                  </Motion.a>
                  <Motion.a
                    href={PORTFOLIO_DATA.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost btn--icon"
                    aria-label="GitHub Jonathan Sutandar"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} aria-hidden="true" />
                  </Motion.a>
                  <Motion.a
                    href={PORTFOLIO_DATA.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost btn--icon"
                    aria-label="LinkedIn Jonathan Sutandar"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={18} aria-hidden="true" />
                  </Motion.a>
                </div>
              </div>

              <aside className="discipline-panel" aria-label="Bidang pengembangan utama">
                <div className="panel-header">
                  <span>Spektrum Pengembangan</span>
                  <span className="mono">4 Bidang</span>
                </div>
                <div className="discipline-list">
                  {PORTFOLIO_DATA.disciplines.map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedDiscipline === item.id;
                    return (
                      <Motion.button
                        key={item.id}
                        type="button"
                        className={`discipline-item ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleDisciplineFilter(item.id)}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span className="discipline-icon" aria-hidden="true">
                          <Icon size={15} />
                        </span>
                        <span>
                          <span className="discipline-title" style={{ display: 'block' }}>
                            {item.title}
                          </span>
                          <span className="discipline-stack mono" style={{ display: 'block' }}>
                            {item.stack}
                          </span>
                          <span className="discipline-detail" style={{ display: 'block' }}>
                            {item.detail}
                          </span>
                        </span>
                        <ArrowUpRight size={15} className="discipline-arrow" aria-hidden="true" />
                      </Motion.button>
                    );
                  })}
                </div>
              </aside>
            </div>
          </section>

          {/* ABOUT */}
          <section id="tentang" className="section section--alt" aria-labelledby="tentang-heading">
            <div className="wrap">
              <Motion.div
                className="section-header"
                initial={revealInitial}
                whileInView={revealAnimate}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <h2 id="tentang-heading" className="section-title">
                  Tentang Saya
                </h2>
              </Motion.div>

              <div className="about-grid">
                <Motion.div
                  initial={revealInitial}
                  whileInView={revealAnimate}
                  viewport={REVEAL_VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: 0.05 }}
                >
                  <p className="about-lead">{PORTFOLIO_DATA.about.lead}</p>
                  <div className="about-body">
                    {PORTFOLIO_DATA.about.paragraphs.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                </Motion.div>

                <dl className="facts-grid">
                  {PORTFOLIO_DATA.about.highlights.map((item, idx) => (
                    <Motion.div
                      className="fact-cell"
                      key={item.label}
                      initial={revealInitial}
                      whileInView={revealAnimate}
                      viewport={REVEAL_VIEWPORT}
                      transition={{ duration: 0.4, ease: EASE_EDITORIAL, delay: 0.08 + idx * 0.05 }}
                    >
                      <dt className="fact-label">{item.label}</dt>
                      <dd className="fact-value">{item.value}</dd>
                    </Motion.div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="proyek" className="section" aria-labelledby="proyek-heading">
            <div className="wrap">
              <Motion.div
                className="section-header"
                initial={revealInitial}
                whileInView={revealAnimate}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <div>
                  <h2 id="proyek-heading" className="section-title">
                    Proyek Pilihan
                  </h2>
                  <p className="section-subtitle">
                    Proyek web, Android, game 3D, model AI, dan prototipe UI/UX yang pernah saya
                    kerjakan.
                  </p>
                </div>
              </Motion.div>

              <div className="filter-bar" role="group" aria-label="Filter kategori proyek">
                {PLATFORM_FILTERS.map((platform) => {
                  const count =
                    platform === 'Semua'
                      ? PORTFOLIO_DATA.projects.length
                      : PORTFOLIO_DATA.projects.filter((p) => p.platform === platform).length;
                  return (
                    <Motion.button
                      key={platform}
                      type="button"
                      className="filter-btn"
                      aria-pressed={filter === platform}
                      onClick={() => setFilter(platform)}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span>{platform}</span>
                      <span className="filter-count mono">{count}</span>
                    </Motion.button>
                  );
                })}
              </div>

              <p className="sr-only" aria-live="polite">
                Menampilkan {(featuredProject ? 1 : 0) + gridProjects.length} proyek untuk kategori{' '}
                {filter}.
              </p>

              <AnimatePresence mode="wait">
                {featuredProject ? (
                  <Motion.article
                    key="featured-cursed-priest"
                    className="featured-card"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                  >
                    <div className="featured-visual" aria-label="Ringkasan arsitektur Cursed Priest">
                      <div className="schematic-top mono">
                        <span>ARSITEKTUR AI MUSUH</span>
                        <span className="schematic-badge">
                          Karya Unggulan · {featuredProject.year}
                        </span>
                      </div>

                      <div className="schematic-flow">
                        <div className="schematic-node">
                          <span className="schematic-node-label mono">01</span>
                          <span className="schematic-node-title">Patrol</span>
                        </div>
                        <div className="schematic-node schematic-node--active">
                          <span className="schematic-node-label mono">02</span>
                          <span className="schematic-node-title">Detect</span>
                        </div>
                        <div className="schematic-node">
                          <span className="schematic-node-label mono">03</span>
                          <span className="schematic-node-title">Chase</span>
                        </div>
                      </div>

                      <div className="schematic-meta mono">
                        {featuredProject.previewMeta.map((meta) => (
                          <span key={meta}>{meta}</span>
                        ))}
                      </div>
                    </div>

                    <div className="featured-content">
                      <div>
                        <div className="project-meta-row">
                          <span className="platform-pill">
                            <Gamepad2 size={13} aria-hidden="true" />
                            {featuredProject.platform}
                          </span>
                          <span className="project-year mono">{featuredProject.year}</span>
                        </div>

                        <h3 className="project-title">{featuredProject.title}</h3>
                        <p className="project-desc">{featuredProject.desc}</p>

                        <div className="project-tags">
                          {featuredProject.tags.map((tag) => (
                            <span key={tag} className="tech-tag mono" translate="no">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="case-drawer" style={{ marginBottom: 'var(--space-md)' }}>
                          <div>
                            <span className="case-label mono">Masalah</span>
                            <p className="case-text">{featuredProject.problem}</p>
                          </div>
                          <div>
                            <span className="case-label mono">Implementasi</span>
                            <p className="case-text">{featuredProject.solution}</p>
                          </div>
                          <div>
                            <span className="case-label mono">Hasil</span>
                            <p className="case-text">{featuredProject.result}</p>
                          </div>
                        </div>

                        <Motion.a
                          href={featuredProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          whileTap={{ scale: 0.97 }}
                        >
                          {featuredProject.ctaLabel}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </Motion.a>
                      </div>
                    </div>
                  </Motion.article>
                ) : null}
              </AnimatePresence>

              <Motion.div className="projects-grid" layout={!shouldReduceMotion}>
                <AnimatePresence mode="popLayout">
                  {gridProjects.map((project, idx) => {
                    const Icon = PLATFORM_ICONS[project.platform] || Code2;
                    const isOpen = expandedProject === project.title;

                    return (
                      <Motion.article
                        key={project.title}
                        layout={!shouldReduceMotion}
                        className="project-card"
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                        whileInView={revealAnimate}
                        viewport={REVEAL_VIEWPORT}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                        transition={{
                          duration: 0.35,
                          ease: EASE_EDITORIAL,
                          delay: Math.min(idx * 0.04, 0.16),
                        }}
                      >
                        <div>
                          <div className="project-meta-row">
                            <span className="platform-pill" translate="no">
                              <Icon size={13} aria-hidden="true" />
                              {project.platform}
                            </span>
                            <span className="project-year mono">{project.year}</span>
                          </div>

                          <h3 className="project-title">{project.title}</h3>
                          <p className="project-desc">{project.desc}</p>

                          <div className="project-tags">
                            {project.tags.map((tag) => (
                              <span key={tag} className="tech-tag mono" translate="no">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <AnimatePresence initial={false}>
                            {isOpen ? (
                              <Motion.div
                                key="drawer"
                                className="case-drawer"
                                style={{ marginBottom: 'var(--space-md)' }}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                                transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                              >
                                <div>
                                  <span className="case-label mono">Masalah</span>
                                  <p className="case-text">{project.problem}</p>
                                </div>
                                <div>
                                  <span className="case-label mono">Implementasi</span>
                                  <p className="case-text">{project.solution}</p>
                                </div>
                                <div>
                                  <span className="case-label mono">Hasil</span>
                                  <p className="case-text">{project.result}</p>
                                </div>
                              </Motion.div>
                            ) : null}
                          </AnimatePresence>

                          <div className="project-footer">
                            <button
                              type="button"
                              className="detail-toggle"
                              aria-expanded={isOpen}
                              onClick={() => setExpandedProject(isOpen ? null : project.title)}
                            >
                              <span>{isOpen ? 'Tutup detail' : 'Detail kasus'}</span>
                              {isOpen ? (
                                <ChevronUp size={15} aria-hidden="true" />
                              ) : (
                                <ChevronDown size={15} aria-hidden="true" />
                              )}
                            </button>

                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                              aria-label={`Buka ${project.title} di tab baru`}
                            >
                              <span>{project.ctaLabel || 'Buka'}</span>
                              <ArrowUpRight size={15} aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                      </Motion.article>
                    );
                  })}
                </AnimatePresence>
              </Motion.div>
            </div>
          </section>

          {/* EXPERIENCE & EDUCATION */}
          <section
            id="pengalaman"
            className="section section--alt"
            aria-labelledby="pengalaman-heading"
          >
            <div className="wrap">
              <Motion.div
                className="section-header"
                initial={revealInitial}
                whileInView={revealAnimate}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <h2 id="pengalaman-heading" className="section-title">
                  Pengalaman &amp; Pendidikan
                </h2>
              </Motion.div>

              <div className="experience-grid">
                <div className="timeline">
                  {PORTFOLIO_DATA.experience.map((item) => (
                    <article className="timeline-item" key={`${item.role}-${item.period}`}>
                      <div className="timeline-head">
                        <h3 className="timeline-role">{item.role}</h3>
                        <span className="timeline-period mono">{item.period}</span>
                      </div>
                      <p className="timeline-org">
                        {item.org} · {item.type}
                      </p>
                      <p className="timeline-desc">{item.desc}</p>
                    </article>
                  ))}
                </div>

                <div className="credentials-stack">
                  <article className="credential-card">
                    <div className="credential-head">
                      <GraduationCap size={16} className="credential-icon" aria-hidden="true" />
                      <span>Pendidikan</span>
                    </div>
                    <h3 className="timeline-role">{PORTFOLIO_DATA.education.school}</h3>
                    <p className="timeline-org" style={{ marginTop: '4px' }}>
                      {PORTFOLIO_DATA.education.degree}
                    </p>
                    <span className="timeline-period mono">{PORTFOLIO_DATA.education.period}</span>
                  </article>

                  <article className="credential-card">
                    <div className="credential-head">
                      <Award size={16} className="credential-icon" aria-hidden="true" />
                      <span>Sertifikasi</span>
                    </div>
                    <ul className="cert-list">
                      {PORTFOLIO_DATA.certificates.map((cert) => (
                        <li className="cert-row" key={cert.name}>
                          <span className="cert-title">{cert.name}</span>
                          <span className="cert-issuer">{cert.issuer}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="keahlian" className="section" aria-labelledby="keahlian-heading">
            <div className="wrap">
              <Motion.div
                className="section-header"
                initial={revealInitial}
                whileInView={revealAnimate}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <div>
                  <h2 id="keahlian-heading" className="section-title">
                    Keahlian Teknis
                  </h2>
                  <p className="section-subtitle">
                    Bahasa, framework, dan alat yang saya gunakan sehari-hari dalam proyek.
                  </p>
                </div>
              </Motion.div>

              <div className="skills-index">
                {PORTFOLIO_DATA.skills.map((group, idx) => {
                  const Icon = group.icon;
                  return (
                    <Motion.article
                      className="skill-group-row"
                      key={group.category}
                      initial={revealInitial}
                      whileInView={revealAnimate}
                      viewport={REVEAL_VIEWPORT}
                      transition={{ duration: 0.45, ease: EASE_EDITORIAL, delay: idx * 0.07 }}
                    >
                      <div>
                        <div className="skill-group-head">
                          <Icon size={18} className="credential-icon" aria-hidden="true" />
                          <h3 className="skill-group-title">{group.category}</h3>
                        </div>
                        <p className="skill-group-summary">{group.summary}</p>
                      </div>

                      <ul className="skill-grid">
                        {group.items.map((item) => (
                          <li className="skill-cell" key={item} translate="no">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="kontak" className="section section--alt" aria-labelledby="kontak-heading">
            <div className="wrap">
              <Motion.div
                className="section-header"
                initial={revealInitial}
                whileInView={revealAnimate}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <div>
                  <h2 id="kontak-heading" className="section-title">
                    Mari Terhubung
                  </h2>
                  <p className="section-subtitle">
                    Kirim pesan melalui salah satu kanal di bawah jika ingin berdiskusi soal
                    magang, proyek lepas, atau kolaborasi teknis.
                  </p>
                </div>
              </Motion.div>

              <div className="contact-grid">
                {CONTACTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Motion.a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="contact-card"
                      initial={revealInitial}
                      whileInView={revealAnimate}
                      viewport={REVEAL_VIEWPORT}
                      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                      transition={{ duration: 0.35, ease: EASE_EDITORIAL, delay: idx * 0.05 }}
                    >
                      <span className="contact-info">
                        <span className="contact-icon-wrap" aria-hidden="true">
                          <Icon size={18} />
                        </span>
                        <span style={{ minWidth: 0 }}>
                          <span className="contact-label mono">{item.label}</span>
                          <span className="contact-value">{item.value}</span>
                        </span>
                      </span>
                      <ArrowUpRight size={17} className="contact-arrow" aria-hidden="true" />
                    </Motion.a>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="wrap footer-inner">
            <p>
              © 2026 {PORTFOLIO_DATA.name} · {PORTFOLIO_DATA.location}
            </p>
            <a href="#beranda" className="footer-top-link">
              <span>Kembali ke atas</span>
              <ArrowUp size={15} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
