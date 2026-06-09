import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ============ DATA (extracted from resume) ============ */
const DATA = {
  name: "Dinesh Rao",
  role: "PHP Laravel Developer",
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
    { label: "Load Time Cut", value: 25, suffix: "%" },
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
        "Performing code reviews, debugging, and deployment with focus on reliability.",
      ],
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
        "Improved API response time by 30% through MySQL query optimization.",
      ],
    },
  ],
  skills: {
    Frontend: ["JavaScript", "HTML5", "CSS3", "React.js"],
    Backend: ["PHP", "Laravel 10", "Laravel"],
    Databases: ["MySQL", "MSSQL"],
    "Auth & APIs": ["REST APIs", "JWT", "OAuth"],
    Tools: ["Postman", "Git", "GitHub", "GitLab"],
    Other: ["RBAC", "CMS", "Payment Gateways"],
  } as Record<string, string[]>,
  skillLevels: [
    { name: "PHP / Laravel", level: 92 },
    { name: "MySQL & MSSQL", level: 86 },
    { name: "REST API Design", level: 90 },
    { name: "JWT / OAuth", level: 84 },
    { name: "JavaScript / React", level: 75 },
    { name: "Git / GitHub", level: 88 },
  ],
  projects: [
    {
      name: "Earthpulse AI",
      tag: "Environmental contral - Spain",
      desc: "Calculate carbon emmisions by the farmers of Sweden",
      tech: ["Drupal", "MySQL", "REST API"],
      accent: "var(--neon)",
    },
    {
      name: "AddEQT",
      tag: "Advisory application - SWE",
      desc: "Release and analyze what amount we need to invest at what risk factor.",
      tech: ["SLIM", "PGSQL", "REST API", "Micro-services"],
      accent: "var(--neon)",
    },
    {
      name: "Bumble Roofing",
      tag: "Roofing Services — US",
      desc: "Online quote generation system with interactive customer inquiry forms wired into backend APIs.",
      tech: ["Laravel", "MySQL", "REST API"],
      accent: "var(--neon)",
    },
    {
      name: "Franchisee Management System",
      tag: "Admin Portal",
      desc: "Multi-account franchise portal for financial operations with secure RBAC and efficient data flows.",
      tech: ["Laravel", "MySQL", "RBAC"],
      accent: "var(--neon-2)",
    },
    {
      name: "Wallaby Windows",
      tag: "Home Improvement — US",
      desc: "Responsive web interfaces, payment gateway integration, and 25% faster loads via caching & image optimization.",
      tech: ["Laravel", "Payments", "Caching"],
      accent: "var(--neon-3)",
    },
    {
      name: "One Stop Jewellery",
      tag: "Gold Inventory + Invoicing",
      desc: "IMS tracking weight, purity (22K/24K) and item type. React-powered reload-free invoicing with realtime calculations.",
      tech: ["Laravel", "MSSQL", "React"],
      accent: "var(--neon)",
    },
    {
      name: "FFTL — Faculty Feedback",
      tag: "Final Year Project",
      desc: "Feedback system for Shri Vaishnav Institute with dynamic forms, role-based access, and automated reports.",
      tech: ["Laravel", "MySQL"],
      accent: "var(--neon-2)",
    },
    {
      name: "Koala Insulation",
      tag: "CMS + Royalty Reporting",
      desc: "Franchisee microsite CMS, royalty submission workflow, plus Koala Canada portal with cross-region secure APIs.",
      tech: ["Laravel", "CMS", "APIs"],
      accent: "var(--neon-3)",
    },
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", school: "Shri Vaishnav Institute of Management", period: "2021 – 2023", place: "Indore, India", cgpa: "8.53" },
    { degree: "Bachelor of Computer Applications (BCA)", school: "Mohanlal Sukhadiya University", period: "2018 – 2021", place: "Udaipur, India", cgpa: "7.30" },
  ],
  certifications: [
    { name: "Python Basics", by: "IIT Bombay" },
    { name: "C Basics", by: "IIT Bombay" },
    { name: "C++ Basics", by: "IIT Bombay" },
    { name: "ReactJS Full Course", by: "Ypsilon IT Solutions" },
  ],
  achievements: [
    "Improved API response time by 30% through MySQL query optimization.",
    "Cut website load time by 25% via image optimization & caching.",
    "Shipped 6+ production systems including multi-region franchise platforms.",
    "Built cross-region secure APIs powering centralized reporting US ↔ Canada.",
  ],
};

/* ============ HELPERS ============ */
function useTypewriter(words: string[], speed = 80, pause = 1400) {
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
        if (next === "") { setDel(false); setI(i + 1); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let started = false;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const dur = 1400;
        const step = (t: number) => {
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
  return <span ref={ref}>{n}{suffix}</span>;
}

function MagneticButton({ children, className = "", ...props }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.a
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0); const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 14); rx.set(-py * 14);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }),
};

/* ============ NAV ============ */
function Nav() {
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 glass rounded-full px-2 py-2 hidden md:flex items-center gap-1"
    >
      <a href="#hero" className="px-4 py-1.5 text-sm font-mono text-[var(--neon)] tracking-wider">DR.</a>
      {items.map((it) => (
        <a key={it.href} href={it.href} className="px-4 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-white/5">{it.label}</a>
      ))}
      <a href="/dinesh_rao_resume.pdf" download className="ml-2 px-4 py-1.5 text-sm rounded-full bg-[var(--neon)] text-primary-foreground font-medium">Resume</a>
    </motion.nav>
  );
}

/* ============ HERO ============ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const typed = useTypewriter(DATA.roles);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 animate-grid-pan" style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-[var(--neon)] mb-8">
          <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse" />
          AVAILABLE FOR WORK · INDORE, IN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}
          className="text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.95] tracking-tighter"
        >
          <span className="block text-gradient">DINESH</span>
          <span className="block text-foreground/90">RAO.</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mt-6 font-mono text-sm md:text-base text-foreground/70 h-6">
          <span className="text-[var(--neon)]">&gt;</span> {typed}<span className="animate-pulse">▊</span>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="mt-6 max-w-2xl mx-auto text-foreground/60">
          3 years building scalable Laravel backends, RESTful APIs, and high-performance systems for clients across the US, Canada, and India.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center">
          <MagneticButton href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--neon)] px-6 py-3 text-sm font-medium text-primary-foreground neon-glow">
            View Projects <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton href="/dinesh_rao_resume.pdf" download className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium">
            Download Resume <span aria-hidden>↓</span>
          </MagneticButton>
          <MagneticButton href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-[var(--neon-2)]/50 text-foreground hover:neon-glow-magenta transition-shadow">
            Contact Me
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating 3D orbit visual */}
      <FloatingOrb />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-foreground/40 tracking-widest">
        SCROLL ↓
      </motion.div>
    </section>
  );
}

function FloatingOrb() {
  const techs = ["Laravel", "PHP", "MySQL", "React", "JWT", "API", "Git", "MSSQL"];
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative w-[min(90vw,700px)] h-[min(90vw,700px)] opacity-50">
        <div className="absolute inset-0 rounded-full border border-[var(--neon)]/20 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-[var(--neon-2)]/20" style={{ animation: "spin-slow 30s linear infinite reverse" }} />
        <div className="absolute inset-20 rounded-full border border-[var(--neon-3)]/15 animate-spin-slow" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-2)] blur-3xl opacity-40 animate-pulse-glow" />
        </div>
        {techs.map((t, i) => {
          const angle = (i / techs.length) * 360;
          return (
            <div key={t} className="absolute inset-0 animate-spin-slow" style={{ animationDuration: `${30 + i * 2}s`, animationDirection: i % 2 ? "reverse" : "normal" }}>
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ transform: `rotate(${angle}deg) translateY(-50%)` }}>
                <div className="glass rounded-full px-3 py-1 text-[10px] font-mono text-[var(--neon)]" style={{ transform: `rotate(-${angle}deg)` }}>
                  {t}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============ ABOUT ============ */
function About() {
  return (
    <Section id="about" eyebrow="01 / ABOUT" title={<>Engineer who ships<br/><span className="text-gradient">production-grade</span> systems.</>}>
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[var(--neon)]/10 blur-3xl" />
          <p className="text-lg text-foreground/80 leading-relaxed relative">{DATA.bio}</p>
          <div className="mt-8 flex flex-wrap gap-2 relative">
            {["Scalability", "Security", "Clean Code", "Performance", "REST APIs", "RBAC"].map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--neon)]/30 text-[var(--neon)]">{t}</span>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {DATA.stats.map((s, i) => (
            <motion.div key={s.label} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="glass rounded-2xl p-6 hover:neon-glow transition-shadow">
              <div className="text-4xl font-bold text-gradient"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-2 text-xs font-mono text-foreground/60 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============ SKILLS ============ */
function Skills() {
  return (
    <Section id="skills" eyebrow="02 / STACK" title={<>The <span className="text-gradient">arsenal.</span></>}>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {DATA.skillLevels.map((s, i) => (
            <motion.div key={s.name} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="glass rounded-xl p-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="font-mono text-[var(--neon)]">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.05, ease: [0.22,1,0.36,1] as const }}
                  className="h-full rounded-full" style={{ background: "linear-gradient(90deg, var(--neon), var(--neon-2))", boxShadow: "0 0 12px var(--neon)" }} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(DATA.skills).map(([cat, list], i) => (
            <motion.div key={cat} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="glass rounded-2xl p-5 hover:neon-glow-magenta transition-shadow">
              <div className="text-xs font-mono text-[var(--neon-2)] uppercase tracking-wider mb-3">{cat}</div>
              <div className="flex flex-wrap gap-1.5">
                {list.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============ EXPERIENCE ============ */
function Experience() {
  return (
    <Section id="experience" eyebrow="03 / JOURNEY" title={<>Career <span className="text-gradient">timeline.</span></>}>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--neon-2)] to-transparent" />
        {DATA.experience.map((e, i) => (
          <motion.div key={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} custom={i}
            className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-[50%] md:pl-12"}`}>
            <div className="absolute -left-0.5 md:left-auto md:right-[-9px] top-6 h-4 w-4 rounded-full bg-[var(--neon)] neon-glow"
              style={i % 2 === 0 ? {} : { right: "auto", left: "-9px" }} />
            <div className="ml-12 md:ml-0 glass rounded-2xl p-6 hover:neon-glow transition-shadow">
              <div className="flex justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <span className="text-xs font-mono text-[var(--neon)]">{e.period}</span>
              </div>
              <div className="text-sm text-[var(--neon-2)] mb-4">{e.company} · {e.location}</div>
              <ul className="space-y-2">
                {e.points.map((p, j) => (
                  <li key={j} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-[var(--neon)] mt-1">▸</span><span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============ PROJECTS ============ */
function Projects() {
  return (
    <Section id="projects" eyebrow="04 / WORK" title={<>Selected <span className="text-gradient">projects.</span></>}>
      <div className="grid md:grid-cols-2 gap-6" style={{ perspective: 1200 }}>
        {DATA.projects.map((p, i) => (
          <motion.div key={p.name} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={i}>
            <TiltCard className="group relative glass rounded-3xl p-7 h-full overflow-hidden hover:border-[var(--neon)]/60 transition-all">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: p.accent as string }} />
              <div className="relative" style={{ transform: "translateZ(40px)" }}>
                <div className="aspect-[16/9] rounded-2xl mb-5 relative overflow-hidden border border-white/10"
                  style={{ background: `linear-gradient(135deg, color-mix(in oklab, ${p.accent} 30%, var(--card)), var(--card))` }}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-5xl font-bold text-white/20">{p.name.split(" ").map(w=>w[0]).join("").slice(0,3)}</div>
                  </div>
                  <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-1 rounded-full bg-black/50 backdrop-blur text-white/80">
                    {p.tag}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/15 text-foreground/80">{t}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============ EDUCATION / CERTS / ACHIEVEMENTS ============ */
function Education() {
  return (
    <Section id="education" eyebrow="05 / CREDENTIALS" title={<>Education & <span className="text-gradient">certifications.</span></>}>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {DATA.education.map((e, i) => (
            <motion.div key={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:neon-glow transition-shadow">
              <div>
                <h3 className="text-lg font-semibold">{e.degree}</h3>
                <div className="text-sm text-[var(--neon-2)]">{e.school}</div>
                <div className="text-xs font-mono text-foreground/50 mt-1">{e.period} · {e.place}</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gradient">{e.cgpa}</div>
                <div className="text-[10px] font-mono text-foreground/50 uppercase">CGPA</div>
              </div>
            </motion.div>
          ))}
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="glass rounded-2xl p-6">
            <div className="text-xs font-mono text-[var(--neon-2)] uppercase mb-4">Achievements</div>
            <ul className="space-y-2">
              {DATA.achievements.map((a, i) => (
                <li key={i} className="text-sm text-foreground/75 flex gap-2"><span className="text-[var(--neon)]">★</span>{a}</li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="space-y-3">
          {DATA.certifications.map((c, i) => (
            <motion.div key={c.name} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="glass rounded-xl p-4 hover:neon-glow-magenta transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--neon)] to-[var(--neon-2)] flex items-center justify-center text-primary-foreground font-bold">✓</div>
                <div>
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="text-xs text-foreground/55">{c.by}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============ CONTACT ============ */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="06 / CONNECT" title={<>Let's build <span className="text-gradient">something.</span></>}>
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="glass rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[var(--neon-2)]/20 blur-3xl" />
          <h3 className="text-2xl font-semibold mb-2 relative">Direct line.</h3>
          <p className="text-foreground/60 mb-6 relative">Open to freelance, full-time, and Laravel consulting roles.</p>
          <div className="space-y-3 relative">
            {[
              { l: "Email", v: DATA.email, h: `mailto:${DATA.email}` },
              { l: "Phone", v: DATA.phone, h: `tel:${DATA.phone}` },
              { l: "Location", v: DATA.location, h: "#" },
              { l: "GitHub", v: "github.com/dineshrao", h: DATA.github },
            ].map((it) => (
              <a key={it.l} href={it.h} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <div>
                  <div className="text-[10px] font-mono text-[var(--neon)] uppercase tracking-wider">{it.l}</div>
                  <div className="text-sm mt-0.5">{it.v}</div>
                </div>
                <span className="text-foreground/40 group-hover:text-[var(--neon)] group-hover:translate-x-1 transition-all">→</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false), 3500); }}
          className="glass rounded-3xl p-8 space-y-5">
          {[
            { name: "name", label: "Your name", type: "text" },
            { name: "email", label: "Your email", type: "email" },
          ].map((f) => (
            <div key={f.name} className="relative">
              <input required type={f.type} name={f.name} placeholder=" "
                className="peer w-full bg-transparent border-b border-white/15 px-1 py-3 outline-none focus:border-[var(--neon)] transition-colors" />
              <label className="absolute left-1 top-3 text-foreground/50 text-sm transition-all peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-[var(--neon)] peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs">
                {f.label}
              </label>
            </div>
          ))}
          <div className="relative">
            <textarea required name="message" rows={4} placeholder=" "
              className="peer w-full bg-transparent border-b border-white/15 px-1 py-3 outline-none focus:border-[var(--neon)] transition-colors resize-none" />
            <label className="absolute left-1 top-3 text-foreground/50 text-sm transition-all peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-[var(--neon)] peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs">
              Your message
            </label>
          </div>
          <button type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-2)] py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity neon-glow">
            {sent ? "Message sent ✓" : "Transmit message →"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-foreground/40">
        <div>© {new Date().getFullYear()} DINESH RAO · CRAFTED WITH CAFFEINE & LARAVEL</div>
        <div className="flex gap-4">
          <a href={`mailto:${DATA.email}`} className="hover:text-[var(--neon)] transition">EMAIL</a>
          <a href={DATA.github} className="hover:text-[var(--neon)] transition">GITHUB</a>
          <a href="#hero" className="hover:text-[var(--neon)] transition">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

/* ============ SECTION WRAPPER ============ */
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}
          className="mb-16">
          <div className="text-xs font-mono text-[var(--neon)] tracking-[0.3em] mb-3">{eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ============ MAIN ============ */
export default function Portfolio() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
