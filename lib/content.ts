import type { LandingContent, Locale, StatItem } from "@/types/landing";

const partnerItemsId = [
  { name: "Sekolah Mitra", category: "Pendidikan" },
  { name: "Universitas Mitra", category: "Pendidikan Tinggi" },
  { name: "Komunitas Tani Muda", category: "Komunitas" },
  { name: "Sponsor Agribisnis", category: "Industri" },
  { name: "NGO Ketahanan Pangan", category: "Sosial" },
  { name: "Pemerintah Daerah", category: "Kebijakan" },
  { name: "Jaringan Alumni FFI", category: "Alumni" },
  { name: "Mitra Pelatihan", category: "Pengembangan" },
] as const;

const partnerItemsEn = [
  { name: "School Partners", category: "Education" },
  { name: "University Partners", category: "Higher Education" },
  { name: "Young Farmer Community", category: "Community" },
  { name: "Agribusiness Sponsors", category: "Industry" },
  { name: "Food Security NGOs", category: "Social Impact" },
  { name: "Local Government", category: "Policy" },
  { name: "FFI Alumni Network", category: "Alumni" },
  { name: "Training Partners", category: "Capacity Building" },
] as const;

export const LANDING_CONTENT: Record<Locale, LandingContent> = {
  id: {
    nav: {
      brandText: "Future Farmers",
      menuLabel: "Menu",
      languageLabel: "Bahasa",
      links: [
        { href: "/home", label: "Beranda" },
        { href: "/tentang", label: "Tentang" },
        { href: "/program", label: "Program" },
        { href: "/soe-unit", label: "FFI Kitchen" },
        { href: "/berita", label: "Berita" },
        { href: "/kemitraan", label: "Kemitraan" },
        { href: "/kontak", label: "Kontak" },
        { href: "/produk", label: "Produk" },
      ],
      ctaLabel: "Bergabung",
    },
    hero: {
      eyebrow: "Program Beasiswa FFI",
      title: "Mendukung pemimpin pertanian masa depan melalui peluang beasiswa",
      description:
        "Program beasiswa Future Farmers of Indonesia (FFI) mendukung talenta muda di bidang ketahanan pangan dan agritech, khususnya siswa SMP dan SMA yang aktif, berprestasi, dan berdampak di lingkungannya.",
      primaryCta: "Mari daftarkan dirimu",
      secondaryCta: "Lihat program beasiswa",
      imageAlt: "Siswa dan mahasiswa dalam kegiatan belajar bersama",
      overlayTopLabel: "Program Beasiswa",
      overlayTopTitle: "FFI untuk kader berprestasi",
      overlayBottomLabel: "Status Informasi",
      overlayBottomTitle: "SMP & SMA • Akademik • Aktivis",
    },
    statsLabels: {
      levels: "Jenjang Beasiswa",
      coveragePoints: "Poin Cakupan",
      criteriaPoints: "Poin Kriteria",
      languages: "Bahasa Tampilan",
    },
    program: {
      eyebrow: "Program Beasiswa FFI",
      title: "Memberdayakan generasi muda untuk membentuk masa depan pertanian",
      description:
        "Mengadaptasi inti halaman FFI: mendukung kader berprestasi, meningkatkan kapasitas generasi muda, serta memperkuat kolaborasi sponsor dan mitra dalam ekosistem pangan.",
      cards: [
        {
          eyebrow: "Program",
          title: "Mendukung kader FFI yang berprestasi",
          description:
            "Beasiswa untuk kader dengan pencapaian akademik dan non-akademik yang baik serta komitmen pada kepemimpinan dan kontribusi sosial.",
          imageSrc: "/assets/ffi/card-kader.jpg",
          imageAlt: "Kegiatan siswa Future Farmers Indonesia",
          variant: "blue",
        },
        {
          eyebrow: "Pengembangan",
          title: "Meningkatkan kapasitas generasi muda",
          description:
            "Program mendorong penguatan kapasitas calon pemimpin pertanian melalui pengalaman organisasi, inovasi, dan keterlibatan aktif di lingkungan sekitar.",
          imageSrc: "/assets/ffi/card-generasi.jpg",
          imageAlt: "Pelatihan generasi muda untuk pertanian dan pangan",
          variant: "green",
        },
        {
          eyebrow: "Kolaborasi",
          title: "Mendorong partisipasi sponsor dan mitra",
          description:
            "Ekosistem beasiswa diperkuat melalui kolaborasi sekolah, kampus, komunitas, dan mitra industri untuk membuka peluang pendidikan yang berkelanjutan.",
          variant: "deep",
        },
      ],
    },
    coverage: {
      eyebrow: "Cakupan Beasiswa",
      title: "Dukungan biaya studi, riset, dan akses jejaring profesional",
      items: [
        {
          text: "Dukungan biaya pendidikan penuh atau sebagian di universitas mitra.",
        },
        {
          text: "Tunjangan hidup dan dukungan riset/tesis untuk menunjang studi mahasiswa.",
        },
        {
          text: "Peluang magang dan akses jaringan profesional di sektor agribisnis dan pangan.",
        },
      ],
      asideTag: "Mengapa penting",
      asideTitle:
        "Talenta muda pertanian membutuhkan jalur pembinaan yang jelas, terjangkau, dan terhubung dengan praktik nyata.",
      asideDescription:
        "Desain versi modern ini menekankan kejelasan informasi dan ritme section agar calon pendaftar maupun mitra dapat memahami program lebih cepat.",
      asideCta: "Mulai dari informasi pendaftaran",
    },
    criteria: {
      eyebrow: "Kriteria Seleksi",
      title: "Persyaratan dasar untuk jenjang SMP dan SMA",
      description:
        "Konten dirapikan dari halaman referensi FFI agar lebih mudah dipindai tanpa mengubah makna utama.",
      groups: [
        {
          badge: "SMP",
          title: "Beasiswa Sekolah Menengah Pertama",
          variant: "blue",
          items: [
            "Siswa kelas 9 (SMP) yang aktif terlibat dalam program Future Farmers Indonesia (FFI).",
            "Menunjukkan prestasi akademik dan non-akademik yang baik.",
            "Memiliki minat terhadap kepemimpinan dan aktif sebagai penggerak/aktivis di lingkungan sekitar.",
          ],
        },
        {
          badge: "SMA",
          title: "Beasiswa Sekolah Menengah Atas",
          variant: "green",
          items: [
            "Siswa kelas 12 (SMA) yang telah aktif sebagai anggota FFI.",
            "Memberikan kontribusi inovasi di bidang pertanian dan pangan.",
            "Memenuhi persyaratan nilai minimum sesuai kategori beasiswa.",
            "Memiliki proyek atau penelitian terkait pertanian, agriteknologi, atau ketahanan pangan.",
            "Memiliki minat kepemimpinan dan aktif memberi dampak di lingkungan sekitar.",
          ],
        },
      ],
    },
    partners: {
      eyebrow: "Mitra dan Ekosistem",
      title: "Kolaborasi lintas institusi untuk memperluas dampak program",
      description:
        "Contoh partner cards (demo) untuk menunjukkan pola visual dan slot kolaborasi di landing page.",
      items: partnerItemsId.map((item) => ({ ...item })),
    },
    faq: {
      eyebrow: "Pertanyaan Umum",
      title: "FAQ pendaftaran program beasiswa FFI",
      description:
        "Ringkasan jawaban untuk pertanyaan yang paling sering muncul dari calon peserta dan pendamping.",
      items: [
        {
          question: "Siapa yang dapat mendaftar program ini?",
          answer:
            "Program ini ditujukan untuk kader FFI pada jenjang SMP dan SMA yang memenuhi kriteria sesuai kategori beasiswa, termasuk aspek keaktifan, prestasi, dan kepemimpinan.",
        },
        {
          question: "Apa saja cakupan dukungan beasiswa?",
          answer:
            "Cakupan utama mencakup dukungan biaya pendidikan (penuh/sebagian), tunjangan pendukung studi, serta akses magang dan jejaring profesional pada sektor agribisnis dan pangan.",
        },
        {
          question: "Dokumen apa yang biasanya disiapkan?",
          answer:
            "Secara umum calon pendaftar perlu menyiapkan data diri, bukti keaktifan/keanggotaan FFI, rekam prestasi, nilai akademik, serta portofolio proyek atau aktivitas kepemimpinan jika tersedia.",
        },
        {
          question: "Bagaimana proses seleksinya?",
          answer:
            "Proses seleksi biasanya mengikuti tahapan administrasi, penilaian prestasi dan kontribusi, lalu evaluasi lanjutan sesuai kebutuhan program. Detail teknis mengikuti pengumuman resmi FFI.",
        },
        {
          question: "Apakah halaman ini form pendaftaran resmi FFI?",
          answer:
            "Belum. Halaman ini adalah versi recreate modern (demo UI) untuk kebutuhan desain dan pengembangan. Form email di bawah tidak mengirim data ke server FFI.",
        },
      ],
    },
    cta: {
      eyebrow: "Mari daftarkan dirimu",
      title: "Bergabung dengan FFI dan buka peluang beasiswa pertanian",
      description:
        "Tinggalkan email untuk simulasi minat pendaftaran. Ini hanya demonstrasi antarmuka dan belum terhubung ke sistem pendaftaran resmi.",
      label: "Masukkan email anda",
      placeholder: "email-kamu@contoh.com",
      buttonText: "Mari bergabung menjadi FFI",
      helperText: "Demo form untuk prototype landing page modern.",
      invalidEmailMessage: "Masukkan email yang valid untuk melanjutkan.",
      successMessage: "Terima kasih. Ini demo UI, jadi data tidak dikirim ke server.",
    },
    footer: {
      mission:
        "Memberdayakan generasi muda untuk membentuk masa depan pertanian.",
      columns: [
        {
          title: "Navigasi",
          links: [
            { label: "Beranda", href: "/home" },
            { label: "Tentang", href: "/tentang" },
            { label: "Program", href: "/program" },
            { label: "Berita", href: "/berita" },
            { label: "Kemitraan", href: "/kemitraan" },
            { label: "Kontak", href: "/kontak" },
            { label: "Produk", href: "/produk" },
          ],
        },
        {
          title: "Kontak",
          links: [
            { label: "info@futurefarmers.id", href: "mailto:info@futurefarmers.id" },
            {
              label: "WhatsApp",
              href: "https://wa.me/6282124008250",
              external: true,
            },
          ],
        },
      ],
      copyrightLabel: "All rights reserved.",
    },
  },
  en: {
    nav: {
      brandText: "Future Farmers",
      menuLabel: "Menu",
      languageLabel: "Language",
      links: [
        { href: "/home", label: "Home" },
        { href: "/tentang", label: "About" },
        { href: "/program", label: "Programs" },
        { href: "/soe-unit", label: "FFI Kitchen" },
        { href: "/berita", label: "News" },
        { href: "/kemitraan", label: "Partnerships" },
        { href: "/kontak", label: "Contact" },
        { href: "/produk", label: "Products" },
      ],
      ctaLabel: "Join",
    },
    hero: {
      eyebrow: "FFI Scholarship Program",
      title: "Supporting future agriculture leaders through scholarship opportunities",
      description:
        "The Future Farmers of Indonesia (FFI) scholarship program supports young talents in food security and agritech, especially junior and senior high school students who are active, high-achieving, and community-oriented.",
      primaryCta: "Register your interest",
      secondaryCta: "View scholarship program",
      imageAlt: "Students learning together in a collaborative session",
      overlayTopLabel: "Scholarship Program",
      overlayTopTitle: "FFI for high-achieving youth members",
      overlayBottomLabel: "Focus Areas",
      overlayBottomTitle: "Junior & Senior High • Academic • Leadership",
    },
    statsLabels: {
      levels: "Scholarship Levels",
      coveragePoints: "Coverage Items",
      criteriaPoints: "Criteria Points",
      languages: "Display Languages",
    },
    program: {
      eyebrow: "FFI Scholarship Program",
      title: "Empowering young people to shape the future of agriculture",
      description:
        "This redesign preserves the core ideas from the FFI reference page: supporting high-performing members, building youth capacity, and strengthening sponsor and partner collaboration.",
      cards: [
        {
          eyebrow: "Program",
          title: "Supporting high-achieving FFI members",
          description:
            "Scholarships for youth members with strong academic and non-academic track records, plus commitment to leadership and social contribution.",
          imageSrc: "/assets/ffi/card-kader.jpg",
          imageAlt: "Future Farmers Indonesia student activities",
          variant: "blue",
        },
        {
          eyebrow: "Capacity Building",
          title: "Strengthening youth capacity",
          description:
            "The program nurtures future agriculture leaders through organizational experience, innovation, and meaningful community involvement.",
          imageSrc: "/assets/ffi/card-generasi.jpg",
          imageAlt: "Youth training activities for agriculture and food topics",
          variant: "green",
        },
        {
          eyebrow: "Partnership",
          title: "Encouraging sponsor and partner participation",
          description:
            "The scholarship ecosystem grows stronger when schools, universities, communities, and industry partners collaborate sustainably.",
          variant: "deep",
        },
      ],
    },
    coverage: {
      eyebrow: "Scholarship Coverage",
      title: "Study support, research support, and professional network access",
      items: [
        {
          text: "Full or partial tuition support at partner universities.",
        },
        {
          text: "Living allowance and research/thesis support to strengthen academic progress.",
        },
        {
          text: "Internship opportunities and access to professional networks in agribusiness and food sectors.",
        },
      ],
      asideTag: "Why it matters",
      asideTitle:
        "Young agriculture talents need a clear, affordable pathway that connects learning with real-world practice.",
      asideDescription:
        "This modern version prioritizes clarity, scannable content, and stronger CTA hierarchy for applicants and potential partners.",
      asideCta: "Start with registration info",
    },
    criteria: {
      eyebrow: "Selection Criteria",
      title: "Core eligibility requirements for junior and senior high levels",
      description:
        "The criteria below are reorganized from the FFI reference page for better readability while preserving the original intent.",
      groups: [
        {
          badge: "Junior High",
          title: "Junior High Scholarship",
          variant: "blue",
          items: [
            "9th grade junior high students actively involved in the Future Farmers Indonesia (FFI) program.",
            "Demonstrated academic and non-academic achievements.",
            "Strong interest in leadership and active contribution/activism in their local environment.",
          ],
        },
        {
          badge: "Senior High",
          title: "Senior High Scholarship",
          variant: "green",
          items: [
            "12th grade senior high students actively participating as FFI members.",
            "Meaningful innovation contribution in agriculture or food-related work.",
            "Meet minimum academic score requirements based on scholarship category.",
            "Have a project or research related to agriculture, agritech, or food security.",
            "Show leadership potential and active local impact.",
          ],
        },
      ],
    },
    partners: {
      eyebrow: "Partners & Ecosystem",
      title: "Cross-institution collaboration to expand program impact",
      description:
        "Demo partner cards to show the visual layout and collaboration slots in this landing page concept.",
      items: partnerItemsEn.map((item) => ({ ...item })),
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "FFI scholarship program registration FAQ",
      description:
        "Quick answers to common questions from applicants, parents, and school mentors.",
      items: [
        {
          question: "Who can apply for this program?",
          answer:
            "The program is intended for FFI youth members at junior and senior high levels who meet the relevant criteria, including participation, achievements, and leadership indicators.",
        },
        {
          question: "What does the scholarship support cover?",
          answer:
            "Core support includes tuition assistance (full/partial), study-related allowances, and access to internships and professional networks in agribusiness and food sectors.",
        },
        {
          question: "What documents are typically required?",
          answer:
            "Applicants generally prepare personal information, proof of FFI participation/membership, achievement records, academic grades, and project or leadership portfolios if available.",
        },
        {
          question: "How does the selection process work?",
          answer:
            "Selection usually includes administrative screening, evaluation of achievements and contributions, and additional review stages depending on program needs. Follow official FFI announcements for exact steps.",
        },
        {
          question: "Is this the official FFI registration form?",
          answer:
            "Not yet. This page is a modern recreate concept (UI demo) for design and development purposes. The email form below does not submit data to FFI servers.",
        },
      ],
    },
    cta: {
      eyebrow: "Register your interest",
      title: "Join FFI and unlock agriculture scholarship opportunities",
      description:
        "Leave your email to simulate a registration interest flow. This is a UI demonstration and is not connected to the official enrollment system.",
      label: "Enter your email",
      placeholder: "your-email@example.com",
      buttonText: "Join FFI",
      helperText: "Demo form for the modern landing page prototype.",
      invalidEmailMessage: "Please enter a valid email address.",
      successMessage: "Thank you. This is a UI demo, so no data is sent to a server.",
    },
    footer: {
      mission:
        "Empowering young people to shape the future of agriculture.",
      columns: [
        {
          title: "Navigation",
          links: [
            { label: "Home", href: "/home" },
            { label: "About", href: "/tentang" },
            { label: "Programs", href: "/program" },
            { label: "News", href: "/berita" },
            { label: "Partnerships", href: "/kemitraan" },
            { label: "Contact", href: "/kontak" },
            { label: "Products", href: "/produk" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: "info@futurefarmers.id", href: "mailto:info@futurefarmers.id" },
            {
              label: "WhatsApp",
              href: "https://wa.me/6282124008250",
              external: true,
            },
          ],
        },
      ],
      copyrightLabel: "All rights reserved.",
    },
  },
};

export function getDerivedStats(content: LandingContent): StatItem[] {
  const levelCount = content.criteria.groups.length;
  const coverageCount = content.coverage.items.length;
  const criteriaCount = content.criteria.groups.reduce(
    (sum, group) => sum + group.items.length,
    0,
  );
  const languageCount = 2;

  return [
    { value: levelCount, label: content.statsLabels.levels },
    { value: coverageCount, label: content.statsLabels.coveragePoints },
    { value: criteriaCount, label: content.statsLabels.criteriaPoints },
    { value: languageCount, label: content.statsLabels.languages },
  ];
}
