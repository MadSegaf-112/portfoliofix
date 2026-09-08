import type { Project } from '@/types';
import { projects as englishProjects } from './portfolio';

// Localized Projects Builder
export const getLocalizedProjects = (lang: 'EN' | 'ID'): Project[] => {
  if (lang === 'EN') {
    return englishProjects;
  }

  // Indonesian localized deep project data
  return englishProjects.map((project) => {
    switch (project.id) {
      case 'abna-picks':
        return {
          ...project,
          title: 'ABNA PICKS',
          subtitle: 'Platform Rekomendasi Parfum Berbasis AI & Customer Intelligence',
          category: 'Full-Stack · Analisis Data · AI-Assisted Development',
          role: 'Pengembangan Produk & Sistem · Analisis Data · Logika Bisnis · Implementasi Full-Stack',
          projectType: 'Platform Rekomendasi Parfum AI & Customer Intelligence',
          year: '2026',
          client: 'ABNA PICKS',
          description:
            'ABNA PICKS adalah platform rekomendasi parfum berbasis AI dan customer intelligence yang dirancang untuk membantu pelanggan menemukan parfum yang paling sesuai dengan karakteristik personal, preferensi aroma, suasana hati (mood), anggaran (budget), dan acara (occasion).\n\nSistem ini memadukan mesin rekomendasi 10 dimensi, alur konsultasi pelanggan interaktif, analitik data, dan kecerdasan bisnis (business intelligence) dalam satu platform terpadu.\n\nPelanggan menjalani konsultasi interaktif 9 langkah yang mencakup profil demografis, anggaran, suasana hati, rumpun aroma (scent family), intensitas aroma, atmosfer, dan acara. Sistem kemudian menganalisis preferensi mereka dan menghasilkan Top 3 rekomendasi parfum paling relevan dengan persentase kecocokan, komposisi aroma (fragrance notes), serta penjelasan personal.\n\nDari sisi bisnis, setiap sesi konsultasi dikonversi menjadi data analitik terstruktur untuk memahami perilaku pelanggan, performa parfum, segmentasi audiens, pola preferensi, dan titik drop-off pada corong konsultasi (consultation funnel).',
          highlights: [
            'Recommendation Engine 10 Dimensi: Menganalisis karakteristik dan preferensi pelanggan terhadap katalog 444 parfum untuk menghasilkan rekomendasi yang sangat relevan.',
            'Konsultasi Interaktif 9 Langkah: Pelanggan dipandu melalui konsultasi yang mencakup profil demografis, anggaran, suasana hati, rumpun aroma, intensitas, atmosfer, dan acara.',
            'Top 3 Rekomendasi Personal: Menampilkan tiga parfum rekomendasi terbaik lengkap dengan skor kecocokan, catatan aroma, dan penjelasan personalisasi alasan parfum tersebut cocok.',
            'Dashboard Customer Intelligence: Mengubah data konsultasi menjadi wawasan bisnis nyata melalui persona pelanggan, segmentasi, analisis preferensi, dan analitik performa parfum.',
            'Segmentasi Pelanggan: Melakukan segmentasi pelanggan menggunakan kombinasi seperti kelompok usia × pekerjaan serta menganalisis karakteristik setiap segmen.',
            'Analisis Silang & Preferensi: Menganalisis korelasi antara usia, pekerjaan, anggaran, suasana hati, acara, dan rumpun aroma favorit.',
            'Analitik Consultation Funnel: Melacak perjalanan pelanggan dari awal konsultasi hingga selesai, termasuk rasio konversi, tingkat pengisian jawaban, durasi, dan titik drop-off utama.',
            'Intelijen Performa Parfum: Mengukur frekuensi rekomendasi, distribusi peringkat #1/#2/#3, rata-rata skor kecocokan, dan keseimbangan distribusi antar parfum.',
            'Engine Wawasan Bisnis: Menghasilkan wawasan bisnis deterministik berdasarkan pola preferensi pelanggan, konsentrasi segmen, performa parfum, dan kualitas rekomendasi.',
            'Ekspor Data Terstruktur: Mendukung ekspor data dalam format XLSX, JSON, dan Laporan Eksekutif.',
            'Dashboard Admin & RBAC: Dashboard internal yang diamankan dengan Otentikasi Supabase dan otorisasi admin berbasis peran (Role-Based Access Control).',
            'Analitik Pelanggan yang Menjaga Privasi: Sistem tidak menyimpan nama, alamat email, nomor telepon, alamat IP, atau sidik jari browser pelanggan.',
            'Pengalaman Kiosk Siap Pakai: Mereset sesi tidak aktif secara otomatis setelah 60 detik untuk menjaga isolasi privasi antar pengguna pada kiosk toko fisik.',
          ],
          caseStudy: project.caseStudy
            ? {
                ...project.caseStudy,
                overview: {
                  heading: 'Gambaran Umum',
                  content:
                    'ABNA PICKS adalah platform rekomendasi parfum berbasis AI dan customer intelligence yang dirancang untuk membantu pelanggan menemukan parfum yang paling sesuai dengan karakteristik personal, preferensi aroma, suasana hati (mood), anggaran (budget), dan acara (occasion).\n\nSistem ini memadukan mesin rekomendasi 10 dimensi, alur konsultasi pelanggan interaktif, analitik data, dan kecerdasan bisnis (business intelligence) dalam satu platform terpadu.\n\nPelanggan menjalani konsultasi interaktif 9 langkah yang mencakup profil demografis, anggaran, suasana hati, rumpun aroma (scent family), intensitas aroma, atmosfer, dan acara. Sistem kemudian menganalisis preferensi mereka dan menghasilkan Top 3 rekomendasi parfum paling relevan dengan persentase kecocokan, komposisi aroma (fragrance notes), serta penjelasan personal.\n\nDari sisi bisnis, setiap sesi konsultasi dikonversi menjadi data analitik terstruktur untuk memahami perilaku pelanggan, performa parfum, segmentasi audiens, pola preferensi, dan titik drop-off pada corong konsultasi (consultation funnel).',
                  workflowSteps: [
                    'Konsultasi Pelanggan',
                    'Analisis Preferensi',
                    'Engine 10 Dimensi',
                    'Rekomendasi Personal',
                    'Customer Intelligence',
                  ],
                },
                featureShowcases: {
                  heading: 'Galeri Proyek & Pengalaman Visual',
                  intro:
                    'Penelusuran visual dari pengalaman inti ABNA PICKS, mulai dari konsultasi pelanggan 9 langkah terpandu hingga hasil rekomendasi personal dan dashboard customer intelligence.',
                  features: [
                    {
                      title: '1. Sesi Kuis — Konsultasi Interaktif 9 Langkah',
                      description:
                        'Pelanggan dipandu melalui alur konsultasi terarah untuk mendefinisikan profil demografis, anggaran, suasana hati, rumpun aroma, intensitas, atmosfer, dan acara penggunaan.',
                      image: '/images/quiz session abna picks.png',
                      imageAlt: 'ABNA PICKS - Antarmuka Konsultasi Kuis 9 Langkah',
                    },
                    {
                      title: '2. Output Rekomendasi Personal',
                      description:
                        'Menampilkan Top 3 parfum rekomendasi teratas yang dievaluasi terhadap katalog 444 parfum, lengkap dengan persentase kecocokan, detail aroma (notes), dan alasan personalisasi kecocokan.',
                      image: '/images/output abna picks.png',
                      imageAlt: 'ABNA PICKS - Hasil Rekomendasi 3 Parfum Teratas',
                    },
                    {
                      title: '3. Dashboard Customer Intelligence',
                      description:
                        'Mentransformasi data konsultasi menjadi wawasan bisnis nyata melalui persona pelanggan, segmentasi usia × pekerjaan, analitik drop-off corong (funnel), dan metrik performa parfum.',
                      image: '/images/dashboard abna picks.png',
                      imageAlt: 'ABNA PICKS - Dashboard Customer Intelligence & Analitik Bisnis',
                    },
                  ],
                },
                technicalArchitecture: {
                  heading: 'Implementasi Teknis',
                  content:
                    'ABNA PICKS dibangun dengan arsitektur full-stack modern berkinerja tinggi, mengintegrasikan fungsi server SSR, isolasi database relasional, dan engine rekomendasi deterministik.',
                  tags: [
                    {
                      category: 'Frontend',
                      items: [
                        'React 19',
                        'TanStack Start',
                        'TanStack Router',
                        'TypeScript',
                        'Tailwind CSS',
                        'Framer Motion',
                      ],
                    },
                    {
                      category: 'Backend & Database',
                      items: [
                        'TanStack Start Server Functions',
                        'Nitro SSR',
                        'Supabase PostgreSQL',
                        'Supabase Auth',
                        'Row-Level Security (RLS)',
                        'Validasi Zod',
                      ],
                    },
                    {
                      category: 'Analitik & Data',
                      items: [
                        'Persistensi sesi pelanggan',
                        'Pelacakan event konsultasi',
                        'Analitik funnel',
                        'Segmentasi pelanggan',
                        'Analisis multi-dimensi',
                        'Analitik performa rekomendasi',
                        'Ekspor XLSX / JSON / Markdown',
                      ],
                    },
                    {
                      category: 'Keamanan & Keandalan',
                      items: [
                        'Isolasi Service Role sisi server',
                        'Arsitektur Zero-PII',
                        'Otorisasi admin berbasis peran (RBAC)',
                        'Akses database terisolasi',
                        'Pelacakan analitik non-blocking',
                        'Ketahanan kegagalan database',
                        'Isolasi sesi kiosk',
                      ],
                    },
                  ],
                },
                roleOverview: {
                  heading: 'Peran Saya',
                  content:
                    'Pengembangan Produk & Sistem · Analisis Data · Logika Bisnis · Implementasi Full-Stack\n\nSaya merancang dan mengembangkan sistem ini dari alur konsultasi pelanggan, logika rekomendasi, arsitektur database, pipeline analitik, dashboard admin, sistem ekspor data, arsitektur keamanan, hingga pengujian kesiapan produksi.\n\nProyek ini dikembangkan menggunakan pendekatan pengembangan dibantu AI / vibe coding. AI dimanfaatkan sebagai akselerator efisiensi pengembangan, sementara saya memegang tanggung jawab penuh atas arsitektur sistem, kebutuhan produk, logika bisnis, arahan teknis, pengujian, debugging, dan keputusan implementasi akhir.',
                  responsibilities: [
                    'Menentukan kebutuhan produk, permasalahan pengguna, dan alur konsultasi 9 langkah.',
                    'Merancang dan membangun logika recommendation engine 10 dimensi serta algoritma penilaian.',
                    'Menyusun arsitektur database Supabase PostgreSQL dan kebijakan Row-Level Security (RLS).',
                    'Merancang pipeline analitik non-blocking dan logika isolasi sesi pelanggan.',
                    'Membangun Dashboard Customer Intelligence, matriks segmentasi, dan analitik corong (funnel).',
                    'Mengimplementasikan Otentikasi Supabase dan otorisasi admin berbasis peran (RBAC).',
                    'Mengimplementasikan ekspor data terstruktur dalam format XLSX, JSON, dan Laporan Eksekutif.',
                    'Menjalankan pengujian otomatis 287 assertions, audit keamanan, dan verifikasi kesiapan produksi.',
                  ],
                  concludingNote:
                    'Proyek ini memungkinkan saya menggabungkan pemikiran produk, pengembangan full-stack, analitik data, logika bisnis, dan pengembangan berbantuan AI ke dalam satu sistem end-to-end yang solid.',
                },
                performanceSnapshot: {
                  heading: 'Hasil & Dampak Proyek',
                  content:
                    'ABNA PICKS berkembang dari konsep rekomendasi parfum sederhana menjadi platform customer intelligence menyeluruh (end-to-end).\n\nSistem tidak hanya menyajikan rekomendasi parfum yang dipersonalisasi kepada pelanggan, tetapi juga memberikan visibilitas mendalam bagi bisnis mengenai preferensi pelanggan, segmentasi, perilaku konsultasi, dan performa produk.',
                  metrics: [
                    {
                      value: '287 / 287',
                      label: 'Automated Assertions',
                      description: 'Pengujian Otomatis Lolos',
                    },
                    {
                      value: '0',
                      label: 'TypeScript Errors',
                      description: 'Bebas Kesalahan Tipe',
                    },
                    {
                      value: '0',
                      label: 'ESLint Errors',
                      description: 'Standar Kode Bersih',
                    },
                    {
                      value: '444',
                      label: 'Katalog Parfum',
                      description: 'Parfum Terkurasi di Database',
                    },
                    {
                      value: '9-Step',
                      label: 'Konsultasi',
                      description: 'Alur Konsultasi Pelanggan',
                    },
                    {
                      value: '10D',
                      label: 'Engine',
                      description: 'Mesin Rekomendasi',
                    },
                    {
                      value: 'Intelligence',
                      label: 'Analitik',
                      description: 'Customer Intelligence + Funnel',
                    },
                    {
                      value: 'XLSX / JSON',
                      label: 'Ekspor Laporan',
                      description: 'Format Laporan Eksekutif',
                    },
                  ],
                },
                conclusion: {
                  heading: 'Lebih dari Sekadar Alat Rekomendasi Parfum',
                  content:
                    'ABNA PICKS membuktikan bagaimana sistem rekomendasi dapat memberikan nilai tambah yang jauh lebih tinggi ketika pengalaman pelanggan dan kecerdasan bisnis dirancang secara terpadu.\n\nProyek ini tidak berhenti pada menjawab pertanyaan, "Parfum mana yang harus saya beli?"\n\nTetapi juga menjawab pertanyaan strategis bisnis di balik setiap rekomendasi:\n\nSiapa pelanggan kita?\n\nApa preferensi aroma mereka?\n\nDi langkah mana pelanggan mengalami drop-off?\n\nParfum mana yang memiliki performa paling unggul?\n\nSegmen audiens mana yang menunjukkan ketertarikan terkuat?\n\nDengan menghubungkan seluruh dimensi ini dalam satu platform terpadu, ABNA PICKS menjadi fondasi customer intelligence yang berpusat pada pengalaman penemuan aroma.',
                },
              }
            : undefined,
        };
      case 'asus-fits-for-u':
        return {
          ...project,
          title: 'ASUS Fits For U',
          subtitle: 'Rekomendasi Laptop ASUS Cerdas Berbasis AI',
          category: 'Pengembangan Produk',
          role: 'Desainer Produk & Pengembang Web',
          projectType: 'Aplikasi Web Berbasis AI',
          year: '2026',
          client: 'Pengembangan Produk AI Pribadi',
          description:
            'ASUS Fits For U adalah asisten rekomendasi laptop cerdas bertenaga AI yang dirancang untuk membantu pengguna menemukan laptop ASUS yang paling sesuai dengan kebutuhan mereka. Proyek ini memadukan pemikiran produk, desain UX berorientasi pengguna, dan pengembangan web modern untuk menyederhanakan katalog laptop yang rumit menjadi pengalaman rekomendasi yang personal.',
          highlights: [
            'Mengembangkan pengalaman rekomendasi laptop ASUS berbasis kecerdasan buatan (AI).',
            'Merancang alur perjalanan produk dari pemahaman kebutuhan pengguna hingga rekomendasi personal.',
            'Menerapkan product thinking untuk menyederhanakan eksplorasi katalog teknis yang kompleks.',
            'Membuat arsitektur UX dan antarmuka UI modern untuk alur asisten rekomendasi.',
            'Membangun proyek sebagai aplikasi web fungsional berkinerja tinggi.',
            'Mengeksplorasi metodologi pengembangan dibantu AI melalui pendekatan vibe coding.',
            'Mengintegrasikan strategi produk, desain UI/UX, dan implementasi kode dalam satu proyek utuh.',
            'Mengubah katalog produk konvensional menjadi pengalaman penemuan produk yang interaktif dan personal.',
          ],
          caseStudy: project.caseStudy ? {
            ...project.caseStudy,
            overview: {
              heading: 'Gambaran Umum',
              content:
                'Memilih laptop yang tepat seringkali membingungkan bagi banyak orang.\n\nPengguna sering dihadapkan pada puluhan seri produk, spesifikasi teknis yang rumit, rentang harga yang lebar, dan kebutuhan performa yang berbeda. Memahami laptop mana yang benar-benar cocok membutuhkan pengetahuan teknis yang cukup mendalam.\n\nASUS Fits For U diciptakan untuk menyederhanakan proses pengambilan keputusan ini.\n\nAlih-alih memaksa pengguna memahami spesifikasi teknis sejak awal, produk ini berfokus pada kebutuhan nyata pengguna terlebih dahulu.\n\nPengguna cukup menjelaskan kebutuhan mereka, seperti pekerjaan kantor, studi kuliah, tugas kreatif, portabilitas harian, performa komputasi, atau gaya hidup mereka.\n\nSistem AI kemudian menerjemahkan kebutuhan tersebut menjadi rekomendasi laptop ASUS yang paling relevan dan terarah.',
              workflowSteps: [
                'Ide Produk',
                'Definisi Masalah',
                'Strategi UX',
                'Desain UI/UX',
                'Alur AI Advisor',
                'Aplikasi Web Fungsional',
                'Vibe Coding',
              ],
            },
            problem: {
              heading: 'Permasalahan',
              content:
                'Proses belanja laptop konvensional biasanya selalu dimulai dari spesifikasi teknis.\n\nPengguna diharapkan membandingkan prosesor, kartu grafis, kapasitas RAM, tipe penyimpanan, resolusi layar, dan berbagai seri produk sebelum mengetahui apakah laptop tersebut cocok untuk aktivitas mereka.\n\nHal ini menimbulkan sejumlah tantangan:\n• Pengguna awam kesulitan memahami istilah spesifikasi teknis.\n• Katalog produk memiliki terlalu banyak pilihan yang membingungkan.\n• Membandingkan produk secara manual memakan banyak waktu.\n• Risiko membeli laptop yang tidak sesuai dengan kebutuhan utama.\n• Sistem filter tradisional tetap mengharuskan pengguna memahami produk sebelum mencarinya.\n\nTantangan utama produk ini adalah:\nBagaimana kita dapat membantu pengguna menemukan laptop ASUS yang tepat tanpa mewajibkan mereka menguasai spesifikasi teknis terlebih dahulu?',
            },
            targetExperience: {
              heading: 'Dari Spesifikasi Menuju Kebutuhan Pengguna',
              intro:
                'Ide dasar di balik ASUS Fits For U adalah membalik alur penemuan produk tradisional.\n\nDari alur lama:\nSpesifikasi Teknis → Bandingkan Produk → Coba Pahami Kecocokan\n\nMenjadi alur baru yang intuitif:\nKebutuhan Pengguna → Pemahaman AI → Rekomendasi Personal → Perbandingan Terarah\n\nProduk ini menempatkan gaya hidup dan kebutuhan nyata pengguna sebagai titik awal rekomendasi.\n\nTujuannya adalah membuat pencarian produk terasa seperti berkonsultasi langsung dengan konsultan produk profesional.',
            },
            designGoal: {
              heading: 'Tujuan Produk',
              content:
                'Tujuan utama ASUS Fits For U adalah menciptakan cara yang lebih ramah dan personal dalam menjelajahi lini laptop ASUS.\n\nProduk ini membantu pengguna:\n• Menjelaskan kebutuhan mereka menggunakan bahasa sehari-hari.\n• Menjelajahi opsi laptop yang paling relevan secara efisien.\n• Mendapatkan rekomendasi kontekstual yang tepat sasaran.\n• Memahami alasan mengapa suatu laptop cocok untuk mereka.\n• Mengambil keputusan pembelian dengan lebih percaya diri.\n\nPengalaman ini menjembatani jurang antara:\n"Saya tahu apa yang ingin saya kerjakan"\ndan\n"Saya tahu laptop mana yang tepat untuk melakukannya."',
            },
            userJourney: {
              heading: 'Cara Kerja',
              steps: [
                {
                  step: '01',
                  title: 'Ceritakan Kebutuhan Anda',
                  description: 'Pengguna memulai dengan mendeskripsikan aktivitas dan kebutuhan komputasi mereka.',
                },
                {
                  step: '02',
                  title: 'Analisis Konteks Cerdas',
                  description: 'Sistem AI menganalisis kebutuhan dan memetakan kriteria produk yang sesuai.',
                },
                {
                  step: '03',
                  title: 'Pencocokan Produk',
                  description: 'Katalog laptop ASUS dievaluasi secara cerdas berdasarkan parameter kebutuhan pengguna.',
                },
                {
                  step: '04',
                  title: 'Dapatkan Rekomendasi',
                  description: 'Pengguna menerima rekomendasi laptop terbaik lengkap dengan penjelasan kecocokannya.',
                },
                {
                  step: '05',
                  title: 'Eksplorasi Lebih Lanjut',
                  description: 'Pengguna dapat meninjau detail produk, spesifikasi, dan melanjutkan keputusan mereka.',
                },
              ],
            },
            aiAdvisorExperience: {
              heading: 'AI Sebagai Konsultan Produk',
              image: '/images/asusai1.png',
              imageAlt: 'ASUS Fits For U - Antarmuka Analisis Kebutuhan Berbasis AI',
              content:
                'Fitur AI dirancang sebagai pemandu produk yang solutif, bukan sekadar pelengkap visual.\n\nFungsi utama asisten cerdas ini adalah menerjemahkan bahasa dan kebutuhan manusia menjadi rekomendasi produk nyata.\n\nPengguna mungkin tidak tahu prosesor apa yang dibutuhkan atau berapa kapasitas RAM yang ideal, namun mereka tahu apa yang ingin mereka capai. Dengan bertitik tolak dari intensi pengguna, sistem menghadirkan pengalaman penemuan produk yang berpusat pada manusia.',
            },
            productDiscoveryExperience: {
              heading: 'Mengubah Kebutuhan Menjadi Rekomendasi Nyata',
              image: '/images/asusai2.png',
              imageAlt: 'ASUS Fits For U - Rekomendasi Laptop Personal & Perbandingan Produk',
              content:
                'Antarmuka rekomendasi menghubungkan intensi pengguna dengan opsi laptop konkret.\n\nDaripada menampilkan seluruh produk secara seragam, sistem memprioritaskan opsi yang paling relevan dengan konteks pengguna, memberikan alasan mengapa produk tersebut direkomendasikan dan bagaimana produk mendukung aktivitas mereka.',
            },
            developmentProcess: {
              heading: 'Dari Konsep Ide Menjadi Aplikasi Web Nyata',
              content:
                'ASUS Fits For U dikembangkan sebagai produk web fungsional yang menggabungkan berbagai disiplin keilmuan secara terpadu:',
              disciplines: [
                {
                  title: 'Strategi Produk',
                  description: 'Mendefinisikan inti masalah dan merancang bagaimana AI dapat menyempurnakan alur penemuan produk.',
                },
                {
                  title: 'Desain UX',
                  description: 'Merancang alur interaksi yang mulus dari input kebutuhan hingga visualisasi rekomendasi.',
                },
                {
                  title: 'Desain UI',
                  description: 'Menciptakan antarmuka yang bersih, modern, mudah dipahami, dan nyaman digunakan.',
                },
                {
                  title: 'Pengembangan Web',
                  description: 'Membangun aplikasi web interaktif berkinerja tinggi dengan arsitektur modern.',
                },
              ],
            },
            vibeCoding: {
              heading: 'Eksplorasi Metodologi Vibe Coding',
              content:
                'Proyek ini juga mengeksplorasi pengembangan dibantu AI dan konsep vibe coding. Alur kerja melibatkan penerjemahan kebutuhan produk dan desain menjadi implementasi fungsional yang iteratif dan terstruktur.',
              workflowSteps: [
                'Ide & Konsep',
                'Kebutuhan Produk',
                'Struktur Antarmuka',
                'Implementasi AI-Assisted',
                'Pengujian & Validasi',
                'Iterasi Desain',
              ],
              concludingNote:
                'Pendekatan vibe coding mempercepat perwujudan dari konsep menjadi prototipe fungsional tanpa mengorbankan kualitas pengalaman produk.',
            },
            technicalArchitecture: {
              heading: 'Arsitektur Teknologi',
              content:
                'ASUS Fits For U dibangun menggunakan teknologi modern frontend dan serverless yang dioptimalkan untuk performa tinggi dan interaksi yang responsif.',
              tags: [
                {
                  category: 'Frontend & UI',
                  items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide React'],
                },
                {
                  category: 'Data & Backend',
                  items: ['Supabase (PostgreSQL Database)', 'Session Management', 'Recommendation Engine'],
                },
                {
                  category: 'Deployment & CI/CD',
                  items: ['Netlify CI/CD', 'Automated Production Builds'],
                },
              ],
            },
            designDecisions: {
              heading: 'Keputusan Desain & Produk',
              items: [
                {
                  title: '01. Bertitik Tolak dari Intensi Pengguna',
                  description: 'Pengguna mendeskripsikan aktivitas mereka alih-alih dipaksa memilih spesifikasi teknis di awal.',
                },
                {
                  title: '02. Transparansi Rekomendasi',
                  description: 'Menyajikan alasan kontekstual mengapa laptop tertentu direkomendasikan.',
                },
                {
                  title: '03. Desain Responsif & Modern',
                  description: 'Memastikan pengalaman penemuan produk nyaman diakses baik melalui desktop maupun perangkat seluler.',
                },
              ],
            },
          } : undefined,
        };

      case 'google-ads-analysis':
        return {
          ...project,
          title: 'Analisis Performa Google Ads',
          subtitle: 'Audit Kinerja Kampanye Iklan Berbasis Data & Optimasi ROI',
          category: 'Analisis Data & Visualisasi',
          role: 'Data Analyst & Spesialis Dashboard',
          projectType: 'Proyek Analisis Data Bisnis',
          year: '2024',
          client: 'Audit Kampanye Digital Marketing',
          description:
            'Analisis mendalam terhadap dataset kampanye Google Ads berskala besar untuk mengevaluasi efisiensi biaya, rasio konversi (CVR), click-through rate (CTR), dan return on ad spend (ROAS). Proyek ini mengidentifikasi anomali pemborosan anggaran iklan dan menghasilkan rekomendasi strategis untuk memaksimalkan efektivitas alokasi budget pemasaran.',
          highlights: [
            'Menganalisis performa 100+ kampanye Google Ads di berbagai saluran pencarian dan display.',
            'Menemukan pemborosan anggaran pada kata kunci berbiaya tinggi dengan rasio konversi rendah.',
            'Menghitung matriks utama: CPC, CTR, CPA, ROAS, dan rasio konversi secara terstruktur.',
            'Merancang visualisasi interaktif untuk memonitor tren harian dan anomali biaya.',
            'Memberikan rekomendasi optimasi alokasi anggaran yang meningkatkan efisiensi biaya iklan hingga 24%.',
          ],
        };

      case 'google-ads-dashboard':
        return {
          ...project,
          title: 'Google Ads Executive Dashboard',
          subtitle: 'Dashboard Monitoring Kampanye Digital & Efisiensi Anggaran',
          category: 'Dashboard & Visualisasi Data',
          role: 'Data Analyst & BI Developer',
          projectType: 'Business Intelligence & Dashboard Engineering',
          year: '2024',
          client: 'Sistem Monitoring Kinerja Iklan',
          description:
            'Pengembangan dashboard Business Intelligence terpadu untuk memantau metrik performa kampanye Google Ads secara real-time. Memungkinkan tim pemasaran dan pengambil keputusan mengidentifikasi tren konversi, efisiensi biaya per akuisisi, dan distribusi audiens secara instan.',
          highlights: [
            'Membangun pipeline agregasi data performa kampanye digital dari berbagai channel.',
            'Merancang dashboard interaktif dengan filter multi-dimensi (waktu, jenis kampanye, demografi, lokasi).',
            'Menyajikan visualisasi KPI kunci seperti impression share, cost per conversion, dan conversion value.',
            'Mempermudah pemantauan performa harian bagi manajemen tanpa perlu mengolah data manual.',
          ],
        };

      case 'express-analytics-dashboard':
        return {
          ...project,
          title: 'Express Analytics Dashboard',
          subtitle: 'Dashboard Monitoring Metrik Operasional & Analitik Real-Time',
          category: 'Analisis Data & Web Dashboard',
          role: 'Frontend Developer & Data Analyst',
          projectType: 'Aplikasi Web Analitik Interaktif',
          year: '2024',
          client: 'Platform Analitik Operasional',
          description:
            'Aplikasi dashboard analitik modern yang dirancang untuk memvisualisasikan data operasional dengan latensi rendah. Menggabungkan arsitektur web modern dengan visualisasi data interaktif untuk memberikan gambaran performa sistem dan transaksi secara instan.',
          highlights: [
            'Merancang antarmuka dashboard dengan tema gelap modern dan kontras tinggi.',
            'Memvisualisasikan data throughput sistem, latensi respons, dan tren volume transaksi.',
            'Membangun komponen grafik interaktif yang responsif dan ringan.',
            'Meningkatkan kecepatan pembacaan metrik performa operasional tim.',
          ],
        };

      case 'fyp-media-news':
        return {
          ...project,
          title: 'FYP Media News Mobile App',
          subtitle: 'Desain Antarmuka Aplikasi Berita & Media Digital Generasi Muda',
          category: 'Desain UI/UX & Produk Digital',
          role: 'Team Leader — UI/UX Design Intern',
          projectType: 'Aplikasi Mobile & Media Digital',
          year: '2023',
          client: 'FYP Media & Agency',
          description:
            'Perancangan aplikasi berita dan media digital modern yang disesuaikan dengan pola konsumsi konten generasi muda. Berfokus pada kemudahan navigasi, visual storytelling, personalisasi topik berita, dan interaksi sosial yang dinamis.',
          highlights: [
            'Memimpin tim desain UI/UX dalam merancang alur pengalaman pengguna dari tahap riset hingga prototipe interaktif.',
            'Melakukan riset pengguna untuk mengidentifikasi preferensi format berita visual dan micro-article.',
            'Merancang sistem desain (design system) mobile komprehensif termasuk tipografi, warna, dan komponen interaktif.',
            'Mempresentasikan hasil prototipe interaktif kepada pimpinan agensi dan mentor industri.',
          ],
        };

      case 'zenhome':
        return {
          ...project,
          title: 'ZenHome — Platform Interior Cerdas 3D',
          subtitle: 'Eksplorasi Desain Antarmuka Visualisasi Ruang & Interior 3D',
          category: 'Desain Produk Digital & UI/UX',
          role: 'Product Designer',
          projectType: 'Platform Desain Interior Web & 3D',
          year: '2023',
          client: 'Proyek Konseptual Produk Digital',
          description:
            'Platform visualisasi dan kurasi desain interior cerdas yang memudahkan pemilik hunian merancang ruang tinggal secara estetis dan ergonomis dengan bantuan kanvas interaktif 3D dan katalog produk modular.',
          highlights: [
            'Merancang tata letak antarmuka kanvas 3D yang bersih dan tidak membebani pengguna.',
            'Mengembangkan alur pemilihan palet warna, material ruangan, dan penataan furnitur modular.',
            'Menerapkan prinsip estetika visual minimalis untuk mendukung suasana tenang (zen).',
          ],
        };

      case 'tenang-sejenak':
        return {
          ...project,
          title: 'Tenang Sejenak — Panduan Pernapasan & Relaksasi',
          subtitle: 'Aplikasi Web Interaktif untuk Kesehatan Mental & Mindfulness',
          category: 'Produk Web & UI/UX',
          role: 'UI/UX Designer & Web Developer',
          projectType: 'Aplikasi Web Relaksasi Interaktif',
          year: '2023',
          client: 'Inisiatif Pribadi untuk Kesehatan Mental',
          description:
            'Aplikasi web interaktif yang membimbing pengguna melakukan latihan pernapasan teratur (mindful breathing) untuk meredakan stres dan meningkatkan fokus harian melalui animasi ritmis dan visual yang menenangkan.',
          highlights: [
            'Merancang animasi visual panduan ritme pernapasan 4-7-8 yang intuitif.',
            'Membangun antarmuka web minimalis dengan transisi halus dan bebas distraksi.',
            'Menggunakan palet warna hijau toska (teal/emerald) untuk menstimulasi rasa tenang dan rileks.',
          ],
        };

      default:
        return project;
    }
  });
};
