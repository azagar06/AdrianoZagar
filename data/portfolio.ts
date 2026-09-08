// ─────────────────────────────────────────────────────────────────
// EDIT THIS FILE to customize the site. Every section on the
// homepage reads from here — no need to touch component code
// unless you're changing layout.
// ─────────────────────────────────────────────────────────────────

export const profile = {
  name: "Adriano Zagar",
  title: "Mechanical & Electrical Engineering Student",
  location: "Cleveland, OH",
  bio: "Mechanical & Electrical Engineering student passionate about robotics, automation, and product development. Experienced in CNC machining, PLCs, CAD design, programming, and manufacturing.",
  email: "a.b.zagar@vikes.csuohio.edu",
  linkedin: "https://www.linkedin.com/in/adriano-zagar-engineer",
  github: "https://github.com/azagar06",
  youtube: "https://www.youtube.com/channel/UC8eqifDWT1VdNd-v7Zt8_uw",
  resumeUrl: "/resume.pdf",
};

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Engineering and Manufacturing Intern",
    company: "Re:Build Manufacturing",
    location: "Avon, OH",
    start: "May 2026",
    end: "Aug. 2026",
    points: [
      "Exceeded production targets by 25%, executing 50+ CNC machining runs.",
      "Increased production rates by 10% by developing an all-new tool inventory tracking system in Microsoft Excel.",
      "Performed 10,000+ inspections using precision measuring tools to maintain strict tolerances.",
      "Mentored incoming interns to accelerate their onboarding and integration into the work environment.",
      "Hands-on experience with advanced CAM software and multi-axis toolpaths.",
    ],
    stack: ["CNC Machining", "CAM", "Quality Inspection", "Excel"],
  },
  {
    role: "Computer Lab Manager",
    company: "Cleveland State University",
    location: "Cleveland, OH",
    start: "Jan. 2026",
    end: "Present",
    points: [
      "Managed and maintained 50+ lab computers through hardware diagnostics and OS troubleshooting.",
      "Supported 50+ students and faculty weekly through software, hardware, and network troubleshooting.",
      "Collaborated with IT staff to implement infrastructure improvements and resolve escalated issues.",
    ],
    stack: ["Hardware Diagnostics", "OS Troubleshooting", "Network Troubleshooting"],
  },
];

export type Project = {
  title: string;
  description: string;
  bullets?: string[];
  stack: string[];
  status?: string;
  date?: string;
  github?: string;
  demo?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Team-Developed Rocket and Flight Computer",
    description: "",
    bullets: [
      "Custom ESP32-S3 flight computer",
      "Telemetry & onboard data logging",
      "Custom ignition & recovery system",
    ],
    stack: ["Embedded C++", "ESP32-S3", "KiCad", "SOLIDWORKS", "OpenRocket"],
    date: "Jun. 2026 — Aug. 2026",
    href: "/projects/rocket",
  },
  {
    title: "Handheld Embedded Calculator",
    description: "",
    bullets: [
      "Custom ESP32 electronics",
      "Embedded C++ firmware",
      "Iterative prototype validation",
    ],
    stack: ["Arduino IDE", "ESP32", "KiCad", "SOLIDWORKS", "C++"],
    date: "May 2026 — Aug. 2026",
    href: "/projects/calculator",
  },
  {
    title: "Rocketry Club",
    description:
      "Member of Cleveland State's Rocketry Club, contributing to the design, assembly, and testing of student-built rocket systems, including avionics and embedded electronics development for flight applications.",
    stack: ["Rocket Design", "Avionics", "Embedded Systems", "Testing"],
    date: "Jan. 2026 — Present",
  },
  {
    title: "Formula SAE",
    description:
      "Contributing to Cleveland State's Formula SAE team, applying mechanical and electrical engineering skills to design and build a competition race car.",
    stack: ["CAD", "Manufacturing", "Systems Integration"],
    date: "Nov. 2025 — Present",
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Manufacturing & Machining",
    skills: ["CNC Machining", "Soldering", "Quality Inspection", "Assembly", "3D Printing"],
  },
  {
    label: "Automation & Controls",
    skills: ["Rockwell PLCs", "Allen-Bradley PLCs", "FANUC Robotics"],
  },
  {
    label: "CAD & Design",
    skills: ["SolidWorks (CSWA)", "KiCad", "EDA", "PCB Design"],
  },
  {
    label: "Programming & Software",
    skills: ["C++", "MATLAB", "PSpice", "LTspice", "Arduino IDE", "CAM", "OpenRocket", "Microsoft Office"],
  },
];

export type Certification = {
  title: string;
  date?: string;
  credentialId?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Certified SOLIDWORKS Associate (CSWA)",
    date: "June 2026",
    credentialId: "C-9VW83BH27L",
    verifyUrl: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9VW83BH27L",
  },
  { title: "Certified Robotics Operator", date: "May 2024" },
  { title: "Fanuc Cert Handling Tool Operations and Programming Certificate", date: "May 2024" },
];

// ─────────────────────────────────────────────────────────────────
// Project detail pages
// ─────────────────────────────────────────────────────────────────

export type ProjectDetailData = {
  title: string;
  author: string;
  stackLine: string;
  objective: string;
  heroImage: { src: string; caption: string };
  workflow: { title: string; body: string }[];
  workflowImages: { src: string; caption: string }[];
  challenges: { title: string; body: string }[];
  extraSectionTitle: string;
  extraImages: { src: string; caption: string }[];
  backHref: string;
};

export const calculatorProject: ProjectDetailData = {
  title: "Handheld Embedded Calculator",
  author: "Adriano Zagar",
  stackLine: "C++, Arduino, ESP32, KiCad, SOLIDWORKS",
  objective:
    "To design and deliver a fully functional, production-ready handheld consumer electronic device from concept to prototype, successfully integrating custom C++ firmware, hardware, and mechanical enclosure design while optimizing for manufacturing cost and spatial efficiency.",
  heroImage: {
    src: "/projects/calculator/final-assembled.jpg",
    caption: "Final Assembled Handheld Calculator",
  },
  workflow: [
    {
      title: "Breadboard Prototype",
      body: "Validated core computational logic and C++ firmware using an Arduino Uno backend.",
    },
    {
      title: "Architecture Migration",
      body: "Re-engineered the system around an ESP32 and 4-pin LCD to minimize wiring complexity and footprint.",
    },
    {
      title: "Hardware Validation",
      body: "Built and tested an interim perf-board prototype to verify signal and power integrity.",
    },
    {
      title: "Custom PCB Design",
      body: "Engineered a cost-optimized 2-layer schematic and PCB in KiCad.",
    },
    {
      title: "Mechanical Enclosure",
      body: "Designed a compact snap-fit housing in SOLIDWORKS.",
    },
  ],
  workflowImages: [
    { src: "/projects/calculator/arduino-breadboard.jpg", caption: "Arduino Uno Breadboard" },
    { src: "/projects/calculator/esp32-breadboard.jpg", caption: "ESP32 Breadboard" },
    { src: "/projects/calculator/perf-board.jpg", caption: "Perf-Board" },
    { src: "/projects/calculator/custom-pcb.jpg", caption: "Custom PCB" },
  ],
  challenges: [
    {
      title: "Cross-Domain Integration",
      body: "Unified custom electronics, C++ firmware, and a 3D-printed enclosure into a functional handheld unit.",
    },
    {
      title: "Spatial Constraints",
      body: "Optimized component placement and low-profile parts for the handheld form factor.",
    },
    {
      title: "Rechargeable Power System",
      body: "Integrated an MT3608 step-up module, 3.7V rechargeable battery, and TP4056 charger module.",
    },
    {
      title: "Design for Manufacturability (DFM)",
      body: "Designed for efficient assembly, durability, and cost-effective sourcing.",
    },
  ],
  extraSectionTitle: "Schematic, PCB & Enclosure",
  extraImages: [
    { src: "/projects/calculator/schematic.jpg", caption: "Schematic (KiCad)" },
    { src: "/projects/calculator/pcb-layout.jpg", caption: "PCB Layout (KiCad)" },
    { src: "/projects/calculator/internal-electronics-assembly.jpg", caption: "Internal Electronics Assembly" },
    { src: "/projects/calculator/enclosure-cad.jpg", caption: "SOLIDWORKS Enclosure CAD" },
  ],
  backHref: "/#projects",
};

export const rocketProject: ProjectDetailData = {
  title: "Team-Developed Rocket and Flight Computer",
  author: "Adriano Zagar & Team",
  stackLine: "Embedded C++, ESP32-S3, SOLIDWORKS, OpenRocket",
  objective:
    "Engineered and launched a custom high-power rocket with a self-built ESP32-S3 flight computer, 3D-printed aerostructures, and a custom ignition and safety-lock system.",
  heroImage: {
    src: "/projects/rocket/final-assembled.jpg",
    caption: "Final Assembled Rocket",
  },
  workflow: [
    {
      title: "Flight Computer",
      body: "Engineered and coded a custom ESP32-S3 flight computer with real-time SD data logging.",
    },
    {
      title: "Aerodynamics",
      body: "Modeled and validated flight stability using OpenRocket simulations.",
    },
    {
      title: "Sensor Integration",
      body: "Integrated a BME280 pressure sensor and TPS61023 boost converter for altitude tracking and stable power delivery.",
    },
    {
      title: "3D-Printed Parts",
      body: "Designed and fabricated custom fins and nose cone in SOLIDWORKS.",
    },
    {
      title: "Ignition & Recovery",
      body: "Engineered a custom ignition circuit and parachute recovery system from the ground up.",
    },
    {
      title: "Flight Testing",
      body: "Ran iterative test launches to validate flight computer and recovery performance.",
    },
  ],
  workflowImages: [
    { src: "/projects/rocket/flight-computer.jpg", caption: "ESP32-S3 Flight Computer" },
    { src: "/projects/rocket/fin-motor-mount.jpg", caption: "3D-Printed Fin & Motor Mount" },
    { src: "/projects/rocket/flight-simulation.jpg", caption: "OpenRocket Flight Simulation" },
    { src: "/projects/rocket/rocket-setup.jpg", caption: "Rocket Setup" },
  ],
  challenges: [
    {
      title: "Custom Ignition System",
      body: "Built and tested our own motor igniter circuit rather than using a pre-made one.",
    },
    {
      title: "Launch Safety Interlock",
      body: "Engineered a key-locked launch interlock, adding a dedicated safety stage to prevent accidental ignition.",
    },
    {
      title: "Recovery System",
      body: "Designed and validated parachute deployment and canopy geometry for a safe, controlled descent.",
    },
    {
      title: "Full Integration",
      body: "Unified custom firmware, sensors, and recovery hardware into one fully integrated, flight-ready system.",
    },
  ],
  extraSectionTitle: "Ignition & Recovery Hardware",
  extraImages: [
    { src: "/projects/rocket/safety-lock.jpg", caption: "Safety Lock Prototype" },
    { src: "/projects/rocket/recovery-parachute.jpg", caption: "Recovery Parachute" },
    { src: "/projects/rocket/custom-igniter.jpg", caption: "Custom-Built Igniter" },
  ],
  backHref: "/#projects",
};
