export const portfolio = {
  name: "Vignesh",
  title: "Infrastructure professional & technology founder",
  company: "Infeara Technologies",
  companyUrl: process.env.NEXT_PUBLIC_COMPANY_URL || "https://www.infeara.com",
  portrait: {
    src: "/images/01_seated_navy_blazer.png",
    alt: "Vignesh, Founder of Infeara Technologies, seated in a navy blazer",
  },
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : ""),
  seo: {
    title: "Vignesh — Infrastructure. Automation. Founder.",
    description:
      "From managing infrastructure to building the future of technology. The journey of Vignesh, Founder of Infeara Technologies.",
  },
  introduction:
    "I'm Vignesh — an infrastructure professional turned technology founder, building secure systems, intelligent automation, and software for businesses ready to grow.",
  identities: [
    "Infrastructure Engineer",
    "Systems Administrator",
    "Automation Specialist",
    "Technology Founder",
    "Startup Builder",
  ],
  metrics: [
    { value: "50+", label: "Projects" },
    { value: "50+", label: "Clients" },
    { value: "100+", label: "Onboarding waitlist" },
  ],
  biography: [
    "I come from a wage-earning family, where hard work was part of everyday life. My journey into technology began with curiosity, a willingness to learn, and the determination to build a better future.",
    "In 2022, I started as a Trainee Network Engineer. I learned the fundamentals, took on new responsibilities, and gradually expanded my capabilities into IT support and system administration.",
    "Every role gave me a different perspective on technology. I learned not only how to maintain systems, but also how to understand business requirements, resolve operational challenges, and design infrastructure that organizations can depend on.",
    "By 2025, I took a new step and started Infeara Technologies.",
    "Today, my focus extends beyond maintaining infrastructure. I want to build intelligent automation, secure technology environments, and practical software solutions that help companies operate better.",
    "My next chapter is about turning technical experience into a platform for other founders — helping startups build the technology foundation they need to grow.",
  ],
  companyDescription: [
    "Infeara Technologies focuses on practical technology solutions spanning IT infrastructure, cloud and datacenter environments, automation, security-focused operations, and customized software development.",
    "Our goal is to help businesses establish reliable technology foundations, solve operational challenges, and build systems that support their next stage of growth.",
  ],
  companyServices: [
    "IT infrastructure and managed support",
    "Cloud and on-premises environments",
    "Infrastructure monitoring and automation",
    "Patch management and operational security",
    "Customized business applications",
    "Technical planning and implementation",
  ],
};
export const milestones = [
  {
    year: "2022",
    chapter: "The foundation",
    role: "Trainee Network Engineer",
    description:
      "Started my professional journey by developing foundational knowledge of computer networks, connectivity, and IT infrastructure.",
    focus: [
      "Networking fundamentals",
      "Infrastructure basics",
      "Technical troubleshooting",
      "Learning enterprise IT operations",
    ],
  },
  {
    year: "Late 2022",
    chapter: "Expanding responsibilities",
    role: "IT Support Engineer",
    description:
      "Transitioned into IT support engineering, working directly on technical issues affecting business operations.",
    focus: [
      "End-user and infrastructure support",
      "Incident troubleshooting",
      "Hardware and software support",
      "Operational problem-solving",
    ],
  },
  {
    year: "Early 2023",
    chapter: "Systems administration",
    role: "System Administrator",
    description:
      "Expanded my responsibilities across server environments and infrastructure operations.",
    focus: [
      "Server administration",
      "System availability",
      "Operating system maintenance",
      "Infrastructure management",
    ],
  },
  {
    year: "Late 2024",
    chapter: "Senior responsibilities",
    role: "Senior System Administrator",
    description:
      "Progressed into more complex infrastructure operations and technical planning.",
    focus: [
      "Infrastructure reliability",
      "Datacenter operations",
      "Server and system administration",
      "Security and maintenance planning",
      "Technical implementation and troubleshooting",
    ],
  },
  {
    year: "2025",
    chapter: "The founder chapter",
    role: "Founder, Infeara Technologies",
    description:
      "Started Infeara Technologies to deliver practical infrastructure services, automation, and customized technology solutions.",
    focus: [
      "Building a technology business",
      "Understanding customer requirements",
      "Developing service offerings",
      "Delivering infrastructure and software projects",
      "Establishing a foundation for scalable growth",
    ],
  },
  {
    year: "2026",
    chapter: "Building momentum",
    role: "Technology Founder & Builder",
    description:
      "50+ successful projects. 50+ clients enrolled. 100+ businesses or prospective customers on the onboarding waitlist. Founder-provided figures; the waitlist is not a count of paying customers.",
    focus: [
      "Scalable infrastructure",
      "Practical automation",
      "Software solutions",
    ],
  },
  {
    year: "2027",
    chapter: "Future vision / not yet accomplished",
    role: "Building a Technology Partner for Startups",
    description:
      "Build a startup-focused technology partner that helps early-stage companies establish reliable infrastructure, automate operations, improve security, and transform ideas into scalable products.",
    focus: [
      "Startup infrastructure foundations",
      "Cloud and on-premises architecture",
      "Intelligent infrastructure automation",
      "Security-focused operations",
      "Customized software development",
      "Long-term technology partnerships",
    ],
  },
];
export const capabilities = [
  {
    title: "IT Environment Management",
    description:
      "Managing the systems, services, endpoints, and operational foundations businesses depend on every day.",
    tags: [
      "IT environment administration",
      "System health and availability",
      "Infrastructure troubleshooting",
      "IT operations and maintenance",
      "Operational support",
    ],
  },
  {
    title: "Datacenter Infrastructure",
    description:
      "Planning and managing reliable infrastructure environments designed around business requirements.",
    tags: [
      "Datacenter environment management",
      "Server infrastructure planning",
      "Hardware and OS administration",
      "Storage and backup planning",
      "Capacity considerations",
    ],
  },
  {
    title: "Intelligent Infrastructure Automation",
    description:
      "Using automation and AI-assisted workflows to reduce repetitive work, improve visibility, and simplify infrastructure operations.",
    tags: [
      "Infrastructure automation",
      "Repetitive task automation",
      "Monitoring and alerts",
      "AI-assisted operational workflows",
      "Reporting and optimization",
    ],
  },
  {
    title: "Security & Patch Management",
    description:
      "Building disciplined maintenance and security workflows that help organizations manage risk and maintain operational stability.",
    tags: [
      "Secure patch management",
      "Patch deployment planning",
      "Update scheduling and automation",
      "Compliance-oriented maintenance",
      "Validation and reporting",
    ],
  },
  {
    title: "Network Infrastructure",
    description:
      "Implementing and maintaining dependable network environments that connect people, applications, and infrastructure.",
    tags: [
      "Network implementation",
      "Network troubleshooting",
      "Connectivity planning",
      "Infrastructure configuration",
      "Availability and support",
    ],
  },
  {
    title: "Customized Business Applications",
    description:
      "Building purpose-driven applications around real business processes instead of forcing businesses into inflexible workflows.",
    tags: [
      "Workflow-based applications",
      "Business process digitization",
      "Application maintenance",
      "Application support",
      "System integration planning",
    ],
  },
  {
    title: "Client Engineering & Data Security",
    description:
      "Working closely with clients to understand their requirements and implement solutions aligned with their security expectations.",
    tags: [
      "Client project participation",
      "Technical requirement analysis",
      "Security-conscious implementation",
      "Access control",
      "Operational documentation",
      "Client-aligned data protection",
    ],
  },
  {
    title: "Cloud & On-Premises Architecture",
    description:
      "Planning infrastructure around the right balance of control, scalability, cost, and operational requirements.",
    tags: [
      "On-premises datacenter planning",
      "Cloud infrastructure planning",
      "Hybrid infrastructure design",
      "Backup and recovery",
      "Migration planning",
      "Capacity and availability",
    ],
  },
];
export type Project = {
  name: string;
  category: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  confirmed: boolean;
  screenshot?: string;
  caseStudyUrl?: string;
};
// Publish only reviewed, confirmed work. Unverified categories remain editorial previews.
export const projects: Project[] = [];
export const projectCategories = [
  "Real-Time Infrastructure Monitoring",
  "Infrastructure Automation",
  "Cloud & Datacenter Engineering",
  "Medical & Pharmacy Management Software",
  "Business Workflow Applications",
];
export const vision = [
  [
    "Infrastructure from Day One",
    "Help startups establish reliable cloud, on-premises, and hybrid environments appropriate to their stage of growth.",
  ],
  [
    "Automation That Creates Time",
    "Reduce repetitive operational work and improve visibility through practical automation and AI-assisted workflows.",
  ],
  [
    "Security by Design",
    "Make security considerations part of infrastructure and application planning rather than an afterthought.",
  ],
  [
    "Software Built Around Ideas",
    "Transform business requirements into practical, customized applications and digital workflows.",
  ],
  [
    "Long-Term Technology Partnership",
    "Build relationships that support startups as their operational and technical needs evolve.",
  ],
];
export const enquiryCategories = [
  "Infrastructure and datacenter projects",
  "Cloud and automation consulting",
  "Customized software development",
  "Startup technology partnerships",
  "General professional enquiries",
];
