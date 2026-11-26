import {
  Code2,
  Cpu,
  Gamepad2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Smartphone,
  Terminal,
} from 'lucide-react';

export const PORTFOLIO_DATA = {
  name: 'Jonathan Sutandar',
  initials: 'JS',
  role: 'Web, Android, Game & AI Developer',
  location: 'Tangerang, Indonesia',
  status: 'Terbuka untuk magang & proyek lepas',
  headline: 'Saya membangun aplikasi web, Android, game 3D, dan model AI.',
  heroSummary:
    'Saya Jonathan Sutandar, mahasiswa Informatika di Universitas Multimedia Nusantara. Di sini Anda bisa melihat aplikasi, kode, dan build game yang sudah saya kerjakan.',
  about: {
    lead: 'Saya belajar dengan cara langsung membangun proyek nyata, dari sistem kasir berbasis Laravel hingga game horor 3D di Unity.',
    paragraphs: [
      'Saat ini saya menempuh kuliah S1 Informatika di UMN (angkatan 2023). Ketertarikan saya tersebar di beberapa bidang: membuat antarmuka web dengan React, menulis aplikasi Android native memakai Kotlin, menyusun logika AI musuh di Unity 3D, serta melatih model klasifikasi teks dengan Python.',
      'Selain menulis kode, saya pernah memimpin tim admin entri produk di PT Sariling Aneka Energi, menjadi mentor mahasiswa baru di UMN, dan mengelola anggaran acara di atas Rp300 juta sebagai bendahara Mister & Miss UMN 2025. Pengalaman itu membiasakan saya bekerja rapi dengan tenggat, dokumen, dan koordinasi lintas tim.',
    ],
    highlights: [
      { label: 'Fokus Utama', value: 'Web, Android, Game 3D & AI/ML' },
      { label: 'Pendidikan', value: 'S1 Informatika · UMN (2023–2027)' },
      { label: 'Domisili', value: 'Tangerang, Indonesia' },
      { label: 'Bahasa Kerja', value: 'Indonesia & Inggris' },
    ],
  },
  social: {
    github: 'https://github.com/JoeRscL',
    linkedin: 'https://www.linkedin.com/in/jonathansutandar/',
    email: 'jonathan20strada@gmail.com',
    whatsapp: 'https://wa.me/6287871806311',
    resume: '/resume.pdf',
  },
  disciplines: [
    {
      id: 'Web',
      title: 'Web Development',
      stack: 'React, Next.js, Laravel, MySQL',
      detail: 'Membuat antarmuka web dengan React, integrasi API, dan sistem transaksi berbasis Laravel.',
      icon: Code2,
    },
    {
      id: 'Android',
      title: 'Android Native',
      stack: 'Kotlin, Firebase, XML',
      detail: 'Menulis aplikasi Android native berbahasa Kotlin dengan sinkronisasi Firebase Realtime Database.',
      icon: Smartphone,
    },
    {
      id: 'Game',
      title: 'Game Development',
      stack: 'Unity 3D, C#, NavMesh',
      detail: 'Menyusun mekanik first-person, state machine AI musuh, dan puzzle lingkungan di Unity.',
      icon: Gamepad2,
    },
    {
      id: 'AI/ML',
      title: 'Machine Learning',
      stack: 'Python, Deep Learning',
      detail: 'Melatih model klasifikasi teks berbasis Python untuk mendeteksi pesan SMS penipuan.',
      icon: Cpu,
    },
  ],
  experience: [
    {
      role: 'Treasurer',
      org: 'Mister & Miss UMN 2025',
      type: 'Organisasi',
      period: 'Feb 2025 – Des 2025',
      desc: 'Mengelola anggaran acara di atas Rp300 juta untuk 5 segmen utama. Menyusun RAB untuk 12 divisi, menyiapkan laporan PDPAK sesuai aturan internal dan sponsor, serta bernegosiasi dengan vendor bersama divisi Logistik dan Fundraising.',
    },
    {
      role: 'Team Admin Leader',
      org: 'PT Sariling Aneka Energi',
      type: 'Pengalaman Kerja',
      period: 'Jun 2024 – Agu 2024',
      desc: 'Mengelola entri data produk dan pembaruan stok di platform e-commerce pemerintah (E-Katalog), serta mengatur daftar produk agar ketersediaan barang tetap akurat.',
    },
    {
      role: 'Mentor',
      org: 'Character Building Mentoring UMN',
      type: 'Organisasi',
      period: 'Mar 2024 – Sep 2024',
      desc: 'Membimbing mahasiswa baru beradaptasi dengan budaya kampus, memimpin aktivitas kelompok, dan membawakan materi pelatihan soft-skills selama sesi mentoring.',
    },
    {
      role: 'Graphic Design',
      org: 'PT Sariling Aneka Energi',
      type: 'Pengalaman Kerja',
      period: 'Okt 2022 – Des 2022',
      desc: 'Merancang kartu nama dan konten feed Instagram untuk kebutuhan materi visual perusahaan.',
    },
  ],
  education: {
    school: 'Universitas Multimedia Nusantara',
    degree: 'S1 Informatika, Gading Serpong',
    period: 'Agu 2023 – Agu 2027',
  },
  certificates: [
    { name: 'HCIA-openGauss V1.0 (Database Fundamentals)', issuer: 'Huawei' },
    { name: 'HCIA-AI V3.5 (Artificial Intelligence)', issuer: 'Huawei' },
    { name: 'Python Intermediate', issuer: 'Sololearn' },
    { name: 'Introduction to Python', issuer: 'Sololearn' },
  ],
  projects: [
    {
      title: 'Cursed Priest',
      year: '2024',
      platform: 'Game',
      featured: true,
      desc: 'Game survival horror first-person buatan saya di Unity 3D. Pemain harus memecahkan teka-teki lingkungan sambil menghindari musuh yang berpatroli dan mengejar.',
      tags: ['Unity 3D', 'C#', 'NavMesh'],
      link: 'https://joerscl.itch.io/cursed-priest',
      ctaLabel: 'Mainkan di itch.io',
      problem: 'Musuh dengan rute statis mudah dihafal pemain sehingga ketegangan horor cepat hilang.',
      solution:
        'Saya menulis state machine AI musuh (patrol, detect, chase) memakai NavMesh di C#, ditambah sistem stamina, inventaris, dan interaksi puzzle.',
      result: 'Build playable sudah dirilis di itch.io dan dapat dimainkan langsung.',
      previewMeta: ['Unity 3D · C#', 'NavMesh AI State Machine', 'Playable di itch.io'],
    },
    {
      title: 'North Sumatra Heritage',
      year: '2024',
      platform: 'Web',
      desc: 'Portal informasi budaya Sumatera Utara yang saya bangun dengan React dan Bootstrap, mengambil data konten secara dinamis dari API eksternal.',
      tags: ['React', 'API', 'Bootstrap'],
      link: 'https://uas-pti-2024.vercel.app/',
      ctaLabel: 'Buka Situs',
      problem: 'Konten budaya daerah sering tampil dalam halaman statis yang kurang nyaman dibaca di ponsel.',
      solution:
        'Memecah tampilan menjadi komponen React yang dapat dipakai ulang dan menghubungkannya ke API eksternal agar konten termuat dinamis.',
      result: 'Situs sudah online di Vercel dan menyesuaikan ukuran layar desktop maupun ponsel.',
    },
    {
      title: 'MindNest APP',
      year: '2024',
      platform: 'Android',
      desc: 'Aplikasi Android native untuk mencatat jadwal tugas dan pengingat harian, tersinkronisasi langsung dengan Firebase Realtime Database.',
      tags: ['Kotlin', 'Firebase', 'XML'],
      link: 'https://github.com/JoeRscL/UTSMAP',
      ctaLabel: 'Lihat Repositori',
      problem: 'Catatan tugas di perangkat lokal tidak ikut tersimpan jika pengguna berganti sesi.',
      solution:
        'Membangun antarmuka XML yang mudah dinavigasi dengan logika Kotlin serta menghubungkannya ke Firebase Realtime Database untuk menyimpan dan mengambil daftar tugas.',
      result: 'Operasi tambah, baca, dan sinkronisasi tugas berjalan real-time.',
    },
    {
      title: 'Web Kasir & POS',
      year: '2024',
      platform: 'Web',
      desc: 'Aplikasi kasir berbasis web untuk mencatat data pelanggan, memantau stok barang, dan memproses transaksi penjualan menggunakan Laravel dan MySQL.',
      tags: ['Laravel', 'PHP', 'MySQL'],
      link: 'https://github.com/JoeRscL/UAS',
      ctaLabel: 'Lihat Repositori',
      problem: 'Pencatatan stok dan transaksi yang terpisah sering menimbulkan selisih jumlah barang saat rekap.',
      solution:
        'Merancang skema database relasional MySQL dan alur transaksi Laravel sehingga stok barang otomatis berkurang setiap penjualan tersimpan.',
      result: 'Proses input barang, pencatatan pelanggan, hingga rekap transaksi terhubung dalam satu aplikasi.',
    },
    {
      title: 'Smishing Detection AI',
      year: '2024',
      platform: 'AI/ML',
      desc: 'Eksperimen model deep learning berbahasa Python untuk membedakan SMS normal dan SMS penipuan (smishing).',
      tags: ['Python', 'Deep Learning'],
      link: 'https://github.com/JoeRscL/SmishingDetection_MachineLearning',
      ctaLabel: 'Lihat Repositori',
      problem: 'Pola kata dalam SMS penipuan terus berubah sehingga penyaringan kata kunci biasa sering terlewat.',
      solution:
        'Menyiapkan tahap pembersihan dan prapemrosesan teks, lalu melatih model klasifikasi deep learning di Python.',
      result: 'Notebook eksperimen dan kode pelatihan model tersedia di GitHub.',
    },
    {
      title: 'Out Of Wood Game',
      year: '2023',
      platform: 'Game',
      desc: 'Game eksplorasi survival horror di Unity dengan fokus pada pencarian item kunci di area gelap.',
      tags: ['Unity', 'C#'],
      link: 'https://drive.google.com/drive/folders/1wBj-vOoTfey1m58G9oztASJ0dYKhFBEG?usp=sharing',
      ctaLabel: 'Akses Build',
      problem: 'Pemain perlu memahami arah misi eksplorasi tanpa harus membaca tutorial panjang.',
      solution:
        'Menyusun progresi pengumpulan item kunci dan pencahayaan gelap di Unity melalui skrip C#.',
      result: 'Build game dapat diunduh melalui Google Drive untuk diuji coba.',
    },
    {
      title: 'Design UI/UX Unity HUB',
      year: '2024',
      platform: 'UI/UX',
      desc: 'Prototipe antarmuka Figma untuk membantu anggota komunitas mencari jadwal event, membaca materi belajar, dan mengunggah konten.',
      tags: ['Figma', 'Prototyping'],
      link: 'https://www.figma.com/proto/WLGWtsssyJ1lq73Fw3lwPT?node-id=0-1&t=At3KullP3gfr5JMs-6',
      ctaLabel: 'Buka Prototipe',
      problem: 'Jadwal acara dan materi belajar komunitas tersebar di beberapa platform berbeda.',
      solution:
        'Merancang alur pencarian event, halaman materi, dan form unggah konten dalam satu prototipe interaktif Figma.',
      result: 'Prototipe dapat diklik untuk menguji alur navigasi pengguna.',
    },
  ],
  skills: [
    {
      category: 'Bahasa Pemrograman',
      summary: 'Bahasa yang saya pakai untuk membangun web, aplikasi Android, game Unity, dan skrip Python.',
      icon: Globe,
      items: ['JavaScript', 'PHP', 'Python', 'Kotlin', 'Java', 'C#', 'C++', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      category: 'Framework & Backend',
      summary: 'Framework dan layanan backend yang saya gunakan di proyek web dan mobile.',
      icon: Code2,
      items: ['React.js', 'Next.js', 'Laravel', 'Node.js', 'Express.js', 'REST API', 'Firebase', 'Tailwind CSS'],
    },
    {
      category: 'Tools & Platform',
      summary: 'Perangkat pengembangan, desain antarmuka, dan manajemen basis data.',
      icon: Terminal,
      items: ['Git', 'Unity 3D', 'Android Studio', 'Figma', 'MySQL', 'Adobe Photoshop', 'Adobe Illustrator'],
    },
  ],
};

export const NAV_LINKS = [
  { id: 'tentang', label: 'Tentang', href: '#tentang' },
  { id: 'proyek', label: 'Proyek', href: '#proyek' },
  { id: 'pengalaman', label: 'Pengalaman', href: '#pengalaman' },
  { id: 'keahlian', label: 'Keahlian', href: '#keahlian' },
  { id: 'kontak', label: 'Kontak', href: '#kontak' },
];

export const PLATFORM_FILTERS = ['Semua', 'Web', 'Android', 'Game', 'AI/ML', 'UI/UX'];

export const PLATFORM_ICONS = {
  Web: Code2,
  Android: Smartphone,
  'AI/ML': Cpu,
  Game: Gamepad2,
  'UI/UX': Palette,
};

export const CONTACTS = [
  {
    label: 'WhatsApp',
    value: '+62 878-7180-6311',
    href: PORTFOLIO_DATA.social.whatsapp,
    icon: MessageCircle,
    external: true,
  },
  {
    label: 'Email',
    value: PORTFOLIO_DATA.social.email,
    href: `mailto:${PORTFOLIO_DATA.social.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jonathansutandar',
    href: PORTFOLIO_DATA.social.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/JoeRscL',
    href: PORTFOLIO_DATA.social.github,
    icon: Github,
    external: true,
  },
];
