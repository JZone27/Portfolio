export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  image?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Internship' | 'Part-time';
  description: string[];
  skills: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'IoT & Embedded' | 'AI & Automation' | 'Web Apps';
  image: string;
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  badge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface AIContentItem {
  id: string;
  title: string;
  category: 'Image Generation' | 'Prompt Engineering' | 'AI Copywriting' | 'Multimodal & Video';
  tool: string;
  description: string;
  prompt: string;
  aspectRatio?: string;
  image?: string;
  videoUrl?: string;
  tags: string[];
  outputSample?: string;
  parameters?: {
    model: string;
    cfgScale?: number;
    steps?: number;
    temperature?: number;
  };
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const personalInfo = {
  name: "Jayson Justin C. Cabus",
  shortName: "Jayson Cabus",
  role: "Computer Engineer & Full-Stack Developer",
  tagline: "Computer Engineering student at PUP specializing in full-stack web development, IoT hardware systems, and generative AI content creation.",
  objective: "To obtain a position where I can apply my skills, continuously learn, gain valuable work experience, and make a positive contribution to the organization's goals.",
  location: "Valenzuela City, Metro Manila, Philippines",
  address: "79 Ingreso Compound, Karuhatan Road, Brgy. Karuhatan, Valenzuela City",
  phone: "092 6265 0382",
  email: "jaycabus28@gmail.com",
  github: "https://github.com/JZone27",
  linkedin: "https://linkedin.com",
  stats: [
    { label: "Degree Path", value: "BSCpE" },
    { label: "University", value: "PUP" },
    { label: "Core Projects", value: "6+" },
    { label: "Certifications", value: "5+" }
  ]
};

export const education: EducationItem[] = [
  {
    institution: "Polytechnic University of the Philippines (PUP)",
    degree: "Bachelor of Science in Computer Engineering (BSCpE)",
    period: "2023 — Present",
    location: "Sta. Mesa, Manila, Philippines"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Workshop 1: Human-Centric AI and Regional Problem Solving",
    issuer: "ASEAN AI Hackathon 2026",
    date: "May 2026",
    badge: "AI & Hackathon"
  },
  {
    id: "cert-2",
    title: "Data Science and Analytics",
    issuer: "HP Life",
    date: "April 2025",
    badge: "Data & Analytics"
  },
  {
    id: "cert-3",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "February 2025",
    badge: "Networking"
  },
  {
    id: "cert-4",
    title: "Python, SQL, & Web Development Certifications",
    issuer: "SoloLearn",
    date: "2024 — 2025",
    badge: "Software Engineering"
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer Intern",
    company: "TembongPC E-Commerce Directory",
    location: "Metro Manila, Philippines",
    period: "July 2025 — September 2025",
    type: "Internship",
    description: [
      "Communicated directly with the client to translate operational business requirements into a functional web interface.",
      "Architected and developed a responsive web-based e-commerce directory platform using VanillaJS and Firebase database integration.",
      "Built a product catalog management system and an advanced custom PC builder featuring component compatibility filtering and automated build summaries."
    ],
    skills: ["JavaScript", "Firebase", "HTML5/CSS3", "Database Integration", "Product Catalog", "Client Communication"],
    featured: true
  },
  {
    id: "exp-2",
    role: "Web3 Community & Research Specialist",
    company: "Real Deal Guild",
    companyUrl: "https://www.facebook.com/realdealguild",
    image: "/images/realdeal_guild.png",
    location: "Remote",
    period: "2018 — 2021",
    type: "Contract",
    description: [
      "Administered Discord operations to maintain server security, moderate communities, and facilitate structured knowledge sharing.",
      "Analyzed cryptocurrency project whitepapers, tokenomics models, and underlying distributed protocols to evaluate project viability."
    ],
    skills: ["Community Management", "Research & Analysis", "Discord Ops", "Tokenomics", "Technical Writing"]
  },
  {
    id: "exp-3",
    role: "Computer Technician (Part-time)",
    company: "Quatro Avenue Computer Shop",
    location: "Valenzuela City, Philippines",
    period: "2013 — 2016",
    type: "Part-time",
    description: [
      "Provided direct technical assistance and customer service to active users, swiftly resolving hardware and software conflicts.",
      "Diagnosed and repaired complex hardware and software issues for desktop and laptop computers.",
      "Handled custom PC building, OS installation, driver deployment, and maintained Local Area Network (LAN) infrastructure stability."
    ],
    skills: ["Hardware Diagnostics", "PC Assembly", "LAN Networking", "OS Deployment", "Customer Support"]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "SurgeAlert - Flood Monitoring & Alert System",
    tagline: "IoT-based real-time flood telemetry & automated early warning system",
    description: "An integrated hardware and software IoT solution built on Raspberry Pi and ultrasonic/water level sensors to capture live water levels, trigger automated localized alarms, and send real-time community alerts.",
    category: "IoT & Embedded",
    image: "/images/surgealert_logo.png",
    technologies: ["Raspberry Pi", "Python", "C++", "Sensors", "IoT", "Telemetry", "Leaflet Maps"],
    metrics: "Sub-Second Alert Latency",
    githubUrl: "https://github.com/JZone27",
    liveUrl: "https://surgealert-web.pages.dev/",
    featured: true,
    highlights: [
      "Engineered hardware sensor interface with Raspberry Pi GPIO for continuous water level telemetry",
      "Configured automated notification dispatch for emergency hazard threshold triggers",
      "Deployed responsive web telemetry interface with live map tracking on Cloudflare Pages"
    ]
  },
  {
    id: "proj-2",
    title: "TembongPC E-Commerce & PC Builder",
    tagline: "Web-based e-commerce directory platform with intelligent compatibility checker",
    description: "A comprehensive web application for computer parts and accessories store featuring product catalog management, interactive custom PC builder with socket/socket power compatibility checks, Firebase real-time database, and dynamic build summary export.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80",
    technologies: ["JavaScript", "Firebase", "HTML5", "CSS3", "E-Commerce", "PC Builder Algorithm"],
    metrics: "Complete Component Compatibility Matrix",
    githubUrl: "https://github.com/JZone27",
    liveUrl: "https://github.com/JZone27",
    featured: true,
    highlights: [
      "Custom PC configuration algorithm verifying CPU sockets, RAM DDR types, and PSU wattage",
      "Firebase Cloud Firestore integration for real-time stock and product catalog updates",
      "Instant printable/exportable build specification summary for customers"
    ]
  },
  {
    id: "proj-3",
    title: "DUEL — The Tactical Card Game",
    tagline: "Strategic turn-based card combat web game with AI tactician & online rooms",
    description: "A strategic card combat game remastered from Python to modern web. Features single player vs AI tactician, real-time online multiplayer rooms, 1v1 local pass-and-play, tactical deck calculations, Web Audio sound synthesis, particle ambient VFX, and match state persistence.",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
    technologies: ["JavaScript", "HTML5 Canvas", "Web Audio API", "CSS3 Glassmorphism", "Multiplayer Rooms", "Vercel"],
    metrics: "AI & Online Multiplayer",
    githubUrl: "https://github.com/JZone27/DUEL-CARD-GAME",
    liveUrl: "https://duel-card-game.vercel.app/",
    featured: true,
    highlights: [
      "Engineered Single Player mode featuring an automated AI decision-making tactician engine",
      "Built real-time online multiplayer room lobbies and local 1v1 Pass & Play system",
      "Implemented procedural Web Audio sound synthesis, dynamic canvas particles, and local storage game saving"
    ]
  },
  {
    id: "proj-4",
    title: "Beyond The Edge — Multimedia Production",
    tagline: "Multimedia production platform, video editing & creative portfolio showcase",
    description: "A modern, high-performance multimedia production web application showcasing cinematic video creations, commercial editing projects, client showreels, and creative media services.",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Video Production", "Vercel"],
    metrics: "Live on Vercel",
    githubUrl: "https://github.com/JZone27",
    liveUrl: "https://beyond-the-edge.vercel.app/",
    featured: true,
    highlights: [
      "Engineered a responsive creative portfolio web application for multimedia and commercial video productions",
      "Integrated dynamic media galleries, immersive visual layouts, and fast asset streaming",
      "Deployed with modern continuous integration and global edge delivery on Vercel"
    ]
  }
];

export const aiContentShowcase: AIContentItem[] = [
  {
    id: "ai-video-1",
    title: "8-Rib Automatic Umbrella — AI Product Showcase",
    category: "Multimodal & Video",
    tool: "AI Video & Dynamic Captions",
    description: "High-energy commercial showcasing an 8-rib automatic windproof umbrella with synchronized animated captions, kinetic pacing, and product feature callouts.",
    videoUrl: "/videos/8 rib umbrella - with captions.mp4",
    prompt: "cinematic commercial product demonstration of an 8-rib heavy duty reinforced windproof umbrella, rapid deployment mechanism, water-repellent nanotech fabric beads, dynamic camera dolly zoom, sleek studio lighting, animated captions --ar 9:16",
    aspectRatio: "9:16 (Vertical)",
    tags: ["AI Video", "Product Ad", "Dynamic Captions", "E-Commerce", "Short-Form"],
    parameters: {
      model: "Generative Video & Audio Pipeline"
    }
  },
  {
    id: "ai-video-2",
    title: "Simplee Nutritional Wellness — AI UGC Commercial",
    category: "Multimodal & Video",
    tool: "AI UGC & Video Ad Pipeline",
    description: "Direct-response UGC video advertisement for Simplee nutritional supplements, engineered with hook-focused narrative pacing, kinetic subtitles, and conversion triggers.",
    videoUrl: "/videos/Simplee with captions.mp4",
    prompt: "lifestyle UGC product review video showing Simplee supplement bottle, warm natural morning lighting, clean aesthetic kitchen background, vibrant product close-ups, energetic transitions, animated subtitle highlights",
    aspectRatio: "9:16 (Vertical)",
    tags: ["UGC Ad", "Health & Wellness", "AI Captions", "Conversion Hook", "Reels/TikTok"],
    parameters: {
      model: "AI Video Synthesis & Editing Engine"
    }
  },
  {
    id: "ai-video-3",
    title: "Soursop Natural Health Drink — Commercial Spot",
    category: "Multimodal & Video",
    tool: "Generative Video & Creative Direction",
    description: "Cinematic commercial spot for organic Soursop herbal beverage, highlighting natural ingredients, rich tropical textures, and clean wellness aesthetics.",
    videoUrl: "/videos/Soursop final.mp4",
    prompt: "commercial beverage advertisement for natural pure Soursop herbal extract, lush tropical orchard background with fresh dew-covered fruits, refreshing condensation on bottle, slow-motion golden hour sunlight, 8k commercial grade",
    aspectRatio: "9:16 (Vertical)",
    tags: ["Commercial Spot", "Beverage Ad", "Generative Video", "Cinematic", "Branding"],
    parameters: {
      model: "Generative Cinematic Video Suite"
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Technical & Engineering",
    icon: "Cpu",
    skills: [
      { name: "Python & Automation", level: 90, highlight: true },
      { name: "JavaScript / TypeScript", level: 88, highlight: true },
      { name: "HTML5 & Modern CSS3", level: 92, highlight: true },
      { name: "SQL & Firebase Database", level: 85, highlight: true },
      { name: "C++ & Firmware Basics", level: 80 },
      { name: "IoT & Hardware Troubleshooting", level: 92, highlight: true }
    ]
  },
  {
    name: "AI & Generative Content",
    icon: "Sparkles",
    skills: [
      { name: "AI Video Creation & Dynamic Captions", level: 94, highlight: true },
      { name: "Prompt Engineering (LLMs)", level: 92, highlight: true },
      { name: "Gemini & OpenAI API Integration", level: 88, highlight: true },
      { name: "Midjourney & Concept Art", level: 86 },
      { name: "Data Science & Analytics (HP Life)", level: 84 },
      { name: "E-Commerce UGC & Ad Scripting", level: 90, highlight: true }
    ]
  },
  {
    name: "Office Productivity & Systems",
    icon: "Layout",
    skills: [
      { name: "Microsoft Word (Documentation)", level: 95 },
      { name: "Microsoft Excel (Data Logs & Formulas)", level: 90, highlight: true },
      { name: "Microsoft PowerPoint (Presentations)", level: 92 },
      { name: "Cisco Networking & LAN Config", level: 85 },
      { name: "Git & Version Control", level: 86 }
    ]
  },
  {
    name: "Communication & Collaboration",
    icon: "Palette",
    skills: [
      { name: "Client Relations & Communication", level: 94, highlight: true },
      { name: "Technical Concept Translation", level: 92, highlight: true },
      { name: "Team Collaboration & Adaptability", level: 95, highlight: true },
      { name: "Customer Service & User Support", level: 92 }
    ]
  }
];

export const promptSimulatorPresets = [
  {
    id: "preset-1",
    name: "AI Video Script & Ad Hook",
    task: "Generate high-converting UGC video hooks and automated caption storyboards",
    defaultPrompt: "Write a 30-second TikTok / Reels script for an 8-Rib Windproof Umbrella, featuring an attention-grabbing hook in the first 3 seconds and dynamic kinetic subtitles.",
    model: "GPT-4o",
    temperature: 0.7,
    sampleOutput: `📱 **[0:00 - 0:03] THE HOOK:**
*(Visual: Rain pouring, cheap umbrella flips inside out)*
Audio: "Stop buying umbrellas that betray you the second it actually rains! ☔❌"
[CAPTION: "STOP WASTING MONEY 🛑"]

🎬 **[0:03 - 0:15] THE BREAKTHROUGH:**
*(Visual: One-click instant open of 8-Rib Reinforced Umbrella, water beads bouncing off nanotech fabric)*
Audio: "This is the 8-Rib Automatic Windproof Shield. Built with aircraft-grade fiberglass ribs that flex instead of snapping."
[CAPTION: "AIRCRAFT-GRADE FIBERGLASS 🛡️"]

🔥 **[0:15 - 0:30] CTA & PROOF:**
Audio: "One button to open, one button to close, and fits right in your bag. Tap below to grab yours before rainy season!"
[CAPTION: "TAP LINK FOR 40% OFF 👇"]`
  },
  {
    id: "preset-2",
    name: "Hardware Diagnostics Agent",
    task: "Analyze hardware error symptoms and generate structured diagnostic checklist",
    defaultPrompt: "A customer PC is experiencing random blue screens (Kernel Data Inpage Error) under heavy gaming and disk writes. Generate a diagnostic protocol for testing RAM, NVMe SSD, and motherboard chipset.",
    model: "Gemini 1.5 Pro",
    temperature: 0.2,
    sampleOutput: `### Triage Protocol: Kernel Data Inpage Error
**Potential Cause:** Unstable NVMe controller PCIe link, failing NAND block, or corrupted pagefile memory.

1. **Storage Integrity Test:**
   - Execute \`chkdsk /f /r\` and check CrystalDiskInfo SMART attributes for 0E (Media Errors) and 03 (Available Spare).
2. **Memory Diagnostics:**
   - Run Windows Memory Diagnostic or boot into MemTest86 for 4 passes.
3. **Hardware Reseat:**
   - Reseat M.2 NVMe in Primary PCIe Gen4 slot and clean gold contacts with isopropyl alcohol.`
  },
  {
    id: "preset-3",
    name: "IoT Sensor Alert Prompt",
    task: "Generate emergency public warning message based on live flood telemetry",
    defaultPrompt: "Create an urgent flood telemetry bulletin for Valenzuela City residents based on water level sensor reading reaching Warning Threshold 2 at 1.85m.",
    model: "Claude 3.5 Sonnet",
    temperature: 0.4,
    sampleOutput: `🚨 **SURGEALERT BULLETIN #03 — VALENZUELA CITY**
**Status:** Warning Level 2 (Water Level: 1.85m)
**Target Location:** Low-lying zones along Karuhatan / Tullahan riverbank.

**Key Directives:**
1. Secure household electrical switches and elevate valuables.
2. Evacuation staging center open at Karuhatan High School Gymnasium.
3. For immediate assistance, contact Disaster Risk Reduction Hotline: 092 6265 0382.`
  }
];
