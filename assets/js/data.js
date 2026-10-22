/**
 * ==============================================================================
 * NIROB'S PORTFOLIO DATA FILE (data.js)
 * ==============================================================================
 * This is the single central file that powers all content across your portfolio.
 * 
 * HOW TO EDIT:
 * 1. To edit text: Update the text inside the quotes "".
 * 2. To change images: Put your new image in "assets/images/..." and update the path.
 * 3. Placeholders like "[ADD DETAILS HERE]" indicate where you can put your real information.
 * 4. To add a new project, certificate, or activity: Copy an existing item block,
 *    paste it, and fill in your details.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL PROFILE & BRAND INFORMATION
  // --------------------------------------------------------------------------
  profile: {
    name: "Nirob",
    fullName: "Md Masudur Rahman Nirob",
    shortBio: "I am Nirob, a graphic designer and Computer Science student at Bangladesh University of Business and Technology (BUBT). My main strength is graphic design, and my CS background helps me understand technical limits and collaborate seamlessly with developers to build pixel-perfect, practical visuals.",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    major: "B.Sc. in Computer Science & Engineering",
    educationShort: "B.Sc. CSE • BUBT",
    email: "masudurrahmannirob@gmail.com",
    phone: "+880 1828384972",
    phoneTel: "+8801828384972",
    location: "Mirpur Section-2, Dhaka, Bangladesh",
    photo: "assets/images/profile.jpg", // Nirob's profile photo
    resumePdf: "assets/cv/Nirob_CV.pdf", // Nirob's CV file

    // Typewriter roles shown in hero heading
    typewriterRoles: [
      "Graphic Designer",
      "CSE Student",
      "Programmer"
    ],

    // Social & Professional Profiles
    social: {
      linkedin: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      behance: "https://www.behance.net/mrnirob51",
      github: "https://github.com/nirob5151",
      facebook: "https://www.facebook.com/mdmr.nirob.3"
    },

    // Primary Creative & Design Tools
    tools: [
      {
        name: "Canva",
        description: "Rapid social media graphics, promotional banners, and marketing layout kits",
        icon: "canva",
        svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><circle cx="12" cy="12" r="11" fill="url(#canva-grad)"/><path d="M12.6 15.6c-2.3 0-3.9-1.7-3.9-4.1s1.6-4.1 3.9-4.1c1.3 0 2.4.6 3 1.7l-1.4 1c-.4-.6-.9-1-1.6-1-1.3 0-2.2 1.1-2.2 2.4s.9 2.4 2.2 2.4c.7 0 1.2-.4 1.6-1l1.4 1c-.6 1.1-1.7 1.7-3 1.7z" fill="#ffffff"/><defs><linearGradient id="canva-grad" x1="1" y1="1" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#00C4CC"/><stop offset="100%" stop-color="#7D2AE8"/></linearGradient></defs></svg>`
      },
      {
        name: "Adobe Photoshop",
        description: "Photo manipulation, visual composition, digital retouching, and mockups",
        icon: "photoshop",
        svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect width="24" height="24" rx="5.5" fill="#001e36"/><rect x="1" y="1" width="22" height="22" rx="4.5" fill="none" stroke="#31a8ff" stroke-width="1.4"/><text x="12" y="16.5" font-family="'JetBrains Mono', -apple-system, monospace" font-weight="800" font-size="12" fill="#31a8ff" text-anchor="middle">Ps</text></svg>`
      },
      {
        name: "Adobe Illustrator",
        description: "Vector graphics, brand logos, custom typography, iconography, and print media",
        icon: "illustrator",
        svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect width="24" height="24" rx="5.5" fill="#330000"/><rect x="1" y="1" width="22" height="22" rx="4.5" fill="none" stroke="#ff9a00" stroke-width="1.4"/><text x="12" y="16.5" font-family="'JetBrains Mono', -apple-system, monospace" font-weight="800" font-size="12" fill="#ff9a00" text-anchor="middle">Ai</text></svg>`
      },
      {
        name: "PosterMyWall",
        description: "Event posters, concert announcements, and high-impact digital promotional flyers",
        icon: "postermywall",
        svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect width="24" height="24" rx="5.5" fill="url(#pmw-grad)"/><path d="M7.5 6h5.2a4 4 0 0 1 0 8H10v5H7.5V6zm2.5 2.5v3h2.7a1.5 1.5 0 0 0 0-3H10z" fill="#ffffff"/><defs><linearGradient id="pmw-grad" x1="1" y1="1" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#1d4ed8"/><stop offset="100%" stop-color="#ea580c"/></linearGradient></defs></svg>`
      },
      {
        name: "Figma",
        description: "UI/UX interface wireframes, interactive prototypes, and component design systems",
        icon: "figma",
        svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M8 3.5a3.5 3.5 0 0 0 0 7h3.5v-7H8z" fill="#F24E1E"/><path d="M12.5 3.5H16a3.5 3.5 0 0 1 0 7h-3.5v-7z" fill="#FF7262"/><path d="M12.5 10.5H16a3.5 3.5 0 0 1 0 7h-3.5v-7z" fill="#1ABCFE"/><path d="M8 17.5a3.5 3.5 0 0 0 3.5 3.5V17.5H8z" fill="#0ACF83"/><path d="M8 10.5a3.5 3.5 0 0 0 0 7h3.5v-7H8z" fill="#A259FF"/></svg>`
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 1b. FOCUS AREAS & CORE STRENGTHS (Home Page)
  // Edit the cards, subtitles, bullet points, tags, and accents below.
  // --------------------------------------------------------------------------
  focusAreas: [
    {
      id: "graphic-design",
      title: "Graphic Design",
      subtitle: "Posters, Banners & Social Media",
      accent: "blue",
      accentColor: "#3b82f6",
      iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
      bullets: [
        "Designing event posters and promotional banners",
        "Creating social media campaigns for clubs and events",
        "Designing paper bags, T-shirts, ID cards, and ID card ribbons",
        "Creating pens and other promotional materials for events and organizations"
      ],
      tag: "Graphic Design • Branding • Print Media"
    },
    {
      id: "ui-design",
      title: "UI Design",
      subtitle: "Interfaces for Real Products",
      accent: "purple",
      accentColor: "#a855f7",
      iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      bullets: [
        "Club Connect, a university club management web app",
        "Wireframes and clean screen layouts in Figma",
        "Consistent color, spacing, and typography"
      ],
      tag: "Web App Interface Design"
    },
    {
      id: "tech-background",
      title: "Computer Science at BUBT",
      subtitle: "Combining Technical Knowledge with Creative Design",
      accent: "green",
      accentColor: "#22c55e",
      iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`,
      bullets: [
        "Understanding technical requirements, file formats, and design specifications",
        "Collaborating effectively with developers on design handoff",
        "Learning C, C++, Python, C#, and programming fundamentals",
        "Exploring AI, ML, Unity game development, and interactive technologies"
      ],
      tag: "B.Sc. CSE • BUBT"
    }
  ],

  // --------------------------------------------------------------------------
  // 2. GRAPHIC DESIGN PROJECTS
  // Note: Graphic design projects come first, and UI design (Club Connect)
  // is placed last as requested to demonstrate your range.
  // --------------------------------------------------------------------------
  graphicDesignProjects: [
    {
      id: "tech-fest-poster",
      title: "BUBT Tech Fest 2026 Promotional Poster",
      category: "Posters",
      featured: true, // Appears in the 3 featured previews on Home page
      coverImage: "assets/images/projects/poster-1.svg",
      gallery: [
        "assets/images/projects/poster-1.svg"
      ],
      client: "[ADD CLIENT OR EVENT NAME HERE: e.g. BUBT CSE Department]",
      brief: "[ADD BRIEF HERE: Required a striking, cyber-inspired promotional poster for the university's annual tech festival to drive hackathon and gaming registrations.]",
      role: "Lead Graphic Designer",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      process: "[ADD PROCESS HERE: Researched high-contrast cyberpunk visual language, balanced typography hierarchy for readability from distance, and developed both print and 4K digital screen formats.]",
      result: "[ADD RESULT HERE: Official poster adopted for campus-wide notice boards, auditorium backdrops, and social media announcements.]"
    },
    {
      id: "apex-branding",
      title: "Apex Studio Visual Identity & Branding",
      category: "Branding",
      featured: true, // Appears on Home page
      coverImage: "assets/images/projects/branding-1.svg",
      gallery: [
        "assets/images/projects/branding-1.svg"
      ],
      client: "[ADD CLIENT OR EVENT NAME HERE: e.g. Apex Creative Labs / Student Startup]",
      brief: "[ADD BRIEF HERE: Needed a minimalist, modern corporate identity including logo mark, color system, typography rules, and business collateral.]",
      role: "Brand Identity Designer",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      process: "[ADD PROCESS HERE: Explored geometric monogram concepts, refined vector curves for high scalability, and produced a comprehensive brand guidelines sheet.]",
      result: "[ADD RESULT HERE: Complete identity package delivered with print-ready business cards, letterheads, and digital vector assets.]"
    },
    {
      id: "ramadan-social-campaign",
      title: "Campus Ramadan & Cultural Festival Posts",
      category: "Social Media",
      featured: false,
      coverImage: "assets/images/projects/social-1.svg",
      gallery: [
        "assets/images/projects/social-1.svg"
      ],
      client: "[ADD CLIENT OR EVENT NAME HERE: e.g. BUBT Cultural Club]",
      brief: "[ADD BRIEF HERE: Create celebratory social media greetings and promotional square templates aligned with cultural aesthetics.]",
      role: "Visual Content Designer",
      tools: ["Canva", "Adobe Illustrator", "Adobe Photoshop"],
      process: "[ADD PROCESS HERE: Combined traditional geometric arabesque patterns with modern typography and golden gradient accents.]",
      result: "[ADD RESULT HERE: Series of 5 cohesive social cards published across club Facebook and Instagram channels.]"
    },
    {
      id: "hackathon-banner",
      title: "National Hackathon Web & Roll-up Banners",
      category: "Banners",
      featured: false,
      coverImage: "assets/images/projects/banner-1.svg",
      gallery: [
        "assets/images/projects/banner-1.svg"
      ],
      client: "[ADD CLIENT OR EVENT NAME HERE: e.g. Inter-University Hackathon Committee]",
      brief: "[ADD BRIEF HERE: Design wide format website hero banners and physical 6x3 roll-up standing banners for the check-in lounge.]",
      role: "Print & Digital Media Designer",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      process: "[ADD PROCESS HERE: Calculated CMYK print resolutions, ensured sponsor logos were well-spaced, and matched the web edition's high-energy visual tone.]",
      result: "[ADD RESULT HERE: Production-ready banner files sent to print house with zero registration errors, and responsive web banners for website header.]"
    },
    {
      // Placed last as requested to showcase technical UI range
      id: "club-connect-ui",
      title: "Club Connect — University Club Management Web App",
      category: "UI Design",
      featured: true, // Appears on Home page as 3rd featured item
      coverImage: "assets/images/projects/ui-clubconnect.svg",
      gallery: [
        "assets/images/projects/ui-clubconnect.svg"
      ],
      client: "BUBT Student Affairs / Academic Project",
      brief: "[ADD BRIEF HERE: University clubs struggled with scattered paper forms, spreadsheets, and manual ticket verification. Required a clean, intuitive web dashboard.]",
      role: "UI/UX Designer & Frontend Collaborator",
      tools: ["Figma", "Canva", "HTML/CSS/JS"],
      process: "[ADD PROCESS HERE: Interviewed club executives, designed interactive wireframes with accessible contrast ratios, and wrote reusable modular CSS for engineering handoff.]",
      result: "[ADD RESULT HERE: Modern, responsive dashboard design ready for developer implementation with consistent design tokens.]"
    }
  ],

  // --------------------------------------------------------------------------
  // 2b. EDUCATION BACKGROUND (Academic Page)
  // --------------------------------------------------------------------------
  education: [
    {
      id: "edu-bubt-cse",
      degree: "B.Sc. in Computer Science and Engineering (CSE)",
      institution: "Bangladesh University of Business and Technology (BUBT)",
      location: "Dhaka, Bangladesh",
      period: "Expected Graduation: 2027",
      status: "In Progress",
      statusBadge: "Expected 2027",
      icon: "degree",
      details: [
        "Major in Computer Science & Engineering covering core algorithms, software architecture, database systems, and modern web applications.",
        "Connecting algorithmic problem solving with intuitive UI/UX design systems and developer-friendly codebases."
      ],
      tags: ["Computer Science", "CSE", "BUBT", "Dhaka"]
    },
    {
      id: "edu-busms-hsc",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cantonment Public School and College (BUSMS)",
      location: "Kholahati, Parbatipur, Dinajpur, Bangladesh",
      group: "Science",
      period: "Passing Year: 2021",
      status: "Completed",
      statusBadge: "Passing Year: 2021",
      icon: "school",
      details: [
        "Group: Science with rigorous focus on Physics, Chemistry, Higher Mathematics, and Information & Communication Technology (ICT).",
        "Built disciplined analytical foundations, logical reasoning, and active engagement in campus science clubs."
      ],
      tags: ["Science", "HSC", "BUSMS", "Dinajpur"]
    }
  ],

  // --------------------------------------------------------------------------
  // 2c. TOOLS & SOFTWARE (Academic Page - Scrolling Right to Left Marquee)
  // Programming languages, frameworks, cloud platforms, and developer environments
  // --------------------------------------------------------------------------
  technicalTools: [
    {
      name: "Python (PyCharm)",
      description: "Python scripting, data science pipelines & JetBrains PyCharm professional IDE",
      icon: "python-pycharm",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><defs><linearGradient id="acad-py-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#387eb8"/><stop offset="100%" stop-color="#306998"/></linearGradient><linearGradient id="acad-py-yellow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffe873"/><stop offset="100%" stop-color="#ffd43b"/></linearGradient></defs><path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.03 1.4h2.9v.4H6.3S4 4.8 4 8c0 3.1 1.9 3 1.9 3h1.1v-1.5c0-1.7 1.5-1.7 1.5-1.7h3.1c1.5 0 1.5-1.4 1.5-1.4V4.9S13.4 2 11.9 2zm-1.6 1c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z" fill="url(#acad-py-blue)"/><path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.03-1.4h-2.9v-.4h5.6s2.3.3 2.3-2.9c0-3.1-1.9-3-1.9-3h-1.1v1.5c0 1.7-1.5 1.7-1.5 1.7h-3.1c-1.5 0-1.5 1.4-1.5 1.4v1.5s-.3 2.9 1.2 2.9zm1.6-1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z" fill="url(#acad-py-yellow)"/></svg>`
    },
    {
      name: "Google Colab",
      description: "Cloud-hosted Jupyter notebook environment with free GPU & TPU acceleration",
      icon: "colab",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M7 8a4 4 0 0 0 0 8l1.6-1.6a1.8 1.8 0 1 1 0-4.8L7 8z" fill="#F9AB00"/><path d="M17 8a4 4 0 0 1 0 8l-1.6-1.6a1.8 1.8 0 1 0 0-4.8L17 8z" fill="#E37400"/><circle cx="8.8" cy="12" r="1.3" fill="#F9AB00"/><circle cx="15.2" cy="12" r="1.3" fill="#E37400"/></svg>`
    },
    {
      name: "Jupyter Notebook",
      description: "Interactive computing & exploratory data analysis for machine learning",
      icon: "jupyter",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><circle cx="12" cy="3.5" r="1.6" fill="#767677"/><circle cx="12" cy="20.5" r="1.6" fill="#767677"/><circle cx="19.5" cy="12" r="1.6" fill="#767677"/><circle cx="4.5" cy="12" r="1.6" fill="#767677"/><path d="M12 6c-3.8 0-7 2.2-7 5s3.2 5 7 5 7-2.2 7-5-3.2-5-7-5zm0 8.2c-2.8 0-5-1.4-5-3.2s2.2-3.2 5-3.2 5 1.4 5 3.2-2.2 3.2-5 3.2z" fill="#F37626"/></svg>`
    },
    {
      name: "TensorFlow / Keras",
      description: "Deep learning framework, neural network architecture design & model training",
      icon: "tensorflow",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M12 2l8 4.6v9.2L16 18.1V9.9l-4-2.3v13.9L8 19.2V5.4L12 2z" fill="#FF6F00"/><path d="M12 2l4 2.3v13.8l-4 2.4V2z" fill="#FFA800" opacity="0.85"/><path d="M4 6.6L8 9v9.2l-4-2.3V6.6z" fill="#E65100"/></svg>`
    },
    {
      name: "Supabase",
      description: "Open-source Firebase alternative featuring Postgres database, Auth & Realtime APIs",
      icon: "supabase",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><defs><linearGradient id="acad-supa-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#3ECF8E"/><stop offset="100%" stop-color="#24B47E"/></linearGradient></defs><path d="M13.4 2.5L3.8 14.2c-.4.5-.1 1.3.6 1.3H11v6c0 .8 1 .1 1.4-.4l9.6-11.7c.4-.5.1-1.3-.6-1.3H14v-6c0-.8-1-.1-1.4.4z" fill="url(#acad-supa-grad)"/></svg>`
    },
    {
      name: "Firebase",
      description: "Google app development platform with Firestore, Realtime Database, Auth & Cloud Functions",
      icon: "firebase",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M4.7 17.4l1.6-10.4c.1-.6.8-.8 1.2-.4l3.1 3.9 2.2-4.2c.3-.5 1.1-.5 1.3 0l5.8 11.1-7.9 4.4a2 2 0 0 1-2 0l-5.3-4.4z" fill="#FFA000"/><path d="M19.9 17.4L14.1 6.3c-.3-.5-1.1-.5-1.3 0l-2.2 4.2 6.4 10.3 2.9-3.4z" fill="#F57C00"/><path d="M10.6 20.8l9.3-3.4-3.2-6.1-6.1 9.5z" fill="#FFCA28"/></svg>`
    },
    {
      name: "Cloudinary",
      description: "Cloud-based asset management, dynamic image transformations & global media CDN",
      icon: "cloudinary",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M19.4 11.2a6 6 0 0 0-11-2.2 4.5 4.5 0 0 0-4.4 4.5 4.5 4.5 0 0 0 4.5 4.5h10.5a4.5 4.5 0 0 0 4.5-4.5 4.4 4.4 0 0 0-4.1-4.3z" fill="#3448C5"/><path d="M14.5 12.5l-3.5 3.5-2-2" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: "Vercel",
      description: "Frontend cloud platform for instant deployment, automated CI/CD & global edge network",
      icon: "vercel",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect width="24" height="24" rx="5.5" fill="#000000"/><polygon points="12,4 21,19.5 3,19.5" fill="#ffffff"/></svg>`
    },
    {
      name: "Visual Studio Code",
      description: "Primary lightweight code editor with rich extension ecosystem, Git & debugging tools",
      icon: "vscode",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M17.5 2.5l4 2v15l-4 2-10-8.5 10-10.5z" fill="#007ACC"/><path d="M17.5 2.5L7.5 11l-4.5-3.5 3-3 11.5-2z" fill="#1F9CF0"/><path d="M6 19.5l-3-3 4.5-3.5 10 8.5-11.5-2z" fill="#0066B8"/><path d="M17.5 7.5L7.5 15.5l10 1V7.5z" fill="#007ACC" opacity="0.3"/></svg>`
    },
    {
      name: "Git",
      description: "Distributed version control system for tracking commits, branches & project history",
      icon: "git",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M21.6 10.9L13.1 2.4a1.5 1.5 0 0 0-2.1 0L9.4 4l3.1 3.1a1.8 1.8 0 0 1 2.3 2.3l2.9 2.9a1.8 1.8 0 1 1-1.1 1l-2.7-2.7v4.6a1.8 1.8 0 1 1-1.5 0v-4.8L8.7 14a1.8 1.8 0 1 1-1.1-1l3.5-3.5a1.8 1.8 0 0 1 .4-2.1L8.3 4.2 2.4 10.1a1.5 1.5 0 0 0 0 2.1l8.5 8.5a1.5 1.5 0 0 0 2.1 0l8.6-8.6a1.5 1.5 0 0 0 0-2.1z" fill="#F05032"/></svg>`
    },
    {
      name: "GitHub",
      description: "Cloud repository hosting, open-source collaboration, pull requests & GitHub Actions",
      icon: "github",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect width="24" height="24" rx="5.5" fill="#181717"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.5 1.2.2 2 .1 2.2.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.3c0 .2.2.5.5.4A8 8 0 0 0 12 4z" fill="#ffffff"/></svg>`
    },
    {
      name: "MongoDB Atlas",
      description: "Fully managed multi-cloud database service with automated clustering & elastic scaling",
      icon: "mongodb-atlas",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><defs><linearGradient id="acad-atlas-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#001E2B"/><stop offset="100%" stop-color="#00684A"/></linearGradient></defs><rect width="24" height="24" rx="5.5" fill="url(#acad-atlas-grad)"/><path d="M12 3.5c-.2 0-3.5 3.2-3.5 7.8 0 3.2 2.1 5.6 3.5 6.7 1.4-1.1 3.5-3.5 3.5-6.7 0-4.6-3.3-7.8-3.5-7.8z" fill="#00ED64"/><path d="M12 18.2V3.5c.1 0 3.5 3.2 3.5 7.8 0 3.2-2.1 5.6-3.5 6.9z" fill="#00C653"/><circle cx="12" cy="19.2" r="1.1" fill="#00ED64"/></svg>`
    },
    {
      name: "MySQL",
      description: "Relational database management system for structured data & relational SQL queries",
      icon: "mysql",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M19.5 9.8c-.8-1.5-2.2-2.7-4-3.2-1.9-.5-4.1-.2-5.9.8-1.7 1-2.9 2.6-3.6 4.4-.7 1.8-.7 3.9-.1 5.7.5-1.1 1.3-2.1 2.3-2.8 1-.8 2.2-1.2 3.5-1.3 1.3 0 2.6.4 3.6 1.1 1 .7 1.8 1.7 2.3 2.8.7-2.3.8-4.9.1-7.3l1.8-.2z" fill="#00758F"/><path d="M11.8 14.5c-1.2.1-2.3.5-3.2 1.2-.9.7-1.6 1.6-2 2.6 1.6 1.3 3.6 2 5.6 1.9 2-.1 4-.9 5.5-2.3-.5-1-1.2-1.9-2.1-2.5-.9-.6-2.5-.9-3.8-.9z" fill="#F29111"/><circle cx="15.8" cy="8.5" r="0.8" fill="#ffffff"/></svg>`
    },
    {
      name: "Visual Studio 2022",
      description: "Comprehensive enterprise IDE for C++, C#, .NET development, profiling & application builds",
      icon: "vs2022",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M17.5 2.5l4.5 2v15l-4.5 2-10.5-8.5 10.5-10.5z" fill="#5C2D91"/><path d="M17.5 2.5L7 11.5l-4.5-3.5 3.5-3 11.5-2.5z" fill="#8549BA"/><path d="M6 19.5l-3.5-3 4.5-3.5 10.5 8.5-11.5-2z" fill="#4B2378"/><path d="M17.5 7.5L7 15.5l10.5 1V7.5z" fill="#5C2D91" opacity="0.4"/></svg>`
    },
    {
      name: "Unity",
      description: "Cross-platform real-time 2D/3D development engine for interactive simulations & games",
      icon: "unity",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M12 2.5l7.8 4.5v9L12 20.5l-7.8-4.5v-9L12 2.5z" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 2.5v9.5m0 0l7.8 4.5m-7.8-4.5l-7.8 4.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="2.2" fill="#ffffff"/></svg>`
    },
    {
      name: "Kaggle",
      description: "Platform for machine learning competitions, data science notebooks & public benchmarks",
      icon: "kaggle",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M5.5 3v18h3.2v-7.8l5.9 7.8h4.2l-6.8-8.6 6.3-9.4h-4l-5.6 8.5V3H5.5z" fill="#20BEFF"/></svg>`
    },
    {
      name: "Codeforces",
      description: "Competitive programming platform for algorithmic problem solving & contest rounds",
      icon: "codeforces",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect x="3" y="11" width="5" height="10" rx="1.5" fill="#FFB400"/><rect x="9.5" y="4" width="5" height="17" rx="1.5" fill="#215CA0"/><rect x="16" y="8" width="5" height="13" rx="1.5" fill="#CC0000"/></svg>`
    },
    {
      name: "MongoDB",
      description: "Document-oriented NoSQL database system utilizing flexible, JSON-like document models",
      icon: "mongodb",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M12 2.5c-.3 0-5.5 4.5-5.5 11 0 4.5 3.2 7.7 5.5 9 2.3-1.3 5.5-4.5 5.5-9 0-6.5-5.2-11-5.5-11z" fill="#00ED64"/><path d="M12 22.5V2.5c.2 0 5.3 4.5 5.3 11 0 4.5-3.1 7.7-5.3 9z" fill="#13AA52"/><path d="M12 23.5c-.4 0-.8-.3-.8-.8v-3.5c0-.4.4-.8.8-.8s.8.4.8.8v3.5c0 .5-.4.8-.8.8z" fill="#A6A6A6"/></svg>`
    },
    {
      name: "VirtualBox",
      description: "Oracle x86 hardware virtualization hypervisor for multi-OS testing & Linux sandbox builds",
      icon: "virtualbox",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M12 3l8 4.6v9L12 21.2 4 16.6v-9L12 3z" fill="#183A64"/><path d="M12 3l8 4.6-8 4.6-8-4.6L12 3z" fill="#2D74DA"/><path d="M12 12.2l8-4.6v9l-8 4.6v-9z" fill="#1B4D8E"/><path d="M12 12.2L4 7.6v9l8 4.6v-9z" fill="#2464B8"/><circle cx="12" cy="12.2" r="2.2" fill="#ffffff" opacity="0.9"/></svg>`
    },
    {
      name: "Dev-C++",
      description: "Fast, lightweight C and C++ integrated development environment with MinGW compiler",
      icon: "devcpp",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect width="24" height="24" rx="5.5" fill="#0052CC"/><text x="12" y="16" font-family="'JetBrains Mono', -apple-system, monospace" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle">C++</text><path d="M4 12l2-2m-2 2l2 2m16-4l-2 2m2-2l-2-2" stroke="#60A5FA" stroke-width="1.6" stroke-linecap="round"/></svg>`
    },
    {
      name: "Code::Blocks",
      description: "Free, open-source C/C++ IDE built to meet demanding programming course assignments",
      icon: "codeblocks",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5" fill="#E53935"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5" fill="#43A047"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5" fill="#1E88E5"/><rect x="13" y="13" width="7.5" height="7.5" rx="1.5" fill="#FDD835"/></svg>`
    },
    {
      name: "Arduino IDE",
      description: "Open-source physical computing IDE for microcontroller firmware, sensors & hardware prototyping",
      icon: "arduino-ide",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M8 8.5C5.8 8.5 4 10.1 4 12s1.8 3.5 4 3.5c1.8 0 3.3-1.1 3.8-2.6.1-.3.3-.3.4 0 .5 1.5 2 2.6 3.8 2.6 2.2 0 4-1.6 4-3.5s-1.8-3.5-4-3.5c-1.8 0-3.3 1.1-3.8 2.6-.1.3-.3.3-.4 0-.5-1.5-2-2.6-3.8-2.6z" stroke="#00979C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="6.2" y1="12" x2="9.2" y2="12" stroke="#00979C" stroke-width="1.8" stroke-linecap="round"/><line x1="14.8" y1="12" x2="17.8" y2="12" stroke="#00979C" stroke-width="1.8" stroke-linecap="round"/><line x1="16.3" y1="10.5" x2="16.3" y2="13.5" stroke="#00979C" stroke-width="1.8" stroke-linecap="round"/></svg>`
    },
    {
      name: "Blynk",
      description: "Low-code IoT cloud platform & mobile interface builder for connecting embedded hardware",
      icon: "blynk",
      svg: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect width="24" height="24" rx="6" fill="#24C9A7"/><path d="M7.5 6.5h4.5a2.8 2.8 0 0 1 2 4.7 3 3 0 0 1-2 4.8H7.5v-9.5z" fill="#0c4a40" opacity="0.15"/><path d="M8 7h4a2.5 2.5 0 0 1 0 5H8V7zm0 5h4.5a2.5 2.5 0 0 1 0 5H8v-5z" fill="#ffffff"/><circle cx="17.5" cy="7.5" r="1.6" fill="#ffffff"/><circle cx="18" cy="15.5" r="1.6" fill="#ffffff"/></svg>`
    }
  ],

  // --------------------------------------------------------------------------
  // 3. ACADEMIC PROJECTS (Academic Page)
  // Real Computer Science & Engineering coursework projects at BUBT
  // --------------------------------------------------------------------------
  academicProjects: [
    {
      id: "rent-easy",
      title: "Rent Easy — House and Roommate Finder",
      course: "Web Development & Database Systems",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      semester: "Academic Project • BUBT",
      role: "Web Developer & UI Designer",
      description: "A dedicated house and roommate finder web platform designed to streamline accommodation searches, property listings, and roommate matching for university students and urban residents with clean search filtering.",
      technologies: ["Web App", "React", "Vite", "Supabase", "JavaScript", "HTML5", "CSS3", "Node.js", "Resend", "Vercel"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "iot-safe-overtake",
      title: "IoT Safe Overtake Accident Prevention System for Buses & Trucks",
      course: "Internet of Things (IoT) & Embedded Systems",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
      semester: "Academic Project • BUBT",
      role: "IoT System Developer & Hardware Integrator",
      description: "With rapid transport growth, overtaking large vehicles with blind spots causes major collisions. This project introduces an IoT-based system to detect nearby vehicles in real-time, alert drivers instantly, and provide visual monitoring via a camera module, with cloud integration for intelligent data storage and scalability.",
      technologies: ["IoT", "Arduino", "Camera Module", "Ultrasonic Sensors", "Cloud Integration", "C++"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "unity-flappy-bird",
      title: "2D Flappy Bird Arcade Game Recreation Using Unity",
      course: "Game Development & Interactive Technologies",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="6"></rect></svg>`,
      semester: "Academic Project • BUBT",
      role: "Game Developer & C# Programmer",
      description: "Recreation of the popular Flappy Bird arcade game using Unity to master core 2D game development principles, including real-time physics, object movement, collision handling, sprite animations, and rendering mechanics.",
      technologies: ["Unity", "C#", "2D Physics", "Collision Handling", "Game Design"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "agri-equipment-rental",
      title: "Agriculture Equipment Rental Service (Web & Mobile Application)",
      course: "Software Engineering & Mobile Computing",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 20h10"></path><path d="M10 20c0-5.5-2.5-9.5-6-11 4.5 0 9 2.5 10 7"></path><path d="M14 20c0-3.5 1.5-6.5 4-8-3 0-6 1.5-7 5"></path></svg>`,
      semester: "B.Sc. CSE • BUBT",
      role: "Mobile & Web Frontend Contributor",
      description: "Developed as part of our B.Sc. in Computer Science & Engineering at BUBT. A dual Web and Mobile application engineered to make modern agricultural machinery accessible and affordable for local farmers, utilizing Flutter for mobile interfaces and Firebase for cloud data synchronization.",
      technologies: ["Flutter", "Firebase", "Dart", "Android", "Cloud Firestore"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "blood-bank-flutter",
      title: "Blood Bank Management System — Android Mobile App (Flutter)",
      course: "Mobile Application Development & Healthcare Informatics",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
      semester: "Academic Project • BUBT",
      role: "Flutter Mobile App Developer",
      description: "A portable hospital blood bank front-desk management Android application built with Flutter. Replaces handwritten donor logs with efficient binary records, recording full donor profiles (name, ID, age, blood type, contact) to ensure critical donor information is instantly accessible during emergency scenarios.",
      technologies: ["Flutter", "Dart", "Android", "Binary Data Storage", "Mobile UI"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "smart-food-trolley",
      title: "Microcontroller: The Smart Food Trolley Autonomous Robot",
      course: "Microprocessors, Microcontrollers & Robotics",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      semester: "Academic Project • BUBT",
      role: "Embedded Systems & Robotics Programmer",
      description: "An intelligent autonomous restaurant delivery robot powered by an Arduino Mega microcontroller programmed in C++. Utilizes IR sensors for line tracking, an ultrasonic sensor for obstacle avoidance, a 4x4 keypad for table dispatch, and an LDR sensor to detect tray status before autonomously returning to base.",
      technologies: ["Arduino Mega", "C++", "IR Line Sensors", "Ultrasonic Sensor", "4x4 Keypad", "LDR", "Robotics"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "blood-bank-csharp",
      title: "Blood Bank Management System Using C# (.NET)",
      course: "Object-Oriented Programming (.NET Framework)",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      semester: "Academic Project • BUBT",
      role: "Desktop Software Developer",
      description: "Automated desktop blood bank data-entry software developed in C# (.NET). Employs binary file storage to maintain hundreds of donor records with rapid retrieval, minimizing manual data collection and preventing human errors in hospital record-keeping.",
      technologies: ["C#", ".NET Framework", "Windows Forms", "Binary Data Storage", "OOP"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "blood-bank-cpp",
      title: "Blood Bank Management System Using C++",
      course: "Structured Programming Language (C++)",
      iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
      semester: "Academic Project • BUBT",
      role: "C++ Programmer & System Modeler",
      description: "Console-based high-performance data-entry software engineered in C++. Manages comprehensive donor registrations (ID, name, blood type, age, phone) with binary file handling to handle large datasets efficiently with fast querying capabilities.",
      technologies: ["C++", "Binary File I/O", "Data Structures", "Algorithmic Search"],
      linkedinUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
      githubUrl: "",
      demoUrl: ""
    }
  ],

  // --------------------------------------------------------------------------
  // 4. LEADERSHIP & EXTRACURRICULAR EXPERIENCE (Leadership & Activities Page)
  // --------------------------------------------------------------------------
  activities: [
    // ------------------------------------------------------------------------
    // A. INTERNSHIP & PROFESSIONAL EXPERIENCE
    // ------------------------------------------------------------------------
    {
      id: "exp-ilm-ai",
      category: "internship",
      categoryLabel: "Internship & Professional",
      title: "Graphic Design Intern",
      organization: "ILM AI LTD",
      location: "Remote • London Area, United Kingdom",
      date: "2024 – Present",
      badgeRole: "Design Intern",
      nodeIcon: "briefcase",
      bullets: [
        "Creative poster design for digital campaigns and brand marketing",
        "Crafted graphic assets and video-related creative materials for production"
      ],
      tags: ["Graphic Design", "Poster Design", "Brand Assets", "Video Creatives", "Remote UK"]
    },
    {
      id: "exp-flyrank-ai",
      category: "internship",
      categoryLabel: "Internship & Professional",
      title: "AI Intern",
      organization: "FlyRank AI",
      location: "Remote • Headquartered in Chicago, Illinois",
      date: "June – September 2026",
      badgeRole: "AI Intern",
      nodeIcon: "cpu",
      bullets: [
        "Contributed to AI search models, ranking evaluation, and data pipeline tasks",
        "Conducted dataset synthesis and workflow automation experiments"
      ],
      tags: ["Artificial Intelligence", "Model Evaluation", "Workflow Automation", "Remote USA"]
    },

    // ------------------------------------------------------------------------
    // B. LEADERSHIP & CLUB ACTIVITIES
    // ------------------------------------------------------------------------
    {
      id: "exp-basis-president",
      category: "leadership",
      categoryLabel: "Leadership & Club Activities",
      title: "President",
      organization: "BASIS Students’ Forum of BUBT Chapter Club",
      location: "BUBT, Dhaka",
      date: "2025 – 2026",
      badgeRole: "Chapter President",
      nodeIcon: "crown",
      bullets: [
        "Executive chapter leadership directing student tech initiatives and industry tie-ups",
        "Oversaw event operations, tech competitions, and professional workshops",
        "Managed executive committee teams, mentorship tracks, and member engagement"
      ],
      tags: ["Chapter Leadership", "Event Operations", "Team Management", "BASIS"]
    },
    {
      id: "exp-ieee-chair",
      category: "leadership",
      categoryLabel: "Leadership & Club Activities",
      title: "Chairperson",
      organization: "IEEE Computer Society BUBT Student Branch Chapter (IEEE CS BUBT SBC)",
      location: "BUBT, Dhaka",
      date: "2026 – 2027",
      badgeRole: "Chapter Chair",
      nodeIcon: "crown",
      bullets: [
        "Overall chapter leadership and strategic roadmap execution for IEEE CS BUBT SBC",
        "Spearheaded technical seminars, coding hackathons, and IEEE global student campaigns",
        "Coordinated student activities and cross-institutional academic collaborations"
      ],
      tags: ["Leadership", "Team Coordination", "Student Activities", "IEEE CS"]
    },
    {
      id: "exp-basis-convener",
      category: "leadership",
      categoryLabel: "Leadership & Club Activities",
      title: "Convener (BUBT Chapter)",
      organization: "BASIS Students' Forum",
      location: "BUBT, Dhaka",
      date: "2025 – 2026",
      badgeRole: "Chapter Convener",
      nodeIcon: "crown",
      bullets: [
        "Convened chapter steering committees and liaised directly with central BASIS leadership",
        "Coordinated national IT activations, seminar programs, and industry bridges"
      ],
      tags: ["Convener", "Industry Liaison", "Program Management", "BASIS"]
    },
    {
      id: "exp-basis-media-coord",
      category: "leadership",
      categoryLabel: "Leadership & Club Activities",
      title: "Media Team Coordinator",
      organization: "BASIS Students’ Forum of BUBT Chapter Club",
      location: "BUBT, Dhaka",
      date: "2024 – 2025",
      badgeRole: "Media Coordinator",
      nodeIcon: "award",
      bullets: [
        "Led media team coordination, content calendars, and brand visual guidelines",
        "Executed multi-channel visual communication across digital platforms and campus notice boards"
      ],
      tags: ["Media Team Coordination", "Visual Communication", "Brand Media", "Social Strategy"]
    },

    // ------------------------------------------------------------------------
    // C. GRAPHIC DESIGN & EVENT CONTRIBUTIONS
    // ------------------------------------------------------------------------
    {
      id: "exp-bdaio-2026-regional",
      category: "design",
      categoryLabel: "Graphic Design & Events",
      title: "Lead Designer",
      organization: "The 3rd Bangladesh Artificial Intelligence Olympiad 2026",
      location: "Dhaka Regional Round",
      date: "2026",
      badgeRole: "Lead Designer",
      nodeIcon: "palette",
      bullets: [
        "Headed complete visual branding for the regional Olympiad round",
        "Designed official stage backdrops, banners, certificates, crests, and promotional social collateral"
      ],
      tags: ["BdAIO 2026", "Stage Branding", "Certificate Design", "Print Media"]
    },
    {
      id: "exp-icpc-2025",
      category: "design",
      categoryLabel: "Graphic Design & Events",
      title: "Lead Designer",
      organization: "ICPC Asia West Continental Championship 2025",
      location: "Continental Championship",
      date: "2025",
      badgeRole: "Continental Lead Designer",
      nodeIcon: "trophy",
      bullets: [
        "Spearheaded visual design for the prestigious international programming championship",
        "Designed official participant ID cards, ribbons, tournament guidebooks, backdrops, and arena banners"
      ],
      tags: ["ICPC Asia West", "Lead Designer", "ID Cards & Ribbons", "Event Branding"]
    },
    {
      id: "exp-iupc-2025",
      category: "design",
      categoryLabel: "Graphic Design & Events",
      title: "Lead Designer",
      organization: "BUBT Inter-University Programming Contest (IUPC) 2025",
      location: "BUBT, Dhaka",
      date: "2025",
      badgeRole: "Contest Lead Designer",
      nodeIcon: "palette",
      bullets: [
        "Designed comprehensive visual branding kit for national contest teams and judges",
        "Crafted promotional posters, social media banners, event souvenirs, and apparel"
      ],
      tags: ["IUPC 2025", "Event Branding", "Apparel Design", "Posters"]
    },
    {
      id: "exp-bdaio-2026-national",
      category: "design",
      categoryLabel: "Graphic Design & Events",
      title: "Graphic Design Contributions",
      organization: "The 3rd Bangladesh Artificial Intelligence Olympiad 2026",
      location: "National Event",
      date: "2026",
      badgeRole: "Core Designer",
      nodeIcon: "palette",
      bullets: [
        "Designed national marketing creatives, promotional announcements, and social assets"
      ],
      tags: ["BdAIO 2026", "National Olympiad", "Digital Graphics", "Marketing Kits"]
    },
    {
      id: "exp-baps-2025",
      category: "design",
      categoryLabel: "Graphic Design & Events",
      title: "Lead Designer",
      organization: "BUBT BAPS National Camp 2025",
      location: "BUBT, Dhaka",
      date: "2025",
      badgeRole: "Camp Lead Designer",
      nodeIcon: "palette",
      bullets: [
        "Led creative direction for national programming camp organized with BAPS",
        "Designed official camp banners, participant t-shirts, handbook materials, and certificates"
      ],
      tags: ["BAPS National Camp", "Apparel Design", "Handbooks", "Print Media"]
    },
    {
      id: "exp-bdaio-2025",
      category: "design",
      categoryLabel: "Graphic Design & Events",
      title: "Lead Designer",
      organization: "The 3rd Bangladesh Artificial Intelligence Olympiad 2025",
      location: "Dhaka, Bangladesh",
      date: "2025",
      badgeRole: "Lead Designer",
      nodeIcon: "palette",
      bullets: [
        "Crafted Olympiad brand guidelines, digital promos, and registration collateral"
      ],
      tags: ["BdAIO 2025", "Brand Guidelines", "Visual Identity", "Certificates"]
    },

    // ------------------------------------------------------------------------
    // D. VOLUNTEERING & EVENT MANAGEMENT
    // ------------------------------------------------------------------------
    {
      id: "exp-icai-2026-chair",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Presentation Program Chair",
      organization: "International Congress on Artificial Intelligence (ICAI) 2026",
      location: "International Conference",
      date: "2026",
      badgeRole: "Program Chair",
      nodeIcon: "award",
      bullets: [
        "Chaired presentation sessions and scheduled technical paper tracks",
        "Coordinated research presentation sessions and keynote speaker flow"
      ],
      tags: ["ICAI 2026", "Program Chair", "AI Research", "Conference Leadership"]
    },
    {
      id: "exp-fastrobox-2026",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Registration Chair",
      organization: "FastRoboX 1.0 — National Robotics Competition 2026",
      location: "National Robotics Arena",
      date: "November 13, 2026",
      badgeRole: "Registration Chair",
      nodeIcon: "award",
      bullets: [
        "Supervised national competitor registration desk, credential verification, and team intake",
        "Managed participant team queues, event kit distribution, and track rosters"
      ],
      tags: ["FastRoboX 1.0", "Robotics Competition", "Registration Chair", "Team Verification"]
    },
    {
      id: "exp-nasa-spaceapps-2026",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Volunteer",
      organization: "NASA Space Apps Challenge Bangladesh 2026",
      location: "Dhaka Regional / National",
      date: "2026",
      badgeRole: "NASA Volunteer",
      nodeIcon: "volunteer",
      bullets: [
        "Assisted hackathon team coordination, mentor support, and venue logistics",
        "Supported participants throughout the intensive 48-hour global challenge"
      ],
      tags: ["NASA Space Apps", "Hackathon Logistics", "Volunteer", "Global Challenge"]
    },
    {
      id: "exp-infinity-buildfest-2026",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Club Representative",
      organization: "Infinity AI BuildFest 2026",
      location: "Dhaka, Bangladesh",
      date: "2026",
      badgeRole: "Club Representative",
      nodeIcon: "volunteer",
      bullets: [
        "Represented university club community and facilitated student team collaboration"
      ],
      tags: ["Infinity AI", "BuildFest", "Club Rep", "AI Hackathon"]
    },
    {
      id: "exp-icai-2025-ambassador",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Ambassador",
      organization: "International Congress on Artificial Intelligence-ICAI 2025",
      location: "International Conference",
      date: "2025",
      badgeRole: "Ambassador",
      nodeIcon: "award",
      bullets: [
        "Promoted research participation and student engagement across regional universities"
      ],
      tags: ["ICAI 2025", "Ambassador", "AI Conference", "Student Outreach"]
    },
    {
      id: "exp-tech-fusion-fest-2025",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Event Organizer",
      organization: "Tech Fusion Fest — BASIS Students' Forum BUBT",
      location: "BUBT, Dhaka",
      date: "November 17, 18, 19, 2025",
      badgeRole: "Core Organizer",
      nodeIcon: "award",
      bullets: [
        "Organized 3-day multi-segment tech festival featuring contests, workshops, and exhibitions",
        "Coordinated venue operations, volunteer rosters, and guest speaker management"
      ],
      tags: ["Tech Fusion Fest", "BASIS", "Event Organizer", "Festival Operations"]
    },
    {
      id: "exp-idea-2025",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Volunteer",
      organization: "Innovation Design and Entrepreneurship Academy (iDEA)",
      location: "ICT Division Bangladesh",
      date: "July 2025",
      badgeRole: "iDEA Volunteer",
      nodeIcon: "volunteer",
      bullets: [
        "Supported startup pitching sessions, entrepreneurship mentorship, and event operations"
      ],
      tags: ["iDEA Project", "ICT Division", "Startup Ecosystem", "Volunteer"]
    },
    {
      id: "exp-robotech-5th-2025",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Executive Member",
      organization: "5th International Robo Tech Olympiad 2025",
      location: "National Competition",
      date: "2025",
      badgeRole: "Executive Member",
      nodeIcon: "award",
      bullets: [
        "Contributed to competition rules execution, arena setups, and contestant coordination"
      ],
      tags: ["Robo Tech Olympiad", "Robotics", "Executive Member"]
    },
    {
      id: "exp-icrtcs-2025",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Ambassador",
      organization: "4th International Congress on Recent Trends in Computer Science",
      location: "Academic Conference",
      date: "March 2025",
      badgeRole: "Ambassador",
      nodeIcon: "award",
      bullets: [
        "Facilitated student paper submissions and campus outreach for research tracks"
      ],
      tags: ["ICRTCS 2025", "Computer Science", "Ambassador"]
    },
    {
      id: "exp-ict-olympiad-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Campus Ambassador & Gala Round Volunteer",
      organization: "ICT Olympiad Bangladesh",
      location: "National / Gala Round",
      date: "2024",
      badgeRole: "Campus Ambassador",
      nodeIcon: "volunteer",
      bullets: [
        "Promoted ICT literacy on campus and served as event volunteer during the grand Gala Round"
      ],
      tags: ["ICT Olympiad", "Campus Ambassador", "Gala Round Volunteer"]
    },
    {
      id: "exp-robotech-4th-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Volunteer",
      organization: "4th International Robo Tech Olympiad 2024",
      location: "National Event",
      date: "2024",
      badgeRole: "Volunteer",
      nodeIcon: "volunteer",
      bullets: [
        "Assisted arena setups, bot inspections, and participant queues"
      ],
      tags: ["Robo Tech 2024", "Robotics Arena", "Volunteer"]
    },
    {
      id: "exp-ieee-ps-day-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Brand Ambassador",
      organization: "IEEE Photonics Society (IEEE PS DAY 2024)",
      location: "Bangladesh Section",
      date: "2024",
      badgeRole: "Brand Ambassador",
      nodeIcon: "award",
      bullets: [
        "Promoted IEEE Photonics Society Day initiatives and member awareness"
      ],
      tags: ["IEEE PS DAY", "Brand Ambassador", "Outreach"]
    },
    {
      id: "exp-bdapps-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Event Organizer & Media Team",
      organization: "Monetize Your Apps and Ideas in bdapps",
      location: "BUBT, Dhaka",
      date: "2024",
      badgeRole: "Organizer & Media",
      nodeIcon: "award",
      bullets: [
        "Handled live event branding, visual media promotion, and participant check-in"
      ],
      tags: ["bdapps", "App Monetization", "Event Media"]
    },
    {
      id: "exp-leader-of-year-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Event Organizer & Graphic Designer",
      organization: "BASIS Students' Forum of BUBT Chapter Club",
      location: "BUBT, Dhaka",
      date: "May 2024",
      badgeRole: "Organizer & Designer",
      nodeIcon: "palette",
      bullets: [
        "Designed promotional creatives, awards branding, and managed stage ceremonies for Leader of The Year"
      ],
      tags: ["Leader of The Year", "BASIS", "Award Ceremony", "Branding"]
    },
    {
      id: "exp-software-pitching-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Volunteer in the Media Team",
      organization: "Software Development & Idea Pitching — BASIS BUBT",
      location: "BUBT, Dhaka",
      date: "November 2024",
      badgeRole: "Media Volunteer",
      nodeIcon: "volunteer",
      bullets: [
        "Managed photography coordination, social media updates, and pitch room transitions"
      ],
      tags: ["Software Development", "Idea Pitching", "Media Volunteer"]
    },
    {
      id: "exp-nhspc-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Volunteer",
      organization: "National High School Programming Contest (NHSPC)",
      location: "Regional / National",
      date: "2024",
      badgeRole: "Contest Volunteer",
      nodeIcon: "volunteer",
      bullets: [
        "Supported student contestant registrations, lab seating, and contest supervision"
      ],
      tags: ["NHSPC", "Competitive Programming", "Volunteer"]
    },
    {
      id: "exp-future-tech-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Volunteer",
      organization: "Shaping the Future with Tech : Exploring the ICT World",
      location: "BUBT, Dhaka",
      date: "2024",
      badgeRole: "Seminar Volunteer",
      nodeIcon: "volunteer",
      bullets: [
        "Assisted guest speaker welcoming, venue audio-visual logistics, and attendee registration"
      ],
      tags: ["ICT Seminar", "Future with Tech", "Volunteer"]
    },
    {
      id: "exp-class-rep-2024",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Class Representative",
      organization: "Team Matrix - Elite Hackers (BUBT CSE)",
      location: "BUBT, Dhaka",
      date: "February 2024",
      badgeRole: "Class Representative",
      nodeIcon: "award",
      bullets: [
        "Represented student peers for academic scheduling, teacher liaison, and study group coordination"
      ],
      tags: ["Class Representative", "Student Advocacy", "Team Matrix"]
    },
    {
      id: "exp-radswa-2021",
      category: "volunteering",
      categoryLabel: "Volunteering & Event Management",
      title: "Campus Ambassador",
      organization: "Rangpur Division Student Welfare Association (RaDSWA)",
      location: "Dhaka / Rangpur",
      date: "2021",
      badgeRole: "Campus Ambassador",
      nodeIcon: "award",
      bullets: [
        "Supported student community welfare initiatives and regional student networking"
      ],
      tags: ["RaDSWA", "Community Welfare", "Ambassador"]
    }
  ],

  // --------------------------------------------------------------------------
  // 5. CERTIFICATES (Certificates & Achievements Page)
  // --------------------------------------------------------------------------
  certificates: [
    // === 2026 CERTIFICATES ===
    {
      id: "cert-anthropic-ai-students",
      title: "Certificate of completion: AI Fluency for students",
      category: "Professional & Technical Skills",
      issuer: "Anthropic",
      date: "October 2026",
      description: "Official credential awarded by Anthropic for mastering AI Fluency for students, applying large language models ethically for accelerated learning, research, and project building.",
      credentialId: "czbfu4c5sk4x",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Claude AI", "Prompt Engineering", "AI Ethics", "Study Automation"],
      image: "assets/images/certificates/cert-anthropic-ai-students.svg"
    },
    {
      id: "cert-anthropic-claude-cowork",
      title: "Certificate of completion: Introduction to Claude Cowork",
      category: "Professional & Technical Skills",
      issuer: "Anthropic",
      date: "September 2026",
      description: "Certified credential from Anthropic for mastering Claude Cowork paradigms, AI-assisted productivity workflows, and collaborative prompt systems.",
      credentialId: "8rkka4wwit8y",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Claude AI", "Collaborative AI", "Workflow Automation", "Prompt Engineering"],
      image: "assets/images/certificates/cert-anthropic-claude-cowork.svg"
    },
    {
      id: "cert-anthropic-ai-limits",
      title: "Certificate of completion: AI Capabilities and Limitations",
      category: "Professional & Technical Skills",
      issuer: "Anthropic",
      date: "September 2026",
      description: "Professional credential issued by Anthropic Academy for comprehensive understanding of generative AI capabilities, hallucination mitigation, ethical constraints, and model limitations.",
      credentialId: "yxt9ra3amis5",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["AI Safety", "Capabilities Assessment", "Frontier AI", "LLM Evaluation"],
      image: "assets/images/certificates/cert-anthropic-ai-limits.svg"
    },
    {
      id: "cert-anthropic-claude-101",
      title: "Certificate of completion: Claude 101",
      category: "Professional & Technical Skills",
      issuer: "Anthropic",
      date: "September 2026",
      description: "Official credential awarded by Anthropic for the successful completion of Claude 101, demonstrating verified competencies in Claude architecture, prompt engineering, and conversational AI solutions.",
      credentialId: "oy44vcdaoiut",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Claude AI", "Prompt Engineering", "Context Windows", "Generative AI"],
      image: "assets/images/certificates/cert-anthropic-claude-101.svg"
    },
    {
      id: "cert-adbi-cybersecurity",
      title: "Cyber Security",
      category: "Professional & Technical Skills",
      issuer: "Asian Development Bank Institute (ADBI)",
      date: "September 2026",
      description: "Certificate of Completion from Asian Development Bank Institute (ADBI) focusing on cybersecurity principles, data transmission risks in electronic commerce, and organizational digital defense.",
      credentialId: "ADBI-CYBER-2026",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Cybersecurity", "Network Security", "E-Commerce Security", "Data Protection"],
      image: "assets/images/certificates/cert-adbi-cybersecurity.svg"
    },
    {
      id: "cert-icai-2026-chair",
      title: "Presentation Program Chair at the 2nd International Congress on Artificial Intelligence (ICAI 2026)",
      category: "Leadership & Volunteering",
      issuer: "International Congress on Artificial Intelligence-ICAI",
      date: "August 2026",
      description: "Honored as Presentation Program Chair at the 2nd International Congress on Artificial Intelligence (ICAI 2026), leading session coordination, stage operations, and international speaker moderation.",
      credentialId: "ICAI-CHAIR-2026",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Program Chair", "Conference Leadership", "Presentation Operations", "Academic Management"],
      image: "assets/images/certificates/cert-icai-2026-chair.svg"
    },
    {
      id: "cert-anthropic-ai-fluency",
      title: "Certificate of Completion: AI Fluency Framework & Foundations",
      category: "Professional & Technical Skills",
      issuer: "Anthropic",
      date: "August 2026",
      description: "Professional credential awarded by Anthropic Academy for mastering the AI Fluency Framework & Foundations curriculum, human-AI collaboration, and large language model architectures.",
      credentialId: "f99zhybg6ioz",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Anthropic Claude", "Prompt Engineering", "AI Safety", "LLM Frameworks"],
      image: "assets/images/certificates/cert-anthropic-ai-fluency.svg"
    },
    {
      id: "cert-cse-pitching-participate",
      title: "Participate at Software Development & Idea Pitching",
      category: "Competitions & Tech Olympiads",
      issuer: "Department of CSE, BUBT & BASIS Students' Forum BUBT Chapter",
      date: "August 2026",
      description: "Certificate of Participation in the Software Development & Idea Pitching competition organized by the Dept. of CSE, BUBT and BASIS Students' Forum.",
      credentialId: "BUBT-CSE-PITCH-PART-2026",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Software Development", "Idea Pitching", "System Design", "Technical Presentation"],
      image: "assets/images/certificates/cert-cse-pitching-participate.svg"
    },
    {
      id: "cert-bdaio-2026",
      title: "The 3rd Bangladesh Artificial Intelligence Olympiad 2026",
      category: "Competitions & Tech Olympiads",
      issuer: "Bangladesh Open Source Network (BdOSN)",
      date: "July 2026",
      description: "Certificate of Appreciation for valuable volunteer and graphic design contributions to the 3rd Bangladesh Artificial Intelligence Olympiad (BdAIO 2026) organized by BdOSN.",
      credentialId: "BDOSN-BDAIO-2026",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Volunteering", "Graphic Design", "AI Olympiad Operations", "Event Branding"],
      image: "assets/images/certificates/cert-bdaio-2026.svg"
    },

    // === 2025 CERTIFICATES ===
    {
      id: "cert-bubt-baps-camp-2025",
      title: "BUBT BAPS National Programming Camp 2025",
      category: "Competitive Programming",
      issuer: "Bangladesh University of Business and Technology (BUBT)",
      date: "September 2025",
      description: "Certificate of Recognition for serving as Volunteer at BUBT - BAPS National Programming Camp 2025, coordinating algorithmic workshops and national contest sessions.",
      credentialId: "BUBT-BAPS-CAMP-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Competitive Programming", "Volunteering", "Camp Coordination", "Algorithmic Mentorship"],
      image: "assets/images/certificates/cert-bubt-baps-camp-2025.svg"
    },
    {
      id: "cert-icai-ambassador",
      title: "Ambassador — International Congress on Artificial Intelligence (ICAI 2025)",
      category: "Leadership & Volunteering",
      issuer: "International Congress on Artificial Intelligence-ICAI",
      date: "September 2025",
      description: "Appointed Ambassador representing BUBT at the International Congress on Artificial Intelligence (ICAI 2025), promoting AI research, workshops, and academic collaboration.",
      credentialId: "ICAI-AMB-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["AI Advocacy", "Conference Ambassador", "Academic Networking", "Leadership"],
      image: "assets/images/certificates/cert-icai-ambassador.svg"
    },
    {
      id: "cert-ict-division-activation",
      title: "University Activation Programme 2025",
      category: "Leadership & Volunteering",
      issuer: "ICT Division (Government of the People's Republic of Bangladesh)",
      date: "July 2025",
      description: "Certificate of recognition for active participation, volunteering, and team management during the national University Activation Programme 2025 organized by the ICT Division.",
      credentialId: "ICT-DIV-ACT-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Volunteering", "Team Management", "Government Outreach", "Youth Leadership"],
      image: "assets/images/certificates/cert-ict-division-activation.svg"
    },
    {
      id: "cert-robotech-5th-2025",
      title: "Executive Member at 5th International Robo Tech Olympiad 2025",
      category: "Competitions & Tech Olympiads",
      issuer: "Robo Tech valley",
      date: "June 2025",
      description: "Certificate of Appreciation awarded for leadership and operational coordination as an Executive Member at the 5th International Robo Tech Olympiad 2025.",
      credentialId: "RTO-EXEC-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Robotics", "Team Management", "Event Organization", "Volunteering"],
      image: "assets/images/certificates/cert-robotech-5th-2025.svg"
    },
    {
      id: "cert-basis-president",
      title: "President at 5th Executive Committee (2024–2025)",
      category: "Leadership & Volunteering",
      issuer: "BASIS Students' Forum of BUBT Chapter Club",
      date: "May 2025",
      description: "Highest executive recognition certificate for serving as President of the 5th Executive Committee of BASIS Students' Forum BUBT Chapter, spearheading university-wide tech initiatives, national workshops, and youth leadership.",
      credentialId: "BASIS-PRESIDENT-5TH-EC",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Team Leadership", "Executive Management", "Strategic Planning", "Club Operations", "Public Relations"],
      image: "assets/images/certificates/cert-basis-president.svg"
    },
    {
      id: "cert-ict-olympiad-ambassador",
      title: "ICT OLYMPIAD SEASON 2 AMBASSADOR",
      category: "Leadership & Volunteering",
      issuer: "ICT Olympiad Bangladesh",
      date: "May 2025",
      description: "Official Ambassador recognition certificate representing ICT Olympiad Bangladesh Season 2 across campus, inspiring students to explore technical innovation.",
      credentialId: "ICT-OB-AMB-S2-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Campus Ambassador", "Public Relations", "Youth Empowerment", "Student Leadership"],
      image: "assets/images/certificates/cert-ict-olympiad-ambassador.svg"
    },
    {
      id: "cert-icrcs-2025-ambassador",
      title: "Ambassador at 4th International Congress on Recent Trends in Computer Science",
      category: "Leadership & Volunteering",
      issuer: "International Congress on Recent Trends in Computer Science (ICRCS)",
      date: "May 2025",
      description: "Appointed Ambassador representing Bangladesh University of Business and Technology (BUBT) at the 4th International Congress on Recent Trends in Computer Science (ICRCS 2025).",
      credentialId: "ICRCS-AMB-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Conference Ambassador", "Academic Networking", "Research Outreach", "Public Speaking"],
      image: "assets/images/certificates/cert-icrcs-2025-ambassador.svg"
    },
    {
      id: "cert-ict-olympiad-gala-volunteer",
      title: "ICT OLYMPIAD SEASON 2 Volunteer at Grand Finale Gala Round",
      category: "Leadership & Volunteering",
      issuer: "ICT Olympiad Bangladesh",
      date: "May 2025",
      description: "Certificate of Appreciation for dedicated volunteering service during the Grand Finale Gala Round of ICT Olympiad Bangladesh Season 2.",
      credentialId: "ICT-OB-GALA-VOL-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Volunteering", "Event Logistics", "Stage Management", "Operations Coordination"],
      image: "assets/images/certificates/cert-ict-olympiad-gala-volunteer.svg"
    },
    {
      id: "cert-shaping-future-tech",
      title: "Volunteer — Shaping the Future with Tech : Exploring the ICT World",
      category: "Leadership & Volunteering",
      issuer: "ICT Olympiad Bangladesh & BASIS Students' Forum BUBT Chapter",
      date: "February 2025",
      description: "Volunteer recognition for successfully organizing the high-impact seminar 'Shaping the Future with Tech: Exploring the ICT World' at BUBT.",
      credentialId: "ICT-OB-SEMINAR-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Event Organizing", "Volunteering", "Community Engagement", "Tech Outreach"],
      image: "assets/images/certificates/cert-shaping-future-tech.svg"
    },
    {
      id: "cert-bubt-ipc-2025",
      title: "BUBT Inter University Programming Contest 2025",
      category: "Competitive Programming",
      issuer: "Department of CSE, BUBT",
      date: "January 2025",
      description: "Certificate of Appreciation awarded by the Department of CSE, BUBT for dedicated volunteerism, branding, and graphic design coordination at the BUBT Inter University Programming Contest 2025.",
      credentialId: "BUBT-IUPC-VOL-2025",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Volunteering", "Graphic Design", "Competitive Programming", "Event Coordination"],
      image: "assets/images/certificates/cert-bubt-ipc-2025.svg"
    },

    // === 2024 CERTIFICATES ===
    {
      id: "cert-software-pitching",
      title: "Student Volunteer (Media Team) — Software Development & Idea Pitching",
      category: "Leadership & Volunteering",
      issuer: "Dept. of CSE, BUBT & BASIS Students' Forum BUBT Chapter",
      date: "December 2024",
      description: "Certificate of Appreciation recognizing media team leadership, visual communication collateral, and event photography support during the department showcase.",
      credentialId: "BUBT-CSE-PITCH-2024",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Media Team Coordination", "Visual Communication", "Idea Pitching Support", "Photography"],
      image: "assets/images/certificates/cert-software-pitching.svg"
    },
    {
      id: "cert-bdapps",
      title: "Media Coordinator & Event Organizer — Workshop on \"Monetize Your Apps and Ideas in bdapps\"",
      category: "Leadership & Volunteering",
      issuer: "BASIS Students' Forum of BUBT Chapter Club",
      date: "November 2024",
      description: "Certificate of Appreciation for orchestrating visual branding, participant coordination, and event operations for the national bdapps developer workshop.",
      credentialId: "BASIS-BDAPPS-ORG-2024",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Event Organization", "Media Coordination", "bdapps Monetization", "Visual Design"],
      image: "assets/images/certificates/cert-bdapps.svg"
    },
    {
      id: "cert-esports",
      title: "Volunteer — BUBT Intra-University Esports Tournament 2024",
      category: "Leadership & Volunteering",
      issuer: "BUBT & Gamers Community of BUBT",
      date: "November 2024",
      description: "Certificate of Appreciation for dedicated service in technical network setups, streaming management, and tournament player coordination.",
      credentialId: "BUBT-ESPORTS-2024",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Esports Coordination", "Stream Operations", "Tournament Management", "Team Logistics"],
      image: "assets/images/certificates/cert-esports.svg"
    },
    {
      id: "cert-icpc-2024",
      title: "ICPC 2024 Asia Dhaka Regional Site Preliminary Contest",
      category: "Competitive Programming",
      issuer: "ICPC - International Collegiate Programming Contest",
      date: "October 2024",
      description: "Honorable Mention credential awarded for successfully competing in the 2024 ICPC Asia Dhaka Regional Preliminary Contest representing BUBT.",
      credentialId: "ICPC-2024-BUBT",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Problem Solving", "Competitive Programming", "C++", "Algorithms"],
      image: "assets/images/certificates/cert-icpc-2024.svg"
    },
    {
      id: "cert-robotech",
      title: "4th International Robo Tech Olympiad 2024",
      category: "Competitions & Tech Olympiads",
      issuer: "Robo Tech Valley",
      date: "October 2024",
      description: "Official certificate of appreciation awarded for dedicated technical volunteerism, arena logistics, and team coordination at the 4th International Robo Tech Olympiad.",
      credentialId: "RTO-VOL-2024-DHAKA",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Robotics", "Event Operations", "Organization Skills", "Team Coordination"],
      image: "assets/images/certificates/cert-robotech.svg"
    },
    {
      id: "cert-pes-ambassador",
      title: "IEEE PES Day Brand Ambassador 2024",
      category: "Leadership & Volunteering",
      issuer: "IEEE Power & Energy Society Region 10 (Asia Pacific)",
      date: "June 2024",
      description: "Certificate of Recognition awarded on behalf of IEEE PES Region 10 for exemplary contributions, outreach, and advocacy as an official IEEE PES Day Ambassador.",
      credentialId: "IEEE-PES-DAY-AMB-2024",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Brand Ambassadorship", "Community Engagement", "Social Outreach", "Public Relations"],
      image: "assets/images/certificates/cert-pes-ambassador.svg"
    },
    {
      id: "cert-leader-year",
      title: "Volunteer & Recognition — \"Leader of The Year\"",
      category: "Leadership & Volunteering",
      issuer: "BASIS Students' Forum of BUBT Chapter Club",
      date: "May 2024",
      description: "Conferred with the prestigious Leader of The Year certificate for dedicated executive volunteerism, chapter leadership, and operational team management.",
      credentialId: "BASIS-LOY-2024",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Team Leadership", "Logistics Management", "Event Operations", "Public Speaking"],
      image: "assets/images/certificates/cert-leader-year.svg"
    },
    {
      id: "cert-basis-media-coord",
      title: "Media Team Coordinator — 4th Executive Committee (2024–2025)",
      category: "Leadership & Volunteering",
      issuer: "BASIS Students' Forum of BUBT Chapter Club",
      date: "May 2024",
      description: "Official recognition as Media Team Coordinator in the 4th Executive Committee of BASIS Students' Forum BUBT Chapter, leading digital campaigns, media production, and team communications.",
      credentialId: "BASIS-MEDIA-COORD-2024",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Team Coordination", "Team Management", "Media Production", "Visual Branding"],
      image: "assets/images/certificates/cert-basis-media-coord.svg"
    },
    {
      id: "cert-ieee-pes-ppt",
      title: "Competition of PowerPoint Presentation — 2nd Place",
      category: "Competitions & Tech Olympiads",
      issuer: "IEEE PES BUBT Student Branch Chapter",
      date: "April 2024",
      description: "Secured 2nd Place in the competitive technical PowerPoint presentation competition organized jointly by IEEE BUBT Student Branch and IEEE PES BUBT SBC.",
      credentialId: "IEEE-PES-PPT-2ND-2024",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Microsoft PowerPoint", "Technical Presentation", "Visual Design", "Public Speaking"],
      image: "assets/images/certificates/cert-ieee-pes-ppt.svg"
    },

    // === 2023 & 2022 CERTIFICATES ===
    {
      id: "cert-icpc-2023",
      title: "ICPC 2023 Asia Dhaka Regional Site Online Preliminary Contest",
      category: "Competitive Programming",
      issuer: "ICPC - International Collegiate Programming Contest",
      date: "October 2023",
      description: "Honorable Mention credential awarded for successfully competing in the ICPC Asia Dhaka Regional Online Preliminary Contest representing BUBT.",
      credentialId: "ICPC-2023-BUBT",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Problem Solving", "Competitive Programming", "C++", "Data Structures"],
      image: "assets/images/certificates/cert-icpc-2023.svg"
    },
    {
      id: "cert-gp-online-safety",
      title: "Online Safety & Cybersecurity Awareness",
      category: "Professional & Technical Skills",
      issuer: "Grameenphone Academy",
      date: "October 2023",
      description: "Certificate of Excellence earned for comprehensive mastery of online safety protocols, cyber hygiene, digital privacy policies, and web risk mitigation.",
      credentialId: "GP-ACAD-SAFETY-2023",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Cybersecurity Awareness", "Online Safety", "Digital Privacy", "Data Protection"],
      image: "assets/images/certificates/cert-online-safety.svg"
    },
    {
      id: "cert-bubt-ipc-2022",
      title: "BUBT Inter-University Programming Contest 2022",
      category: "Competitive Programming",
      issuer: "BUBT IT Club",
      date: "2023",
      description: "Official credential awarded at the university-wide competitive programming tournament showcasing algorithmic optimization and speed problem solving.",
      credentialId: "CRT-2023-F-192",
      credentialUrl: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/details/certifications/",
      skills: ["Algorithms", "Problem Solving", "C++", "Data Structures"],
      image: "assets/images/certificates/cert-bubt-ipc-2022.svg"
    }
  ],

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // 6. ACHIEVEMENTS & AWARDS (Certificates & Achievements Page)
  // Moments from competitive programming stages, university honors, and verified certificates
  // --------------------------------------------------------------------------
  achievements: [
    {
      id: "ach-1",
      title: "Proud to Secure 4th Position at Science Fest 2020",
      categoryTag: "SCIENCE & INNOVATION",
      date: "2020",
      year: "2020",
      organization: "Cantonment Public School and College (BUSMS)",
      location: "Kholahati, Dinajpur",
      description: "Honored to secure 4th position at the Annual Science & Innovation Fair 2020 among top student innovators, presenting practical science project demonstrations and technical exhibits.",
      image: "assets/images/achievements/ach-1.jpg",
      iconSvg: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
    },
    {
      id: "ach-2",
      title: "Best Volunteer Award — 4th International Robo Tech Olympiad",
      categoryTag: "VOLUNTEER & LEADERSHIP",
      date: "2024",
      year: "2024",
      organization: "4th International Robo Tech Olympiad 2024",
      location: "Robo Tech Olympiad Secretariat",
      description: "Conferred the prestigious Best Volunteer crest for exemplary leadership, event operations management, and technical team facilitation at the 4th International Robo Tech Olympiad.",
      image: "assets/images/achievements/ach-2.jpg",
      iconSvg: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7"/><path d="M14 14.66V17c0 .55.45 1 1 1h2"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`
    },
    {
      id: "ach-3",
      title: "IEEE PES BUBT Student Branch Chapter — 2nd Place",
      categoryTag: "COMPETITION & RESEARCH",
      date: "2024",
      year: "2024",
      organization: "IEEE Power & Energy Society (PES) BUBT SBC",
      location: "BUBT International Conference Hall",
      description: "Secured 2nd Place in the technical competition organized by IEEE PES BUBT Student Branch Chapter, receiving the trophy and honors at the official prize-giving ceremony.",
      image: "assets/images/achievements/ach-3.jpg",
      iconSvg: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`
    },
    {
      id: "ach-4",
      title: "Farewell & Recognition — 3rd Executive Committee",
      categoryTag: "EXECUTIVE LEADERSHIP",
      date: "2024",
      year: "2024",
      organization: "BASIS Students' Forum BUBT Chapter",
      location: "BUBT International Conference Hall",
      description: "Honored with a recognition crest at the Annual General Meeting (AGM) & Farewell Ceremony for dedicated service, event management, and leadership contributions as part of the 3rd Executive Committee.",
      image: "assets/images/achievements/ach-4.jpg",
      iconSvg: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    }
  ],

  // --------------------------------------------------------------------------
  // 7. FOOTER CONFIGURATION (All Pages)
  // Edit brand info, navigation, quick links, icons, and bottom bar in one place
  // --------------------------------------------------------------------------
  footer: {
    brand: {
      name: "Masudur Rahman Nirob",
      badgeLetter: "N",
      role: "GRAPHIC DESIGNER & CS STUDENT",
      bio: "Graphic designer with a Computer Science foundation at BUBT. Turning ideas into high-impact visuals, brand identities, and clean interfaces that get results."
    },
    navigation: {
      title: "Navigation",
      links: [
        { label: "Home", url: "index.html" },
        { label: "Academic", url: "academic.html" },
        { label: "Leadership & Activities", url: "leadership.html" },
        { label: "Graphic Design", url: "design.html" },
        { label: "Certificates & Achievements", url: "certificates.html" },
        { label: "Contact", url: "contact.html" }
      ]
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        {
          label: "Download CV",
          url: "assets/cv/Nirob_CV.pdf",
          download: "Nirob_CV.pdf",
          isExternal: false,
          iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
        },
        {
          label: "LinkedIn Profile",
          url: "https://www.linkedin.com/in/masudur-rahman-nirob-263aaa265/",
          isExternal: true,
          iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
        },
        {
          label: "Behance Portfolio",
          url: "https://www.behance.net/mrnirob51",
          isExternal: true,
          iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
        },
        {
          label: "GitHub Profile",
          url: "https://github.com/nirob5151",
          isExternal: true,
          iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
        },
        {
          label: "Facebook Profile",
          url: "https://www.facebook.com/mdmr.nirob.3",
          isExternal: true,
          iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
        }
      ]
    },
    bottomBar: {
      copyright: "© 2026 Masudur Rahman Nirob. All rights reserved.",
      builtWith: "Built with Next.js & TypeScript",
      backToTopText: "Back to top"
    }
  }
};

// Make data globally accessible
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
