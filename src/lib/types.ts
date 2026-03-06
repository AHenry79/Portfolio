export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  num: string;
  icon: string;
  name: string;
  description: string;
  tags: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  category: 'wellness' | 'therapy' | 'small-biz';
  gradientClass: string;
  tech: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  initial: string;
}

export interface ProcessStep {
  num: string;
  progress: number;
  title: string;
  titleEm: string;
  description: string;
  emoji: string;
  bgColor: string;
}

export interface NicheFeature {
  title: string;
  description: string;
}

export interface AboutBlock {
  num: string;
  heading: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}
