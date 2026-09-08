import {
  Briefcase,
  FileText,
  Images,
  Laptop,
  Mail,
  UserRound,
} from 'lucide-react';
import type {
  AppConfig,
  AppId,
  CurrentActivity,
  ExperienceItem,
  JourneyStage,
  OrganizationItem,
  PersonalInterest,
  PortfolioStat,
  ProfileData,
  Project,
  ProjectCategory,
  ProudMoment,
  SkillCategory,
  ValuePropItem,
} from '@/types';

export const resumeData = {
  file: '/document/CV_MUHAMMAD_ASSEGAF_eng.pdf',
  downloadName: 'CV_MUHAMMAD_ASSEGAF_eng.pdf',
};

export const profile: ProfileData = {
  name: 'Muhammad Assegaf',
  role: 'Data Analyst & Information Systems Graduate',
  education: 'Information Systems graduate from Universitas Negeri Semarang',
  bio: "I'm Muhammad Assegaf, an Information Systems graduate with a strong interest in Data Analytics and digital product development. I enjoy turning complex data into clear insights, visualizations, and solutions that support better decision-making.",
  email: 'massegaf208@gmail.com',
  linkedin: 'linkedin.com/in/madsegaf',
  linkedinUrl: 'https://linkedin.com/in/madsegaf',
  location: 'Semarang, Central Java, Indonesia',
  resumeUrl: resumeData.file,
};

export const valuePropositions: ValuePropItem[] = [
  {
    id: 'analyze',
    step: 1,
    title: 'Analyze',
    description:
      'I explore data, identify patterns, and turn complex information into clear and meaningful insights.',
    iconName: 'analyze',
  },
  {
    id: 'understand',
    step: 2,
    title: 'Understand',
    description:
      'I approach problems by understanding the business context, user needs, and systems behind them.',
    iconName: 'understand',
  },
  {
    id: 'build',
    step: 3,
    title: 'Build',
    description:
      'I turn ideas and insights into digital products, prototypes, dashboards, and practical solutions.',
    iconName: 'build',
  },
];

export const journeyStages: JourneyStage[] = [
  {
    id: 'info-systems',
    stage: 'Information Systems',
    description:
      'Foundation in understanding how technology, business processes, users, and information systems connect.',
    iconName: 'systems',
  },
  {
    id: 'ui-ux-product',
    stage: 'UI/UX & Digital Product',
    description:
      'Exploring digital experiences, interface design, product thinking, and turning ideas into usable solutions.',
    iconName: 'design',
  },
  {
    id: 'business-thinking',
    stage: 'Business & Systems Thinking',
    description:
      'Developing a broader perspective on business problems, requirements, processes, and how technology can support solutions.',
    iconName: 'business',
  },
  {
    id: 'data-analytics',
    stage: 'Data Analytics',
    description:
      'Focusing on uncovering insights from data, visualization, dashboards, and using information to support better decisions.',
    iconName: 'analytics',
  },
  {
    id: 'building-ai',
    stage: 'Building with AI',
    description:
      'Exploring how AI can accelerate learning, development, and the creation of practical digital products.',
    iconName: 'ai',
  },
];

export const portfolioStats: PortfolioStat[] = [
  {
    id: 'projects',
    value: '7',
    label: 'Featured Projects',
    caption: 'Analytics, UI/UX & Web',
  },
  {
    id: 'apps',
    value: '5',
    label: 'Core Portfolio Apps',
    caption: 'macOS Native Experience',
  },
  {
    id: 'leadership',
    value: '4+',
    label: 'Leadership & Org Roles',
    caption: 'University & Community',
  },
  {
    id: 'domains',
    value: '3',
    label: 'Integrated Disciplines',
    caption: 'Data, Product & Code',
  },
];

export const proudMoments: ProudMoment[] = [
  {
    id: 'duta-fmipa',
    title: 'Duta FMIPA 2024',
    organization: 'Faculty of Mathematics & Natural Sciences, UNNES',
    period: '2024',
    description:
      'Representing the Faculty of Mathematics and Natural Sciences at Universitas Negeri Semarang through communication, representation, and faculty engagement.',
    accentColor: 'emerald',
  },
  {
    id: 'kadiv-kominfo',
    title: 'Head of Communication & Information Division',
    organization: 'HIMA Ilkom UNNES',
    period: '2023 – 2024',
    description:
      'Led the Communication and Information division while contributing to digital communication, social media management, and major organizational programs.',
    mentionItems: [
      'Grand Launching',
      'Buletin Ilkom "Raccontare"',
      'Grand Closing',
    ],
    accentColor: 'blue',
  },
  {
    id: 'ppk-ormawa-empowerment',
    title: 'PPK Ormawa Community Empowerment',
    organization: 'PPK Ormawa UNNES',
    period: '2023',
    description:
      'Collaborated with student organization members to execute community empowerment programs, field surveys, and public digital outreach initiatives.',
    accentColor: 'amber',
  },
];

export const currentActivities: CurrentActivity[] = [
  {
    id: 'learning',
    category: 'Learning',
    title: 'Data & Analytics Mastery',
    description:
      'SQL, Python, Data Analytics, and modern technologies that support better data-driven problem solving.',
    iconName: 'brain',
  },
  {
    id: 'building',
    category: 'Building',
    title: 'GafLabs Initiative',
    description:
      'Trying to build GafLabs — a company focused on developing various AI-powered applications.',
    iconName: 'rocket',
    isFeatured: true,
  },
  {
    id: 'exploring',
    category: 'Exploring',
    title: 'AI & Digital Product Horizons',
    description:
      'Exploring the intersection of AI, web development, digital products, and data.',
    iconName: 'telescope',
  },
  {
    id: 'looking-for',
    category: 'Looking For',
    title: 'Impactful Opportunities',
    description:
      'Opportunities to learn, contribute, and grow in data, technology, and digital product environments.',
    iconName: 'briefcase',
  },
];

export const personalInterests: PersonalInterest[] = [
  {
    id: 'films',
    emoji: '🎬',
    title: 'Films',
    description:
      'Enjoying stories, cinematography, and getting immersed in different worlds through film.',
  },
  {
    id: 'music',
    emoji: '🎵',
    title: 'Music',
    description: 'Listening to The Strokes, The Beatles, Radiohead, and indie rock.',
  },
  {
    id: 'ideas',
    emoji: '☕',
    title: 'Building Ideas',
    description: 'Enjoying the process of turning ideas into practical products.',
  },
  {
    id: 'training',
    emoji: '🏋️',
    title: 'Training',
    description: 'Staying active and building a healthier lifestyle.',
  },
];

export const aboutServices = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description:
      'Transforming raw and complex data into meaningful insights to support better business decisions.',
    iconName: 'analysis' as const,
  },
  {
    id: 'dashboard-viz',
    title: 'Dashboard & Data Visualization',
    description:
      'Creating clear, interactive, and insightful dashboards that make data easier to understand.',
    iconName: 'dashboard' as const,
  },
  {
    id: 'digital-product',
    title: 'Digital Product & Web Development',
    description:
      'Designing and building digital products and web experiences with a focus on usability and functionality.',
    iconName: 'product' as const,
  },
];

export const apps: Record<AppId, AppConfig> = {
  about: {
    id: 'about',
    label: 'About',
    icon: UserRound,
    windowTitle: 'About Me',
    defaultPosition: { x: 40, y: 30 },
  },
  experience: {
    id: 'experience',
    label: 'Experience',
    icon: Briefcase,
    windowTitle: 'Experience',
    defaultPosition: { x: 80, y: 60 },
  },
  projects: {
    id: 'projects',
    label: 'Projects',
    icon: Laptop,
    windowTitle: 'Projects',
    defaultPosition: { x: 120, y: 90 },
  },
  gallery: {
    id: 'gallery',
    label: 'Gallery',
    icon: Images,
    windowTitle: 'Life Dump — Gallery',
    defaultPosition: { x: 100, y: 50 },
  },
  skills: {
    id: 'skills',
    label: 'Gallery',
    icon: Images,
    windowTitle: 'Life Dump — Gallery',
    defaultPosition: { x: 100, y: 50 },
  },
  contact: {
    id: 'contact',
    label: 'Contact',
    icon: Mail,
    windowTitle: 'Contact',
    defaultPosition: { x: 200, y: 150 },
  },
  resume: {
    id: 'resume',
    label: 'Resume',
    icon: FileText,
    windowTitle: 'Resume — CV Preview',
    defaultPosition: { x: 80, y: 50 },
  },
};

export const dockAppIds: AppId[] = [
  'projects',
  'experience',
  'gallery',
  'about',
  'contact',
];

export const experiences: ExperienceItem[] = [
  {
    company: 'PT Pertamina Patra Niaga Region Jawa Tengah',
    role: 'Data Analyst & Web Developer',
    period: '2023 – 2024',
    description:
      'Processed operational inventory and labor datasets, engineered analytics dashboards for asset/inventory monitoring, and built an internal web-based IT asset management system.',
    highlights: [
      'Processed and analyzed inventory, IT requirements, and labor operational data.',
      'Created dashboards for stock monitoring, asset allocation, and employee performance.',
      'Identified performance trends through statistical analysis.',
      'Developed an IT asset management and lending website.',
    ],
  },
  {
    company: 'FYP Media & Agency',
    role: 'Team Leader — UI/UX Design Intern',
    period: '2023',
    description:
      'Led UI/UX design workflows for mobile media applications and website redesigns, managing team tasks and presenting interactive prototypes to company mentors.',
    highlights: [
      'Designed a mobile-based media and news application.',
      'Redesigned the main FYP Media website.',
      'Led workflow and task distribution across the design team.',
      'Presented prototypes to mentors and company leadership.',
    ],
  },
  {
    company: 'Freelance Projects',
    role: 'Data Analyst, Web Developer & UI/UX Designer',
    period: '2022 – Present',
    description:
      'Delivered exploratory data analysis, business intelligence dashboards, responsive web applications, and user-centric UI/UX design systems across diverse client and independent projects.',
    highlights: [
      'Data Analytics: Built exploratory analysis models and actionable business dashboards for various client requirements.',
      'Web Development: Engineered responsive web applications and interactive interfaces.',
      'UI/UX Design: Created user-centric interface mockups, wireframes, and design systems in Figma.',
    ],
  },
];

export const organizations: OrganizationItem[] = [
  {
    id: 'hima-ilkom',
    organization: 'HIMA Ilkom UNNES',
    role: 'Head of Communication & Information Division (Kadiv Kominfo)',
    period: '2023 – 2024',
    initials: 'HI',
    description:
      'Led the division in managing organizational digital communication channels and social media, spearheading publication programs including Buletin Ilkom "Raccontare", Grand Launching, and Grand Closing.',
  },
  {
    id: 'duta-fmipa',
    organization: 'Duta FMIPA 2024',
    role: 'Student Ambassador',
    period: '2024',
    initials: 'FM',
    description:
      'Represented the Faculty of Mathematics and Natural Sciences as a student ambassador, actively engaging in institutional communication, event representation, and faculty promotion activities.',
  },
  {
    id: 'ppk-ormawa',
    organization: 'PPK Ormawa',
    role: 'Community Empowerment Initiative Member',
    period: '2023',
    initials: 'PPK',
    description:
      'Collaborated in the student organization community empowerment program, executing community development initiatives, field surveys, and digital outreach workshops.',
  },
  {
    id: 'al-husna',
    organization: 'Rohis Al Husna FMIPA',
    role: 'Media & Creative Publication Staff',
    period: '2022 – 2023',
    initials: 'AH',
    description:
      'Managed organizational digital media publications, designed creative campaign assets, and supported public relations communication across departmental events.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Data Analytics',
    items: [
      'Data Analysis',
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Business Insights',
      'Data Visualization',
    ],
  },
  {
    category: 'Tools',
    items: [
      'SQL / MySQL',
      'Microsoft Excel',
      'Python',
      'Power BI',
      'Tableau',
    ],
  },
  {
    category: 'Data Libraries',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Product & Development',
    items: [
      'Figma',
      'UI/UX Design',
      'Prototyping',
      'Next.js',
      'Web Development',
    ],
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Product Development',
  'Data Analytics',
  'Data Visualization',
  'Dashboard',
  'UI/UX & Product',
  'UI/UX & Product Design',
  'UI/UX Design / Product Design / Mobile Application',
  'Web / Product Development',
  'Digital Product',
];

export const projects: Project[] = [
  {
    id: 'abna-picks',
    title: 'ABNA PICKS',
    subtitle: 'AI-Powered Fragrance Recommendation & Customer Intelligence Platform',
    category: 'Full-Stack · Data Analytics · AI-Assisted Development',
    role: 'Product & System Development · Data Analytics · Business Logic · Full-Stack Implementation',
    projectType: 'AI-Powered Fragrance Recommendation & Customer Intelligence Platform',
    year: '2026',
    client: 'ABNA PICKS',
    description:
      'ABNA PICKS is an AI-powered fragrance recommendation and customer intelligence platform designed to help customers discover perfumes that match their personal characteristics, scent preferences, mood, budget, and occasion.\n\nThe system combines a 10-dimensional recommendation engine, interactive customer consultation, analytics, and business intelligence into a single platform.\n\nCustomers complete a 9-step interactive consultation covering demographic profile, budget, mood, scent family, intensity, atmosphere, and occasion. The system then analyzes their preferences and generates the Top 3 most relevant fragrance recommendations with match percentages, fragrance notes, and personalized explanations.\n\nOn the business side, every consultation is converted into structured analytics data that can be used to understand customer behavior, fragrance performance, customer segmentation, preference patterns, and consultation funnel drop-offs.',
    coverImage: '/images/landing page abnapicks.png',
    image: '/images/landing page abnapicks.png',
    images: [
      '/images/landing page abnapicks.png',
      '/images/quiz session abna picks.png',
      '/images/output abna picks.png',
      '/images/dashboard abna picks.png',
    ],
    coverPlaceholder: 'fragrance',
    visitUrl: 'https://abnapicks.netlify.app/',
    externalUrl: 'https://abnapicks.netlify.app/',
    links: {
      live: 'https://abnapicks.netlify.app/',
    },
    tools: [
      'React',
      'TypeScript',
      'TanStack Start',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'Zod',
      'Framer Motion',
    ],
    technologies: [
      'React 19',
      'TanStack Start',
      'TanStack Router',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'TanStack Start Server Functions',
      'Nitro SSR',
      'Supabase PostgreSQL',
      'Supabase Auth',
      'Row-Level Security (RLS)',
      'Zod Validation',
      '10D Recommendation Engine',
      'Customer Intelligence & Analytics',
      'Consultation Funnel Analytics',
      'Customer Segmentation',
      'XLSX / JSON / Markdown Export',
    ],
    highlights: [
      '10D Fragrance Recommendation Engine: Analyzes customer characteristics and preferences against a catalog of 444 fragrances to generate relevant recommendations.',
      'Interactive 9-Step Consultation: Customers go through a guided consultation covering demographic profile, budget, mood, scent family, intensity, atmosphere, and occasion.',
      'Top 3 Personalized Recommendations: Displays three recommended fragrances with match scores, fragrance notes, and personalized "why this matches you" explanations.',
      'Customer Intelligence Dashboard: Transforms consultation data into business insights through customer personas, segmentation, preference analysis, and fragrance performance analytics.',
      'Customer Segmentation: Segments customers using combinations such as age group × occupation and analyzes the preferences and characteristics of each segment.',
      'Cross-Analysis & Preference Analytics: Analyzes relationships between age, occupation, budget, mood, occasion, and scent family.',
      'Consultation Funnel Analytics: Tracks the customer journey from consultation start to completion, including conversion rate, answer rate, duration, and major drop-off points.',
      'Fragrance Performance Intelligence: Measures recommendation frequency, rank #1/#2/#3 distribution, average match score, and balanced performance across fragrances.',
      'Business Insight Engine: Generates deterministic business insights based on customer preferences, segment concentration, fragrance performance, budget affinity, and recommendation quality.',
      'Structured Data Export: Supports structured export in XLSX, JSON, and Executive Report formats.',
      'Admin Dashboard & RBAC: Internal dashboard protected with Supabase Authentication and role-based admin authorization.',
      'Privacy-Safe Customer Analytics: The system does not store customer names, email addresses, phone numbers, IP addresses, or browser fingerprints.',
      'Kiosk-Ready Customer Experience: Automatically resets inactive sessions after 60 seconds to maintain customer-session isolation when used in an in-store kiosk.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        content:
          'ABNA PICKS is an AI-powered fragrance recommendation and customer intelligence platform designed to help customers discover perfumes that match their personal characteristics, scent preferences, mood, budget, and occasion.\n\nThe system combines a 10-dimensional recommendation engine, interactive customer consultation, analytics, and business intelligence into a single platform.\n\nCustomers complete a 9-step interactive consultation covering demographic profile, budget, mood, scent family, intensity, atmosphere, and occasion. The system then analyzes their preferences and generates the Top 3 most relevant fragrance recommendations with match percentages, fragrance notes, and personalized explanations.\n\nOn the business side, every consultation is converted into structured analytics data that can be used to understand customer behavior, fragrance performance, customer segmentation, preference patterns, and consultation funnel drop-offs.',
        workflowSteps: [
          'Interactive Consultation',
          'Preference Analytics',
          '10D Recommendation Engine',
          'Top 3 Personalized Matches',
          'Customer Intelligence',
        ],
      },
      featureShowcases: {
        heading: 'Project Gallery & Visual Experience',
        intro:
          'A walkthrough of the core ABNA PICKS product experience from the 9-step customer consultation to personalized recommendations and the customer intelligence dashboard.',
        features: [
          {
            title: '1. Quiz Session — Interactive 9-Step Consultation',
            description:
              'Customers go through a guided consultation covering demographic profile, budget, mood, scent family, intensity, atmosphere, and occasion to capture their comprehensive fragrance preference profile.',
            image: '/images/quiz session abna picks.png',
            imageAlt: 'ABNA PICKS - Interactive 9-Step Customer Consultation Interface',
          },
          {
            title: '2. Personalized Recommendation Output',
            description:
              'Displays the Top 3 recommended fragrances evaluated against the 444 fragrance catalog, complete with match scores, fragrance notes, and personalized "why this matches you" explanations.',
            image: '/images/output abna picks.png',
            imageAlt: 'ABNA PICKS - Personalized Top 3 Fragrance Recommendation Output',
          },
          {
            title: '3. Customer Intelligence Dashboard',
            description:
              'Transforms consultation data into actionable business insights through customer personas, age × occupation segmentation, funnel drop-off analytics, and fragrance performance metrics.',
            image: '/images/dashboard abna picks.png',
            imageAlt: 'ABNA PICKS - Customer Intelligence & Analytics Dashboard',
          },
        ],
      },
      technicalArchitecture: {
        heading: 'Technical Implementation',
        content:
          'ABNA PICKS is built with a high-performance modern full-stack architecture, combining SSR server functions, relational database isolation, and deterministic recommendation engines.',
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
              'Zod validation',
            ],
          },
          {
            category: 'Analytics & Data',
            items: [
              'Customer session persistence',
              'Consultation event tracking',
              'Funnel analytics',
              'Customer segmentation',
              'Cross-dimensional analysis',
              'Recommendation performance analytics',
              'XLSX / JSON / Markdown export',
            ],
          },
          {
            category: 'Security & Reliability',
            items: [
              'Server-side Service Role isolation',
              'Zero-PII architecture',
              'Role-based admin authorization',
              'Server-mediated database access',
              'Non-blocking analytics event tracking',
              'Database failure resilience',
              'Kiosk session isolation',
            ],
          },
        ],
      },
      roleOverview: {
        heading: 'My Role',
        content:
          'Product & System Development · Data Analytics · Business Logic · Full-Stack Implementation\n\nI designed and developed the system from the customer consultation flow, recommendation logic, database architecture, analytics pipeline, admin dashboard, data export, security architecture, through production-readiness testing.\n\nThe project was developed using an AI-assisted development / vibe coding approach. AI was used as a development accelerator, while I remained responsible for system architecture, product requirements, business logic, technical direction, testing, debugging, and final implementation decisions.',
        responsibilities: [
          'Defining product requirements, user problem, and 9-step consultation flow.',
          'Designing and implementing the 10-dimensional recommendation engine and scoring algorithm.',
          'Structuring the Supabase PostgreSQL database architecture and Row-Level Security (RLS) policies.',
          'Designing the non-blocking analytics pipeline and session isolation logic.',
          'Building the Customer Intelligence Dashboard, segmentation matrix, and funnel analytics.',
          'Implementing Supabase Authentication and role-based admin authorization (RBAC).',
          'Implementing structured data export in XLSX, JSON, and Executive Report formats.',
          'Conducting automated testing across 287 assertions, security audit, and production verification.',
        ],
        concludingNote:
          'This project allowed me to combine product thinking, full-stack development, data analytics, business logic, and AI-assisted development into one cohesive, end-to-end system.',
      },
      performanceSnapshot: {
        heading: 'Project Outcome & Key Metrics',
        content:
          'ABNA PICKS evolved from a simple fragrance recommendation concept into an end-to-end customer intelligence platform.\n\nThe system not only provides personalized fragrance recommendations to customers, but also gives the business visibility into customer preferences, segmentation, consultation behavior, and fragrance performance.',
        metrics: [
          {
            value: '287 / 287',
            label: 'Automated Assertions',
            description: 'Automated Assertions Passed',
          },
          {
            value: '0',
            label: 'TypeScript Errors',
            description: 'Zero Type Errors in Strict Mode',
          },
          {
            value: '0',
            label: 'ESLint Errors',
            description: 'Zero Lint Violations',
          },
          {
            value: '444',
            label: 'Fragrance Catalog',
            description: 'Curated Perfume Database',
          },
          {
            value: '9-Step',
            label: 'Consultation',
            description: 'Customer Consultation Flow',
          },
          {
            value: '10D',
            label: 'Engine',
            description: 'Recommendation Engine',
          },
          {
            value: 'Intelligence',
            label: 'Analytics',
            description: 'Customer Intelligence + Funnel',
          },
          {
            value: 'XLSX / JSON',
            label: 'Report Export',
            description: 'Executive Report Formats',
          },
        ],
      },
      conclusion: {
        heading: 'More Than a Fragrance Recommendation Tool',
        content:
          'ABNA PICKS demonstrates how a recommendation system can become more valuable when customer experience and business intelligence are designed together.\n\nThe project does not stop at answering the question, "Which perfume should I buy?"\n\nIt also explores the larger questions behind every recommendation:\n\nWho are the customers?\n\nWhat do they prefer?\n\nWhere do they drop off?\n\nWhich fragrances perform best?\n\nWhich customer segments show the strongest preferences?\n\nBy connecting these questions into one system, ABNA PICKS becomes more than a recommendation tool. It becomes a customer intelligence platform built around the fragrance discovery experience.',
      },
    },
  },
  {
    id: 'asus-fits-for-u',
    title: 'ASUS Fits For U',
    subtitle: 'AI-Powered Laptop Recommendation Experience',
    category: 'Product Development',
    role: 'Product Designer & Developer',
    projectType: 'AI-Powered Web Application',
    year: '2026',
    client: 'Personal AI Product Development',
    description:
      'ASUS Fits For U is an AI-powered laptop advisor designed to help users find the ASUS laptop that best fits their needs. The project combines product thinking, UX design, and AI-assisted development to transform a complex laptop catalog into a more personalized recommendation experience.',
    coverImage: '/images/asusaicover.png',
    image: '/images/asusaicover.png',
    images: [
      '/images/asusaicover.png',
      '/images/asusai1.png',
      '/images/asusai2.png',
      '/images/asusai3.png',
    ],
    coverPlaceholder: 'laptop',
    visitUrl: 'https://asusfitsforru.netlify.app/',
    externalUrl: 'https://asusfitsforru.netlify.app/',
    links: {
      live: 'https://asusfitsforru.netlify.app/',
    },
    tools: [
      'Product Thinking',
      'UI/UX Design',
      'Vibe Coding',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Netlify',
    ],
    technologies: [
      'Product Development',
      'Vibe Coding',
      'UI/UX Design',
      'AI Integration',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Supabase',
      'Netlify',
    ],
    highlights: [
      'Developed an AI-powered ASUS laptop recommendation experience.',
      'Designed the product journey from user needs to personalized recommendations.',
      'Applied product thinking to simplify complex technical product discovery.',
      'Created the UX and UI for the advisor experience.',
      'Built the project as a functional web application.',
      'Explored AI-assisted development through vibe coding.',
      'Combined product strategy, UI/UX, and development in one project.',
      'Transformed a traditional product catalog into a more personalized discovery experience.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        content:
          'Choosing the right laptop can be overwhelming.\n\nUsers are often faced with multiple product series, technical specifications, price ranges, and different performance requirements. Understanding which laptop is actually suitable can require significant product knowledge.\n\nASUS Fits For U was created to simplify this decision-making process.\n\nInstead of asking users to begin with technical specifications, the product focuses on their needs first.\n\nUsers can describe what they need from a laptop, such as work, study, creative tasks, portability, performance, or other lifestyle requirements.\n\nThe system then helps translate those needs into more relevant ASUS laptop recommendations.\n\nThe project explores how AI can improve product discovery by making a large product catalog feel more conversational, accessible, and personalized.',
        workflowSteps: [
          'Product Idea',
          'Problem Definition',
          'UX Strategy',
          'UI/UX Design',
          'AI Advisor Flow',
          'Functional Web App',
          'Vibe Coding',
        ],
      },
      problem: {
        heading: 'The Problem',
        content:
          'Modern laptop shopping often begins with technical specifications.\n\nUsers are expected to compare processors, graphics cards, memory, storage, display specifications, and product series before understanding which options are actually relevant to their needs.\n\nThis creates several challenges:\n• Users may not understand technical specifications.\n• Product catalogs can contain too many choices.\n• Comparing multiple products can be time-consuming.\n• Users may choose products that do not actually fit their primary needs.\n• Traditional filtering systems still require users to understand the products before finding them.\n\nThe key product challenge was:\nHow might we help users find the right ASUS laptop without requiring them to already know which technical specifications they should be looking for?',
      },
      targetExperience: {
        heading: 'From Specifications to Needs',
        intro:
          'The core product idea behind ASUS Fits For U was to reverse the traditional product discovery flow.\n\nInstead of:\nTechnical Specifications → Compare Products → Try to understand suitability\n\nThe experience begins with:\nUser Needs → AI Understanding → Personalized Recommendation → Product Comparison\n\nThe product therefore treats the user\'s lifestyle and requirements as the starting point of the recommendation journey.\n\nThe goal is to make product discovery feel less like searching through a catalog and more like receiving guidance from a product advisor.',
      },
      designGoal: {
        heading: 'Product Goal',
        content:
          'The goal of ASUS Fits For U was to create a more approachable and personalized way to discover ASUS laptops.\n\nThe product focuses on helping users:\n• Explain what they need in natural language.\n• Explore relevant laptop options.\n• Receive more contextual recommendations.\n• Understand why a product may fit their needs.\n• Make a more confident product decision.\n\nThe experience should reduce the gap between:\n"I know what I need to do"\nand\n"I know which laptop can help me do it."',
      },
      userJourney: {
        heading: 'How It Works',
        steps: [
          {
            step: '01',
            title: 'Tell Us Your Needs',
            description: 'Users begin by describing what they need from a laptop.',
          },
          {
            step: '02',
            title: 'Understand the Context',
            description: 'The system interprets user requirements and identifies relevant product criteria.',
          },
          {
            step: '03',
            title: 'Match the Products',
            description: 'Available ASUS laptops are evaluated against the user\'s needs.',
          },
          {
            step: '04',
            title: 'Get Recommendations',
            description: 'Users receive relevant laptop recommendations instead of manually searching through the entire catalog.',
          },
          {
            step: '05',
            title: 'Explore Further',
            description: 'Users can review the recommended products and continue their decision-making process.',
          },
        ],
      },
      aiAdvisorExperience: {
        heading: 'AI as a Product Advisor',
        image: '/images/asusai1.png',
        imageAlt: 'ASUS Fits For U - AI Advisor and Needs Analysis Interface',
        content:
          'The AI experience was designed around product guidance rather than simply adding AI as a visual feature.\n\nThe purpose of the advisor is to help translate human needs into product recommendations.\n\nA user may not know:\n• Which processor they need.\n• How much RAM is appropriate.\n• Which laptop series fits their lifestyle.\n• Whether portability or performance should be prioritized.\n\nHowever, they may know what they want to do.\n\nBy starting with user intent, the product can guide the discovery process from a more human-centered perspective.',
      },
      productDiscoveryExperience: {
        heading: 'Turning Needs into Recommendations',
        image: '/images/asusai2.png',
        imageAlt: 'ASUS Fits For U - Personalized Laptop Recommendations & Comparison',
        content:
          'The recommendation experience connects user intent with actual product options.\n\nRather than presenting every available product equally, the product experience focuses on surfacing options that are more relevant to the user\'s context.\n\nThe recommendation interface should help users understand:\n• Which products are recommended.\n• Why they may be suitable.\n• What type of user or need each option supports.\n• How different recommendations relate to their requirements.\n\nThe goal is not simply to display a list of laptops.\n\nThe goal is to provide context around product suitability.',
      },
      developmentProcess: {
        heading: 'From Product Idea to Working Application',
        content:
          'ASUS Fits For U was developed as a functional web product.\n\nThe project required multiple disciplines to work together:\n\nThis process allowed the product idea to move beyond static screens and become an interactive experience.',
        disciplines: [
          {
            title: 'Product Strategy',
            description:
              'Defining the problem and identifying how AI could improve the product discovery journey.',
          },
          {
            title: 'UX Design',
            description:
              'Designing the interaction flow from user input to product recommendations.',
          },
          {
            title: 'UI Design',
            description:
              'Creating an interface that makes the recommendation process clear, approachable, and easy to navigate.',
          },
          {
            title: 'Development',
            description:
              'Building the functional product and integrating the experience into a working web application.',
          },
        ],
      },
      vibeCoding: {
        heading: 'Building Through Vibe Coding',
        content:
          'The project was also an exploration of AI-assisted development and vibe coding.\n\nRather than treating AI only as a feature inside the final product, AI was also used as part of the development process.\n\nThe workflow involved translating product requirements and design intent into implementation through iterative AI-assisted development.',
        workflowSteps: [
          'Idea',
          'Product Requirements',
          'UI Structure',
          'AI-Assisted Development',
          'Testing',
          'Iteration',
        ],
        concludingNote:
          'Vibe coding allowed the project to move quickly from concept to functional prototype while maintaining a strong focus on the product experience.\n\nHowever, the final direction was still driven by product decisions rather than simply generating code.\n\nThe AI-assisted workflow became a tool for accelerating execution, while the product problem, user experience, and design decisions remained central to the development process.',
      },
      technicalArchitecture: {
        heading: 'The Product Behind the Interface',
        content:
          'ASUS Fits For U was built using a modern frontend and serverless stack designed for high performance, smooth interaction, and dynamic recommendation logic.',
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
            category: 'Deployment',
            items: ['Netlify CI/CD', 'Automated Production Builds'],
          },
        ],
      },
      designDecisions: {
        heading: 'Key Product Decisions',
        items: [
          {
            title: '01. Start with User Intent',
            description:
              'Users describe what they need instead of being forced to begin with technical specifications.',
          },
          {
            title: '02. Make Recommendations Explainable',
            description:
              'Recommendations should provide context around why a product may be relevant.',
          },
          {
            title: '03. Reduce Product Catalog Complexity',
            description:
              'The experience should help users focus on relevant choices rather than browsing every available option.',
          },
          {
            title: '04. AI as Guidance',
            description:
              'The AI experience should support decision-making instead of replacing the user\'s control.',
          },
          {
            title: '05. Build the Real Experience',
            description:
              'The project was developed as a functional product rather than remaining only a visual concept.',
          },
        ],
      },
      featureShowcases: {
        heading: 'The ASUS Fits For U Experience',
        intro:
          'A walkthrough of the core product moments designed to simplify ASUS laptop discovery.',
        features: [
          {
            title: 'Discover & Tell Us About Yourself',
            description:
              'The user entry point and natural-language prompt interface where users communicate what they need from a laptop, their budget, and primary use cases.',
            image: '/images/asusai1.png',
            imageAlt: 'ASUS Fits For U - Discover and User Needs Input Experience',
          },
          {
            title: 'Get Personalized Guidance & Matching Matrix',
            description:
              'The recommendation engine evaluates available models across multi-dimensional criteria (performance, portability, battery, gaming, display, value) and presents contextual scores.',
            image: '/images/asusai2.png',
            imageAlt: 'ASUS Fits For U - Personalized Guidance & Multi-Criteria Matching',
          },
          {
            title: 'Explore the Right Fit & Product Comparison',
            description:
              'Detailed product specifications, match score analysis, trade-off explanations, and direct product exploration for confident decision-making.',
            image: '/images/asusai3.png',
            imageAlt: 'ASUS Fits For U - Product Detail & Specification Comparison Experience',
          },
        ],
      },
      visualDirection: {
        heading: 'Designing an Approachable AI Experience',
        content:
          'AI-powered products can quickly become complex if the user does not understand what the system is doing.\n\nThe UI/UX approach focused on making the product feel approachable and product-focused.\n\nThe interface was designed to:\n• Clearly communicate the purpose of the advisor.\n• Guide users through the recommendation journey.\n• Reduce unnecessary technical complexity.\n• Keep recommendations easy to explore.\n• Maintain a clear visual hierarchy.\n\nThe design needed to balance two different layers of complexity:\nThe user\'s needs.\nThe technical details of the products.\n\nThe interface acts as a bridge between those two layers.',
      },
      roleOverview: {
        heading: 'My Role',
        content: 'I was responsible for the project from concept to implementation.\n\nMy role included:',
        responsibilities: [
          'Identifying the product problem.',
          'Defining the product concept.',
          'Designing the user experience.',
          'Creating the interface.',
          'Structuring the product flow.',
          'Guiding AI-assisted development.',
          'Building and iterating on the functional web application.',
        ],
        concludingNote:
          'This project allowed me to explore the intersection of product development, UI/UX design, and modern AI-assisted software development.',
      },
      conclusion: {
        heading: 'More Than a Recommendation Tool',
        content:
          'ASUS Fits For U demonstrates how AI can be used to improve a complex product discovery experience.\n\nThe project explores a shift away from asking users to understand products before finding the right one.\n\nInstead, the experience begins with the user.\n\nWhat do they need?\n\nWhat do they want to do?\n\nWhat kind of laptop fits their lifestyle?\n\nBy connecting those needs with product recommendations, ASUS Fits For U transforms a traditional catalog browsing experience into a more guided and personalized product journey.\n\nThe project also represents my exploration of a broader product development workflow where product thinking, UI/UX design, and AI-assisted development work together to move an idea from concept into a real, functional application.',
      },
    },
  },
  {
    id: 'google-ads-analysis',
    title: 'Google Ads Analysis',
    category: 'Data Analytics',
    role: 'Data Analyst',
    projectType: 'Data Cleaning & Exploratory Data Analysis',
    year: '2026',
    tools: ['MySQL', 'SQL', 'CTE', 'Window Functions'],
    description:
      'Transforming 2,000+ rows of messy Google Ads performance data into a clean, reliable, and analysis-ready dataset to uncover campaign performance, profitability, and actionable business insights.',
    coverImage: '/images/googleadsanalytics.jpg',
    coverPlaceholder: 'analytics',
    externalUrl:
      'https://medium.com/@massegaf208/cleaning-the-chaos-transforming-messy-google-ads-data-into-profitable-insights-with-mysql-f7c7d7cb8d3e',
    links: {
      live: 'https://medium.com/@massegaf208/cleaning-the-chaos-transforming-messy-google-ads-data-into-profitable-insights-with-mysql-f7c7d7cb8d3e',
    },
    technologies: [
      'MySQL',
      'SQL',
      'CTE',
      'ROW_NUMBER()',
      'STR_TO_DATE()',
      'Data Cleaning',
      'Exploratory Data Analysis',
    ],
    highlights: [
      'Identified and eliminated duplicate records using CTEs and ROW_NUMBER() window functions.',
      'Standardized mixed date formats and converted text currency strings into DECIMAL(10,2) precision.',
      'Applied smart data imputation to calculate missing Cost values using Clicks × Avg CPC logic.',
      'Uncovered a 6.98x overall ROAS and 4.75% desktop conversion rate through exploratory SQL queries.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        subheading: 'Cleaning the Chaos',
        content:
          'This project started with a simulated Google Ads performance dataset containing more than 2,000 rows of intentionally messy data. The dataset contained duplicate records, inconsistent strings, mixed date formats, financial values stored as text, and missing values in critical metrics.\n\nThe objective was not simply to clean the data, but to transform it into a reliable source of truth for calculating business metrics such as ROAS and Conversion Rate. The complete workflow covered initial data profiling, SQL-based cleaning in MySQL, and exploratory analysis to uncover profitable campaign insights.',
      },
      challenge: {
        heading: 'The Challenge',
        intro:
          'Before meaningful analysis could begin, the raw dataset needed to be transformed from inconsistent and unreliable records into a structured, calculation-ready database.',
        items: [
          {
            title: 'Duplicate Records',
            description:
              'Identical rows could distort totals and campaign performance metrics.',
          },
          {
            title: 'Inconsistent Strings',
            description:
              'Campaign names, keywords, and locations contained variations and typos such as “Data Anlytics Corse”.',
          },
          {
            title: 'Mixed Date Formats',
            description:
              'The Ad_Date column contained multiple formats, including different separators and structures.',
          },
          {
            title: 'Text-Based Financial Data',
            description:
              'Cost and Sale_Amount contained currency symbols and were stored as text, preventing reliable calculations.',
          },
          {
            title: 'Missing Values',
            description:
              'Important fields such as Cost and Conversion Rate contained NULL or missing values.',
          },
        ],
      },
      processSteps: {
        heading: 'The Cleaning Process',
        steps: [
          {
            step: '01',
            title: 'Data Profiling',
            description:
              'Before cleaning the dataset, the first step was identifying the major data quality issues and understanding the structure of the raw data.',
          },
          {
            step: '02',
            title: 'Duplicate Detection',
            description:
              'I used a Common Table Expression (CTE) combined with the ROW_NUMBER() window function to identify and isolate duplicate records based on relevant campaign and performance fields.',
          },
          {
            step: '03',
            title: 'Date & Data Standardization',
            description:
              'The Ad_Date column contained multiple date formats. CASE WHEN logic combined with STR_TO_DATE was used to detect and convert them into a standardized SQL date format. Financial values were also transformed into proper numeric data types for reliable calculations.',
          },
          {
            step: '04',
            title: 'Smart Data Imputation',
            description:
              'Instead of deleting rows with missing Cost values, I used business logic to estimate them. The missing Cost values were calculated using the number of Clicks multiplied by the Average CPC derived from the existing data.',
          },
        ],
        additionalNote:
          'After the imputation process, financial values were stored using DECIMAL(10,2) precision to ensure reliable financial reporting and calculations.',
      },
      beforeAfter: {
        before: {
          title: 'Raw & Messy Data',
          items: [
            'Cost and Sale_Amount stored as text with currency symbols',
            'Multiple inconsistent date formats',
            'Important NULL values in key metrics',
            'Duplicate and inconsistent records',
          ],
        },
        after: {
          title: 'Analysis-Ready Data',
          items: [
            'Cost and Sale_Amount converted to numeric DECIMAL values',
            'Dates standardized into SQL-compatible format',
            'Missing values handled using calculated imputation',
            'Dataset prepared for reliable metric calculations and EDA',
          ],
        },
      },
      insights: {
        heading: 'Key Insights',
        items: [
          {
            number: 'INSIGHT 01',
            value: '6.98x',
            label: 'Overall ROAS',
            description:
              'Every dollar spent generated nearly seven dollars in revenue, showing strong overall campaign profitability.',
          },
          {
            number: 'INSIGHT 02',
            value: '4.75%',
            label: 'Desktop Conversion Rate',
            description:
              'Although Mobile generated the highest volume of clicks, Desktop users achieved a higher conversion rate and lower cost per conversion.',
          },
          {
            number: 'INSIGHT 03',
            value: '7.12x',
            label: 'Top Keyword ROAS',
            description:
              '‘Data Analytics Course’ emerged as one of the most efficient keywords, demonstrating the profitability of high-intent transactional search terms.',
          },
        ],
      },
      conclusion: {
        heading: 'Data Quality is the Foundation',
        content:
          'This project reinforced that data cleaning is not simply a technical preparation step. Reliable analysis depends on reliable data. By transforming raw, inconsistent records into a structured and analysis-ready dataset, it became possible to uncover insights that could support smarter campaign and budget decisions.\n\nThe project demonstrates how SQL and MySQL can be used to bridge the gap between messy operational data and meaningful business insights.',
      },
    },
  },
  {
    id: 'google-ads-dashboard',
    title: 'Google Ads Dashboard',
    category: 'Data Analytics',
    role: 'Data Analyst / Data Visualization',
    year: '2025',
    client: 'Personal Data Analytics Project',
    description:
      'An end-to-end Google Ads analytics project focused on transforming raw campaign data into a clean and executive-friendly Tableau dashboard. The project combined SQL data preparation, metric development, and visual design to evaluate advertising performance, sales trends, profitability, and device-level revenue.',
    coverImage: '/images/googleadsdashboard.jpg',
    image: '/images/googleadsdashboard.jpg',
    coverPlaceholder: 'dashboard',
    visitUrl:
      'https://medium.com/@massegaf208/data-driven-marketing-transforming-google-ads-raw-data-into-an-executive-simple-dashboard-6eddb2140575',
    externalUrl:
      'https://medium.com/@massegaf208/data-driven-marketing-transforming-google-ads-raw-data-into-an-executive-simple-dashboard-6eddb2140575',
    links: {
      live: 'https://medium.com/@massegaf208/data-driven-marketing-transforming-google-ads-raw-data-into-an-executive-simple-dashboard-6eddb2140575',
    },
    tools: ['Tableau', 'MySQL', 'SQL', 'Figma'],
    technologies: [
      'MySQL',
      'SQL',
      'Tableau',
      'Figma',
      'Data Cleaning',
      'Data Transformation',
      'Calculated Fields',
      'Data Visualization',
      'Business Intelligence',
    ],
    highlights: [
      'Transformed raw Google Ads data into a structured executive performance dashboard.',
      'Performed data preparation and cleaning using SQL.',
      'Developed and analyzed key marketing metrics including Total Sales, Total Cost, and ROAS.',
      'Built calculated fields in Tableau for accurate performance measurement.',
      'Used ZN() and REGEXP_REPLACE() to handle null values and string-formatted cost data.',
      'Designed a clean and executive-friendly dashboard experience.',
      'Used Figma to support the Soft UI visual direction.',
      'Analyzed daily sales trends to identify significant performance fluctuations.',
      'Identified a major performance peak around November 22.',
      'Compared performance across Desktop, Mobile, and Tablet categories.',
      'Generated insights to support future marketing strategy and advertising budget allocation.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        content:
          'Digital marketing data can contain thousands of rows covering advertising costs, clicks, conversions, sales, and campaign performance. While this data contains valuable information, raw datasets can be difficult for stakeholders to interpret and use for decision-making.\n\nThis project focused on transforming raw Google Ads data from November 2024 into a clear and executive-friendly performance dashboard.\n\nThe project followed an end-to-end analytics workflow:\n1. Preparing and cleaning the raw data.\n2. Transforming and validating important metrics.\n3. Building calculated fields for performance analysis.\n4. Designing an executive-oriented Tableau dashboard.\n5. Identifying actionable business insights from sales, cost, ROAS, trends, and device performance.\n\nThe main objective was not simply to create charts. The objective was to transform a complex dataset into a dashboard that allows stakeholders to quickly understand:\n• How much revenue was generated.\n• How much was invested in advertising.\n• Whether the advertising investment was profitable.\n• How performance changed over time.\n• Which devices were contributing the most to revenue.\n\nThe central business questions were:\n"Which devices are driving our revenue?"\nand\n"Is our advertising spend generating a profitable return?"\n\nTo answer these questions, the analysis focused on three primary North Star metrics: Total Sales, Total Cost, and ROAS (Return on Ad Spend).',
      },
      challenge: {
        heading: 'The Challenge',
        content:
          'Raw marketing data can easily become overwhelming. Large numbers of records may contain costs, sales values, dates, device information, and other performance variables, but raw numbers alone do not automatically provide useful business insight.\n\nThe challenge in this project was to move from fragmented marketing data to a clear decision-making tool.\n\nThe dashboard needed to answer several important questions:\n• Is the campaign generating profitable returns?\n• How much revenue is being generated relative to advertising cost?\n• When does performance reach its highest point?\n• Which device categories contribute most strongly to sales?\n• Where should future advertising budgets potentially be prioritized?\n\nThe final solution therefore needed to balance two things:\n\nTechnical accuracy:\nThe data and metrics needed to be prepared correctly.\n\nBusiness usability:\nThe final dashboard needed to be simple enough for stakeholders to understand quickly without being overwhelmed by unnecessary detail.',
      },
      dataPreparation: {
        heading: 'Data Preparation',
        content:
          'Before visualization, the raw Google Ads data needed to be prepared to ensure it was reliable for analysis.\n\nThe first stage involved data cleaning and preparation using SQL. The goal was to create a cleaner analytical foundation before bringing the data into Tableau.\n\nKey preparation activities included:\n• Reviewing the structure of the raw Google Ads dataset.\n• Preparing date values so they could be analyzed consistently over time.\n• Performing aggregation where necessary.\n• Preparing numerical fields for further calculations.\n• Ensuring the dataset was suitable for dashboard development.\n\nThis stage was important because dashboard accuracy depends heavily on the quality of the underlying data. Without proper preparation, visualizations can easily produce misleading insights.\n\nThe SQL workflow served as the foundation of the overall project, transforming raw marketing records into a dataset that could be used more effectively inside Tableau.',
      },
      metricDevelopment: {
        heading: 'Metric Development',
        content:
          'After the dataset was prepared, the next step was to build the metrics needed to evaluate campaign performance.\n\nThe most important calculated metric was ROAS.\n\nROAS was calculated using:\nSUM([Sale Amount]) / SUM([Cost])\n\nThis metric measures how much revenue is generated for each unit of advertising cost.\n\nThe project also used Tableau data handling functions to improve the reliability of the calculations. This included:\n• ZN() for handling null values.\n• REGEXP_REPLACE() for cleaning and converting cost values that contained string-based formatting.\n\nThese transformations helped ensure that the data could be interpreted as clean, calculable values before being used in the dashboard.\n\nThe resulting analysis focused on:\n• Revenue generation\n• Advertising investment\n• Return on advertising spend\n• Daily sales trends\n• Device-level performance',
      },
      dashboardDesign: {
        heading: 'Dashboard Design',
        content:
          'The dashboard was designed not only as a technical visualization but also as a user interface for business decision-making.\n\nThe design approach focused on creating a premium and executive-friendly experience.\n\nBefore finalizing the Tableau dashboard, the visual concept was supported by a custom background and interface direction created in Figma.\n\nThe visual style used a Soft UI-inspired approach with:\n• Rounded containers.\n• Clean card-based information grouping.\n• A professional grayscale palette.\n• Minimal visual clutter.\n• Reduced emphasis on unnecessary gridlines.\n• Clear visual hierarchy.\n\nThe goal was to allow important numbers and trends to stand out.\n\nInstead of presenting every available metric at once, the dashboard prioritizes the information that stakeholders need to understand quickly.\n\nThe final dashboard was structured around three main analytical areas:\n1. Executive Summary: A high-level KPI view that immediately communicates overall business performance.\n2. Sales Trend: A time-series visualization showing daily sales fluctuations and important performance patterns.\n3. Device Performance: A comparison of performance across different device categories to support marketing and budget allocation decisions.\n\nThe overall design principle was simple: A dashboard should not only be functional. It should also be intuitive and visually clear enough to encourage stakeholders to actually use the insights.',
      },
      performanceSnapshot: {
        heading: 'Performance Snapshot',
        metrics: [
          {
            value: '$1.5M',
            label: 'Total Sales',
            description: 'Generated in sales during November 2024.',
          },
          {
            value: '$216K',
            label: 'Total Advertising Investment',
            description: 'Total advertising expenditure invested in campaigns.',
          },
          {
            value: '6.9x',
            label: 'ROAS',
            description: 'Return on advertising spend achieved overall.',
          },
        ],
        content:
          'The campaign generated approximately $1.5 million in sales from approximately $216,000 in advertising investment.\n\nThis resulted in a ROAS of 6.9x.\n\nIn practical terms, the campaign generated nearly $7 in revenue for every $1 spent on advertising.\n\nThese results indicate that the overall campaign was highly profitable and that the advertising investment was generating a strong return.',
      },
      salesTrend: {
        heading: 'Sales Trend',
        content:
          'The sales trend visualization was designed to show how performance changed throughout November 2024.\n\nInstead of only presenting an overall sales number, the time-series analysis makes it possible to identify fluctuations and periods of unusually strong performance.\n\nOne particularly important observation was a significant performance peak around November 22.\n\nThis spike may indicate:\n• A successful promotion.\n• A specific campaign activity.\n• Seasonal demand.\n• A marketing event that generated unusually high engagement or conversion.\n\nWhile the dashboard itself cannot fully explain the cause of the spike, the result highlights an important area for further investigation.\n\nUnderstanding what happened around November 22 could help identify strategies or campaign conditions that could potentially be replicated to improve future marketing performance.',
      },
      devicePerformance: {
        heading: 'Device Performance',
        content:
          'Device-level analysis showed that Desktop was the strongest-performing category.\n\nMobile followed closely behind, making it another important contributor to campaign performance.\n\nThis result suggests that the marketing experience should remain optimized across both Desktop and Mobile.\n\nThe analysis also provides an important strategic implication: Desktop and Mobile should remain primary priorities when planning future marketing strategies and budget allocation.\n\nTablet performed at a relatively lower level compared with the other major device categories. This does not necessarily mean Tablet should be completely ignored, but it indicates that future budget allocation could be reviewed and potentially prioritized toward the stronger-performing segments.',
      },
      sections: [
        {
          heading: 'Key Business Insights',
          items: [
            {
              title: '1. Strong Campaign Profitability',
              description:
                'With a ROAS of 6.9x, the campaign generated nearly $7 in sales for every $1 spent on advertising. This indicates a highly efficient campaign and a strong return on marketing investment.',
            },
            {
              title: '2. Desktop and Mobile Are the Primary Revenue Drivers',
              description:
                'Desktop delivered the strongest performance, while Mobile followed closely. Both platforms should remain priorities when optimizing campaigns and allocating future advertising budgets.',
            },
            {
              title: '3. The November 22 Performance Spike Deserves Investigation',
              description:
                'The significant increase in performance around November 22 suggests that there may have been a successful campaign, promotion, or seasonal factor affecting sales. Investigating the conditions surrounding this spike could help identify opportunities to replicate successful strategies.',
            },
            {
              title: '4. Data Can Support Smarter Budget Allocation',
              description:
                'By comparing device performance, the dashboard provides a clearer basis for deciding where future advertising investment should be prioritized. Rather than distributing budget based only on assumptions, decision-makers can use actual performance data to support their strategy.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'express-analytics-dashboard',
    title: 'Express Analytics Dashboard',
    category: 'Data Analytics',
    role: 'Data Analyst / Data Visualization',
    projectType: 'End-to-End Data Analytics & Business Intelligence',
    year: '2026',
    client: 'Personal Data Analytics Project',
    description:
      'An end-to-end SaaS sales analytics project that transformed synthetic transaction data into a professional business intelligence dashboard. The project covered Python data generation, MySQL data engineering, Figma interface design, and Tableau visualization to analyze sales performance, logistics, orders, and product categories.',
    coverImage: '/images/express.webp',
    image: '/images/express.webp',
    coverPlaceholder: 'express',
    visitUrl:
      'https://medium.com/@massegaf208/building-a-professional-saas-sales-dashboard-an-end-to-end-data-analytics-journey-608407f7e845',
    externalUrl:
      'https://medium.com/@massegaf208/building-a-professional-saas-sales-dashboard-an-end-to-end-data-analytics-journey-608407f7e845',
    links: {
      live: 'https://medium.com/@massegaf208/building-a-professional-saas-sales-dashboard-an-end-to-end-data-analytics-journey-608407f7e845',
    },
    tools: ['Python', 'MySQL', 'Tableau', 'Figma'],
    technologies: [
      'Python',
      'Pandas',
      'Faker',
      'MySQL',
      'SQL',
      'Tableau',
      'Figma',
      'Data Generation',
      'Data Engineering',
      'Data Visualization',
      'Business Intelligence',
    ],
    highlights: [
      'Generated 5,000 synthetic SaaS transaction records using Python and Faker.',
      'Simulated realistic customer regions, product categories, transaction values, order statuses, and delivery information.',
      'Moved generated data into MySQL for database management and analysis.',
      'Performed data preparation and SQL-based feature engineering.',
      'Created delivery duration as a new logistics performance metric.',
      'Designed a modern SaaS dashboard direction using Figma.',
      'Built KPI views for Total Sales, Active Shipments, and Return Rate.',
      'Visualized monthly sales trends.',
      'Created a custom donut chart for sales distribution by category.',
      'Analyzed logistics performance across Indonesian provinces.',
      'Connected Tableau to MySQL using a Live Connection.',
      'Built a complete workflow from data generation to business intelligence visualization.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        content:
          'ExpressAnalytics was built as an end-to-end data analytics journey designed to simulate a real-world SaaS business environment.\n\nThe project started from the data foundation rather than from a ready-made dataset. Using Python and the Faker library, a synthetic dataset containing 5,000 transactions was generated to simulate realistic business activity.\n\nThe generated data was then moved into a MySQL database, where SQL was used to organize the data and engineer additional analytical features. After the data layer was prepared, the dashboard interface direction was designed in Figma before the final visualization was built in Tableau.\n\nThe result was a complete workflow that connected data generation, database management, SQL transformation, visual design, and business intelligence into one project.\n\nThe main objective was to demonstrate how raw data can travel through a complete analytics pipeline and become a professional, decision-oriented dashboard.',
        workflowSteps: [
          'Synthetic Data',
          'Database',
          'Data Engineering',
          'UI Design',
          'Visualization',
        ],
      },
      challenge: {
        heading: 'The Challenge',
        content:
          'Rather than only analyzing an existing dataset, this project required building the complete analytics foundation from scratch.\n\nThe challenge was to create a realistic analytical environment that connected several different disciplines:\n• Generating realistic transaction data.\n• Structuring the data inside a database.\n• Preparing the data for analysis.\n• Engineering new analytical features.\n• Designing a clear and modern dashboard interface.\n• Connecting the visualization to a live data source.\n\nThe final result needed to go beyond a static report. The goal was to create a professional-grade business application where technical data processing and thoughtful visual design worked together.',
      },
      dataFoundation: {
        heading: 'Building the Data Foundation',
        subheading: 'Python & Synthetic Data Generation',
        content:
          'Every analytics project needs a reliable data foundation. To simulate a real-world SaaS environment, Python and the Faker library were used to generate a synthetic dataset containing 5,000 transactions.\n\nThe generated data included realistic business attributes such as:\n• Order ID\n• Order Date\n• Customer Region\n• Product Category\n• Total Price\n• Order Status\n• Delivery information\n\nThe dataset was designed to represent transaction activity across several Indonesian regions:\n• Jakarta\n• Jawa Barat\n• Jawa Tengah\n• Jawa Timur\n• Banten\n\nThe product categories included:\n• Electronics\n• Appliances\n• Accessories\n• Furniture\n\nOrder statuses included:\n• Delivered\n• On Delivery\n• Returned\n\nGenerating the dataset programmatically made it possible to create a controlled but realistic analytical environment with enough transaction volume to explore business performance, sales trends, logistics, and product distribution.',
      },
      dataEngineering: {
        heading: 'Engineering the Data Warehouse',
        content:
          'After the synthetic dataset was generated, the data was moved into a MySQL database.\n\nThe database layer became the analytical foundation for the project.\n\nSQL was used to organize and prepare the transaction data for downstream analysis. In addition to cleaning and structuring the data, new analytical features were engineered to provide deeper insight into business performance.\n\nOne important engineered feature was delivery duration.',
        formula: {
          label: 'Delivery Duration Formula',
          formula: 'Delivery Duration = Arrival Date − Order Date',
          explanation:
            'Using SQL DATEDIFF logic, the project calculated the number of days between the order date and arrival date. This created a new feature that made it possible to analyze logistics performance across different regions. Delivered orders were used when calculating completed delivery performance.',
        },
      },
      pipeline: {
        heading: 'From Database to Live Dashboard',
        content:
          'After the data was prepared in MySQL, Tableau was connected directly to the MySQL server using a Live Connection.\n\nThis architecture allowed the dashboard to work as a more dynamic business intelligence tool.\n\nWhen new data is added or updated in the underlying database, the Tableau connection can reflect the updated information.\n\nThis demonstrates how the project moved beyond a simple CSV-based visualization workflow and toward a more realistic analytics architecture.',
        flow: [
          'Python',
          'MySQL',
          'Live Connection',
          'Tableau Dashboard',
        ],
      },
      dashboardDesign: {
        heading: 'Designing for the User',
        content:
          'As someone with a background in UI/UX, I approached the dashboard not only as a visualization exercise but also as a user interface.\n\nBefore building the final Tableau dashboard, the visual direction was planned through a custom background asset designed in Figma.\n\nThe goal was to create a modern SaaS-style dashboard with a clear information hierarchy.',
        principles: [
          {
            title: 'Soft Gradients',
            description:
              'Gradient treatment was used to give important KPI areas a modern SaaS visual identity.',
          },
          {
            title: 'Rounded Corners',
            description:
              'Rounded containers were used to create a softer and more contemporary interface.',
          },
          {
            title: 'Visual Hierarchy',
            description:
              'The most important business metrics were positioned prominently so users could understand overall performance before exploring detailed visualizations.',
          },
        ],
        additionalNote:
          'The purpose of the design was not decoration. The visual system was created to make complex information easier to scan and understand.',
      },
      finalDashboard: {
        heading: 'The Final Dashboard',
        content:
          'The final dashboard combined business performance and logistics insights into a single interface.\n\nThe dashboard was designed to help users move from high-level performance metrics to more detailed analytical views.',
        visualizations: [
          {
            title: 'KPI Tiles',
            description:
              'Tracking the most important business metrics, including Total Sales, Active Shipments, and Return Rate.',
          },
          {
            title: 'Monthly Sales Trend',
            description:
              'A line chart showing how sales performance changed over time and helping identify business growth patterns.',
          },
          {
            title: 'Sales by Category',
            description:
              'A custom donut chart showing how sales were distributed across different product categories.',
          },
          {
            title: 'Geospatial Logistics',
            description:
              'A geographic view used to monitor average delivery times across different provinces in Indonesia.',
          },
        ],
        additionalNote:
          'The dashboard structure emphasizes that different visualizations serve different analytical questions while remaining part of one unified business intelligence interface.',
      },
      sections: [
        {
          heading: 'Key Insights',
          items: [
            {
              title: 'Insight 01 — End-to-End Analytics Pipeline',
              description:
                'The project demonstrates how data can move through a complete workflow, from programmatic generation to database storage, feature engineering, visualization, and business insight.',
            },
            {
              title: 'Insight 02 — Sales Performance Over Time',
              description:
                'The monthly sales trend provides a clearer view of business growth patterns and performance changes over time.',
            },
            {
              title: 'Insight 03 — Product Category Distribution',
              description:
                'The category analysis helps identify how sales are distributed across different product groups and provides a foundation for understanding product-level business performance.',
            },
            {
              title: 'Insight 04 — Logistics Performance by Region',
              description:
                'By engineering delivery duration and visualizing performance geographically, the dashboard can help identify regional differences in delivery efficiency.',
            },
            {
              title: 'Insight 05 — Data Meets Design',
              description:
                'The project demonstrates that effective business intelligence requires both technical accuracy and thoughtful visual design. The combination of Python, SQL, Figma, and Tableau helped transform raw information into a more professional and usable analytical experience.',
            },
          ],
        },
      ],
      conclusion: {
        heading: 'From Raw Data to a Business Application',
        content:
          'ExpressAnalytics demonstrates that data analytics is not only about using individual tools. The real value comes from connecting different stages of the analytical process into a complete workflow.\n\nBy combining Python for data generation, MySQL for database management and feature engineering, Figma for interface design, and Tableau for visualization, the project transformed synthetic transaction data into a professional business intelligence experience.\n\nThe project reinforced an important lesson: effective analytics combines technical capability with problem-solving and communication. A successful dashboard is not just a collection of charts—it is a tool designed to help people understand data and make better decisions.',
      },
    },
  },
  {
    id: 'fyp-media-news',
    title: 'FYP Media News Mobile App',
    category: 'UI/UX & Product Design',
    role: 'UI/UX Designer',
    year: '2023',
    projectType: 'Mobile Application / News Platform',
    client: 'Personal UI/UX Case Study',
    description:
      'FYP Media News is a modern mobile news application concept designed to create a more personalized and engaging news experience for Gen Z. The project explores how familiar mobile interactions, visual storytelling, and personalized content discovery can make staying informed feel more natural for younger audiences.',
    coverImage: '/images/fypmedia.webp',
    image: '/images/fypmedia.webp',
    images: [
      '/images/fypmedia.webp',
      '/images/fypmedia1.webp',
      '/images/fypmedia2.webp',
      '/images/fypmedia3.webp',
    ],
    coverPlaceholder: 'mobile',
    visitUrl:
      'https://medium.com/@massegaf208/designing-fyp-media-news-a-modern-personalized-news-experience-for-gen-z-121e1607570d',
    externalUrl:
      'https://medium.com/@massegaf208/designing-fyp-media-news-a-modern-personalized-news-experience-for-gen-z-121e1607570d',
    links: {
      live: 'https://medium.com/@massegaf208/designing-fyp-media-news-a-modern-personalized-news-experience-for-gen-z-121e1607570d',
    },
    tools: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
    technologies: [
      'Figma',
      'UI Design',
      'UX Design',
      'Mobile App Design',
      'Information Architecture',
      'Wireframing',
      'Prototyping',
      'Design System',
    ],
    highlights: [
      'Designed a modern mobile news application concept for Gen Z.',
      'Focused on creating a more personalized news discovery experience.',
      'Developed a mobile-first information architecture.',
      'Designed clear visual hierarchy for content-heavy interfaces.',
      'Explored modern content discovery and navigation patterns.',
      'Created an approachable reading experience.',
      'Developed multiple high-fidelity mobile interface screens.',
      'Combined product thinking, UX structure, and visual design into one cohesive concept.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        content:
          'FYP Media News was designed as a modern approach to mobile news consumption for a younger generation.\n\nTraditional news platforms can often feel dense, formal, and difficult to navigate. For younger audiences who are already accustomed to fast, visual, and personalized digital experiences, consuming news can feel disconnected from the way they interact with other modern applications.\n\nFYP Media News explores how a news platform could feel more familiar, accessible, and engaging for Gen Z without losing the core purpose of helping users stay informed.\n\nThe project focused on designing a mobile news experience that combines:\n• Personalized content discovery.\n• Clear and visual storytelling.\n• Modern mobile interaction patterns.\n• Easy topic exploration.\n• A more approachable reading experience.\n\nThe goal was not simply to redesign the appearance of a news application. The goal was to rethink how younger users discover, explore, and consume information in a mobile-first environment.',
      },
      problem: {
        heading: 'The Problem',
        content:
          'News is an important part of everyday life, but the experience of finding and consuming relevant information is not always designed around younger audiences.\n\nMany news platforms present large amounts of information at once. Content can feel overwhelming, navigation can feel traditional, and the experience may not provide enough personalization for users with different interests.\n\nFor a generation that spends much of its digital life interacting with personalized and visually driven applications, there is an opportunity to make news consumption feel more intuitive.\n\nThe design challenge was:\nHow might we create a news experience that feels relevant and engaging for Gen Z while still helping users discover meaningful information?',
        questions: [
          'How can users discover news that is relevant to their interests?',
          'How can a large amount of information be organized without feeling overwhelming?',
          'How can the reading experience feel modern and mobile-first?',
          'How can visual hierarchy make important information easier to understand?',
          'How can familiar interaction patterns improve accessibility for younger users?',
        ],
      },
      designGoal: {
        heading: 'Design Goal',
        content:
          'The primary goal was to design a mobile news experience that feels more personal and approachable.\n\nFYP Media News was conceptualized around the idea that news discovery should not always feel like searching through a static list of headlines.\n\nInstead, the product experience should help users move naturally between:\nDiscovering content → Exploring topics → Reading stories → Finding more content that matches their interests\n\nThe design therefore focused on balancing personalization, information hierarchy, and visual engagement.',
        journeySteps: [
          'Discovering content',
          'Exploring topics',
          'Reading stories',
          'Finding related content',
        ],
      },
      targetExperience: {
        heading: 'Designing for a Mobile-First Audience',
        intro:
          'The product was designed with a mobile-first mindset.\n\nYounger users are already familiar with applications that prioritize speed, personalization, and visual interaction. FYP Media News applies these expectations to the context of news consumption.\n\nThe experience focuses on:',
        items: [
          {
            title: 'Personalized Discovery',
            description:
              'Users should be able to encounter content that feels relevant to their interests rather than starting with an overwhelming information feed.',
          },
          {
            title: 'Visual Hierarchy',
            description:
              'Important stories should stand out clearly while secondary content remains easy to discover.',
          },
          {
            title: 'Approachable Information',
            description:
              'The interface should make news feel accessible without making the product feel overly formal or intimidating.',
          },
          {
            title: 'Familiar Interaction Patterns',
            description:
              'Navigation and interaction should feel intuitive for users who regularly use modern mobile applications.',
          },
          {
            title: 'Content Exploration',
            description:
              'Users should be encouraged to explore different topics and perspectives rather than consuming only one isolated story.',
          },
        ],
      },
      designProcess: {
        heading: 'From Idea to Interface',
        steps: [
          {
            step: '01',
            title: 'Understand',
            description:
              'Identify the opportunity to create a more personalized and engaging news experience for a younger audience.',
          },
          {
            step: '02',
            title: 'Define',
            description:
              'Translate the opportunity into a product concept focused on relevance, accessibility, and mobile-first interaction.',
          },
          {
            step: '03',
            title: 'Structure',
            description:
              'Organize the information architecture around content discovery, topic exploration, and reading.',
          },
          {
            step: '04',
            title: 'Design',
            description:
              'Develop a visual interface with clear hierarchy, modern components, and an approachable mobile experience.',
          },
          {
            step: '05',
            title: 'Refine',
            description:
              'Bring the individual screens together into a more consistent product experience.',
          },
        ],
      },
      informationArchitecture: {
        heading: 'Structuring the Experience',
        content:
          'A personalized news experience requires more than attractive screens. Users need a clear way to understand where they are and where they can go next.\n\nThe product structure was designed around the major moments of the news journey:',
        moments: [
          {
            title: 'Discover',
            description:
              'A starting point for users to find relevant and current content.',
          },
          {
            title: 'Explore',
            description:
              'A way to browse topics, categories, and different areas of interest.',
          },
          {
            title: 'Read',
            description:
              'A focused environment for consuming individual stories without unnecessary distractions.',
          },
          {
            title: 'Continue',
            description:
              'A way to move naturally from one story to another and keep discovering relevant content.',
          },
        ],
        concludingNote:
          'This structure helps transform the application from a simple collection of articles into a connected content experience.',
      },
      visualDirection: {
        heading: 'Visual Direction',
        content:
          'The visual direction was designed to make information feel modern, organized, and easy to scan.\n\nBecause news applications can contain a large amount of text and content, visual hierarchy played an important role in the interface.\n\nThe design focused on:\n• Clear typography hierarchy.\n• Strong headline prioritization.\n• Organized content cards.\n• Balanced use of imagery.\n• Consistent spacing.\n• Mobile-friendly touch targets.\n• Clear separation between primary and secondary information.\n\nThe interface was intended to feel contemporary and expressive while still allowing content to remain the main focus.',
      },
      featureShowcases: {
        heading: 'The Product Experience',
        intro:
          'The mobile experience is built around natural content discovery, tailored topic exploration, and an approachable reading interface.',
        features: [
          {
            title: 'Content Discovery & Personalized Feed',
            description:
              'Showcases how users discover stories and navigate through available content with strong headline hierarchy, visual preview cards, and category badges.',
            image: '/images/fypmedia1.webp',
            imageAlt: 'FYP Media News Content Discovery & Personalized Feed',
          },
          {
            title: 'Topic Exploration & Screen Flow',
            description:
              'Demonstrates smooth topic browsing, allowing users to dive into specific channels, categories, and interactive news cards with fluid mobile patterns.',
            image: '/images/fypmedia2.webp',
            imageAlt: 'FYP Media News Topic Exploration & Screen Flow',
          },
        ],
      },
      designDecisions: {
        heading: 'Key Design Decisions',
        items: [
          {
            title: '01. Content Before Decoration',
            description:
              'The visual system supports the information instead of competing with it. Important content is given clear visual priority.',
          },
          {
            title: '02. Personalization as Discovery',
            description:
              'The experience is designed to make relevant content easier to find and explore.',
          },
          {
            title: '03. Familiar Mobile Interaction',
            description:
              'The product uses recognizable interaction patterns to reduce friction and make navigation easier to understand.',
          },
          {
            title: '04. Clear Reading Hierarchy',
            description:
              'Typography, spacing, and layout help users distinguish between headlines, supporting information, and article content.',
          },
          {
            title: '05. Modern but Approachable',
            description:
              'The interface is designed to feel contemporary without making the experience visually overwhelming.',
          },
        ],
      },
      finalExperience: {
        heading: 'The Final Experience',
        image: '/images/fypmedia3.webp',
        imageAlt: 'FYP Media News Final High-Fidelity Mobile App Showcase',
        content:
          'The final FYP Media News concept brings together the different parts of the user journey into a single mobile experience.\n\nFrom discovering content to exploring topics and reading individual stories, the interface was designed to create a more natural flow for younger users.\n\nThe final outcome demonstrates how product design can be used to rethink a familiar digital experience.\n\nInstead of treating a news application as only a list of articles, FYP Media News explores a more personalized and visually approachable way to stay informed.',
      },
      conclusion: {
        heading: 'Designing News for a New Generation',
        content:
          'FYP Media News was an exploration of how news consumption could feel more aligned with the expectations of a younger digital audience.\n\nThe project focused on the relationship between information and experience: making relevant content easier to discover, reducing unnecessary complexity, and creating a visual environment that feels more natural for mobile users.\n\nThe final concept demonstrates how UX design and visual design can work together to transform a traditional content experience into a more personalized and engaging product.',
      },
    },
  },
  {
    id: 'zenhome',
    title: 'ZenHome',
    subtitle: 'Furniture Shopping & Interior Design Experience',
    category: 'UI/UX & Product Design',
    role: 'UI/UX Designer',
    year: '2024',
    projectType: 'Mobile Application / Interior & E-Commerce Platform',
    client: 'Personal Product Design Case Study',
    description:
      'ZenHome is a mobile product concept that brings furniture shopping and interior design into one connected experience. The project explores how users can discover furniture, make more confident purchasing decisions, and visualize products as part of their living space through a seamless digital journey.',
    coverImage: '/images/zenhome.webp',
    image: '/images/zenhome.webp',
    images: [
      '/images/zenhome.webp',
      '/images/zenhome1.webp',
      '/images/zenhome2.webp',
      '/images/zenhome3.webp',
      '/images/zenhome4.webp',
    ],
    coverPlaceholder: 'home',
    visitUrl:
      'https://medium.com/@massegaf208/case-study-zenhome-transforming-the-furniture-shopping-and-interior-design-experience-in-one-ce204ac00a9f',
    externalUrl:
      'https://medium.com/@massegaf208/case-study-zenhome-transforming-the-furniture-shopping-and-interior-design-experience-in-one-ce204ac00a9f',
    links: {
      live: 'https://medium.com/@massegaf208/case-study-zenhome-transforming-the-furniture-shopping-and-interior-design-experience-in-one-ce204ac00a9f',
    },
    tools: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
    technologies: [
      'Figma',
      'UI Design',
      'UX Design',
      'Mobile App Design',
      'Product Design',
      'E-Commerce Design',
      'Information Architecture',
      'Prototyping',
    ],
    highlights: [
      'Designed an integrated furniture shopping and interior design experience.',
      'Explored how product discovery can connect with space visualization.',
      'Created a connected user journey from furniture discovery to purchase decisions.',
      'Designed a mobile-first furniture browsing experience.',
      'Focused on reducing uncertainty in visual furniture decisions.',
      'Developed information architecture connecting commerce and interior exploration.',
      'Used visual hierarchy to support product discovery and design inspiration.',
      'Designed multiple high-fidelity mobile interfaces.',
      'Explored product design beyond a conventional e-commerce catalog.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        content:
          'Buying furniture is rarely only about choosing a single product.\n\nA sofa, table, or decorative item becomes part of a larger environment. Before making a purchase, users may need to consider dimensions, visual style, room compatibility, and how different products will work together.\n\nHowever, furniture shopping and interior planning are often experienced as separate activities.\n\nUsers may browse products in one platform, search for design inspiration elsewhere, and then attempt to imagine how the final result will look in their own space.\n\nZenHome was designed to explore a more connected approach.\n\nThe concept brings together furniture discovery and interior design into one digital experience, allowing users to move more naturally from:\n• Discovering Furniture\n• Exploring Products\n• Visualizing Possibilities\n• Designing a Space\n• Making Purchase Decisions\n\nThe goal was to reduce the gap between imagining a space and finding the products needed to create it.',
      },
      problem: {
        heading: 'The Problem',
        content:
          'Furniture shopping can involve a difficult decision-making process.\n\nUnlike purchasing smaller products, furniture often affects the appearance and function of an entire room. Users may need to think about:\n• Whether the furniture matches their existing interior.\n• Whether different products work together visually.\n• How furniture will fit inside a room.\n• Which products best support the desired style.\n• How to move from design inspiration to an actual purchase.\n\nWhen shopping and planning are separated across multiple platforms, the user journey can become fragmented.\n\nThe challenge was therefore:\nHow might we create a more connected digital experience where users can discover furniture and explore interior design possibilities without constantly switching between different tools?',
      },
      designGoal: {
        heading: 'Design Goal',
        content:
          'The main design goal was to create a bridge between furniture commerce and interior visualization.\n\nZenHome was designed around the idea that furniture shopping should feel more like a complete decision-making journey rather than a simple product catalog.\n\nThe experience focused on helping users:\n• Discover furniture based on their needs and preferences.\n• Explore individual products in a clear and engaging way.\n• Understand how products can work inside a larger space.\n• Experiment with different interior possibilities.\n• Move naturally from inspiration toward purchase.\n\nThe product experience should make it easier for users to answer an important question:\n"Can I imagine this product as part of my home?"',
      },
      userJourney: {
        heading: 'From Inspiration to Home',
        steps: [
          {
            step: '01',
            title: 'Discover',
            description:
              'Users begin by exploring furniture and finding products that match their needs, preferences, and desired interior style.',
          },
          {
            step: '02',
            title: 'Explore',
            description:
              'Users learn more about products and evaluate individual furniture options.',
          },
          {
            step: '03',
            title: 'Visualize',
            description:
              'Users begin to imagine how products could exist together inside a room or living space.',
          },
          {
            step: '04',
            title: 'Design',
            description:
              'The shopping experience connects with interior exploration, allowing users to think beyond individual products and consider the overall space.',
          },
          {
            step: '05',
            title: 'Decide',
            description:
              'After exploring and visualizing possibilities, users can make more informed decisions about the products they want to bring into their home.',
          },
        ],
      },
      informationArchitecture: {
        heading: 'Structuring a Connected Experience',
        content:
          'ZenHome was designed around the idea that shopping and designing should not feel like completely separate experiences.\n\nThe information architecture therefore connects two major areas:',
        moments: [
          {
            title: 'Furniture Commerce',
            description:
              'Product discovery, browsing, detailed product information, and seamless selection and purchase journey.',
          },
          {
            title: 'Interior Experience',
            description:
              'Room exploration, design inspiration, furniture visualization, and space-oriented decision-making.',
          },
        ],
        concludingNote:
          'The intended experience follows a natural progression: "I found something I like" → "How would it work in my space?" → "What else would work with it?" → "I am ready to make a decision." This connected flow is central to the ZenHome product concept, allowing users to move between areas without feeling like they are leaving the application.',
      },
      shoppingExperience: {
        heading: 'Furniture Discovery',
        image: '/images/zenhome1.webp',
        imageAlt: 'ZenHome Furniture Shopping & Discovery Experience',
        content:
          'The furniture discovery experience was designed to make product exploration feel visually organized and approachable.\n\nBecause furniture products often involve strong visual decision-making, imagery plays an important role in helping users evaluate products.\n\nThe interface therefore focuses on:\n• Clear product presentation.\n• Strong visual hierarchy.\n• Easy browsing.\n• Product-focused imagery.\n• Organized information.\n• Natural pathways for exploring more options.\n\nThe goal was to avoid creating an experience that felt like an overwhelming product database. Instead, users should feel encouraged to explore furniture as part of a broader design journey.',
      },
      visualizationExperience: {
        heading: 'Beyond Individual Products',
        image: '/images/zenhome2.webp',
        imageAlt: 'ZenHome Space Visualization & Room Context Exploration',
        content:
          'A major idea behind ZenHome is that users do not always think about furniture in isolation.\n\nA product can look attractive on its own but feel completely different when considered as part of an entire room.\n\nZenHome therefore explores a transition from product-focused browsing toward space-focused decision-making.\n\nInstead of only asking:\n"Do I like this furniture?"\n\nThe experience encourages a broader question:\n"How could this furniture become part of my home?"\n\nBy connecting product discovery with interior exploration, the concept aims to reduce the gap between product inspiration and real-world decision-making.',
      },
      designExperience: {
        heading: 'Designing the Space',
        image: '/images/zenhome3.webp',
        imageAlt: 'ZenHome Interior Design & Space Composition Experience',
        content:
          'The interior design experience allows the product journey to move beyond a conventional e-commerce flow.\n\nUsers can think about furniture in relation to the overall environment rather than evaluating each item independently.\n\nThis creates an opportunity to explore:\n• Product combinations.\n• Room aesthetics.\n• Visual consistency.\n• Interior possibilities.\n• Furniture placement and selection.\n\nThe interface helps users understand that purchasing furniture is part of creating a larger environment. The design experience therefore becomes an extension of the shopping experience rather than a completely separate product.',
      },
      designDecisions: {
        heading: 'Key Design Decisions',
        items: [
          {
            title: '01. Connect Shopping and Design',
            description:
              'The product was designed to reduce the separation between discovering furniture and imagining the final space.',
          },
          {
            title: '02. Support Visual Decision-Making',
            description:
              'Furniture decisions are highly visual, so product imagery and interface hierarchy play an important role in helping users explore options.',
          },
          {
            title: '03. Move Beyond the Product Catalog',
            description:
              'The experience should not stop at showing individual items. Users should be able to think about how products work together.',
          },
          {
            title: '04. Reduce Decision Uncertainty',
            description:
              'By connecting products with interior exploration, the concept aims to make furniture decisions feel more informed and confident.',
          },
          {
            title: '05. Design for a Complete Journey',
            description:
              'The user journey was considered from initial discovery through product exploration and toward a broader vision of the final living space.',
          },
        ],
      },
      visualDirection: {
        heading: 'Visual Direction',
        content:
          'The visual direction was designed to support a product that sits between e-commerce and interior design.\n\nThe interface needed to balance product information with visual inspiration.\n\nThe design approach focused on:\n• Product imagery as a primary communication tool.\n• Clean and structured layouts.\n• Clear visual hierarchy.\n• Organized content grouping.\n• Consistent spacing.\n• A contemporary mobile experience.\n• Visual elements that support furniture and interior exploration.\n\nThe visual system was intended to make browsing feel both functional and inspirational.',
      },
      finalExperience: {
        heading: 'The Final Experience',
        image: '/images/zenhome4.webp',
        imageAlt: 'ZenHome Final High-Fidelity Mobile Experience Showcase',
        content:
          'The final ZenHome concept brings together furniture shopping and interior exploration into one connected mobile experience.\n\nUsers are not expected to treat products as isolated purchases.\n\nInstead, the product encourages a progression from:\n"I found something I like"\nto\n"I can imagine how it fits into my home."\n\nBy connecting product discovery with interior design thinking, ZenHome explores how digital product design can make furniture shopping feel more contextual, visual, and decision-oriented.',
      },
      conclusion: {
        heading: 'Bridging Shopping and Imagination',
        content:
          'ZenHome explores an important part of the furniture shopping experience: the distance between seeing a product and being able to imagine it inside a real home.\n\nThe project brings product discovery and interior exploration into one connected experience.\n\nRather than treating shopping as only a transactional journey, the design explores how users can move through a more complete process of discovering, imagining, comparing, and deciding.\n\nThe project demonstrates how UX design can create value by connecting experiences that are traditionally separated into one more cohesive product journey.',
      },
    },
  },
  {
    id: 'tenang-sejenak',
    title: 'Tenang Sejenak',
    subtitle: 'Digital Mental Health & Well-Being Platform',
    category: 'UI/UX Design / Product Design / Mobile Application',
    role: 'UI/UX Designer',
    projectType: 'Mobile Application / Digital Mental Health Platform',
    year: '2024',
    client: 'Personal Product Design Case Study',
    description:
      'Tenang Sejenak is a digital mental health application designed to help users manage stress and support their emotional well-being through various self-care experiences in one platform.',
    coverImage: '/images/TENANG SEJENAK THUMBNAIL.png',
    image: '/images/TENANG SEJENAK THUMBNAIL.png',
    coverPlaceholder: 'wellness',
    tools: [
      'Figma',
      'UI/UX Design',
      'User Flow',
      'Wireframing',
      'Prototyping',
    ],
    technologies: [
      'Figma',
      'UI/UX Design',
      'User Flow',
      'Wireframing',
      'Prototyping',
      'Mobile App Design',
      'Information Architecture',
      'User Research',
      'Design System',
    ],
    highlights: [
      'Designed a holistic digital mental health and wellness platform combining self-care routines and professional consultation.',
      'Created intuitive user journeys for mindfulness activities including guided meditation, calming music, yoga, and exercise.',
      'Engineered a safe, transparent appointment scheduling and consultation flow with licensed psychologists.',
      'Developed a clean mobile-first information architecture that balances independent relaxation and clinical support.',
      'Focused on empathetic, low-cognitive-load UI/UX design to support users during moments of emotional stress.',
      'Produced high-fidelity wireframes, interactive user flows, and prototypes in Figma.',
    ],
    caseStudy: {
      overview: {
        heading: 'Overview',
        subheading: 'Holistic Digital Mental Health Experience',
        content:
          'Tenang Sejenak is a digital mental health application designed to help users manage stress and support their emotional well-being through various self-care experiences in one platform.\n\nThe application provides multiple features for relaxation and mindfulness, including calming music, guided exercise, yoga, and meditation. Users can choose different activities based on their needs and take time to focus on their mental well-being.\n\nBeyond self-guided activities, Tenang Sejenak also connects users with professional psychologists. Through the application, users can explore available psychological consultation services and schedule appointments with psychologists, creating a more accessible bridge between users and professional mental health support.\n\nThe main idea behind Tenang Sejenak is to create a digital space where users can take a break, manage their emotions, practice healthier habits, and access professional support when needed.',
        workflowSteps: [
          'Problem Exploration',
          'User Research',
          'Information Architecture',
          'UX Flow Design',
          'UI & Design System',
          'Interactive Prototyping',
        ],
      },
      problem: {
        heading: 'The Problem',
        content:
          'Stress and emotional strain are increasingly common, yet finding accessible, reliable mental health support often presents high barriers for individuals.\n\nWhen seeking emotional relief, users typically face fragmented digital ecosystems: relaxation and meditation tools exist in separate spaces, while seeking professional psychological care often feels intimidating, complex, or difficult to schedule.\n\nKey user challenges include:\n• Fragmented Self-Care Tools: Mindfulness audio, breathing exercises, and physical yoga are often scattered across multiple platforms.\n• High Friction in Professional Support: Finding accredited psychologists, understanding consultation formats, and booking appointments can cause hesitation and friction.\n• Cognitive Overload in Times of Distress: Cluttered navigation and excessive information can heighten anxiety when users are seeking tranquility.\n• Lack of Integrated Emotional Journey: Users lack a unified space where they can transition naturally from daily self-care routines to professional psychological assistance.\n\nThe central design challenge was:\nHow might we design a calm, accessible digital sanctuary that empowers users to practice daily mental wellness while providing a seamless, reassuring bridge to professional psychological consultation?',
        questions: [
          'How can we organize diverse self-care activities (meditation, music, yoga, exercise) into a cohesive, distraction-free flow?',
          'How can we structure the psychologist discovery and consultation booking process to feel safe, transparent, and approachable?',
          'How can visual hierarchy and calm aesthetic principles lower cognitive stress for users seeking relief?',
          'How do we design a flexible product experience that respects individual user pacing and varying emotional needs?',
        ],
      },
      designGoal: {
        heading: 'Design Goal',
        content:
          'The primary goal was to create an empathetic, approachable digital environment where users can decompress, build mindful habits, and access professional psychological guidance whenever needed.\n\nTenang Sejenak was conceived around the belief that mental health support should not be one-dimensional.\n\nThe product experience helps users move effortlessly across:\nTaking a Mindful Pause → Practicing Self-Care Activities → Managing Daily Emotions → Accessing Professional Care\n\nThe design prioritizes emotional reassurance, visual clarity, and accessible health support.',
        journeySteps: [
          'Mindful Pause',
          'Daily Self-Care',
          'Emotional Balance',
          'Professional Consultation',
          'Ongoing Well-Being',
        ],
      },
      targetExperience: {
        heading: 'Solution & Design Approach',
        intro:
          'Tenang Sejenak adopts a human-centered design approach tailored specifically for mental health and digital wellness.\n\nThe experience is anchored around core product pillars:',
        items: [
          {
            title: 'Unified Self-Care Sanctuary',
            description:
              'Bringing meditation, calming soundscapes, yoga routines, and guided exercise together in an organized, easily discoverable format.',
          },
          {
            title: 'Accessible Psychologist Consultation',
            description:
              'Designing transparent psychologist profiles, specialization tags, and a low-friction booking calendar to connect users with qualified professionals.',
          },
          {
            title: 'Stress-Free Visual Ergonomics',
            description:
              'Implementing soft color palettes, generous whitespace, and simplified navigation to minimize cognitive fatigue and emotional friction.',
          },
          {
            title: 'Empathetic User Agency',
            description:
              'Enabling users to choose activities that match their immediate emotional state and schedule without rigid requirements or pressure.',
          },
        ],
      },
      userJourney: {
        heading: 'The Mental Wellness User Journey',
        steps: [
          {
            step: '01',
            title: 'Check-In & Intent',
            description:
              'Users open the application and identify their current emotional needs or wellness goals.',
          },
          {
            step: '02',
            title: 'Explore Self-Care Activities',
            description:
              'Users browse curated mindfulness options, including guided meditation, relaxation music, yoga, and light exercise.',
          },
          {
            step: '03',
            title: 'Engage & Relax',
            description:
              'Users immerse themselves in tranquil sessions with intuitive audio controls and guided timers.',
          },
          {
            step: '04',
            title: 'Discover Professional Care',
            description:
              'When specialized support is needed, users browse certified psychologists filtered by specialization and schedule.',
          },
          {
            step: '05',
            title: 'Schedule & Connect',
            description:
              'Users select convenient consultation slots and book appointments through a reassuring, confidential flow.',
          },
        ],
      },
      designProcess: {
        heading: 'From Problem Exploration to High-Fidelity Prototype',
        steps: [
          {
            step: '01',
            title: 'Explore & Empathize',
            description:
              'Researched common user behaviors around stress management, self-care routines, and psychological consultation accessibility.',
          },
          {
            step: '02',
            title: 'Define Problem & Scope',
            description:
              'Identified the core requirement of uniting self-guided wellness activities with direct psychologist appointment scheduling.',
          },
          {
            step: '03',
            title: 'Information Architecture',
            description:
              'Structured the multi-feature navigation to ensure daily mindfulness tools and professional services remain distinct yet easily accessible.',
          },
          {
            step: '04',
            title: 'Wireframing & UI Design',
            description:
              'Developed mobile wireframes and translated them into high-fidelity UI screens using a calming visual system in Figma.',
          },
          {
            step: '05',
            title: 'Prototyping & Testing',
            description:
              'Connected screens into interactive Figma prototypes to validate intuitive navigation and frictionless booking flows.',
          },
        ],
      },
      informationArchitecture: {
        heading: 'Structuring a Calm & Connected Experience',
        content:
          'The information architecture for Tenang Sejenak was engineered to ensure immediate clarity without overwhelming the user during moments of stress.\n\nThe application is organized into two primary pillars:',
        moments: [
          {
            title: 'Self-Guided Wellness & Mindfulness',
            description:
              'Categorized relaxation library featuring meditation sessions, ambient calming audio, yoga guides, and gentle physical exercises.',
          },
          {
            title: 'Psychologist Consultation & Booking',
            description:
              'Structured psychologist catalog, credentials, consultation options, date/time picker, and appointment confirmation management.',
          },
          {
            title: 'Personalized Daily Dashboard',
            description:
              'A gentle entry screen greeting the user, recommending relaxation activities based on time of day, and tracking upcoming sessions.',
          },
        ],
        concludingNote:
          'This dual structure gives users full control: whether they need a 5-minute relaxation exercise or professional psychological support, the relevant pathway is clear and accessible.',
      },
      featureShowcases: {
        heading: 'Key Features & User Experience',
        intro:
          'Tenang Sejenak provides comprehensive self-care tools alongside professional mental health consultation.',
        features: [
          {
            title: 'Meditation & Relaxation Experiences',
            description:
              'Curated guided meditation tracks designed to help users pause, breathe, and navigate anxiety or stressful moments with ease.',
          },
          {
            title: 'Calming & Wellness Music',
            description:
              'High-quality ambient soundscapes, soothing melodies, and nature audio designed for focus, deep rest, and mental decompression.',
          },
          {
            title: 'Guided Exercise & Yoga Content',
            description:
              'Mindful movement routines and guided yoga practices designed to release physical tension and foster bodily wellness.',
          },
          {
            title: 'Psychologist Consultation Services',
            description:
              'A dedicated directory of certified psychologists with clear details on expertise, background, and consultation methods.',
          },
          {
            title: 'Seamless Appointment Scheduling',
            description:
              'An intuitive calendar and time slot selection system that removes complexity from booking professional mental health consultations.',
          },
        ],
      },
      designDecisions: {
        heading: 'Key Design Decisions',
        items: [
          {
            title: '01. Harmonious Dual-Ecosystem',
            description:
              'Integrated independent daily wellness activities and professional psychologist consultations into one cohesive platform.',
          },
          {
            title: '02. Calming Visual Environment',
            description:
              'Used soft tones, rounded UI components, and generous whitespace to create a welcoming, pressure-free atmosphere.',
          },
          {
            title: '03. Reassuring Consultation Discovery',
            description:
              'Structured psychologist profiles and booking steps to feel safe, transparent, and approachable.',
          },
          {
            title: '04. Reduced Cognitive Friction',
            description:
              'Streamlined navigation and categorized activities cleanly to avoid decision fatigue when users feel overwhelmed.',
          },
          {
            title: '05. Flexible & Respectful User Agency',
            description:
              'Allowed users to engage at their own comfort level without intrusive notifications or mandatory rigid flows.',
          },
        ],
      },
      visualDirection: {
        heading: 'Visual Direction',
        content:
          'The visual direction of Tenang Sejenak is anchored in calmness, warmth, and accessibility.\n\nThe UI design prioritizes emotional reassurance through:\n• Gentle Color Palette: Soothing pastels, serene greens, and soft tones create an environment that encourages mindfulness and tranquility.\n• Clean Typography: Highly legible sans-serif typography ensures that activity instructions and psychologist profiles are effortless to read.\n• Soft Card Components: Gently rounded containers group related information cleanly and avoid harsh visual boundaries.\n• Generous Spacing: Open layout structure provides visual breathing room, reflecting the calming nature of the application.',
      },
      roleOverview: {
        heading: 'Role & Contribution',
        content:
          'As the UI/UX Designer, I led the product design and user experience development for Tenang Sejenak:',
        responsibilities: [
          'Conducted user research and problem exploration in mental wellness and digital health.',
          'Designed UX user flows and information architecture connecting self-care with consultation services.',
          'Created mobile application interface layouts, wireframes, and design components in Figma.',
          'Designed relaxation and mindfulness experiences (meditation, audio, yoga, exercise).',
          'Developed psychologist consultation discovery, profile views, and appointment scheduling flows.',
          'Built interactive prototypes to test usability, visual harmony, and navigation flow.',
        ],
        concludingNote:
          'This project represents an exploration of empathetic product design, creating an accessible bridge between digital self-care tools and professional mental health support.',
      },
      conclusion: {
        heading: 'Creating a Digital Space for Well-Being',
        content:
          'Tenang Sejenak demonstrates how thoughtful UI/UX design can make mental wellness and psychological support more approachable.\n\nBy uniting self-guided relaxation experiences with accessible professional consultation services, the application provides a supportive environment for users seeking balance, stress relief, and professional guidance.\n\nThe project emphasizes user-centered exploration, information architecture, mobile interface design, and empathetic digital product thinking in the mental health domain.',
      },
    },
  },
];
