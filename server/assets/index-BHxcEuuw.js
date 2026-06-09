import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
const DATA = {
  roles: ["PHP Laravel Developer", "Backend Engineer", "API Architect", "Full-Stack Builder"],
  email: "dineshrao275@gmail.com",
  phone: "+91 8290667849",
  location: "Indore, India",
  github: "https://github.com/dineshrao275",
  bio: "Skilled PHP Laravel Developer with 3 years of hands-on experience crafting dynamic, scalable web applications. I architect clean backend systems, optimize database performance, and build REST APIs that integrate seamlessly across the stack. Passionate about security, scalability, and shipping polished products.",
  stats: [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Shipped", value: 6, suffix: "+" },
    { label: "API Speedup", value: 30, suffix: "%" },
    { label: "Load Time Cut", value: 25, suffix: "%" }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "FiftyFive Technologies",
      period: "Jun 2025 — Present",
      location: "Indore",
      points: [
        "Developing backend modules with Laravel 10 — clean architecture, optimized queries, scalable code.",
        "Building and integrating RESTful APIs and third-party integrations for client projects.",
        "Collaborating with frontend teams on routing, auth, middleware, and smooth UX delivery.",
        "Performing code reviews, debugging, and deployment with focus on reliability."
      ]
    },
    {
      role: "Software Engineer",
      company: "Sofmen Technologies",
      period: "2023 — Apr 2025",
      location: "Indore, India",
      points: [
        "Designed and developed scalable web apps using PHP Laravel.",
        "Built REST APIs for seamless client-server communication.",
        "Implemented JWT and OAuth based authentication and authorization.",
        "Improved API response time by 30% through MySQL query optimization."
      ]
    }
  ],
  skills: {
    Frontend: ["JavaScript", "HTML5", "CSS3", "React.js"],
    Backend: ["PHP", "Laravel 10", "Laravel"],
    Databases: ["MySQL", "MSSQL"],
    "Auth & APIs": ["REST APIs", "JWT", "OAuth"],
    Tools: ["Postman", "Git", "GitHub", "GitLab"],
    Other: ["RBAC", "CMS", "Payment Gateways"]
  },
  skillLevels: [
    { name: "PHP / Laravel", level: 92 },
    { name: "MySQL & MSSQL", level: 86 },
    { name: "REST API Design", level: 90 },
    { name: "JWT / OAuth", level: 84 },
    { name: "JavaScript / React", level: 75 },
    { name: "Git / GitHub", level: 88 }
  ],
  projects: [
    {
      name: "Earthpulse AI",
      tag: "Environmental contral - Spain",
      desc: "Calculate carbon emmisions by the farmers of Sweden",
      tech: ["Drupal", "MySQL", "REST API"],
      accent: "var(--neon)"
    },
    {
      name: "AddEQT",
      tag: "Advisory application - SWE",
      desc: "Release and analyze what amount we need to invest at what risk factor.",
      tech: ["SLIM", "PGSQL", "REST API", "Micro-services"],
      accent: "var(--neon)"
    },
    {
      name: "Bumble Roofing",
      tag: "Roofing Services — US",
      desc: "Online quote generation system with interactive customer inquiry forms wired into backend APIs.",
      tech: ["Laravel", "MySQL", "REST API"],
      accent: "var(--neon)"
    },
    {
      name: "Franchisee Management System",
      tag: "Admin Portal",
      desc: "Multi-account franchise portal for financial operations with secure RBAC and efficient data flows.",
      tech: ["Laravel", "MySQL", "RBAC"],
      accent: "var(--neon-2)"
    },
    {
      name: "Wallaby Windows",
      tag: "Home Improvement — US",
      desc: "Responsive web interfaces, payment gateway integration, and 25% faster loads via caching & image optimization.",
      tech: ["Laravel", "Payments", "Caching"],
      accent: "var(--neon-3)"
    },
    {
      name: "One Stop Jewellery",
      tag: "Gold Inventory + Invoicing",
      desc: "IMS tracking weight, purity (22K/24K) and item type. React-powered reload-free invoicing with realtime calculations.",
      tech: ["Laravel", "MSSQL", "React"],
      accent: "var(--neon)"
    },
    {
      name: "FFTL — Faculty Feedback",
      tag: "Final Year Project",
      desc: "Feedback system for Shri Vaishnav Institute with dynamic forms, role-based access, and automated reports.",
      tech: ["Laravel", "MySQL"],
      accent: "var(--neon-2)"
    },
    {
      name: "Koala Insulation",
      tag: "CMS + Royalty Reporting",
      desc: "Franchisee microsite CMS, royalty submission workflow, plus Koala Canada portal with cross-region secure APIs.",
      tech: ["Laravel", "CMS", "APIs"],
      accent: "var(--neon-3)"
    }
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", school: "Shri Vaishnav Institute of Management", period: "2021 – 2023", place: "Indore, India", cgpa: "8.53" },
    { degree: "Bachelor of Computer Applications (BCA)", school: "Mohanlal Sukhadiya University", period: "2018 – 2021", place: "Udaipur, India", cgpa: "7.30" }
  ],
  certifications: [
    { name: "Python Basics", by: "IIT Bombay" },
    { name: "C Basics", by: "IIT Bombay" },
    { name: "C++ Basics", by: "IIT Bombay" },
    { name: "ReactJS Full Course", by: "Ypsilon IT Solutions" }
  ],
  achievements: [
    "Improved API response time by 30% through MySQL query optimization.",
    "Cut website load time by 25% via image optimization & caching.",
    "Shipped 6+ production systems including multi-region franchise platforms.",
    "Built cross-region secure APIs powering centralized reporting US ↔ Canada."
  ]
};
function useTypewriter(words, speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), pause);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI(i + 1);
        }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}
function Counter({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let started = false;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const dur = 1400;
        const step = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      ref,
      style: { x: sx, y: sy },
      onMouseMove: (e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      },
      onMouseLeave: () => {
        x.set(0);
        y.set(0);
      },
      className,
      ...props,
      children
    }
  );
}
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      style: { rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" },
      onMouseMove: (e) => {
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 14);
        rx.set(-py * 14);
      },
      onMouseLeave: () => {
        rx.set(0);
        ry.set(0);
      },
      className,
      children
    }
  );
}
const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
};
function Nav() {
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.2, duration: 0.8 },
      className: "fixed top-4 left-1/2 -translate-x-1/2 z-40 glass rounded-full px-2 py-2 hidden md:flex items-center gap-1",
      children: [
        /* @__PURE__ */ jsx("a", { href: "#hero", className: "px-4 py-1.5 text-sm font-mono text-[var(--neon)] tracking-wider", children: "DR." }),
        items.map((it) => /* @__PURE__ */ jsx("a", { href: it.href, className: "px-4 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-white/5", children: it.label }, it.href)),
        /* @__PURE__ */ jsx("a", { href: "/dinesh_rao_resume.pdf", download: true, className: "ml-2 px-4 py-1.5 text-sm rounded-full bg-[var(--neon)] text-primary-foreground font-medium", children: "Resume" })
      ]
    }
  );
}
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const typed = useTypewriter(DATA.roles);
  return /* @__PURE__ */ jsxs("section", { id: "hero", ref, className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-40 animate-grid-pan", style: { maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" } }),
    /* @__PURE__ */ jsxs(motion.div, { style: { y, opacity }, className: "relative z-10 max-w-6xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 },
          className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-[var(--neon)] mb-8",
          children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse" }),
            "AVAILABLE FOR WORK · INDORE, IN"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5, duration: 0.9 },
          className: "text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.95] tracking-tighter",
          children: [
            /* @__PURE__ */ jsx("span", { className: "block text-gradient", children: "DINESH" }),
            /* @__PURE__ */ jsx("span", { className: "block text-foreground/90", children: "RAO." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1 },
          className: "mt-6 font-mono text-sm md:text-base text-foreground/70 h-6",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[var(--neon)]", children: ">" }),
            " ",
            typed,
            /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "▊" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.2 },
          className: "mt-6 max-w-2xl mx-auto text-foreground/60",
          children: "3 years building scalable Laravel backends, RESTful APIs, and high-performance systems for clients across the US, Canada, and India."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.4 },
          className: "mt-10 flex flex-wrap gap-4 justify-center",
          children: [
            /* @__PURE__ */ jsxs(MagneticButton, { href: "#projects", className: "group inline-flex items-center gap-2 rounded-full bg-[var(--neon)] px-6 py-3 text-sm font-medium text-primary-foreground neon-glow", children: [
              "View Projects ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
            ] }),
            /* @__PURE__ */ jsxs(MagneticButton, { href: "/dinesh_rao_resume.pdf", download: true, className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium", children: [
              "Download Resume ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "↓" })
            ] }),
            /* @__PURE__ */ jsx(MagneticButton, { href: "#contact", className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-[var(--neon-2)]/50 text-foreground hover:neon-glow-magenta transition-shadow", children: "Contact Me" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(FloatingOrb, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 2 },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-foreground/40 tracking-widest",
        children: "SCROLL ↓"
      }
    )
  ] });
}
function FloatingOrb() {
  const techs = ["Laravel", "PHP", "MySQL", "React", "JWT", "API", "Git", "MSSQL"];
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-[min(90vw,700px)] h-[min(90vw,700px)] opacity-50", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border border-[var(--neon)]/20 animate-spin-slow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-8 rounded-full border border-[var(--neon-2)]/20", style: { animation: "spin-slow 30s linear infinite reverse" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-20 rounded-full border border-[var(--neon-3)]/15 animate-spin-slow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-32 w-32 rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-2)] blur-3xl opacity-40 animate-pulse-glow" }) }),
    techs.map((t, i) => {
      const angle = i / techs.length * 360;
      return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-spin-slow", style: { animationDuration: `${30 + i * 2}s`, animationDirection: i % 2 ? "reverse" : "normal" }, children: /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 -translate-x-1/2", style: { transform: `rotate(${angle}deg) translateY(-50%)` }, children: /* @__PURE__ */ jsx("div", { className: "glass rounded-full px-3 py-1 text-[10px] font-mono text-[var(--neon)]", style: { transform: `rotate(-${angle}deg)` }, children: t }) }) }, t);
    })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsx(Section, { id: "about", eyebrow: "01 / ABOUT", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Engineer who ships",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "production-grade" }),
    " systems."
  ] }), children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-8 items-start", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
        className: "lg:col-span-3 glass rounded-3xl p-8 md:p-10 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[var(--neon)]/10 blur-3xl" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground/80 leading-relaxed relative", children: DATA.bio }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-2 relative", children: ["Scalability", "Security", "Clean Code", "Performance", "REST APIs", "RBAC"].map((t) => /* @__PURE__ */ jsx("span", { className: "text-xs font-mono px-3 py-1 rounded-full border border-[var(--neon)]/30 text-[var(--neon)]", children: t }, t)) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 grid grid-cols-2 gap-4", children: DATA.stats.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        custom: i,
        className: "glass rounded-2xl p-6 hover:neon-glow transition-shadow",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-gradient", children: /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs font-mono text-foreground/60 uppercase tracking-wider", children: s.label })
        ]
      },
      s.label
    )) })
  ] }) });
}
function Skills() {
  return /* @__PURE__ */ jsx(Section, { id: "skills", eyebrow: "02 / STACK", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "The ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "arsenal." })
  ] }), children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: DATA.skillLevels.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        custom: i,
        className: "glass rounded-xl p-5",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: s.name }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-[var(--neon)]", children: [
              s.level,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-2 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { width: 0 },
              whileInView: { width: `${s.level}%` },
              viewport: { once: true },
              transition: { duration: 1.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
              className: "h-full rounded-full",
              style: { background: "linear-gradient(90deg, var(--neon), var(--neon-2))", boxShadow: "0 0 12px var(--neon)" }
            }
          ) })
        ]
      },
      s.name
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: Object.entries(DATA.skills).map(([cat, list], i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        custom: i,
        className: "glass rounded-2xl p-5 hover:neon-glow-magenta transition-shadow",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-[var(--neon-2)] uppercase tracking-wider mb-3", children: cat }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: list.map((s) => /* @__PURE__ */ jsx("span", { className: "text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10", children: s }, s)) })
        ]
      },
      cat
    )) })
  ] }) });
}
function Experience() {
  return /* @__PURE__ */ jsx(Section, { id: "experience", eyebrow: "03 / JOURNEY", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Career ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "timeline." })
  ] }), children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--neon-2)] to-transparent" }),
    DATA.experience.map((e, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
        custom: i,
        className: `relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-[50%] md:pl-12"}`,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -left-0.5 md:left-auto md:right-[-9px] top-6 h-4 w-4 rounded-full bg-[var(--neon)] neon-glow",
              style: i % 2 === 0 ? {} : { right: "auto", left: "-9px" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "ml-12 md:ml-0 glass rounded-2xl p-6 hover:neon-glow transition-shadow", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-wrap gap-2 mb-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: e.role }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-[var(--neon)]", children: e.period })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-[var(--neon-2)] mb-4", children: [
              e.company,
              " · ",
              e.location
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: e.points.map((p, j) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-foreground/70 flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[var(--neon)] mt-1", children: "▸" }),
              /* @__PURE__ */ jsx("span", { children: p })
            ] }, j)) })
          ] })
        ]
      },
      i
    ))
  ] }) });
}
function Projects() {
  return /* @__PURE__ */ jsx(Section, { id: "projects", eyebrow: "04 / WORK", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Selected ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "projects." })
  ] }), children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", style: { perspective: 1200 }, children: DATA.projects.map((p, i) => /* @__PURE__ */ jsx(motion.div, { variants: reveal, initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 }, custom: i, children: /* @__PURE__ */ jsxs(TiltCard, { className: "group relative glass rounded-3xl p-7 h-full overflow-hidden hover:border-[var(--neon)]/60 transition-all", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity",
        style: { background: p.accent }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", style: { transform: "translateZ(40px)" }, children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "aspect-[16/9] rounded-2xl mb-5 relative overflow-hidden border border-white/10",
          style: { background: `linear-gradient(135deg, color-mix(in oklab, ${p.accent} 30%, var(--card)), var(--card))` },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "font-mono text-5xl font-bold text-white/20", children: p.name.split(" ").map((w) => w[0]).join("").slice(0, 3) }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 text-[10px] font-mono px-2 py-1 rounded-full bg-black/50 backdrop-blur text-white/80", children: p.tag })
          ]
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: p.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/65 leading-relaxed", children: p.desc }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono px-2 py-0.5 rounded border border-white/15 text-foreground/80", children: t }, t)) })
    ] })
  ] }) }, p.name)) }) });
}
function Education() {
  return /* @__PURE__ */ jsx(Section, { id: "education", eyebrow: "05 / CREDENTIALS", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Education & ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "certifications." })
  ] }), children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
      DATA.education.map((e, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: reveal,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          custom: i,
          className: "glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:neon-glow transition-shadow",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: e.degree }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-[var(--neon-2)]", children: e.school }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono text-foreground/50 mt-1", children: [
                e.period,
                " · ",
                e.place
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gradient", children: e.cgpa }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-foreground/50 uppercase", children: "CGPA" })
            ] })
          ]
        },
        i
      )),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: reveal,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          className: "glass rounded-2xl p-6",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-[var(--neon-2)] uppercase mb-4", children: "Achievements" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: DATA.achievements.map((a, i) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-foreground/75 flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[var(--neon)]", children: "★" }),
              a
            ] }, i)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: DATA.certifications.map((c, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        custom: i,
        className: "glass rounded-xl p-4 hover:neon-glow-magenta transition-shadow",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--neon)] to-[var(--neon-2)] flex items-center justify-center text-primary-foreground font-bold", children: "✓" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: c.name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-foreground/55", children: c.by })
          ] })
        ] })
      },
      c.name
    )) })
  ] }) });
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx(Section, { id: "contact", eyebrow: "06 / CONNECT", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Let's build ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "something." })
  ] }), children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        className: "glass rounded-3xl p-8 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[var(--neon-2)]/20 blur-3xl" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-2 relative", children: "Direct line." }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/60 mb-6 relative", children: "Open to freelance, full-time, and Laravel consulting roles." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 relative", children: [
            { l: "Email", v: DATA.email, h: `mailto:${DATA.email}` },
            { l: "Phone", v: DATA.phone, h: `tel:${DATA.phone}` },
            { l: "Location", v: DATA.location, h: "#" },
            { l: "GitHub", v: "github.com/dineshrao", h: DATA.github }
          ].map((it) => /* @__PURE__ */ jsxs("a", { href: it.h, className: "flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-[var(--neon)] uppercase tracking-wider", children: it.l }),
              /* @__PURE__ */ jsx("div", { className: "text-sm mt-0.5", children: it.v })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/40 group-hover:text-[var(--neon)] group-hover:translate-x-1 transition-all", children: "→" })
          ] }, it.l)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.form,
      {
        variants: reveal,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        onSubmit: (e) => {
          e.preventDefault();
          setSent(true);
          setTimeout(() => setSent(false), 3500);
        },
        className: "glass rounded-3xl p-8 space-y-5",
        children: [
          [
            { name: "name", label: "Your name", type: "text" },
            { name: "email", label: "Your email", type: "email" }
          ].map((f) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                type: f.type,
                name: f.name,
                placeholder: " ",
                className: "peer w-full bg-transparent border-b border-white/15 px-1 py-3 outline-none focus:border-[var(--neon)] transition-colors"
              }
            ),
            /* @__PURE__ */ jsx("label", { className: "absolute left-1 top-3 text-foreground/50 text-sm transition-all peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-[var(--neon)] peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs", children: f.label })
          ] }, f.name)),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "textarea",
              {
                required: true,
                name: "message",
                rows: 4,
                placeholder: " ",
                className: "peer w-full bg-transparent border-b border-white/15 px-1 py-3 outline-none focus:border-[var(--neon)] transition-colors resize-none"
              }
            ),
            /* @__PURE__ */ jsx("label", { className: "absolute left-1 top-3 text-foreground/50 text-sm transition-all peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-[var(--neon)] peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs", children: "Your message" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-2)] py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity neon-glow",
              children: sent ? "Message sent ✓" : "Transmit message →"
            }
          )
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative py-10 px-6 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-foreground/40", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " DINESH RAO · CRAFTED WITH CAFFEINE & LARAVEL"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: `mailto:${DATA.email}`, className: "hover:text-[var(--neon)] transition", children: "EMAIL" }),
      /* @__PURE__ */ jsx("a", { href: DATA.github, className: "hover:text-[var(--neon)] transition", children: "GITHUB" }),
      /* @__PURE__ */ jsx("a", { href: "#hero", className: "hover:text-[var(--neon)] transition", children: "BACK TO TOP ↑" })
    ] })
  ] }) });
}
function Section({ id, eyebrow, title, children }) {
  return /* @__PURE__ */ jsx("section", { id, className: "relative py-28 md:py-36 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 0.7 },
        className: "mb-16",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-[var(--neon)] tracking-[0.3em] mb-3", children: eyebrow }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-bold tracking-tight leading-tight", children: title })
        ]
      }
    ),
    children
  ] }) });
}
function Portfolio() {
  return /* @__PURE__ */ jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Education, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1e3, y: -1e3 });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);
    const count = window.innerWidth < 768 ? 50 : 110;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4 * dpr,
      vy: (Math.random() - 0.5) * 0.4 * dpr,
      r: (Math.random() * 1.5 + 0.5) * dpr,
      hue: Math.random() > 0.5 ? 195 : 320
    }));
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX * dpr, y: e.clientY * dpr };
    };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150 * dpr) {
          p.vx -= dx / dist * 0.05;
          p.vy -= dy / dist * 0.05;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, 0.8)`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, 1)`;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110 * dpr) {
            ctx.strokeStyle = `hsla(195, 100%, 70%, ${0.15 * (1 - d / (110 * dpr))})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "pointer-events-none fixed inset-0 -z-10",
      "aria-hidden": true
    }
  );
}
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    };
    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref: dotRef, className: "pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-[var(--neon)] mix-blend-screen hidden md:block", style: { boxShadow: "0 0 12px var(--neon)" } }),
    /* @__PURE__ */ jsx("div", { ref: ringRef, className: "pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-[var(--neon)]/60 hidden md:block" })
  ] });
}
function ScanLine() {
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-30", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute inset-x-0 h-px",
      style: {
        background: "linear-gradient(to right, transparent, var(--neon), transparent)",
        animation: "scan 8s linear infinite"
      }
    }
  ) });
}
function MusicToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const oscRef = useRef(null);
  const gainRef = useRef(null);
  const toggle = () => {
    if (!on) {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 110;
      osc2.type = "triangle";
      osc2.frequency.value = 165;
      gain.gain.value = 0.04;
      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc2.start();
      ctxRef.current = ctx;
      oscRef.current = osc;
      gainRef.current = gain;
    } else {
      oscRef.current?.stop();
      ctxRef.current?.close();
    }
    setOn(!on);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle ambient music",
      className: "fixed bottom-6 left-6 z-50 glass rounded-full p-3 text-xs font-mono hover:neon-glow transition-all",
      children: on ? "♪ AMBIENT" : "♫ MUTED"
    }
  );
}
function Terminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    "dinesh@portfolio:~$ welcome",
    "Type 'help' for commands."
  ]);
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);
  const run = (cmd) => {
    const c = cmd.trim().toLowerCase();
    const out = {
      help: "Available: about, skills, contact, projects, resume, clear, whoami",
      about: "Dinesh Rao — Laravel Developer, 3 years building scalable web apps.",
      skills: "PHP, Laravel, MySQL, MSSQL, JavaScript, React, REST APIs, JWT",
      contact: "dineshrao275@gmail.com | +91 8290667849 | Indore, India",
      projects: "Bumble Roofing, AddEQT, Earthpulse AI, Franchisee Mgmt, Wallaby Windows, One Stop Jewellery, FFTL, Koala Insulation",
      resume: "Downloading /dinesh_rao_resume.pdf ...",
      whoami: "guest@dinesh-portfolio"
    };
    if (c === "clear") {
      setLines([]);
      return;
    }
    if (c === "resume") {
      window.open("/dinesh_rao_resume.pdf", "_blank");
    }
    setLines((l) => [...l, `dinesh@portfolio:~$ ${cmd}`, out[c] ?? `command not found: ${cmd}`]);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setOpen(!open),
        "aria-label": "Open terminal",
        className: "fixed bottom-6 right-6 z-50 glass rounded-full p-3 text-xs font-mono hover:neon-glow transition-all",
        children: open ? "✕ CLOSE" : "▶ TERMINAL"
      }
    ),
    open && /* @__PURE__ */ jsxs("div", { className: "fixed bottom-20 right-6 z-50 w-[min(420px,90vw)] h-72 glass rounded-2xl p-4 font-mono text-xs neon-glow flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-border/40", children: [
        /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500" }),
        /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500" }),
        /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500" }),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-muted-foreground", children: "~/dinesh-os" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto py-2 space-y-1", children: [
        lines.map((l, i) => /* @__PURE__ */ jsx("div", { className: l.startsWith("dinesh@") ? "text-[var(--neon)]" : "text-foreground/80", children: l }, i)),
        /* @__PURE__ */ jsx("div", { ref: endRef })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        run(input);
        setInput("");
      }, className: "flex gap-2 pt-2 border-t border-border/40", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[var(--neon)]", children: "$" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: input,
            onChange: (e) => setInput(e.target.value),
            autoFocus: true,
            className: "flex-1 bg-transparent outline-none",
            placeholder: "type a command..."
          }
        )
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ParticleBackground, {}),
    /* @__PURE__ */ jsx(ScanLine, {}),
    /* @__PURE__ */ jsx(CustomCursor, {}),
    /* @__PURE__ */ jsx(Portfolio, {}),
    /* @__PURE__ */ jsx(MusicToggle, {}),
    /* @__PURE__ */ jsx(Terminal, {})
  ] });
}
export {
  Index as component
};
