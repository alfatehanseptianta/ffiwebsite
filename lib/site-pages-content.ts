import type { Locale } from "@/types/landing";
import type { SitePageContent, SitePageKey } from "@/types/site-pages";

export const SITE_PAGES_CONTENT: Record<SitePageKey, Record<Locale, SitePageContent>> = {
  tentang: {
    id: {
      hero: {
        eyebrow: "Tentang Future Farmers of Indonesia",
        title: "Future Farmers of Indonesia (FFI)",
        description:
          "FFI adalah organisasi yang memberdayakan generasi muda untuk membentuk masa depan pertanian melalui inovasi, kolaborasi, pendidikan, dan pengalaman praktik yang relevan.",
        imageSrc: "/assets/ffi/hero-students.jpg",
        imageAlt: "Aktivitas pelajar dalam lingkungan pembelajaran kolaboratif",
        badges: ["Menanam Inovasi, Memanen Pemimpin", "Komunitas Pelajar", "Pertanian Berkelanjutan"],
        actions: [
          { label: "Lihat Program", href: "/program", variant: "primary" },
          { label: "Hubungi Kami", href: "/kontak", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "FFI", label: "Identitas Komunitas" },
        { value: "Youth-led", label: "Pendekatan" },
        { value: "Agri & Food", label: "Fokus Utama" },
      ],
      blocks: [
        {
          type: "prose",
          id: "latar-belakang",
          eyebrow: "Latar Belakang FFI",
          title: "Membangun ruang tumbuh bagi inovator pertanian muda Indonesia",
          paragraphs: [
            "Future Farmers of Indonesia hadir sebagai platform pengembangan talenta muda yang tertarik pada pertanian, ketahanan pangan, dan inovasi berbasis komunitas.",
            "Pendekatan FFI menekankan kolaborasi lintas sekolah, pendampingan, pelatihan, dan pengalaman nyata agar siswa tidak hanya memahami teori, tetapi juga dampaknya di lapangan.",
          ],
          quote: {
            text: "Memberdayakan generasi muda untuk membentuk masa depan pertanian.",
            author: "Future Farmers of Indonesia",
            role: "Tagline komunitas",
          },
        },
        {
          type: "grid",
          eyebrow: "Arah Organisasi",
          title: "Nilai dan fokus pengembangan FFI",
          description:
            "Rangkuman arah penguatan komunitas FFI yang disusun ulang agar lebih mudah dipindai dalam versi recreate ini.",
          columns: 3,
          items: [
            {
              eyebrow: "Visi",
              title: "Generasi petani muda inovatif",
              description:
                "Mencetak pemimpin pertanian masa depan yang adaptif terhadap teknologi, peka terhadap isu pangan, dan mampu berkolaborasi lintas sektor.",
            },
            {
              eyebrow: "Misi",
              title: "Edukasi, praktik, dan jejaring",
              description:
                "Menyediakan ruang belajar, pelatihan, mentoring, dan koneksi agar siswa dapat tumbuh menjadi inovator muda di bidang pertanian.",
            },
            {
              eyebrow: "Nilai",
              title: "Kolaboratif dan berdampak",
              description:
                "Mendorong kepemimpinan, kreativitas, dan kontribusi nyata di lingkungan sekitar melalui program yang relevan dan berkelanjutan.",
            },
          ],
        },
        {
          type: "split",
          eyebrow: "Profil Komunitas",
          title: "Dari siswa untuk masa depan pertanian Indonesia",
          description:
            "Konten halaman tentang FFI pada situs referensi menekankan identitas komunitas, motivasi gerakan, dan ajakan untuk bergabung. Versi ini menerjemahkannya ke layout modern yang lebih terstruktur.",
          bullets: [
            "Komunitas pelajar dengan fokus inovasi pertanian dan pangan",
            "Mendorong kepemimpinan dan kreativitas generasi muda",
            "Menjembatani ide siswa dengan praktik lapangan dan mitra",
          ],
          sideTag: "Figur inspiratif",
          sideTitle: "Rina Satya • Petani Inovatif",
          sideParagraphs: [
            "Nama ini muncul pada halaman referensi sebagai representasi figur inspiratif dalam narasi komunitas FFI.",
            "Dalam recreate ini, blok profil digunakan sebagai komponen reusable untuk menampilkan mentor, alumni, atau tokoh pendamping program.",
          ],
          sideBullets: ["Mentorship", "Eksperimen lapangan", "Dampak komunitas"],
        },
        {
          type: "cta",
          eyebrow: "Gabung Komunitas",
          title: "Mulai langkahmu bersama Future Farmers of Indonesia",
          description:
            "Lihat program, kemitraan, atau hubungi tim FFI untuk eksplorasi kolaborasi dan pengembangan talenta muda pertanian.",
          buttonLabel: "Ke halaman kontak",
          buttonHref: "/kontak",
        },
      ],
    },
    en: {
      hero: {
        eyebrow: "About Future Farmers of Indonesia",
        title: "Future Farmers of Indonesia (FFI)",
        description:
          "FFI is a youth-focused organization empowering the next generation to shape the future of agriculture through innovation, collaboration, education, and practical learning experiences.",
        imageSrc: "/assets/ffi/hero-students.jpg",
        imageAlt: "Students in a collaborative learning environment",
        badges: ["Plant Innovation, Harvest Leaders", "Student Community", "Sustainable Agriculture"],
        actions: [
          { label: "Explore Programs", href: "/program", variant: "primary" },
          { label: "Contact Us", href: "/kontak", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "FFI", label: "Community Identity" },
        { value: "Youth-led", label: "Approach" },
        { value: "Agri & Food", label: "Focus" },
      ],
      blocks: [
        {
          type: "prose",
          id: "background",
          eyebrow: "FFI Background",
          title: "Creating growth pathways for Indonesia's young agriculture innovators",
          paragraphs: [
            "Future Farmers of Indonesia serves as a platform for young talents interested in agriculture, food security, and community-driven innovation.",
            "FFI emphasizes collaboration across schools, mentoring, training, and hands-on experiences so students understand both concepts and real-world impact.",
          ],
          quote: {
            text: "Empowering young people to shape the future of agriculture.",
            author: "Future Farmers of Indonesia",
            role: "Community tagline",
          },
        },
        {
          type: "grid",
          eyebrow: "Organization Direction",
          title: "FFI values and development focus",
          description:
            "A reorganized summary of FFI community direction presented in a more scannable modern layout.",
          columns: 3,
          items: [
            {
              eyebrow: "Vision",
              title: "Innovative young farmer generation",
              description:
                "Develop future agriculture leaders who are adaptive to technology, aware of food issues, and capable of cross-sector collaboration.",
            },
            {
              eyebrow: "Mission",
              title: "Education, practice, and networks",
              description:
                "Provide learning spaces, training, mentoring, and connections so students can grow as young innovators in agriculture.",
            },
            {
              eyebrow: "Values",
              title: "Collaborative and impactful",
              description:
                "Encourage leadership, creativity, and local impact through relevant and sustainable programs.",
            },
          ],
        },
        {
          type: "split",
          eyebrow: "Community Profile",
          title: "From students for the future of Indonesian agriculture",
          description:
            "The original About page highlights community identity, movement motivation, and a call to join. This recreate translates that into a modern structured layout.",
          bullets: [
            "Student community focused on agriculture and food innovation",
            "Leadership and creativity development for youth",
            "Connecting student ideas with field practice and partners",
          ],
          sideTag: "Inspiring profile",
          sideTitle: "Rina Satya • Innovative Farmer",
          sideParagraphs: [
            "This name appears on the reference page as an inspirational figure in the FFI community narrative.",
            "In this recreate, the profile block is a reusable component for mentors, alumni, or program facilitators.",
          ],
          sideBullets: ["Mentorship", "Field experiments", "Community impact"],
        },
        {
          type: "cta",
          eyebrow: "Join the Community",
          title: "Start your journey with Future Farmers of Indonesia",
          description:
            "Explore programs, partnerships, or contact the FFI team to discuss collaboration and youth agriculture development.",
          buttonLabel: "Go to contact page",
          buttonHref: "/kontak",
        },
      ],
    },
  },
  program: {
    id: {
      hero: {
        eyebrow: "Program Future Farmers of Indonesia",
        title: "Program Utama FFI untuk pelajar dan inovator muda",
        description:
          "Halaman program FFI menampilkan inisiatif utama, kegiatan implementasi, dan program unggulan yang mendorong partisipasi pelajar di bidang pertanian dan pangan.",
        imageSrc: "/assets/ffi/program/lomba-mbg.jpg",
        imageAlt: "Dokumentasi program FFI",
        badges: ["Lomba Dokumentasi Menu MBG", "Seleksi Kader FFI", "Implementasi Program"],
        actions: [
          { label: "Lihat Kemitraan", href: "/kemitraan", variant: "primary" },
          { label: "Hubungi FFI", href: "/kontak", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "3+", label: "Cluster Program" },
        { value: "Youth", label: "Target Peserta" },
        { value: "Hands-on", label: "Metode Belajar" },
      ],
      blocks: [
        {
          type: "grid",
          id: "program-utama",
          eyebrow: "Program Utama FFI",
          title: "Inisiatif yang ditampilkan di halaman program",
          description:
            "Nama program disesuaikan dengan yang muncul pada halaman referensi dan dikemas dalam grid modern untuk meningkatkan keterbacaan.",
          columns: 3,
          items: [
            {
              eyebrow: "Program",
              title: "Lomba Dokumentasi Menu MBG",
              description:
                "Aktivitas dokumentasi dan publikasi menu untuk mendorong partisipasi pelajar, kreativitas, dan komunikasi program secara visual.",
              imageSrc: "/assets/ffi/program/lomba-mbg.jpg",
              imageAlt: "Poster atau dokumentasi lomba menu MBG",
              badge: "Featured",
            },
            {
              eyebrow: "Program",
              title: "Seleksi Kader FFI & Peluncuran Resmi FFI",
              description:
                "Tahap penguatan komunitas melalui seleksi kader, pembinaan, dan peluncuran kegiatan untuk menyiapkan peserta yang aktif dan berdampak.",
              imageSrc: "/assets/ffi/card-kader.jpg",
              imageAlt: "Kegiatan kader FFI",
            },
            {
              eyebrow: "Program",
              title: "Implementasi Program FFI",
              description:
                "Pelaksanaan program di lapangan yang menghubungkan ide, pelatihan, kolaborasi, dan hasil nyata bersama peserta dan mitra.",
              imageSrc: "/assets/ffi/card-generasi.jpg",
              imageAlt: "Kegiatan implementasi program generasi muda",
            },
          ],
        },
        {
          type: "timeline",
          eyebrow: "Ritme Program",
          title: "Alur implementasi yang lebih mudah dipahami",
          description:
            "Versi recreate menambahkan struktur timeline agar calon peserta dan mitra lebih cepat memahami urutan aktivitas program.",
          items: [
            {
              step: "01",
              title: "Publikasi & Sosialisasi",
              description: "Penyebaran informasi program, tema kegiatan, dan ajakan partisipasi untuk sekolah/komunitas target.",
            },
            {
              step: "02",
              title: "Seleksi & Kurasi Peserta",
              description: "Penilaian pendaftaran, potensi, kontribusi, dan kesiapan peserta sesuai kebutuhan program.",
            },
            {
              step: "03",
              title: "Pelatihan & Pendampingan",
              description: "Sesi penguatan kapasitas melalui mentoring, lokakarya, dan pembelajaran praktik yang relevan.",
            },
            {
              step: "04",
              title: "Implementasi & Publikasi Hasil",
              description: "Eksekusi kegiatan/program dan dokumentasi hasil untuk memperluas dampak serta kolaborasi berikutnya.",
            },
          ],
        },
        {
          type: "split",
          eyebrow: "Fokus Pengembangan",
          title: "Dari inovasi siswa hingga keterlibatan komunitas",
          description:
            "Konten program pada FFI menonjolkan kombinasi kegiatan kreatif, pembinaan kader, dan implementasi. Layout split ini merapikan informasi inti agar lebih jelas.",
          bullets: [
            "Program berbasis partisipasi pelajar",
            "Pembinaan kader dan kepemimpinan muda",
            "Dokumentasi, publikasi, dan implementasi lapangan",
          ],
          sideTag: "Contoh aktivitas",
          sideTitle: "Lokakarya, pelatihan, dan mentoring",
          sideParagraphs: [
            "Komponen seperti program mentorship, lokakarya, dan pelatihan dapat ditampilkan sebagai turunan dari inisiatif utama FFI.",
            "Versi ini dibuat fleksibel agar mudah ditambah detail atau kartu program baru saat dibutuhkan.",
          ],
          sideBullets: ["Mentorship", "Lokakarya & Pelatihan", "Inisiatif Pertanian Berkelanjutan"],
        },
        {
          type: "cta",
          eyebrow: "Eksplorasi Kolaborasi",
          title: "Ingin mendukung atau berpartisipasi dalam program FFI?",
          description: "Lanjutkan ke halaman kemitraan untuk melihat peluang kolaborasi atau hubungi tim FFI secara langsung.",
          buttonLabel: "Lihat peluang kemitraan",
          buttonHref: "/kemitraan",
        },
      ],
    },
    en: {
      hero: {
        eyebrow: "Future Farmers of Indonesia Programs",
        title: "FFI core programs for students and young innovators",
        description:
          "The FFI program page showcases key initiatives, implementation activities, and flagship programs that encourage youth participation in agriculture and food topics.",
        imageSrc: "/assets/ffi/program/lomba-mbg.jpg",
        imageAlt: "FFI program documentation",
        badges: ["MBG Menu Documentation Competition", "FFI Cadre Selection", "Program Implementation"],
        actions: [
          { label: "View Partnerships", href: "/kemitraan", variant: "primary" },
          { label: "Contact FFI", href: "/kontak", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "3+", label: "Program Clusters" },
        { value: "Youth", label: "Target Participants" },
        { value: "Hands-on", label: "Learning Method" },
      ],
      blocks: [
        {
          type: "grid",
          id: "core-programs",
          eyebrow: "FFI Core Programs",
          title: "Initiatives highlighted on the program page",
          description:
            "Program names are aligned with the reference page and arranged in a modern grid to improve readability.",
          columns: 3,
          items: [
            {
              eyebrow: "Program",
              title: "MBG Menu Documentation Competition",
              description:
                "Documentation and publication activities to encourage student participation, creativity, and visual communication of the program.",
              imageSrc: "/assets/ffi/program/lomba-mbg.jpg",
              imageAlt: "MBG menu competition documentation",
              badge: "Featured",
            },
            {
              eyebrow: "Program",
              title: "FFI Cadre Selection & Official Launch",
              description:
                "Community strengthening through cadre selection, coaching, and launch activities to prepare active and impactful participants.",
              imageSrc: "/assets/ffi/card-kader.jpg",
              imageAlt: "FFI cadre activities",
            },
            {
              eyebrow: "Program",
              title: "FFI Program Implementation",
              description:
                "Field implementation that connects ideas, training, collaboration, and tangible outcomes with participants and partners.",
              imageSrc: "/assets/ffi/card-generasi.jpg",
              imageAlt: "Youth program implementation activities",
            },
          ],
        },
        {
          type: "timeline",
          eyebrow: "Program Rhythm",
          title: "An easier-to-read implementation flow",
          description:
            "This recreate adds a timeline structure so applicants and partners can quickly understand the sequence of activities.",
          items: [
            { step: "01", title: "Outreach & Socialization", description: "Program information, themes, and participation invitation for schools and target communities." },
            { step: "02", title: "Selection & Curation", description: "Assessment of applications, potential, contribution, and readiness based on program needs." },
            { step: "03", title: "Training & Mentoring", description: "Capacity building through mentoring, workshops, and relevant practice-based learning." },
            { step: "04", title: "Implementation & Publication", description: "Program execution and documentation of outcomes to expand impact and future collaboration." },
          ],
        },
        {
          type: "split",
          eyebrow: "Development Focus",
          title: "From student innovation to community engagement",
          description:
            "FFI program content highlights a combination of creative activities, cadre development, and implementation. This split layout organizes those core ideas more clearly.",
          bullets: [
            "Student participation-driven programs",
            "Youth leadership and cadre development",
            "Documentation, publication, and field implementation",
          ],
          sideTag: "Activity examples",
          sideTitle: "Workshops, training, and mentoring",
          sideParagraphs: [
            "Components such as mentorship programs, workshops, and training can be presented as derivatives of FFI's core initiatives.",
            "This version is designed to be flexible so more program cards or details can be added later.",
          ],
          sideBullets: ["Mentorship", "Workshops & Training", "Sustainable Agriculture Initiatives"],
        },
        {
          type: "cta",
          eyebrow: "Collaboration Path",
          title: "Want to support or participate in FFI programs?",
          description: "Continue to the partnership page to explore collaboration opportunities or contact the FFI team directly.",
          buttonLabel: "View partnership opportunities",
          buttonHref: "/kemitraan",
        },
      ],
    },
  },
  berita: {
    id: {
      hero: {
        eyebrow: "Berita FFI",
        title: "Berita Kami dan sorotan publikasi terkait FFI",
        description:
          "Halaman berita pada FFI menampilkan kumpulan sorotan media dan pembaruan program. Recreate ini menekankan readability dan struktur kartu berita yang lebih konsisten.",
        badges: ["Berita Kami", "Sorotan Media", "Update Program"],
        actions: [
          { label: "Kunjungi Program", href: "/program", variant: "primary" },
          { label: "Hubungi FFI", href: "/kontak", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "Media", label: "Sorotan Eksternal" },
        { value: "FFI", label: "Update Internal" },
        { value: "Story", label: "Narasi Dampak" },
      ],
      blocks: [
        {
          type: "grid",
          id: "berita-kami",
          eyebrow: "Berita Kami",
          title: "Sorotan media dan pembaruan yang tampil di halaman referensi",
          description:
            "Nama media berikut muncul sebagai highlight pada halaman berita FFI. Di sini disajikan sebagai kartu berita dengan struktur yang lebih modern.",
          style: "news",
          columns: 3,
          items: [
            {
              eyebrow: "Media",
              title: "tvonenews.com",
              description:
                "Liputan atau pemberitaan eksternal yang menyorot aktivitas, program, atau dampak gerakan FFI di ranah publik.",
              linkLabel: "Buka sumber",
              href: "https://www.tvonenews.com/",
              badge: "External",
            },
            {
              eyebrow: "Media",
              title: "mediaindonesia.com",
              description:
                "Sorotan media nasional yang memperluas visibilitas program serta isu pertanian dan pangan yang relevan dengan FFI.",
              linkLabel: "Buka sumber",
              href: "https://mediaindonesia.com/",
              badge: "External",
            },
            {
              eyebrow: "Media",
              title: "tvrinews.com",
              description:
                "Contoh kanal media yang menampilkan narasi publikasi dan perkembangan inisiatif yang berkaitan dengan komunitas FFI.",
              linkLabel: "Buka sumber",
              href: "https://www.tvrinews.com/",
              badge: "External",
            },
          ],
        },
        {
          type: "grid",
          eyebrow: "Update Program",
          title: "Template kartu berita internal FFI",
          description:
            "Blok ini disiapkan untuk update kegiatan, pengumuman, atau dokumentasi capaian program tanpa mengubah pola visual halaman.",
          columns: 3,
          items: [
            {
              eyebrow: "FFI Update",
              title: "Seleksi kader dan penguatan komunitas",
              description: "Rangkuman kegiatan seleksi dan pembinaan kader untuk menyiapkan peserta yang aktif dan berdampak.",
              meta: "2 menit baca",
            },
            {
              eyebrow: "FFI Update",
              title: "Pelatihan inovasi pertanian siswa",
              description: "Dokumentasi sesi pelatihan dan lokakarya untuk memperkuat kreativitas dan solusi pertanian berbasis siswa.",
              meta: "3 menit baca",
            },
            {
              eyebrow: "FFI Update",
              title: "Kolaborasi mitra dan sponsor program",
              description: "Informasi keterlibatan mitra untuk mendukung pembiayaan, teknologi, dan ekosistem pengembangan FFI.",
              meta: "2 menit baca",
            },
          ],
        },
        {
          type: "cta",
          eyebrow: "Informasi Resmi",
          title: "Butuh informasi terbaru dari Future Farmers Indonesia?",
          description: "Gunakan halaman kontak untuk menghubungi tim FFI dan memperoleh informasi paling relevan mengenai program atau kolaborasi.",
          buttonLabel: "Hubungi tim FFI",
          buttonHref: "/kontak",
        },
      ],
    },
    en: {
      hero: {
        eyebrow: "FFI News",
        title: "Our news page and media highlights related to FFI",
        description:
          "The FFI news page features media highlights and program updates. This recreate emphasizes readability and a more consistent news card structure.",
        badges: ["Our News", "Media Highlights", "Program Updates"],
        actions: [
          { label: "Visit Programs", href: "/program", variant: "primary" },
          { label: "Contact FFI", href: "/kontak", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "Media", label: "External Coverage" },
        { value: "FFI", label: "Internal Updates" },
        { value: "Story", label: "Impact Narrative" },
      ],
      blocks: [
        {
          type: "grid",
          id: "our-news",
          eyebrow: "Our News",
          title: "Media highlights and updates shown on the reference page",
          description:
            "The following media names appear as highlights on the FFI news page. They are presented here as modern news cards.",
          style: "news",
          columns: 3,
          items: [
            { eyebrow: "Media", title: "tvonenews.com", description: "External coverage highlighting FFI activities, programs, or public impact.", linkLabel: "Open source", href: "https://www.tvonenews.com/", badge: "External" },
            { eyebrow: "Media", title: "mediaindonesia.com", description: "National media highlight expanding visibility for FFI programs and relevant agriculture/food issues.", linkLabel: "Open source", href: "https://mediaindonesia.com/", badge: "External" },
            { eyebrow: "Media", title: "tvrinews.com", description: "Example media channel covering publication narratives and initiatives related to the FFI community.", linkLabel: "Open source", href: "https://www.tvrinews.com/", badge: "External" },
          ],
        },
        {
          type: "grid",
          eyebrow: "Program Updates",
          title: "FFI internal news card template",
          description: "Prepared for activity updates, announcements, or progress documentation without changing the page visual pattern.",
          columns: 3,
          items: [
            { eyebrow: "FFI Update", title: "Cadre selection and community strengthening", description: "Summary of selection and coaching activities to prepare active and impactful participants.", meta: "2 min read" },
            { eyebrow: "FFI Update", title: "Student agriculture innovation workshop", description: "Documentation of training sessions and workshops to strengthen creativity and student-led agriculture solutions.", meta: "3 min read" },
            { eyebrow: "FFI Update", title: "Partner and sponsor collaboration", description: "Updates on partner participation supporting funding, technology, and ecosystem development for FFI.", meta: "2 min read" },
          ],
        },
        {
          type: "cta",
          eyebrow: "Official Information",
          title: "Need the latest information from Future Farmers Indonesia?",
          description: "Use the contact page to reach the FFI team and get the most relevant information about programs or collaboration.",
          buttonLabel: "Contact the FFI team",
          buttonHref: "/kontak",
        },
      ],
    },
  },
  kemitraan: {
    id: {
      hero: {
        eyebrow: "Kemitraan",
        title: "Mari bergabung memberdayakan Future Farmers Indonesia melalui kolaborasi",
        description:
          "Halaman kemitraan FFI menekankan peluang kontribusi dari sektor swasta, pemerintah, dan pendidikan. Recreate ini merapikannya ke format proposal/partnership page modern.",
        imageSrc: "/assets/ffi/card-kader.jpg",
        imageAlt: "Kader muda Future Farmers Indonesia dalam kegiatan lapangan",
        badges: ["Kolaborasi", "Pendanaan", "Solusi Inovatif"],
        actions: [
          { label: "Hubungi Kemitraan", href: "/kontak", variant: "primary" },
          { label: "Lihat Program", href: "/program", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "3", label: "Kelompok Mitra" },
        { value: "CSR", label: "Pendanaan Potensial" },
        { value: "Tech", label: "Kolaborasi Inovasi" },
      ],
      blocks: [
        {
          type: "grid",
          id: "peluang-bermitra",
          eyebrow: "Peluang Bermitra",
          title: "Sektor yang dapat berkontribusi pada FFI",
          description:
            "Mengacu pada struktur halaman referensi yang menampilkan peluang kolaborasi untuk berbagai sektor pendukung.",
          style: "sector",
          columns: 3,
          items: [
            {
              eyebrow: "Sektor",
              title: "Sektor Swasta",
              description:
                "Berperan melalui pendanaan, program CSR, dukungan teknologi, akses industri, dan kolaborasi solusi inovatif untuk penguatan program FFI.",
              badge: "Prioritas",
            },
            {
              eyebrow: "Sektor",
              title: "Pemerintah",
              description:
                "Kolaborasi kebijakan, fasilitasi program pendidikan/pertanian, dan dukungan ekosistem untuk pengembangan talenta muda di daerah.",
            },
            {
              eyebrow: "Sektor",
              title: "Lembaga Pendidikan",
              description:
                "Kemitraan sekolah/kampus untuk pembinaan, riset, pelatihan, dan integrasi kegiatan yang relevan dengan agenda pertanian berkelanjutan.",
            },
          ],
        },
        {
          type: "split",
          eyebrow: "Skema Kolaborasi",
          title: "Contoh bentuk kontribusi yang bisa ditawarkan mitra",
          description:
            "Di halaman kemitraan FFI, peluang kontribusi dijelaskan per sektor. Recreate ini merangkum poin-poin tersebut dalam panel yang lebih terstruktur dan mudah dibaca.",
          bullets: [
            "Pendanaan & Program CSR",
            "Kemitraan Teknologi & Inovasi",
            "Mentorship dan pendampingan profesional",
            "Dukungan riset, sarana, atau jejaring distribusi",
          ],
          sideTag: "Nilai untuk mitra",
          sideTitle: "Dampak sosial + pipeline talenta muda pertanian",
          sideParagraphs: [
            "Kemitraan dengan FFI membuka peluang untuk berkontribusi pada pengembangan generasi muda sekaligus memperkuat agenda pertanian dan pangan yang berkelanjutan.",
            "Format halaman ini disiapkan agar mudah diperluas menjadi landing proposal, sponsorship tiers, atau form kolaborasi resmi.",
          ],
          sideBullets: ["Brand visibility", "Program impact", "Youth ecosystem access"],
        },
        {
          type: "cta",
          eyebrow: "Mulai Kolaborasi",
          title: "Diskusikan dukungan, CSR, atau kemitraan program dengan tim FFI",
          description: "Hubungi FFI untuk membahas bentuk kontribusi yang paling relevan dengan tujuan institusi atau organisasi Anda.",
          buttonLabel: "Kontak tim kemitraan",
          buttonHref: "/kontak",
        },
      ],
    },
    en: {
      hero: {
        eyebrow: "Partnerships",
        title: "Join us in empowering Future Farmers Indonesia through collaboration",
        description:
          "The FFI partnerships page emphasizes contribution opportunities from private, government, and educational sectors. This recreate organizes it into a more modern partnership-page format.",
        imageSrc: "/assets/ffi/card-kader.jpg",
        imageAlt: "Young FFI members during field activities",
        badges: ["Collaboration", "Funding", "Innovative Solutions"],
        actions: [
          { label: "Contact for Partnership", href: "/kontak", variant: "primary" },
          { label: "Explore Programs", href: "/program", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "3", label: "Partner Segments" },
        { value: "CSR", label: "Funding Potential" },
        { value: "Tech", label: "Innovation Collaboration" },
      ],
      blocks: [
        {
          type: "grid",
          id: "partner-opportunities",
          eyebrow: "Partnership Opportunities",
          title: "Sectors that can contribute to FFI",
          description: "Based on the reference page structure highlighting collaboration opportunities across supporting sectors.",
          style: "sector",
          columns: 3,
          items: [
            { eyebrow: "Sector", title: "Private Sector", description: "Contribute through funding, CSR programs, technology support, industry access, and innovative collaboration to strengthen FFI programs.", badge: "Priority" },
            { eyebrow: "Sector", title: "Government", description: "Policy collaboration, program facilitation, and ecosystem support for youth talent development in agriculture at local levels." },
            { eyebrow: "Sector", title: "Educational Institutions", description: "School/university partnerships for mentoring, research, training, and integration of activities relevant to sustainable agriculture." },
          ],
        },
        {
          type: "split",
          eyebrow: "Collaboration Schemes",
          title: "Examples of partner contribution formats",
          description:
            "The FFI partnership page explains opportunities by sector. This recreate summarizes those options into a more structured and readable panel layout.",
          bullets: [
            "Funding & CSR Programs",
            "Technology & Innovation Partnerships",
            "Mentorship and professional coaching",
            "Research, facilities, or distribution network support",
          ],
          sideTag: "Partner value",
          sideTitle: "Social impact + youth agriculture talent pipeline",
          sideParagraphs: [
            "Partnering with FFI creates opportunities to support youth development while strengthening sustainable agriculture and food agendas.",
            "This page format is ready to evolve into a formal sponsorship proposal page or collaboration intake flow.",
          ],
          sideBullets: ["Brand visibility", "Program impact", "Youth ecosystem access"],
        },
        {
          type: "cta",
          eyebrow: "Start Collaborating",
          title: "Discuss funding, CSR, or program partnership with the FFI team",
          description: "Contact FFI to explore contribution models that best fit your institution or organization goals.",
          buttonLabel: "Contact partnership team",
          buttonHref: "/kontak",
        },
      ],
    },
  },
  kontak: {
    id: {
      hero: {
        eyebrow: "Kontak",
        title: "Hubungi Future Farmers of Indonesia",
        description:
          "Halaman kontak FFI pada referensi menampilkan narahubung, email, dan form pesan. Versi recreate ini mempertahankan inti tersebut dengan layout yang lebih rapi dan cepat dipindai.",
        badges: ["Narahubung", "Email", "Form Pesan"],
        actions: [
          { label: "Kirim pesan", href: "#form-kontak", variant: "primary" },
          { label: "Lihat Kemitraan", href: "/kemitraan", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "Email", label: "Kanal Resmi" },
        { value: "Form", label: "Kontak Cepat" },
        { value: "FFI", label: "Tim Komunitas" },
      ],
      blocks: [
        {
          type: "contact",
          id: "form-kontak",
          eyebrow: "Hubungi Kami",
          title: "Kirim pesan ke tim Future Farmers Indonesia",
          description:
            "Gunakan formulir demo ini untuk simulasi alur kontak. Data tidak dikirim ke server resmi FFI.",
          infoCards: [
            {
              label: "Narahubung",
              value: "Tim Future Farmers Indonesia",
              note: "Respon bergantung jam operasional dan kanal komunikasi aktif.",
            },
            {
              label: "Email kami",
              value: "info@futurefarmers.id",
              href: "mailto:info@futurefarmers.id",
            },
            {
              label: "WhatsApp",
              value: "+62 821-2400-8250",
              href: "https://wa.me/6282124008250",
            },
          ],
          form: {
            nameLabel: "Masukkan nama depan kamu",
            emailLabel: "Masukkan alamat email kamu disini*",
            messageLabel: "Bagikan pemikiranmu disini!*",
            aboutLabel: "Masukkan informasi tentang kamu sekarang!",
            namePlaceholder: "Nama depan",
            emailPlaceholder: "email-kamu@contoh.com",
            messagePlaceholder: "Tulis pesan, pertanyaan, atau ide kolaborasi...",
            aboutPlaceholder: "Sekolah / organisasi / peran kamu",
            submitLabel: "Hubungi Kami",
            invalidEmailMessage: "Masukkan alamat email yang valid.",
            successMessage: "Terima kasih. Ini demo UI, pesan belum dikirim ke server.",
          },
        },
        {
          type: "split",
          eyebrow: "Kebutuhan Umum",
          title: "Topik yang bisa kamu sampaikan ke tim FFI",
          description:
            "Panel ini membantu mengarahkan pengunjung agar pesan yang dikirim lebih spesifik dan mudah ditindaklanjuti.",
          bullets: [
            "Informasi program dan kegiatan FFI",
            "Pertanyaan keanggotaan atau partisipasi siswa",
            "Kolaborasi sekolah, kampus, atau komunitas",
            "Kemitraan sponsor, CSR, dan dukungan program",
          ],
          sideTag: "Catatan",
          sideTitle: "Pastikan sertakan konteks singkat",
          sideParagraphs: [
            "Sebutkan asal sekolah/organisasi, tujuan menghubungi, dan kebutuhan informasi utama agar tim FFI bisa merespons lebih cepat.",
            "Untuk kolaborasi, cantumkan bentuk dukungan atau ide program yang ingin didiskusikan.",
          ],
        },
      ],
    },
    en: {
      hero: {
        eyebrow: "Contact",
        title: "Contact Future Farmers of Indonesia",
        description:
          "The reference FFI contact page presents contact person info, email, and a message form. This recreate keeps the same core functions in a cleaner layout.",
        badges: ["Contact Person", "Email", "Message Form"],
        actions: [
          { label: "Send a message", href: "#contact-form", variant: "primary" },
          { label: "View Partnerships", href: "/kemitraan", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "Email", label: "Official Channel" },
        { value: "Form", label: "Quick Contact" },
        { value: "FFI", label: "Community Team" },
      ],
      blocks: [
        {
          type: "contact",
          id: "contact-form",
          eyebrow: "Contact Us",
          title: "Send a message to the Future Farmers Indonesia team",
          description: "Use this demo form to simulate the contact flow. Data is not sent to official FFI servers.",
          infoCards: [
            { label: "Contact person", value: "Future Farmers Indonesia Team", note: "Response time depends on active communication channels and working hours." },
            { label: "Our email", value: "info@futurefarmers.id", href: "mailto:info@futurefarmers.id" },
            { label: "WhatsApp", value: "+62 821-2400-8250", href: "https://wa.me/6282124008250" },
          ],
          form: {
            nameLabel: "Enter your first name",
            emailLabel: "Enter your email address here*",
            messageLabel: "Share your thoughts here!*",
            aboutLabel: "Tell us about yourself",
            namePlaceholder: "First name",
            emailPlaceholder: "your-email@example.com",
            messagePlaceholder: "Write your message, question, or collaboration idea...",
            aboutPlaceholder: "School / organization / role",
            submitLabel: "Contact Us",
            invalidEmailMessage: "Please enter a valid email address.",
            successMessage: "Thank you. This is a UI demo, so your message is not sent to a server.",
          },
        },
        {
          type: "split",
          eyebrow: "Common Requests",
          title: "Topics you can send to the FFI team",
          description: "This panel helps visitors send clearer messages that are easier to follow up.",
          bullets: [
            "FFI program and activity information",
            "Student participation or membership questions",
            "School, campus, or community collaboration",
            "Sponsorship, CSR, and program support partnerships",
          ],
          sideTag: "Tip",
          sideTitle: "Include short context in your message",
          sideParagraphs: [
            "Mention your school/organization, the purpose of your inquiry, and your main information needs so the FFI team can respond faster.",
            "For collaboration requests, include the support model or program idea you want to discuss.",
          ],
        },
      ],
    },
  },
  produk: {
    id: {
      hero: {
        eyebrow: "Produk FFI",
        title: "Jelajahi Produk Kami",
        description:
          "Halaman produk FFI menampilkan komoditas dan produk hasil pengembangan/mitra. Recreate ini mempertahankan struktur katalog sederhana dengan kartu produk yang lebih modern.",
        badges: ["PRODUK FFI", "Kopi", "Sayur & Pupuk"],
        actions: [
          { label: "Hubungi untuk pemesanan", href: "/kontak", variant: "primary" },
          { label: "Lihat Kemitraan", href: "/kemitraan", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "3", label: "Produk Utama" },
        { value: "FFI", label: "Katalog Komunitas" },
        { value: "Local", label: "Basis Produk" },
      ],
      blocks: [
        {
          type: "grid",
          id: "katalog-produk",
          eyebrow: "Katalog",
          title: "Produk yang muncul pada halaman referensi",
          description: "Nama produk menyesuaikan item yang terbaca pada halaman produk FFI dan ditampilkan dengan kartu yang lebih rapi.",
          style: "product",
          columns: 3,
          items: [
            {
              eyebrow: "PRODUK FFI",
              title: "Kopi Robusta Lampung-500gr",
              description: "Produk kopi kemasan sebagai salah satu contoh komoditas bernilai tambah pada halaman produk FFI.",
              imageSrc: "/assets/ffi/products/kopi-robusta.jpg",
              imageAlt: "Produk kopi robusta lampung kemasan 500gr",
              badge: "Produk",
              linkLabel: "Lebih lanjut",
              href: "/kontak",
            },
            {
              eyebrow: "PRODUK FFI",
              title: "Sawi Caisim",
              description: "Produk sayuran segar yang ditampilkan dalam katalog FFI sebagai bagian dari hasil pertanian komunitas/mitra.",
              imageSrc: "/assets/ffi/products/pakcoy.jpg",
              imageAlt: "Produk sawi caisim",
              badge: "Produk",
              linkLabel: "Lebih lanjut",
              href: "/kontak",
            },
            {
              eyebrow: "PRODUK FFI",
              title: "Pupuk Organik",
              description: "Produk pendukung budidaya yang melengkapi ekosistem pertanian dan solusi berkelanjutan dalam ekosistem FFI.",
              imageSrc: "/assets/ffi/products/pupuk-organik.jpg",
              imageAlt: "Produk pupuk organik",
              badge: "Produk",
              linkLabel: "Lebih lanjut",
              href: "/kontak",
            },
          ],
        },
        {
          type: "prose",
          eyebrow: "Catatan Produk",
          title: "Katalog dapat dikembangkan menjadi etalase produk komunitas dan mitra",
          paragraphs: [
            "Versi recreate ini mempertahankan pengalaman halaman katalog sederhana dengan fokus pada visual produk, nama produk, dan CTA lanjutan.",
            "Ke depan, halaman ini bisa diperluas menjadi katalog lengkap dengan filter kategori, stok, harga, dan detail produk per item.",
          ],
        },
        {
          type: "cta",
          eyebrow: "Tertarik Produk FFI",
          title: "Hubungi tim FFI untuk informasi produk, ketersediaan, atau kolaborasi distribusi",
          description: "Gunakan halaman kontak untuk pertanyaan pemesanan, distribusi, atau peluang kemitraan produk pertanian komunitas.",
          buttonLabel: "Ke halaman kontak",
          buttonHref: "/kontak",
        },
      ],
    },
    en: {
      hero: {
        eyebrow: "FFI Products",
        title: "Explore Our Products",
        description:
          "The FFI product page showcases commodities and products from community/partner initiatives. This recreate keeps the simple catalog structure with a more modern card layout.",
        badges: ["FFI PRODUCTS", "Coffee", "Vegetables & Fertilizer"],
        actions: [
          { label: "Contact for orders", href: "/kontak", variant: "primary" },
          { label: "View Partnerships", href: "/kemitraan", variant: "secondary" },
        ],
      },
      metrics: [
        { value: "3", label: "Main Products" },
        { value: "FFI", label: "Community Catalog" },
        { value: "Local", label: "Product Base" },
      ],
      blocks: [
        {
          type: "grid",
          id: "product-catalog",
          eyebrow: "Catalog",
          title: "Products shown on the reference page",
          description: "Product names follow the items visible on the FFI product page and are displayed in a cleaner modern card layout.",
          style: "product",
          columns: 3,
          items: [
            { eyebrow: "FFI PRODUCT", title: "Lampung Robusta Coffee-500gr", description: "Packaged coffee product representing one of the value-added commodities shown on the FFI product page.", imageSrc: "/assets/ffi/products/kopi-robusta.jpg", imageAlt: "Lampung robusta coffee product 500gr", badge: "Product", linkLabel: "Learn more", href: "/kontak" },
            { eyebrow: "FFI PRODUCT", title: "Mustard Greens (Sawi Caisim)", description: "Fresh vegetable product shown in the FFI catalog as part of community/partner agricultural outputs.", imageSrc: "/assets/ffi/products/pakcoy.jpg", imageAlt: "Mustard greens product", badge: "Product", linkLabel: "Learn more", href: "/kontak" },
            { eyebrow: "FFI PRODUCT", title: "Organic Fertilizer", description: "Cultivation support product that complements the agriculture ecosystem and sustainable solutions around FFI programs.", imageSrc: "/assets/ffi/products/pupuk-organik.jpg", imageAlt: "Organic fertilizer product", badge: "Product", linkLabel: "Learn more", href: "/kontak" },
          ],
        },
        {
          type: "prose",
          eyebrow: "Product Note",
          title: "The catalog can evolve into a community and partner product showcase",
          paragraphs: [
            "This recreate preserves the simple catalog experience focused on product visuals, product names, and follow-up calls-to-action.",
            "Later, the page can be expanded into a fuller catalog with category filters, stock, pricing, and product detail pages.",
          ],
        },
        {
          type: "cta",
          eyebrow: "Interested in FFI Products",
          title: "Contact the FFI team for product info, availability, or distribution collaboration",
          description: "Use the contact page for ordering questions, distribution discussions, or agriculture product partnership opportunities.",
          buttonLabel: "Go to contact page",
          buttonHref: "/kontak",
        },
      ],
    },
  },
};
