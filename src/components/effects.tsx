import { useEffect, useRef, useState } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
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
      hue: Math.random() > 0.5 ? 195 : 320,
    }));

    const onMove = (e: MouseEvent) => {
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
          p.vx -= (dx / dist) * 0.05;
          p.vy -= (dy / dist) * 0.05;
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
      // connect close particles
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

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
    />
  );
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
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
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);
  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-[var(--neon)] mix-blend-screen hidden md:block" style={{ boxShadow: "0 0 12px var(--neon)" }} />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-[var(--neon)]/60 hidden md:block" />
    </>
  );
}

export function ScanLine() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-30">
      <div
        className="absolute inset-x-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--neon), transparent)",
          animation: "scan 8s linear infinite",
        }}
      />
    </div>
  );
}

export function MusicToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggle = () => {
    if (!on) {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AC();
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine"; osc.frequency.value = 110;
      osc2.type = "triangle"; osc2.frequency.value = 165;
      gain.gain.value = 0.04;
      osc.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc2.start();
      ctxRef.current = ctx; oscRef.current = osc; gainRef.current = gain;
    } else {
      oscRef.current?.stop();
      ctxRef.current?.close();
    }
    setOn(!on);
  };

  return (
    <button onClick={toggle} aria-label="Toggle ambient music"
      className="fixed bottom-6 left-6 z-50 glass rounded-full p-3 text-xs font-mono hover:neon-glow transition-all">
      {on ? "♪ AMBIENT" : "♫ MUTED"}
    </button>
  );
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "dinesh@portfolio:~$ welcome",
    "Type 'help' for commands.",
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [lines]);

  const run = (cmd: string) => {
    const c = cmd.trim().toLowerCase();
    const out: Record<string, string> = {
      help: "Available: about, skills, contact, projects, resume, clear, whoami",
      about: "Dinesh Rao — Laravel Developer, 3 years building scalable web apps.",
      skills: "PHP, Laravel, MySQL, MSSQL, JavaScript, React, REST APIs, JWT",
      contact: "dineshrao275@gmail.com | +91 8290667849 | Indore, India",
      projects: "Bumble Roofing, AddEQT, Earthpulse AI, Franchisee Mgmt, Wallaby Windows, One Stop Jewellery, FFTL, Koala Insulation",
      resume: "Downloading /dinesh_rao_resume.pdf ...",
      whoami: "guest@dinesh-portfolio",
    };
    if (c === "clear") { setLines([]); return; }
    if (c === "resume") { window.open("/dinesh_rao_resume.pdf", "_blank"); }
    setLines((l) => [...l, `dinesh@portfolio:~$ ${cmd}`, out[c] ?? `command not found: ${cmd}`]);
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Open terminal"
        className="fixed bottom-6 right-6 z-50 glass rounded-full p-3 text-xs font-mono hover:neon-glow transition-all">
        {open ? "✕ CLOSE" : "▶ TERMINAL"}
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[min(420px,90vw)] h-72 glass rounded-2xl p-4 font-mono text-xs neon-glow flex flex-col">
          <div className="flex items-center gap-2 pb-2 border-b border-border/40">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="ml-2 text-muted-foreground">~/dinesh-os</span>
          </div>
          <div className="flex-1 overflow-y-auto py-2 space-y-1">
            {lines.map((l, i) => (
              <div key={i} className={l.startsWith("dinesh@") ? "text-[var(--neon)]" : "text-foreground/80"}>{l}</div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }} className="flex gap-2 pt-2 border-t border-border/40">
            <span className="text-[var(--neon)]">$</span>
            <input value={input} onChange={(e) => setInput(e.target.value)} autoFocus
              className="flex-1 bg-transparent outline-none" placeholder="type a command..." />
          </form>
        </div>
      )}
    </>
  );
}
