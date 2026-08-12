import {
  Megaphone,
  Workflow,
  Filter,
  Magnet,
  LineChart,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "MAT Digital",
  legalName: "MAT Digital LLC",
  tagline: "Marketing That Scales. Strategy That Lasts.",
  description:
    "MAT Digital is a boutique performance-marketing agency in West Palm Beach, Florida. We build Meta ad campaigns, CRMs, funnels, and lead systems that turn ad spend into predictable revenue.",
  url: "https://mat-digital.com",
  email: "info@mat-digital.com",
  phone: "(561) 567-8549",
  phoneHref: "+15615678549",
  location: "West Palm Beach, Florida",
  serviceArea: "Serving clients nationwide from West Palm Beach, FL",
  responseTime: "We reply to every inquiry within 24 hours.",
  bookingPath: "/book",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "meta-ads",
    title: "Facebook & Meta Ads",
    short: "Precision-targeted campaigns backed by real ad-spend experience.",
    description:
      "Precision-targeted paid social campaigns built on creative testing, sharp audience strategy, and disciplined budget management. We manage seven figures in annual ad spend and treat every dollar like it's our own.",
    icon: Megaphone,
    points: [
      "Creative strategy, testing, and iteration",
      "Audience research and retargeting",
      "Daily optimization and budget pacing",
      "Transparent reporting on what actually drives revenue",
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM Buildouts & Automation",
    short: "Automated lead tracking, nurturing, and follow-up that never sleeps.",
    description:
      "We design and build the CRM and automation backbone behind your growth — so leads are captured, tagged, nurtured, and followed up with automatically, and nothing slips through the cracks.",
    icon: Workflow,
    points: [
      "Pipeline and stage design tailored to your sales process",
      "Automated follow-up via email and SMS",
      "Lead scoring and routing",
      "Clean reporting dashboards your team will actually use",
    ],
  },
  {
    slug: "funnel-development",
    title: "Funnel Development",
    short: "Conversion-optimized funnels from first click to closed customer.",
    description:
      "Landing pages and funnels engineered to convert. We map the full journey, write copy that sells, and structure each step to guide visitors from first click to paying customer.",
    icon: Filter,
    points: [
      "Offer and messaging strategy",
      "High-converting landing pages",
      "Multi-step funnels and upsell paths",
      "Continuous A/B testing",
    ],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation Systems",
    short: "Predictable, scalable pipelines that deliver qualified prospects.",
    description:
      "A repeatable system for turning attention into qualified pipeline. We combine paid traffic, funnels, and automation into a lead engine you can rely on month after month.",
    icon: Magnet,
    points: [
      "End-to-end lead engine design",
      "Qualified-lead filtering",
      "Speed-to-lead automation",
      "Cost-per-lead reduction over time",
    ],
  },
  {
    slug: "marketing-strategy",
    title: "Online Marketing Strategy",
    short: "A complete digital roadmap combining data, creative, and systems.",
    description:
      "The strategic layer that ties everything together. We audit where you are, define where you're going, and build the roadmap — channels, messaging, budget, and systems — to get you there.",
    icon: LineChart,
    points: [
      "Full marketing audit",
      "Channel and budget planning",
      "Messaging and positioning",
      "Quarterly roadmaps with clear KPIs",
    ],
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Management",
    short: "Win local visibility through reviews and an optimized profile.",
    description:
      "Show up when local customers are searching. We optimize your Google Business Profile, manage reviews, and strengthen the local signals that drive calls and foot traffic.",
    icon: MapPin,
    points: [
      "Profile optimization and categories",
      "Review generation and response",
      "Local search visibility",
      "Posts and ongoing maintenance",
    ],
  },
];

export const stats = [
  { value: "$10M+", label: "Client revenue generated" },
  { value: "$1.2M+", label: "Monthly ad spend managed" },
  { value: "46", label: "Active clients" },
  { value: "10+ yrs", label: "Combined experience" },
] as const;

export const differentiators = [
  {
    title: "Founder-led, always",
    body: "You work directly with the people running your campaigns — no junior account managers, no hand-offs, no telephone game.",
  },
  {
    title: "Scale smarter, not faster",
    body: "We build marketing systems designed to last, not vanity spikes. Sustainable growth beats a quick burst every time.",
  },
  {
    title: "Operators, not just marketers",
    body: "We've owned and run businesses ourselves, including outside of marketing. We understand margins, cash flow, and what actually moves a P&L.",
  },
  {
    title: "Transparent communication",
    body: "Clear reporting and straight answers. You'll always know what we're doing, why, and what it's producing.",
  },
] as const;

export const founders = [
  {
    name: "Michael Ullman",
    role: "Co-Founder & Partner",
    initials: "MU",
    image: "/assets/trevor-bianco.jpg",
    bio: "The “M” in MAT. A husband, father, and seasoned performance marketer who has helped manage millions in ad spend. Michael pairs sharp media-buying instincts with real operating experience as a business owner.",
  },
  {
    name: "Trevor Bianco",
    role: "Co-Founder & Partner",
    initials: "TB",
    image: "/assets/michael-ullman.jpg",
    bio: "The “T” in MAT. A husband, father, and growth strategist focused on systems, funnels, and automation. Trevor has built and run multiple businesses and brings an operator's eye to every engagement.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Strategy Call",
    body: "A free 30-minute conversation — no sales pitch. We assess your current marketing and outline where the biggest opportunities are.",
  },
  {
    step: "02",
    title: "Custom Action Plan",
    body: "We map a roadmap tailored to your goals: channels, offers, systems, and the metrics that matter for your business.",
  },
  {
    step: "03",
    title: "Build & Launch",
    body: "We build the campaigns, funnels, and automations — then launch with a tight feedback loop so nothing is left to guesswork.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    body: "We optimize relentlessly, double down on what works, and scale the system that's producing the best return.",
  },
] as const;
