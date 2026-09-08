import type { LucideIcon } from 'lucide-react';

export type AppId = 'about' | 'projects' | 'experience' | 'gallery' | 'contact' | 'resume' | 'skills';

export interface WindowPosition {
  x: number;
  y: number;
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface WindowState {
  id: AppId;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: WindowPosition;
  size?: WindowSize;
}

export interface AppConfig {
  id: AppId;
  label: string;
  icon: LucideIcon;
  windowTitle: string;
  defaultPosition: WindowPosition;
  defaultSize?: WindowSize;
}

export type ProjectCategory =
  | 'Data Analytics'
  | 'Data Visualization'
  | 'Dashboard'
  | 'UI/UX & Product'
  | 'UI/UX & Product Design'
  | 'UI/UX Design / Product Design / Mobile Application'
  | 'Web Development'
  | 'Web / Product Development'
  | 'Digital Product'
  | (string & {});

export interface ProjectChallengeItem {
  title: string;
  description: string;
}

export interface ProjectProcessStep {
  step: string;
  title: string;
  description: string;
  note?: string;
}

export interface ProjectBeforeAfter {
  before: {
    title: string;
    items: string[];
  };
  after: {
    title: string;
    items: string[];
  };
}

export interface ProjectInsightItem {
  number?: string;
  value: string;
  label: string;
  description: string;
}

export interface CaseStudySection {
  heading: string;
  subheading?: string;
  intro?: string;
  content?: string;
  items?: { title?: string; description: string; }[];
}

export interface ProjectFeatureShowcase {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface ProjectCaseStudy {
  overview?: {
    heading?: string;
    subheading?: string;
    content: string;
    workflowSteps?: string[];
  };
  problem?: {
    heading?: string;
    content: string;
    questions?: string[];
  };
  designGoal?: {
    heading?: string;
    content: string;
    journeySteps?: string[];
  };
  targetExperience?: {
    heading?: string;
    intro?: string;
    items?: { title: string; description: string; }[];
  };
  designProcess?: {
    heading?: string;
    steps: ProjectProcessStep[];
  };
  informationArchitecture?: {
    heading?: string;
    content: string;
    moments?: { title: string; description: string; }[];
    concludingNote?: string;
  };
  visualDirection?: {
    heading?: string;
    content: string;
    principles?: { title: string; description: string; }[];
  };
  featureShowcases?: {
    heading?: string;
    intro?: string;
    features: ProjectFeatureShowcase[];
  };
  designDecisions?: {
    heading?: string;
    items: { title: string; description: string; }[];
  };
  finalExperience?: {
    heading?: string;
    content: string;
    image?: string;
    imageAlt?: string;
  };
  challenge?: {
    heading?: string;
    intro?: string;
    content?: string;
    items?: ProjectChallengeItem[];
  };
  dataFoundation?: {
    heading?: string;
    subheading?: string;
    content: string;
  };
  dataEngineering?: {
    heading?: string;
    content: string;
    formula?: {
      label: string;
      formula: string;
      explanation?: string;
    };
  };
  pipeline?: {
    heading?: string;
    content: string;
    flow?: string[];
  };
  dataPreparation?: {
    heading?: string;
    content: string;
  };
  metricDevelopment?: {
    heading?: string;
    content: string;
  };
  dashboardDesign?: {
    heading?: string;
    content: string;
    principles?: { title: string; description: string; }[];
    additionalNote?: string;
  };
  finalDashboard?: {
    heading?: string;
    content: string;
    visualizations?: { title: string; description: string; }[];
    additionalNote?: string;
  };
  performanceSnapshot?: {
    heading?: string;
    metrics?: ProjectInsightItem[];
    content?: string;
  };
  salesTrend?: {
    heading?: string;
    content: string;
  };
  devicePerformance?: {
    heading?: string;
    content: string;
  };
  processSteps?: {
    heading?: string;
    steps: ProjectProcessStep[];
    additionalNote?: string;
  };
  beforeAfter?: ProjectBeforeAfter;
  insights?: {
    heading?: string;
    items: ProjectInsightItem[];
  };
  userJourney?: {
    heading?: string;
    steps: ProjectProcessStep[];
  };
  shoppingExperience?: {
    heading?: string;
    content: string;
    image?: string;
    imageAlt?: string;
  };
  visualizationExperience?: {
    heading?: string;
    content: string;
    image?: string;
    imageAlt?: string;
  };
  designExperience?: {
    heading?: string;
    content: string;
    image?: string;
    imageAlt?: string;
  };
  aiAdvisorExperience?: {
    heading?: string;
    content: string;
    image?: string;
    imageAlt?: string;
  };
  productDiscoveryExperience?: {
    heading?: string;
    content: string;
    image?: string;
    imageAlt?: string;
  };
  developmentProcess?: {
    heading?: string;
    content: string;
    disciplines?: { title: string; description: string; }[];
  };
  vibeCoding?: {
    heading?: string;
    content: string;
    workflowSteps?: string[];
    concludingNote?: string;
  };
  technicalArchitecture?: {
    heading?: string;
    content: string;
    tags?: { category: string; items: string[]; }[];
  };
  roleOverview?: {
    heading?: string;
    content: string;
    responsibilities?: string[];
    concludingNote?: string;
  };
  conclusion?: {
    heading: string;
    content: string;
  };
  sections?: CaseStudySection[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  description: string;
  role?: string;
  projectType?: string;
  organization?: string;
  client?: string;
  tools?: string[];
  technologies: string[];
  highlights?: string[];
  image?: string;
  images?: string[];
  coverImage?: string;
  coverPlaceholder?: string;
  year?: string;
  externalUrl?: string;
  visitUrl?: string;
  caseStudy?: ProjectCaseStudy;
  links?: {
    live?: string;
    github?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'analysis' | 'dashboard' | 'product';
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  description?: string;
  type?: 'Internship' | 'Full-time' | 'Contract' | 'Freelance';
  highlights: string[];
}

export interface OrganizationItem {
  id: string;
  organization: string;
  role: string;
  period?: string;
  description: string;
  highlights?: string[];
  initials?: string;
  iconType?: string;
}

export interface ValuePropItem {
  id: string;
  step: number;
  title: string;
  description: string;
  iconName: 'analyze' | 'understand' | 'build';
}

export interface JourneyStage {
  id: string;
  stage: string;
  description: string;
  iconName: string;
}

export interface PortfolioStat {
  id: string;
  value: string;
  label: string;
  caption?: string;
}

export interface ProudMoment {
  id: string;
  title: string;
  organization?: string;
  period?: string;
  description: string;
  mentionItems?: string[];
  accentColor?: string;
}

export interface CurrentActivity {
  id: string;
  category: 'Learning' | 'Building' | 'Exploring' | 'Looking For';
  title: string;
  description: string;
  iconName: string;
  isFeatured?: boolean;
}

export interface PersonalInterest {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  role: string;
  education: string;
  bio: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  resumeUrl?: string;
}
