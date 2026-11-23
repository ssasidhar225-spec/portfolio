import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Figma,
  GitBranch,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Send,
  Server,
  Sparkles,
  Terminal,
  Twitter,
} from "lucide-react";
import { useState } from "react";

import profileAsset from "@/assets/profile-new.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sasidhar | Web Developer & Creative Problem Solver" },
      {
        name: "description",
        content:
          "Portfolio of Sasidhar — a web developer and creative problem solver building fast, accessible web experiences.",
      },
      { property: "og:title", content: "Sasidhar | Web Developer & Creative Problem Solver" },
      {
        property: "og:description",
        content:
          "Portfolio of Sasidhar — a web developer and creative problem solver building fast, accessible web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Sasidhar | Web Developer & Creative Problem Solver",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Sasidhar — a web developer and creative problem solver building fast, accessible web experiences.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "25+", label: "Projects shipped" },
  { value: "15+", label: "Technologies used" },
];

const interests = [
  { icon: Globe, title: "Web Development", desc: "Building resilient, performant interfaces end to end." },
  { icon: Palette, title: "UI/UX Design", desc: "Systems, typography and interaction detail." },
  { icon: Layers, title: "Digital Products", desc: "From zero-to-one prototypes to shipped features." },
  { icon: Sparkles, title: "Artificial Intelligence", desc: "Practical AI woven into everyday product flows." },
  { icon: Terminal, title: "Continuous Learning", desc: "Always one deep dive into something new." },
  { icon: Cpu, title: "Problem Solving", desc: "Breaking messy problems into simple pieces." },
];

const skillGroups = [
  {
    title: "Core Languages",
    skills: [
      { name: "HTML5", level: 96 },
      { name: "JavaScript", level: 94 },
      { name: "C", level: 90 },
      { name: "Python", level: 92 },
      { name: "CSS3", level: 92 },
      { name: "TypeScript", level: 88 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 84 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 88 },
      { name: "PostgreSQL", level: 84 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 76 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 94 },
      { name: "Figma", level: 82 },
      { name: "Vercel", level: 86 },
    ],
  },
];

const projects = [
  {
    year: "2026",
    category: "Web Apps",
    title: "Analytics Dashboard",
    desc: "Real-time dashboard with filterable charts, keyboard-first navigation and sub-second interactions.",
    tags: ["HTML", "JavaScript", "React", "REST API"],
  },
  {
    year: "2025",
    category: "Web Apps",
    title: "Portfolio & CMS",
    desc: "Content-driven marketing site with a lightweight editor, image pipeline and 100 Lighthouse scores.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    year: "2025",
    category: "Python",
    title: "Data Cleanup Toolkit",
    desc: "Python CLI that validates, de-duplicates and reshapes messy CSV exports into analysis-ready datasets.",
    tags: ["Python", "pandas", "CLI"],
  },
  {
    year: "2024",
    category: "Python",
    title: "Web Scraper & Reporter",
    desc: "Scheduled scraper that collects listings, stores them in PostgreSQL and emails a daily digest.",
    tags: ["Python", "PostgreSQL", "Automation"],
  },
  {
    year: "2024",
    category: "C / Systems",
    title: "Custom Memory Allocator",
    desc: "A malloc/free implementation in C with free-list coalescing, alignment handling and leak diagnostics.",
    tags: ["C", "Memory", "Data Structures"],
  },
  {
    year: "2023",
    category: "C / Systems",
    title: "Mini Shell in C",
    desc: "POSIX-style shell supporting pipes, redirection, background jobs and a built-in command set.",
    tags: ["C", "POSIX", "Systems"],
  },
];

const categories = ["All", "Web Apps", "Python", "C / Systems"];

function Index() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient neon background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.65_0.22_25/0.18),transparent_50%)]" />
        <div className="absolute top-20 -left-40 h-[500px] w-[500px] rounded-full bg-neon-red/20 blur-[120px]" />
        <div className="absolute bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-neon-red/15 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              SV
            </span>
            <span className="font-semibold tracking-tight">Sasidhar</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 neon-glow"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Open to freelance & full-time work
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Hi,
                <br />
                <span className="text-primary neon-text">Sasidhar</span>
              </h1>
              <p className="text-xl font-medium text-foreground/90">
                Web Developer & Creative Problem Solver
              </p>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                I design and build fast, accessible web experiences — turning rough ideas into
                products that feel effortless to use. I help founders and teams ship polished
                interfaces that load quickly, convert better, and stay easy to maintain.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 neon-glow"
              >
                View My Work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
              >
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-card p-3 shadow-2xl neon-border">
              <img
                src={profileAsset.url}
                alt="Portrait of Sasidhar"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 z-10 w-[90%] rounded-2xl border border-border/50 bg-card/90 p-4 backdrop-blur-md neon-border sm:w-[80%]">
              <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <span className="ml-auto font-mono text-xs text-muted-foreground">developer.ts</span>
              </div>
              <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-foreground/90">
                <code>
                  {`const developer = {
  name: 'Sasidhar',
  focus: 'product engineering',
  stack: ['react', 'ts', 'node'],
  ships: true,
};`}
                </code>
              </pre>
            </div>

            <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-border/50 bg-card/90 px-4 py-2 backdrop-blur-md sm:flex">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium">India · Available worldwide</span>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering with a designer&apos;s eye.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              A short story of how I got here and the kind of work I like to do.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a web developer focused on the intersection of clean engineering and
                thoughtful design. My path into technology started with curiosity — taking apart
                websites to understand why some felt instant and delightful while others felt heavy
                and confusing.
              </p>
              <p>
                Since then I&apos;ve worked across the stack: crafting component systems in React
                and TypeScript, shaping APIs in Node.js, and modelling data in SQL. I care a lot
                about the details most people never notice — focus states, loading behaviour,
                spacing rhythm, the way a page feels on a slow connection.
              </p>
              <p>
                What motivates me is the moment an interface disappears and the user simply gets what
                they came for. I enjoy product-minded work: sitting close to the problem, prototyping
                fast, and refining until it&apos;s genuinely good.
              </p>
            </div>

            <div className="space-y-8">
              <blockquote className="rounded-2xl border border-border/50 bg-card p-6 neon-border">
                <p className="text-lg font-medium italic text-foreground/90">
                  &ldquo;Good software feels obvious. Getting there is the hard, interesting
                  part.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">— Sasidhar Victus</footer>
              </blockquote>

              <div>
                <h3 className="mb-6 text-lg font-semibold">What I&apos;m into</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {interests.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-primary/30 hover:bg-surface"
                    >
                      <item.icon className="mb-3 h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The toolkit I build with.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              A focused stack I know deeply, from interface details all the way down to the database.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group, idx) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border/50 bg-card p-6 neon-border"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Projects</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Selected work, shipped and refined.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              A mix of web apps, Python tooling and low-level C projects — filter by what
              you&apos;re hiring for.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-surface neon-border"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.desc}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground hover:underline"
                  >
                    Code <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something good.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach out. I&apos;d love
              to hear from you!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none ring-ring transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none ring-ring transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none ring-ring transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none ring-ring transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 neon-glow sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>

            <div className="space-y-8">
              <div className="rounded-2xl border border-border/50 bg-card p-6 neon-border">
                <h3 className="mb-2 text-lg font-semibold">Prefer email?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Reach me directly and I&apos;ll usually reply within a day.
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  hello@example.com
                </a>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6 neon-border">
                <h3 className="mb-4 text-lg font-semibold">Find me online</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Twitter className="h-4 w-4" /> Twitter / X
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sasidhar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
