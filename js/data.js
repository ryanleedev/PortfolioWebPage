/**
 * data.js — All portfolio content data
 */

/* ── TYPING ANIMATION STRINGS ─────────────────── */
export const TYPING_EN = [
  'IT Specialist.',
  'Full Stack Developer.',
  'Big Data Engineer.',
  'Former Navy.',
  'Problem Solver.',
  'Project Manager.',
];

export const TYPING_KO = [
  'IT 전문가.',
  '풀스택 개발자.',
  '빅데이터 엔지니어.',
  '해군 출신.',
  '문제 해결사.',
  '프로젝트 매니저.',
];

/* ── SKILLS ───────────────────────────────────── */
export const SKILLS = [
  {
    name: 'Python / Java',
    pct: 95,
    tags: ['ML', 'pandas', 'OpenCV'],
    projs: [
      { n: 'Alleyway Accident Prevention', d: 'EDA on 7,478 accident records with pandas/geopandas + pydeck GIS visualization.' },
      { n: 'Object Detection (MOG2)', d: 'OpenCV background subtraction for real-time intersection monitoring.' },
    ],
  },
  {
    name: 'JavaScript / React',
    pct: 85,
    tags: ['React', 'Node.js', 'REST'],
    projs: [
      { n: 'CRUD Forum App', d: 'Full-stack forum with Node.js + Express. Live on Vercel.' },
      { n: 'Bootstrap UI', d: 'Responsive multi-page layout project (Lab 3).' },
    ],
  },
  {
    name: 'Machine Learning / GIS',
    pct: 90,
    tags: ['MOG2', 'GIS', 'scikit-learn'],
    projs: [
      { n: 'MOG2 Object Tracking', d: 'OpenCV-based real-time object detection at Seoul alley intersections.' },
    ],
  },
  {
    name: 'Genero',
    pct: 88,
    tags: ['OOP', 'Agile', 'Spring'],
    projs: [
      { n: 'Record Management System', d: 'RMS for U.S. police agencies at Versaterm. Built in Agile/Sprint environment.' },
    ],
  },
  {
    name: 'SQL / Database Design',
    pct: 90,
    tags: ['PostgreSQL', 'MySQL', 'Schema'],
    projs: [
      { n: 'RMS for U.S. police agencies Database', d: 'Schema design and query optimisation for police record management.' },
    ],
  },
  {
    name: 'Linux & Network Admin',
    pct: 85,
    tags: ['Ubuntu', 'Servers', 'ILS'],
    projs: [
      { n: 'Library IT Infrastructure', d: 'Full server, workstation, ILS, and network management at Halton Hills Library.' },
    ],
  },
];

/* ── EXPERIENCE TIMELINE ──────────────────────── */
export const TIMELINE = [
  {
    p: 'Sep 2024 — Present',
    r: 'IT Specialist',
    c: 'Halton Hills Public Library',
    b: 'Current',
    l: 'Georgetown, ON 🇨🇦',
    canada: true,
    bl: [
      'Oversee servers, workstations, ILS, and website — the full library tech stack',
      'Lead tech projects with staff, vendors, and Town of Halton Hills',
      'Hardware, software, and network troubleshooting + remote support',
      'IT training delivery and strategic planning / budget contribution',
    ],
  },
  {
    p: 'Jan 2024 — Apr 2024',
    r: 'Full Stack Developer',
    c: 'Versaterm Public Safety',
    b: 'Co-op',
    l: 'Ottawa, ON 🇨🇦',
    canada: true,
    bl: [
      'Built Record Management System for U.S. police agencies in Java',
      'DB schema design and query optimisation for data integrity',
      'Agile/Sprint workflow with cross-functional teams',
    ],
  },
  {
    p: 'Sep 2023 — Dec 2023',
    r: 'IT Project Coordinator',
    c: 'Halton Hills Public Library',
    b: 'Co-op',
    l: 'Georgetown, ON 🇨🇦',
    canada: true,
    bl: [
      'Hardware, software, OS, and network issue resolution',
      'Website maintenance and analytics reporting',
      'Database backup, recovery, testing, and upgrades',
    ],
  },
  {
    p: 'Sep 2020 — Oct 2021',
    r: 'Production Engineer',
    c: 'Sangsin EDP',
    b: '',
    l: 'South Korea 🇰🇷',
    canada: false,
    bl: [
      'Scheduled production line for EV and ESS lithium battery manufacturing',
      'Resolved engineering issues for electric car and ESS batteries',
      'Managed overseas business site operations',
    ],
  },
  {
    p: 'Apr 2016 — Mar 2018',
    r: 'Petty Officer 2nd Class',
    c: 'Republic of Korea Navy',
    b: '⚓',
    l: 'South Korea 🇰🇷',
    canada: false,
    bl: [
      '9 months aboard a battleship — maritime operations execution',
      '14 months at 1st Fleet Command/Control Center',
      'Interpreter for joint exercises with U.S. Navy (UFG, Key Resolve)',
    ],
  },
];

/* ── PROJECTS ─────────────────────────────────── */
export const PROJECTS = [
  {
    i: '🚦',
    n: 'Alleyway Accident Prevention',
    d: 'Big Data award project. 7,478 Seoul accidents analyzed via GIS + OpenCV MOG2 to propose real-time CCTV warning systems at alley intersections.',
    st: ['Python', 'OpenCV', 'GIS', 'pandas', 'pydeck'],
    u: 'object-detection.html',
  },
  {
    i: '🗺️',
    n: 'GIS Traffic Visualization',
    d: 'Interactive 3D GIS maps visualizing accident density and population data for Gangseo-gu, Seoul. Built with pydeck for immersive spatial analysis.',
    st: ['Python', 'pydeck', 'geopandas', 'TAAS'],
    u: 'object-detection.html',
  },
  {
    i: '💬',
    n: 'CRUD Forum App',
    d: 'Full-stack community forum with user auth, threaded posts, and comments. Deployed on Vercel.',
    st: ['Node.js', 'Express', 'MongoDB', 'Vercel'],
    u: 'https://crud-forum-nodejs.vercel.app/',
  },
  {
    i: '🏛️',
    n: 'Library IT Infrastructure',
    d: 'Ongoing IT leadership at Halton Hills Public Library — servers, workstations, ILS, network, and tech strategy.',
    st: ['Server Admin', 'ILS', 'Network', 'IT Strategy'],
    u: '#',
  },
];

/* ── AI CHAT CONTEXT ──────────────────────────── */
export const CHAT_CONTEXT = `You are Ryan Lee's AI portfolio assistant. Speak as Ryan in first person — warm, confident, with a touch of wit. Keep answers concise (2-4 sentences).

NAME: Jeonghyeon (Ryan) Lee
CURRENT ROLE: IT Specialist, Halton Hills Public Library, Georgetown Ontario Canada (Sep 2024–present) — manages servers, workstations, ILS, website; leads tech projects; IT support and training
PREV: Full Stack Developer Co-op, Versaterm Public Safety, Ottawa (Jan–Apr 2024) — built RMS for U.S. police, Java, Agile
PREV: IT Project Coordinator Co-op, Halton Hills Public Library (Sep–Dec 2023)
PREV: Production Engineer, Sangsin EDP, South Korea (Sep 2020–Oct 2021) — EV and ESS lithium battery manufacturing
MILITARY: Petty Officer 2nd Class, ROK Navy (Apr 2016–Mar 2018) — 9mo battleship, 14mo 1st Fleet Command/Control, US Navy joint exercise interpreter (UFG, Key Resolve)
EDUCATION: Algonquin College Computer Programming GPA 3.97/4.0 Dean's Honour List (2022–2024); Incheon National University B.Eng Mechanical Engineering & Robotics (2016–2020)
SKILLS: Python, Java, JavaScript, React, Node.js, Machine Learning, OpenCV, GIS, SQL, Linux, Agile
BIG DATA AWARD: "Prevention of alleyway accidents with MOG2 and GIS" — 7,478 accident records in Gangseo-gu Seoul, OpenCV MOG2 background subtraction, GIS with pydeck/geopandas, won competition award
CONTACT: lee00835@algonquinlive.com | github.com/ryanleedev | linkedin.com/in/jhlee-ryan | +1 613 716 3081
LANGUAGES: Korean (native), English (fluent)
If asked in Korean, reply in Korean. Be genuine, slightly witty, and never robotic.`;
