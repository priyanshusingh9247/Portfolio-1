export const portfolioData = {
  personal: {
    name: "Priyanshu Kumar Singh",
    shortName: "Priyanshu Singh",
    titleSuffix: ".Tech",
    role: "Aspiring Software Engineer & Tech Innovator",
    age: 20,
    badge: "Student @ upGrad School of Technology • Open for Opportunities",
    tagline: "20-year-old developer crafting modern web experiences, intelligent Python scripts, and interactive 3D digital interfaces.",
    aboutShort: "Currently pursuing technology studies at upGrad School of Technology with hands-on focus on Python, JavaScript, HTML, and modern CSS architecture.",
    bio: [
      "Myself Priyanshu Singh, a 20-year-old technology enthusiast currently pursuing my education at upGrad School of Technology.",
      "I love turning creative ideas into real-world software — whether it's building responsive, interactive front-ends with HTML, CSS, and modern JavaScript, writing algorithms and automations in Python, or exploring cutting-edge 3D web graphics with Three.js.",
      "I am constantly learning, building new projects, and eager to collaborate on innovative software, open-source initiatives, and engineering internships."
    ],
    location: "India • Open to Remote & Tech Internships",
    email: "priyanshusingh9247@gmail.com",
    githubUsername: "priyanshusingh9247",
    resumeUrl: "#contact",
    yearsOfExperience: "2+",
    projectsCompleted: "15+",
    codeCommits: "500+"
  },

  socials: [
    { name: "GitHub", url: "https://github.com/priyanshusingh9247", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/search/results/all/?keywords=Priyanshu%20Kumar%20Singh", icon: "Linkedin" },
    { name: "Email", url: "mailto:priyanshusingh9247@gmail.com", icon: "Mail" }
  ],

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ],

  stats: [
    { label: "Age", value: "20", accent: "cyan" },
    { label: "School of Tech", value: "upGrad", accent: "purple" },
    { label: "Core Stack", value: "Python & JS", accent: "blue" },
    { label: "Commitment", value: "100%", accent: "magenta" }
  ],

  skills: {
    frontend: {
      title: "Core Web & Frontend Engineering",
      description: "Building responsive, modern, interactive user interfaces with clean markup and dynamic scripting.",
      items: [
        { name: "JavaScript (ES6+)", level: "90%", icon: "⚡" },
        { name: "HTML5 & Semantic Web", level: "95%", icon: "🌐" },
        { name: "CSS3 & Modern Styling", level: "92%", icon: "🎨" },
        { name: "Interactive 3D (Three.js)", level: "82%", icon: "🪐" },
        { name: "Responsive & Mobile Design", level: "90%", icon: "📱" }
      ]
    },
    backend: {
      title: "Python, Logic & Systems",
      description: "Developing computational scripts, automation, data processing, and backend logic.",
      items: [
        { name: "Python Core & Scripting", level: "92%", icon: "🐍" },
        { name: "Data Structures & Algorithms", level: "85%", icon: "🧩" },
        { name: "Object-Oriented Programming", level: "88%", icon: "⚙️" },
        { name: "APIs & Web Integrations", level: "82%", icon: "🔌" },
        { name: "Database Basics & SQL", level: "80%", icon: "🗄️" }
      ]
    },
    devops: {
      title: "Tools, Version Control & Platforms",
      description: "Development workflow, code versioning, and environment management.",
      items: [
        { name: "Git & GitHub Version Control", level: "90%", icon: "🐙" },
        { name: "VS Code & Modern IDEs", level: "94%", icon: "💻" },
        { name: "CLI & Terminal Scripting", level: "84%", icon: "⌨️" },
        { name: "Vite & Modern Build Tools", level: "85%", icon: "🚀" }
      ]
    }
  },

  projects: [
    {
      id: "project-1",
      title: "Python Automation & Analytics Suite",
      category: "Python / Data & Automation",
      description: "Custom Python automation engine designed for data scraping, automated task scheduling, and real-time metric analysis.",
      longDescription: "Built with modular Python scripts utilizing file I/O, regex, data structures, and algorithmic routines to automate routine workflows with high reliability.",
      tags: ["Python", "Algorithms", "Automation", "Git"],
      liveUrl: "https://github.com/priyanshusingh9247",
      githubUrl: "https://github.com/priyanshusingh9247",
      accent: "cyan",
      featured: true,
      stats: "Python Core • CLI Engine"
    },
    {
      id: "project-2",
      title: "Interactive 3D Web Canvas Experience",
      category: "JavaScript / Three.js",
      description: "Immersive WebGL single-page experience showcasing 3D mesh physics, real-time mouse tracking, and custom shader animations.",
      longDescription: "Engineered using Three.js and modern JavaScript to achieve a buttery-smooth 60 FPS user interaction model with interactive shockwaves and dynamic lighting.",
      tags: ["JavaScript", "Three.js", "HTML5", "CSS3"],
      liveUrl: "https://github.com/priyanshusingh9247",
      githubUrl: "https://github.com/priyanshusingh9247",
      accent: "purple",
      featured: true,
      stats: "60 FPS • WebGL • Three.js"
    },
    {
      id: "project-3",
      title: "Responsive Web Application Portfolio",
      category: "HTML / CSS / JS",
      description: "High-performance single-page portfolio application featuring glassmorphism design, fluid typography, and zero-latency layout transitions.",
      longDescription: "Coded with semantic HTML5, modern CSS flexbox/grid layout systems, and clean vanilla/ES6 JavaScript logic for maximum cross-browser compatibility.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      liveUrl: "https://github.com/priyanshusingh9247",
      githubUrl: "https://github.com/priyanshusingh9247",
      accent: "magenta",
      featured: true,
      stats: "100% Mobile Ready • Zero Lag"
    },
    {
      id: "project-4",
      title: "Algorithmic Problem Solving Repository",
      category: "Python / Logic",
      description: "Curated collection of optimized Python solutions for fundamental data structures, search algorithms, recursion, and sorting techniques.",
      longDescription: "Structured repository demonstrating clean coding conventions, Big-O time and space complexity evaluations, and comprehensive test cases.",
      tags: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
      liveUrl: "https://github.com/priyanshusingh9247",
      githubUrl: "https://github.com/priyanshusingh9247",
      accent: "blue",
      featured: false,
      stats: "Optimized Complexity • Python 3"
    }
  ],

  experience: [
    {
      role: "Technology Scholar & Student Developer",
      company: "upGrad School of Technology",
      period: "Present (Active)",
      location: "India",
      description: "Pursuing rigorous technology curriculum emphasizing modern software engineering principles, full-stack web technologies, and computational Python.",
      highlights: [
        "Mastering core computer science concepts, object-oriented design, and algorithmic problem-solving",
        "Developing hands-on projects combining HTML5, CSS3, modern JavaScript, and Python backend scripts",
        "Collaborating with peers on technology projects, code reviews, and software architecture exploration"
      ]
    },
    {
      role: "Independent Web & Python Developer",
      company: "Personal Projects & Open Source",
      period: "2023 - Present",
      location: "Remote / Self-Driven",
      description: "Building responsive web interfaces, interactive 3D experiments with Three.js, and automated utilities.",
      highlights: [
        "Engineered responsive web applications with modern animations and interactive UI components",
        "Maintained active GitHub repositories showcasing Python automations and JavaScript web apps",
        "Focused on high-performance web practices, clean code readability, and semantic accessibility"
      ]
    }
  ],

  education: [
    {
      degree: "Technology & Software Engineering Program",
      institution: "upGrad School of Technology",
      period: "Current Student (Age 20)",
      details: "Comprehensive study covering Web Development, Python Programming, Data Structures, Software Engineering practices, and emerging technologies."
    }
  ]
};
