import type {
  CurrentActivity,
  ExperienceItem,
  JourneyStage,
  OrganizationItem,
  PersonalInterest,
  ProfileData,
  ProudMoment,
  ValuePropItem,
} from '@/types';
import {
  aboutServices,
  currentActivities,
  experiences,
  journeyStages,
  organizations,
  personalInterests,
  portfolioStats,
  profile,
  proudMoments,
  valuePropositions,
} from './portfolio';

export type TranslationKey =
  | 'desktop.about'
  | 'desktop.projects'
  | 'desktop.experience'
  | 'desktop.gallery'
  | 'desktop.contact'
  | 'desktop.resume'
  | 'desktop.resources'
  | 'desktop.music'
  | 'desktop.github'
  | 'desktop.figma'
  | 'dock.finder'
  | 'dock.notes'
  | 'dock.gallery'
  | 'dock.movies'
  | 'dock.mail'
  | 'about.role'
  | 'about.education'
  | 'about.bio'
  | 'about.whatIDo'
  | 'about.myJourney'
  | 'about.currently'
  | 'about.proudMoments'
  | 'about.interests'
  | 'about.services'
  | 'about.stats'
  | 'about.viewProjects'
  | 'about.contactMe'
  | 'about.downloadResume'
  | 'projects.title'
  | 'projects.all'
  | 'projects.viewDetails'
  | 'projects.back'
  | 'projects.overview'
  | 'projects.role'
  | 'projects.timeline'
  | 'projects.techStack'
  | 'projects.keyFeatures'
  | 'projects.challenges'
  | 'projects.impact'
  | 'projects.visit'
  | 'projects.github'
  | 'projects.category'
  | 'experience.title'
  | 'experience.roles'
  | 'experience.organizations'
  | 'experience.highlights'
  | 'gallery.title'
  | 'gallery.view'
  | 'gallery.moment'
  | 'gallery.close'
  | 'gallery.prev'
  | 'gallery.next'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.name'
  | 'contact.email'
  | 'contact.message'
  | 'contact.send'
  | 'contact.location'
  | 'contact.openMaps'
  | 'contact.social'
  | 'resume.title'
  | 'resume.download'
  | 'resume.updated'
  | 'window.close'
  | 'window.minimize'
  | 'window.maximize';

export const translations: Record<'EN' | 'ID', Record<TranslationKey, string>> = {
  EN: {
    'desktop.about': 'About Me',
    'desktop.projects': 'Projects',
    'desktop.experience': 'Experience',
    'desktop.gallery': 'Gallery',
    'desktop.contact': 'Contact',
    'desktop.resume': 'Resume',
    'desktop.resources': 'Resources',
    'desktop.music': 'Music',
    'desktop.github': 'GitHub',
    'desktop.figma': 'Figma',
    'dock.finder': 'Finder',
    'dock.notes': 'Notes',
    'dock.gallery': 'Gallery',
    'dock.movies': 'Movies',
    'dock.mail': 'Mail',
    'about.role': 'Data Analyst & Information Systems Graduate',
    'about.education': 'Information Systems graduate from Universitas Negeri Semarang',
    'about.bio': "I'm Muhammad Assegaf, an Information Systems graduate with a strong interest in Data Analytics and digital product development. I enjoy turning complex data into clear insights, visualizations, and solutions that support better decision-making.",
    'about.whatIDo': 'What I Do',
    'about.myJourney': 'My Journey',
    'about.currently': 'Currently',
    'about.proudMoments': 'Key Milestones',
    'about.interests': 'Personal Interests',
    'about.services': 'Services & Focus',
    'about.stats': 'Portfolio Highlights',
    'about.viewProjects': 'View Projects',
    'about.contactMe': 'Get In Touch',
    'about.downloadResume': 'Download CV',
    'projects.title': 'Featured Projects',
    'projects.all': 'All',
    'projects.viewDetails': 'View Details',
    'projects.back': 'Back to Projects',
    'projects.overview': 'Overview',
    'projects.role': 'Role',
    'projects.timeline': 'Timeline',
    'projects.techStack': 'Technologies',
    'projects.keyFeatures': 'Key Features',
    'projects.challenges': 'Challenges & Solutions',
    'projects.impact': 'Impact & Results',
    'projects.visit': 'Visit Live Site',
    'projects.github': 'Source Code',
    'projects.category': 'Category',
    'experience.title': 'Professional Experience',
    'experience.roles': 'Work Experience',
    'experience.organizations': 'Organizations & Leadership',
    'experience.highlights': 'Key Contributions',
    'gallery.title': 'Life Dump - Gallery',
    'gallery.view': 'View',
    'gallery.moment': 'Moment',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous',
    'gallery.next': 'Next',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Open for freelance & full-time opportunities',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.location': 'Location',
    'contact.openMaps': 'Open in Maps',
    'contact.social': 'Social Media',
    'resume.title': 'Resume — CV Preview',
    'resume.download': 'Download CV (PDF)',
    'resume.updated': 'Updated 2026',
    'window.close': 'Close',
    'window.minimize': 'Minimize',
    'window.maximize': 'Maximize',
  },
  ID: {
    'desktop.about': 'Tentang Saya',
    'desktop.projects': 'Proyek',
    'desktop.experience': 'Pengalaman',
    'desktop.gallery': 'Galeri',
    'desktop.contact': 'Kontak',
    'desktop.resume': 'Resume',
    'desktop.resources': 'Sumber Daya',
    'desktop.music': 'Musik',
    'desktop.github': 'GitHub',
    'desktop.figma': 'Figma',
    'dock.finder': 'Finder',
    'dock.notes': 'Catatan',
    'dock.gallery': 'Galeri',
    'dock.movies': 'Film',
    'dock.mail': 'Pesan',
    'about.role': 'Data Analyst & Lulusan Sistem Informasi',
    'about.education': 'Lulusan Sistem Informasi dari Universitas Negeri Semarang',
    'about.bio': 'Saya Muhammad Assegaf, lulusan Sistem Informasi dengan minat mendalam pada Analitik Data dan pengembangan produk digital. Saya senang mengolah data kompleks menjadi wawasan yang jelas, visualisasi interaktif, dan solusi yang mendukung pengambilan keputusan berbasis data.',
    'about.whatIDo': 'Fokus & Pendekatan',
    'about.myJourney': 'Perjalanan Profesional',
    'about.currently': 'Aktivitas Saat Ini',
    'about.proudMoments': 'Pencapaian Penting',
    'about.interests': 'Minat Pribadi',
    'about.services': 'Layanan & Fokus',
    'about.stats': 'Sorotan Portofolio',
    'about.viewProjects': 'Lihat Proyek',
    'about.contactMe': 'Hubungi Saya',
    'about.downloadResume': 'Unduh CV',
    'projects.title': 'Proyek Pilihan',
    'projects.all': 'Semua',
    'projects.viewDetails': 'Lihat Detail',
    'projects.back': 'Kembali ke Proyek',
    'projects.overview': 'Gambaran Umum',
    'projects.role': 'Peran',
    'projects.timeline': 'Linimasa',
    'projects.techStack': 'Teknologi',
    'projects.keyFeatures': 'Fitur Utama',
    'projects.challenges': 'Tantangan & Solusi',
    'projects.impact': 'Dampak & Hasil',
    'projects.visit': 'Kunjungi Situs',
    'projects.github': 'Kode Sumber',
    'projects.category': 'Kategori',
    'experience.title': 'Pengalaman Profesional',
    'experience.roles': 'Riwayat Pekerjaan',
    'experience.organizations': 'Organisasi & Kepemimpinan',
    'experience.highlights': 'Kontribusi Utama',
    'gallery.title': 'Life Dump - Galeri',
    'gallery.view': 'Lihat',
    'gallery.moment': 'Momen',
    'gallery.close': 'Tutup',
    'gallery.prev': 'Sebelumnya',
    'gallery.next': 'Berikutnya',
    'contact.title': 'Hubungi Saya',
    'contact.subtitle': 'Terbuka untuk peluang freelance & purna waktu',
    'contact.name': 'Nama Anda',
    'contact.email': 'Email Anda',
    'contact.message': 'Pesan Anda',
    'contact.send': 'Kirim Pesan',
    'contact.location': 'Lokasi',
    'contact.openMaps': 'Buka di Maps',
    'contact.social': 'Media Sosial',
    'resume.title': 'Resume — Pratinjau CV',
    'resume.download': 'Unduh CV (PDF)',
    'resume.updated': 'Diperbarui 2026',
    'window.close': 'Tutup',
    'window.minimize': 'Minimalkan',
    'window.maximize': 'Maksimalkan',
  },
};

// Localized Profile Data
export const getLocalizedProfile = (lang: 'EN' | 'ID'): ProfileData => {
  if (lang === 'ID') {
    return {
      ...profile,
      role: 'Data Analyst & Lulusan Sistem Informasi',
      education: 'Lulusan Sistem Informasi dari Universitas Negeri Semarang',
      bio: 'Saya Muhammad Assegaf, lulusan Sistem Informasi dengan minat mendalam pada Analitik Data dan pengembangan produk digital. Saya senang mengolah data kompleks menjadi wawasan yang jelas, visualisasi interaktif, dan solusi yang mendukung pengambilan keputusan berbasis data.',
      location: 'Semarang, Jawa Tengah, Indonesia',
    };
  }
  return profile;
};

// Localized Value Propositions
export const getLocalizedValueProps = (lang: 'EN' | 'ID'): ValuePropItem[] => {
  if (lang === 'ID') {
    return [
      {
        id: 'analyze',
        step: 1,
        title: 'Menganalisis',
        description:
          'Saya mengeksplorasi data, mengidentifikasi pola, dan mengubah informasi kompleks menjadi wawasan yang jelas dan bermakna.',
        iconName: 'analyze',
      },
      {
        id: 'understand',
        step: 2,
        title: 'Memahami',
        description:
          'Saya mendekati masalah dengan memahami konteks bisnis, kebutuhan pengguna, dan sistem terpadu di baliknya.',
        iconName: 'understand',
      },
      {
        id: 'build',
        step: 3,
        title: 'Membangun',
        description:
          'Saya mewujudkan ide dan wawasan menjadi produk digital, prototipe, dashboard analitik, dan solusi praktis.',
        iconName: 'build',
      },
    ];
  }
  return valuePropositions;
};

// Localized Journey Stages
export const getLocalizedJourneyStages = (lang: 'EN' | 'ID'): JourneyStage[] => {
  if (lang === 'ID') {
    return [
      {
        id: 'info-systems',
        stage: 'Sistem Informasi',
        description:
          'Fondasi dalam memahami keterhubungan antara teknologi, proses bisnis, kebutuhan pengguna, dan arsitektur sistem informasi.',
        iconName: 'systems',
      },
      {
        id: 'ui-ux-product',
        stage: 'UI/UX & Produk Digital',
        description:
          'Mengeksplorasi pengalaman digital, desain antarmuka, pemikiran produk, dan mengubah ide menjadi solusi yang mudah digunakan.',
        iconName: 'design',
      },
      {
        id: 'business-thinking',
        stage: 'Bisnis & Pemikiran Sistem',
        description:
          'Mengembangkan perspektif holistik terhadap permasalahan bisnis, kebutuhan sistem, alur proses, dan bagaimana teknologi mendukung solusi.',
        iconName: 'business',
      },
      {
        id: 'data-analytics',
        stage: 'Analisis Data & Visualisasi',
        description:
          'Fokus pada penemuan wawasan dari data, pembuatan dashboard interaktif, dan pemanfaatan informasi untuk pengambilan keputusan yang lebih baik.',
        iconName: 'analytics',
      },
      {
        id: 'modern-ai',
        stage: 'Eksplorasi AI & Alat Modern',
        description:
          'Memanfaatkan teknologi AI terkini dan alat modern untuk mempercepat riset, efisiensi alur kerja, dan perancangan produk cerdas.',
        iconName: 'ai',
      },
    ];
  }
  return journeyStages;
};

// Localized Current Activities
export const getLocalizedCurrentActivities = (lang: 'EN' | 'ID'): CurrentActivity[] => {
  if (lang === 'ID') {
    return [
      {
        id: 'learning',
        category: 'Learning',
        title: 'Penguasaan Data & Analitik',
        description: 'SQL, Python, Analitik Data, dan teknologi modern yang mendukung pemecahan masalah berbasis data.',
        iconName: 'brain',
      },
      {
        id: 'building',
        category: 'Building',
        title: 'Inisiatif GafLabs',
        description: 'Membangun GafLabs — inisiatif yang berfokus pada pengembangan berbagai aplikasi bertenaga AI.',
        iconName: 'rocket',
        isFeatured: true,
      },
      {
        id: 'exploring',
        category: 'Exploring',
        title: 'Eksplorasi AI & Produk Digital',
        description: 'Mengeksplorasi keterpaduan antara AI, pengembangan web, produk digital, dan analitik data.',
        iconName: 'telescope',
      },
      {
        id: 'looking-for',
        category: 'Looking For',
        title: 'Peluang Berdampak',
        description: 'Peluang untuk belajar, berkontribusi, dan berkembang di lingkungan teknologi dan produk digital.',
        iconName: 'briefcase',
      },
    ];
  }
  return currentActivities;
};

// Localized Experiences
export const getLocalizedExperiences = (lang: 'EN' | 'ID'): ExperienceItem[] => {
  if (lang === 'ID') {
    return experiences.map((exp) => {
      if (exp.company === 'Abna Parfumatique') {
        return {
          ...exp,
          role: 'Product Engineer',
          description:
            'Mengembangkan produk digital dan sistem internal untuk Abna Parfumatique, termasuk ABNA Commerce, ABNA PICKS, sistem CRM, dan payroll. Memanfaatkan AI coding tools seperti Codex dan Claude Code sebagai partner dalam proses pengembangan produk.',
          highlights: [
            'Mengembangkan ABNA Commerce, platform e-commerce untuk bisnis parfum.',
            'Membangun ABNA PICKS, platform rekomendasi parfum berbasis AI dan customer intelligence.',
            'Mengembangkan sistem pendukung bisnis, termasuk CRM dan payroll.',
            'Memanfaatkan Codex dan Claude Code sebagai partner coding berbasis AI untuk implementasi, iterasi, dan debugging.',
          ],
        };
      }
      if (exp.company.includes('Pertamina')) {
        return {
          ...exp,
          role: 'Data Analyst & Web Developer',
          period: '2023 – 2024',
          description:
            'Mengolah dataset operasional inventaris dan tenaga kerja, merancang dashboard analitik untuk pemantauan aset, serta membangun sistem manajemen aset IT internal berbasis web.',
          highlights: [
            'Mengolah dan menganalisis data inventaris, kebutuhan IT, dan operasional tenaga kerja.',
            'Membuat dashboard interaktif untuk pemantauan stok aset, alokasi perangkat, dan performa tim.',
            'Mengembangkan sistem web IT Asset Management internal untuk mempercepat rekapitulasi data.',
          ],
        };
      }
      return exp;
    });
  }
  return experiences;
};

// Localized Organizations
export const getLocalizedOrganizations = (lang: 'EN' | 'ID'): OrganizationItem[] => {
  if (lang === 'ID') {
    return organizations.map((org) => ({
      ...org,
      period: org.period ? org.period.replace('Present', 'Sekarang') : undefined,
    }));
  }
  return organizations;
};

// Localized Proud Moments
export const getLocalizedProudMoments = (lang: 'EN' | 'ID'): ProudMoment[] => {
  if (lang === 'ID') {
    return proudMoments.map((item) => {
      if (item.id === 'pertamina') {
        return {
          ...item,
          title: 'Dampak Nyata di Pertamina Patra Niaga',
          description:
            'Berhasil menganalisis data operasional aset dan membangun sistem web manajemen aset IT internal yang mempercepat rekapitulasi data.',
          category: 'Karier & Analitik',
        };
      }
      if (item.id === 'grad') {
        return {
          ...item,
          title: 'Kelulusan Sarjana Sistem Informasi',
          description:
            'Menyelesaikan studi sarjana di Universitas Negeri Semarang dengan fokus pada sistem informasi bisnis, analitik data, dan produk digital.',
          category: 'Pendidikan',
        };
      }
      if (item.id === 'competitions') {
        return {
          ...item,
          title: 'Kompetisi Bisnis & UI/UX Nasional',
          description:
            'Mengikuti berbagai kompetisi perencanaan bisnis dan desain UI/UX tingkat nasional untuk mengasah kemampuan pemecahan masalah.',
          category: 'Pencapaian',
        };
      }
      return item;
    });
  }
  return proudMoments;
};

// Localized Personal Interests
export const getLocalizedPersonalInterests = (lang: 'EN' | 'ID'): PersonalInterest[] => {
  if (lang === 'ID') {
    return [
      {
        id: 'films',
        emoji: '🎬',
        title: 'Film & Sinema',
        description: 'Menikmati cerita, sinematografi, dan menyelami berbagai perspektif melalui karya film.',
      },
      {
        id: 'music',
        emoji: '🎵',
        title: 'Musik',
        description: 'Mendengarkan The Strokes, The Beatles, Radiohead, dan musik indie rock.',
      },
      {
        id: 'ideas',
        emoji: '☕',
        title: 'Membangun Ide',
        description: 'Menikmati proses merealisasikan gagasan konseptual menjadi produk praktis.',
      },
      {
        id: 'training',
        emoji: '🏋️',
        title: 'Olahraga & Kebugaran',
        description: 'Menjaga kebugaran fisik dan membangun gaya hidup yang lebih sehat dan berenergi.',
      },
    ];
  }
  return personalInterests;
};

// Localized Services
export const getLocalizedServices = (lang: 'EN' | 'ID') => {
  if (lang === 'ID') {
    return [
      {
        id: 'data-analysis',
        title: 'Analisis Data',
        description:
          'Mengolah data mentah dan kompleks menjadi wawasan bermakna untuk mendukung keputusan bisnis yang lebih tepat.',
        iconName: 'analysis' as const,
      },
      {
        id: 'dashboard-viz',
        title: 'Dashboard & Visualisasi Data',
        description:
          'Merancang dashboard interaktif, jelas, dan informatif yang mempermudah pemahaman data secara visual.',
        iconName: 'dashboard' as const,
      },
      {
        id: 'digital-product',
        title: 'Produk Digital & Pengembangan Web',
        description:
          'Merancang dan membangun produk digital serta pengalaman web dengan fokus pada kemudahan penggunaan dan fungsionalitas.',
        iconName: 'product' as const,
      },
    ];
  }
  return aboutServices;
};

import { getLocalizedProjects } from './localizedProjects';

// Helper getter for all localized data
export const getLocalizedData = (lang: 'EN' | 'ID') => {
  return {
    profile: getLocalizedProfile(lang),
    services: getLocalizedServices(lang),
    projects: getLocalizedProjects(lang),
    valueProps: getLocalizedValueProps(lang),
    journeyStages: getLocalizedJourneyStages(lang),
    currentActivities: getLocalizedCurrentActivities(lang),
    experiences: getLocalizedExperiences(lang),
    organizations: getLocalizedOrganizations(lang),
    proudMoments: getLocalizedProudMoments(lang),
    personalInterests: getLocalizedPersonalInterests(lang),
    portfolioStats,
  };
};
