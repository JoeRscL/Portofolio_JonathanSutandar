import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  Cpu,
  Download,
  Gamepad2,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Smartphone,
  Terminal,
  X,
} from 'lucide-react';

const DATA = {
  name: 'Jonathan Sutandar',
  location: 'Tangerang, Indonesia',
  status: 'Tersedia untuk proyek & kerja sama',
  social: {
    github: 'https://github.com/JoeRscL',
    linkedin: 'https://www.linkedin.com/in/jonathansutandar/',
    email: 'jonathan20strada@gmail.com',
    whatsapp: 'https://wa.me/6287871806311',
    resume: '/resume.pdf',
  },
  experience: [
    {
      role: 'Treasurer',
      org: 'Mister & Miss UMN 2025 · Organisasi',
      period: 'Feb 2025 – Des 2025',
      desc: 'Mengelola anggaran acara lebih dari Rp300 juta di 5 segmen utama dan 12 divisi, menyusun RAB/PDPAK, serta menegosiasikan vendor.',
    },
    {
      role: 'Team Admin Leader',
      org: 'PT Sariling Aneka Energi · Pengalaman Kerja',
      period: 'Jun 2024 – Agu 2024',
      desc: 'Mengelola unggah produk dan kontrol stok pada platform e-commerce pemerintahan (E-Katalog) dengan data yang akurat.',
    },
    {
      role: 'Mentor',
      org: 'Character Building Mentoring UMN · Organisasi',
      period: 'Mar 2024 – Sep 2024',
      desc: 'Membimbing mahasiswa baru beradaptasi dengan budaya kampus serta memfasilitasi sesi pelatihan soft-skills.',
    },
    {
      role: 'Graphic Design',
      org: 'PT Sariling Aneka Energi · Pengalaman Kerja',
      period: 'Okt 2022 – Des 2022',
      desc: 'Merancang kartu nama dan konten Instagram untuk kebutuhan branding perusahaan.',
    },
  ],
  education: {
    school: 'Universitas Multimedia Nusantara',
    degree: 'S1 Informatika',
    period: 'Agu 2023 – Agu 2027',
    location: 'Gading Serpong',
  },
  certificates: [
    { name: 'HCIA–openGauss V1.0 (Database Fundamentals)', issuer: 'Huawei' },
    { name: 'HCIA–AI V3.5 (Artificial Intelligence)', issuer: 'Huawei' },
    { name: 'Python Intermediate & Introduction', issuer: 'Sololearn' },
  ],
  projects: [
    {
      title: 'North Sumatra Heritage',
      desc: 'Portal budaya interaktif yang memvisualisasikan kekayaan Sumatera Utara lewat React dan integrasi API.',
      tags: ['React', 'API', 'Bootstrap'],
      link: 'https://uas-pti-2024.vercel.app/',
      platform: 'Web',
    },
    {
      title: 'MindNest APP',
      desc: 'Aplikasi Android native untuk jadwal tugas dan pengingat harian dengan sinkronisasi Firebase Realtime Database.',
      tags: ['Kotlin', 'Firebase', 'XML'],
      link: 'https://github.com/JoeRscL/UTSMAP',
      platform: 'Android',
    },
    {
      title: 'Web Kasir & POS',
      desc: 'Sistem pencatatan pelanggan, stok barang, dan transaksi kasir berbasis Laravel dan MySQL.',
      tags: ['Laravel', 'PHP', 'SQL'],
      link: 'https://github.com/JoeRscL/UAS',
      platform: 'Web',
    },
    {
      title: 'Smishing Detection AI',
      desc: 'Model machine learning berbasis deep learning untuk mendeteksi pesan SMS phishing (smishing).',
      tags: ['Python', 'Deep Learning'],
      link: 'https://github.com/JoeRscL/SmishingDetection_MachineLearning',
      platform: 'AI/ML',
    },
    {
      title: 'Cursed Priest',
      desc: 'Game first-person survival horror dengan navigasi AI musuh, sistem stamina, inventaris, dan teka-teki.',
      tags: ['Unity 3D', 'C#', 'AI State'],
      link: 'https://joerscl.itch.io/cursed-priest',
      platform: 'Game',
    },
    {
      title: 'Out Of Wood Game',
      desc: 'Game survival horror berbasis eksplorasi untuk mengumpulkan item dan menyelesaikan misi.',
      tags: ['Unity', 'C#'],
      link: 'https://drive.google.com/drive/folders/1wBj-vOoTfey1m58G9oztASJ0dYKhFBEG?usp=sharing',
      platform: 'Game',
    },
    {
      title: 'Design UI/UX Unity HUB',
      desc: 'Prototipe interaktif aplikasi untuk mencari event, mengakses materi belajar, dan berbagi konten.',
      tags: ['Figma', 'Prototyping'],
      link: 'https://www.figma.com/proto/WLGWtsssyJ1lq73Fw3lwPT?node-id=0-1&t=At3KullP3gfr5JMs-6',
      platform: 'UI/UX',
    },
  ],
  skills: [
    {
      category: 'Bahasa Pemrograman',
      icon: Globe,
      items: ['JavaScript', 'PHP', 'Python', 'Kotlin', 'Java', 'C#', 'C++', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      category: 'Framework & Backend',
      icon: Code2,
      items: ['React.js', 'Next.js', 'Laravel', 'Node.js', 'Express.js', 'REST API', 'Firebase', 'Tailwind CSS'],
    },
    {
      category: 'Tools & Platform',
      icon: Terminal,
      items: ['Git', 'Unity 3D', 'Android Studio', 'Figma', 'MySQL', 'Adobe Photoshop', 'Adobe Illustrator'],
    },
  ],
};

const NAV_LINKS = [
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Kontak', href: '#kontak' },
];

const PLATFORM_FILTERS = ['Semua', 'Web', 'Android', 'Game', 'AI/ML', 'UI/UX'];

const PLATFORM_ICONS = {
  Web: Code2,
  Android: Smartphone,
  'AI/ML': Cpu,
  Game: Gamepad2,
  'UI/UX': Palette,
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('Semua');

  const visibleProjects =
    filter === 'Semua'
      ? DATA.projects
      : DATA.projects.filter((project) => project.platform === filter);

  const contacts = [
    {
      label: 'WhatsApp',
      value: '+62 878-7180-6311',
      href: DATA.social.whatsapp,
      icon: MessageCircle,
      external: true,
    },
    {
      label: 'Email',
      value: DATA.social.email,
      href: `mailto:${DATA.social.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'in/jonathansutandar',
      href: DATA.social.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/JoeRscL',
      href: DATA.social.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <>
      <a href="#main" className="skip-link">
        Langsung ke konten utama
      </a>

      <header className="navbar">
        <div className="container nav-inner">
          <a href="#beranda" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-mark" aria-hidden="true">
              JS
            </span>
            <span>{DATA.name}</span>
          </a>

          <nav aria-label="Navigasi utama">
            <ul id="nav-menu" className={`nav-links ${menuOpen ? 'open' : ''}`}>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a
              href={DATA.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cv"
            >
              <Download size={15} aria-hidden="true" />
              CV
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="container">
        <section id="beranda" className="hero" aria-labelledby="hero-heading">
          <div className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>
              {DATA.status} · {DATA.location}
            </span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            Membangun web, Android & game{' '}
            <span className="accent-gradient">yang benar-benar dipakai.</span>
          </h1>

          <p className="hero-subtitle">
            Halo, saya <strong>{DATA.name}</strong> — mahasiswa Informatika di UMN yang fokus pada{' '}
            <strong>Full-Stack Web</strong>, <strong>Android Native</strong>, dan{' '}
            <strong>Game Development</strong>. Kode ditulis bersih, fungsional, dan siap digunakan.
          </p>

          <div className="hero-actions">
            <a href="#proyek" className="btn btn-primary">
              Lihat Proyek
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={DATA.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Download size={17} aria-hidden="true" />
              Unduh CV
            </a>
            <a
              href={DATA.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon"
              aria-label="GitHub Jonathan Sutandar"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={DATA.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon"
              aria-label="LinkedIn Jonathan Sutandar"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Fokus Utama</span>
              <span className="meta-value">Web, Android & Unity 3D</span>
            </div>
            <div>
              <span className="meta-label">Pendidikan</span>
              <span className="meta-value">S1 Informatika · UMN</span>
            </div>
            <div>
              <span className="meta-label">Domisili</span>
              <span className="meta-value">{DATA.location}</span>
            </div>
          </div>
        </section>

        <section id="proyek" className="section" aria-labelledby="proyek-heading">
          <div className="section-head">
            <div>
              <p className="section-eyebrow">01 / Portofolio</p>
              <h2 id="proyek-heading" className="section-title">
                Karya Pilihan
              </h2>
            </div>

            <div className="filter-bar" role="group" aria-label="Filter kategori proyek">
              {PLATFORM_FILTERS.map((platform) => (
                <button
                  key={platform}
                  type="button"
                  className="filter-pill"
                  aria-pressed={filter === platform}
                  onClick={() => setFilter(platform)}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => {
              const Icon = PLATFORM_ICONS[project.platform] || Code2;
              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <div className="project-top">
                    <span className="platform-badge" data-platform={project.platform}>
                      <Icon size={12} aria-hidden="true" />
                      {project.platform}
                    </span>
                    <ArrowUpRight size={18} className="project-arrow" aria-hidden="true" />
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="pengalaman" className="section" aria-labelledby="pengalaman-heading">
          <div className="section-head">
            <div>
              <p className="section-eyebrow">02 / Latar Belakang</p>
              <h2 id="pengalaman-heading" className="section-title">
                Pengalaman & Pendidikan
              </h2>
            </div>
          </div>

          <div className="background-grid">
            <div className="timeline">
              {DATA.experience.map((item) => (
                <article className="timeline-card" key={`${item.role}-${item.period}`}>
                  <div className="timeline-head">
                    <h3 className="timeline-role">{item.role}</h3>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="side-stack">
              <article className="panel">
                <div className="panel-head">
                  <span className="panel-icon" aria-hidden="true">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="panel-title">Pendidikan</h3>
                </div>
                <p className="timeline-role">{DATA.education.school}</p>
                <p className="timeline-org">
                  {DATA.education.degree} · {DATA.education.location}
                </p>
                <span className="timeline-period">{DATA.education.period}</span>
              </article>

              <article className="panel">
                <div className="panel-head">
                  <span className="panel-icon" aria-hidden="true">
                    <Award size={18} />
                  </span>
                  <h3 className="panel-title">Sertifikasi</h3>
                </div>
                <ul className="cert-list">
                  {DATA.certificates.map((cert) => (
                    <li className="cert-item" key={cert.name}>
                      <span className="cert-name">{cert.name}</span>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="keahlian" className="section" aria-labelledby="keahlian-heading">
          <div className="section-head">
            <div>
              <p className="section-eyebrow">03 / Stack</p>
              <h2 id="keahlian-heading" className="section-title">
                Keahlian Teknis
              </h2>
            </div>
          </div>

          <div className="skills-grid">
            {DATA.skills.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.category}>
                  <div className="panel-head">
                    <span className="panel-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <h3 className="panel-title">{group.category}</h3>
                  </div>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="kontak" className="section" aria-labelledby="kontak-heading">
          <div className="section-head">
            <div>
              <p className="section-eyebrow">04 / Kontak</p>
              <h2 id="kontak-heading" className="section-title">
                Mari Terhubung
              </h2>
              <p className="contact-lead">
                Terbuka untuk diskusi proyek web, aplikasi Android, game development, maupun peluang
                magang dan kolaborasi.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="contact-card"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <span className="contact-meta">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {DATA.name}</p>
          <a href="#beranda" className="footer-top">
            Kembali ke atas ↑
          </a>
        </div>
      </footer>
    </>
  );
}
