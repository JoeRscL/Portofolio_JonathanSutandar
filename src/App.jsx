import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  Code2, 
  Smartphone,
  Download,
  Briefcase,
  Globe,
  Terminal,
  Mail,
  MessageCircle,
  Home,
  Layers,
  Cpu
} from 'lucide-react'

const DATA = {
  name: "Jonathan Sutandar",
  role: "Frontend Developer",
  location: "Tangerang, Indonesia",
  status: "Available for projects and works",
  about: "Informatics Student passionate about Game Dev, Machine Learning, Mobile Application and Web Development. Building functional, user-friendly applications with modern tech.",
  
  social: {
    github: "https://github.com/JoeRscL",
    linkedin: "https://www.linkedin.com/in/jonathansutandar/",
    email: "jonathan20strada@gmail.com",
    whatsapp: "https://wa.me/6287871806311"
  },

  experience: [
    {
      role: "Admin",
      company: "PT Sariling Aneka Energi",
      period: "Jun 2024 - Aug 2024",
      desc: "Mengupload produk kedalam e-commerce pemerintahan dan bertanggung jawab dalam pendataan serta pengelolaan stok barang."
    },
    {
      role: "Graphic Design",
      company: "PT Sariling Aneka Energi",
      period: "Okt 2022 - Des 2022",
      desc: "Membuat desain kartu nama, post feeds Instagram, dan memimpin tim dengan deadline ketat untuk sebuah project visual."
    }
  ],

  projects: [
    {
      title: "North Sumatra Heritage",
      desc: "Portal budaya interaktif yang memvisualisasikan kekayaan Sumatera Utara.",
      tags: ["HTML", "React", "API"],
      link: "https://uas-pti-2024.vercel.app/",
      featured: true 
    },
    {
      title: "MindNest APP",
      desc: "Aplikasi Android reminder untuk input task atau kegiatan sehari-hari.",
      tags: ["Kotlin", "Java"],
      link: "https://github.com/JoeRscL/UTSMAP",
      featured: false
    },
     {
      title: "Web Kasir & POS",
      desc: "Sistem pencatatan data pelanggan, stok barang, dan transaksi database.",
      tags: ["Laravel", "PHP", "SQL"],
      link: "https://github.com/JoeRscL/UAS",
      featured: true 
    },
    {
      title: "Smishing Detection AI",
      desc: "Machine Learning mendeteksi Smishing menggunakan Deep Learning & Explainable AI.",
      tags: ["Python", "AI/ML"],
      link: "https://github.com/JoeRscL/SmishingDetection_MachineLearning",
      featured: true 
    },
    {
      title: "Out Of Wood Game",
      desc: "Game horor survival: kumpulkan item untuk menyelesaikan misi.",
      tags: ["C#", "Unity"],
      link: "https://drive.google.com/drive/folders/1wBj-vOoTfey1m58G9oztASJ0dYKhFBEG?usp=sharing",
      featured: true 
    }
  ],
  
  skills: [
    {
      category: "Languages",
      icon: Globe,
      items: ["HTML5", "CSS3", "JavaScript", "Java", "Python", "PHP", "C++", "C#", "Kotlin", "SQL"]
    },
    {
      category: "Frameworks & Libs",
      icon: Code2,
      items: ["React.js", "Next.js", "Node.js", "Laravel", "Tailwind CSS"]
    },
    {
      category: "Tools & Platforms",
      icon: Terminal,
      items: ["Git", "Figma", "Adobe Photoshop", "Unity", "Adobe Illustrator", "Android Studio"]
    }
  ]
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: Layers, href: '#projects' },
    { name: 'Skills', icon: Cpu, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: '30px', // JARAK DARI ATAS LAYAR (Lebih turun)
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        gap: '24px', // JARAK ANTAR MENU (Lebih renggang)
        padding: '14px 32px', // UKURAN KOTAK NAVBAR (Lebih besar/lega)
        background: 'rgba(255, 255, 255, 0.05)', // Lebih transparan sedikit
        backdropFilter: 'blur(12px)',
        borderRadius: '100px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}
    >
      {navLinks.map((item, index) => (
        <a 
          key={index} 
          href={item.href}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#cbd5e1',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#cbd5e1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <item.icon size={18} />
          {/* Teks hanya muncul di layar besar agar tidak sempit di HP, 
              tapi untuk sekarang saya biarkan muncul sesuai request */}
          <span className="nav-text">{item.name}</span> 
        </a>
      ))}
    </motion.nav>
  )
}

const ListItem = ({ title, subtitle, period, desc, icon: Icon }) => (
  <div style={{ 
    display: 'flex', 
    gap: '20px', 
    padding: '24px 0', 
    borderBottom: '1px solid rgba(255,255,255,0.05)'
  }}>
    <div style={{ 
      minWidth: '48px', height: '48px', borderRadius: '12px', 
      background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', border: '1px solid rgba(255,255,255,0.1)'
    }}>
      <Icon size={20} />
    </div>
    <div>
      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{title}</h4>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
        <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{subtitle}</span>
        <span style={{ width: '4px', height: '4px', background: '#333', borderRadius: '50%' }}></span>
        <span style={{ color: '#525252', fontSize: '0.85rem' }}>{period}</span>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{desc}</p>
    </div>
  </div>
)

const ContactCard = ({ icon: Icon, title, value, link, color }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="glass-card" style={{
    display: 'flex', alignItems: 'center', gap: '16px', padding: '20px',
    textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer'
  }}>
    <div style={{
      width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: color
    }}>
      <Icon size={20} />
    </div>
    <div>
      <span style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '2px' }}>{title}</span>
      <span style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>{value}</span>
    </div>
  </a>
)

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <div className="aurora-container">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
      </div>

      {/* PADDING TOP DIUBAH DARI 100px JADI 180px AGAR JARAK DENGAN NAVBAR LEGA */}
      <main className="container" style={{ paddingBottom: '100px', paddingTop: '180px' }}>
        
        <section style={{ marginBottom: '100px', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '100px', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <span style={{ marginRight: '8px' }}>●</span>
              {DATA.status}
            </div>

            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}>
              <span className="text-gradient">Designing the</span><br />
              <span className="text-gradient-blue">Future Web.</span>
            </h1>
            
            <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', fontSize: '1.2rem', color: '#94a3b8' }}>
              Hi, I'm <b>{DATA.name}</b>. {DATA.about}
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="src\assets\CV_JonathanSutandar (2).pdf" download className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={18} /> CV
              </a>
            </div>
          </motion.div>
        </section>

        <motion.div 
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px auto', scrollMarginTop: '150px' }}
        >
           <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: '#fff', textAlign: 'center' }}>Work Experience</h3>
          <div className="glass-card" style={{ padding: '10px 30px' }}>
            {DATA.experience.map((exp, i) => (
              <ListItem key={i} title={exp.role} subtitle={exp.company} period={exp.period} desc={exp.desc} icon={Briefcase} />
            ))}
          </div>
        </motion.div>

        <section id="projects" style={{ marginBottom: '100px', scrollMarginTop: '150px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: '#fff', textAlign: 'center' }}>Selected Projects</h3>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '24px', 
            justifyContent: 'center' 
          }}>
            {DATA.projects.map((project, index) => (
              <motion.a 
                href={project.link}
                target="_blank"
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card"
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex', flexDirection: 'column',
                  padding: '32px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
                  width: '100%',
                  maxWidth: '400px', 
                  flex: '1 1 350px' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                  <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: '#60a5fa' }}>
                    {project.featured ? <Smartphone size={24} /> : <Code2 size={24} />}
                  </div>
                  <ArrowUpRight size={20} color="#525252" />
                </div>
                
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>{project.desc}</p>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-pill">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="skills" style={{ marginBottom: '100px', maxWidth: '800px', margin: '0 auto', scrollMarginTop: '150px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: '#fff', textAlign: 'center' }}>Technical Skills</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {DATA.skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card"
                style={{ padding: '24px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <skillGroup.icon size={20} color="#60a5fa" />
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>{skillGroup.category}</h4>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {skillGroup.items.map((item, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.9rem', 
                      padding: '8px 16px', 
                      background: 'rgba(255,255,255,0.03)', 
                      borderRadius: '8px', 
                      color: '#cbd5e1', 
                      border: '1px solid rgba(255,255,255,0.08)' 
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ marginBottom: '60px', scrollMarginTop: '150px' }}>
           <h3 style={{ fontSize: '1.5rem',marginTop:'100px', marginBottom: '32px', color: '#fff', textAlign: 'center' }}>Get in Touch</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <ContactCard 
                icon={MessageCircle} 
                title="Chat on WhatsApp" 
                value="087871806311" 
                link={DATA.social.whatsapp}
                color="#22c55e" 
              />
              <ContactCard 
                icon={Mail} 
                title="Send an Email" 
                value="jonathan20strada@gmail.com" 
                link={DATA.social.email}
                color="#3b82f6" 
              />
              <ContactCard 
                icon={Linkedin} 
                title="Professional Network" 
                value="Connect on LinkedIn" 
                link={DATA.social.linkedin}
                color="#0a66c2" 
              />
              <ContactCard 
                icon={Github} 
                title="Code Repository" 
                value="Check my Repos" 
                link={DATA.social.github}
                color="#fff" 
              />
           </div>
        </section>

        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', textAlign: 'center', color: '#525252' }}>
          <p>© 2025 {DATA.name}</p>
        </footer>

      </main>
    </div>
  )
}

export default App