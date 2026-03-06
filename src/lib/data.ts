// Site components as typed data

import type {
    Service,
    PortfolioItem, 
    Testimonial,
    ProcessStep, 
    NicheFeature,
    AboutBlock,
    Stat,
    NavLink
} from './types';

export const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export const heroStats: Stat[] = [
    { value: '100%', label: 'Custom-Built, No Templates' },
    { value: '24hr', label: 'Guaranteed Response Time'   },
    { value: '1', label: 'Dedicated Point of Contact' },
];

export const services: Service[] = [
  {
    num: '01',
    icon: '🌿',
    name: 'Brand-First Web Design',
    description: 'Websites designed from your identity outward — not from a template inward. Every color, font, and spacing decision serves your brand\'s emotional resonance.',
    tags: ['Figma', 'UI/UX', 'Branding']
  },
  {
    num: '02',
    icon: '⚡',
    name: 'Svelte & React Development',
    description: 'Lightning-fast, modern frontends built with Svelte or React. TypeScript throughout. Scores that impress Google and experiences that impress humans.',
    tags: ['Svelte', 'TypeScript', 'React']
  },
  {
    num: '03',
    icon: '📱',
    name: 'Booking & CRM Integration',
    description: 'Seamlessly integrate scheduling tools — Jane App, Acuity, Vagaro — so your clients book beautifully and your calendar fills itself.',
    tags: ['Jane App', 'Acuity', 'API']
  },
  {
    num: '04',
    icon: '📊',
    name: 'SEO & Performance',
    description: 'Built to be found. Technical SEO, Core Web Vitals, local search optimization — so clients who need you actually reach you.',
    tags: ['SEO', 'Analytics', 'CWV']
  },
  {
    num: '05',
    icon: '✨',
    name: 'Animation & Interaction',
    description: 'Scroll-driven animations, micro-interactions, and page transitions that make visitors feel something — subtle enough to feel natural, refined enough to be memorable.',
    tags: ['GSAP', 'Motion', 'CSS']
  },
  {
    num: '06',
    icon: '🤝',
    name: 'Ongoing Partnership',
    description: 'Monthly retainers for updates, new features, and technical support. You\'ll have a developer who knows your business and grows alongside it.',
    tags: ['Retainer', 'Support', 'Growth']
  }
];
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Jacob Caywood Therapy',
    subtitle: 'Calm, conversion-focused design',
    category: 'therapy',
    gradientClass: 'pf-1',
    tech: 'React'
  },
  {
    id: 2,
    title: 'Taylor\'d Beauty',
    subtitle: 'Elegant, brand-aligned experience',
    category: 'wellness',
    gradientClass: 'pf-2',
    tech: 'React'
  }
];
export const testimonials: Testimonial[] = [
    // change these to real testimonials from clients
  {
    text: '"Austin built something I didn\'t even know I needed — a website that genuinely feels like walking into my studio. My clients always comment on how calming it is before they even arrive."',
    author: 'Taylor, Aesthetician',
    role: 'Owner, Taylor\'d Beauty, LLC',
    initial: 'T'
  },
  {
    text: '"I had a website before. I had a web developer before. Neither of them ever felt like a partner. Austin has been the most valuable thing I\'ve added to my practice outside of clinical training."',
    author: 'Jacob Caywood, LLMSW',
    role: 'Owner, Jacob Caywood Therapy, PLLC',
    initial: 'J'
  }
];

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    progress: 25,
    title: 'Discovery &',
    titleEm: 'deep listening',
    description: 'Before I write a line of code, I listen. We explore your story, your clients, the feeling you want to create. This 1–2 hour conversation becomes the compass for every design decision that follows.',
    emoji: '🎧',
    bgColor: 'rgba(90,140,120,0.15)'
  },
  {
    num: '02',
    progress: 50,
    title: 'Design &',
    titleEm: 'visual story',
    description: 'I craft moodboards and high-fidelity mockups in Figma — no generic templates. You review and we refine until every screen feels exactly right before we build anything.',
    emoji: '🎨',
    bgColor: 'rgba(196,168,130,0.15)'
  },
  {
    num: '03',
    progress: 75,
    title: 'Build &',
    titleEm: 'animate',
    description: 'Svelte + TypeScript development with weekly previews. Animations that feel purposeful, not distracting. Performance-first architecture so your site is fast everywhere.',
    emoji: '⚡',
    bgColor: 'rgba(45,74,62,0.2)'
  },
  {
    num: '04',
    progress: 100,
    title: 'Launch &',
    titleEm: 'long-term care',
    description: 'Launch day is just the beginning. I handle deployment, monitor performance, and remain available for updates, new features, and growth — as long as you want a partner by your side.',
    emoji: '🚀',
    bgColor: 'rgba(138,171,151,0.2)'
  }
];
export const nicheFeatures: NicheFeature[] = [
  {
    title: 'Calming, trust-building aesthetics',
    description: 'Your clients arrive already anxious or guarded. Your website should exhale. I design for the emotional state of someone who needs to trust you.'
  },
  {
    title: 'Booking system integration',
    description: 'Jane App, Acuity, Schedulicity — seamlessly integrated so the path from "interested" to "booked" takes seconds, not minutes.'
  },
  {
    title: 'Privacy & compliance awareness',
    description: 'Contact forms, consent language, and data handling done thoughtfully — with an eye on what your clients share and how it\'s protected.'
  },
  {
    title: 'Google Business & local SEO',
    description: 'Structured data, review schema, and local optimization so you appear when someone nearby searches for your specialty.'
  },
  {
    title: 'Long-term, no-stress maintenance',
    description: 'Monthly retainers mean nothing ever goes out of date, breaks quietly, or gets ignored. You stay focused on your clients; I stay focused on your site.'
  }
];
export const aboutBlocks: AboutBlock[] = [
  {
    num: '01 / Background',
    heading: 'From software engineering to meaningful design',
    body: 'With a background in software development and a deep appreciation for good design, I found my calling working with wellness professionals — people whose work genuinely improves lives. I bring the same rigor I\'d apply to enterprise software to every small-business website.'
  },
  {
    num: '02 / Philosophy',
    heading: 'Your website should feel like your space',
    body: 'The best websites for small businesses are calm, trustworthy, and warm. They tell a quiet story that says: you\'re in good hands here. I design and build with that intention from the first conversation.'
  },
  {
    num: '03 / Partnership',
    heading: 'A developer who stays',
    body: 'I don\'t disappear after launch. My clients know they can call or message me when something comes up — whether it\'s a new service to add, a form that broke, or a whole new direction. I grow with my clients\' businesses.'
  },
  {
    num: '04 / Technical',
    heading: 'Modern stack, timeless craft',
    body: 'Svelte & TypeScript for the frontend, clean APIs, excellent performance scores. But also: pixel-perfect attention to spacing, a deep respect for typography, and a conviction that code should be as readable as the interfaces it creates.'
  }
];
export const techStack: string[] = [
  'Svelte', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Tailwind CSS', 'PostgreSQL', 'Figma', 'GSAP', 'Vercel'
];