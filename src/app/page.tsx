import ParticlesBackground from "@/components/ParticlesBackground";

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="rounded-2xl border-1 border-white/10 bg-zinc-950/30 p-6 md:p-8 
    transition-colors duration-300 hover:border-white"
    >
      <h3 className="text-xl md:text-2xl font-bold text-[rgb(224,224,224)]">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-200 
            transition hover:border-white/35 hover:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center scroll-mt-24 py-16 md:py-24 overflow-hidden"
      >
        <ParticlesBackground />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-[rgb(224,224,224)]">
            Vicky Narotamo
          </h1>
          <p className="text-gray-400 text-lg mt-4">Further Info</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg_gradient-to-b from-transparent to-[#0a0a0a]" />
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 bg-zinc-900 py-16 md:py-24 scroll-mt-24  border-t border-white/5"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading text-center text-4xl md:text-5xl font-extrabold text-[rgb(224,224,224)]">
            About Me
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] items-start">
            {" "}
            {/* Profile card */}
            <div className="flex flex-col items-center">
              <div className="group relative">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="h-56 w-56 rounded-2xl object-cover border-2 border-white/20 transition-all duration-300 ease-out group-hover:scale-105
                  group-hover:border-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                />
              </div>

              {/* BUTTON */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm text-[rgb(224,224,224)] transition hover:border-white/40 hover:bg-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4  w-4 group-hover:animate-bounce"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>

                <span>Download Resume</span>
              </a>
            </div>
            {/* Text */}
            <div className="text-left space-y-5 text-base sm:text-lg lg:text-x; text-gray300/90 leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-[rgb(224,224,224)] font-semibold">
                  Vicky Narotamo
                </span>
                , a Computer Science student who enjoys building clean, scalable
                web experiences. I like designing interfaces, shipping features,
                and refining the small details that make applications feel good
                to use.
              </p>

              <p>
                Currently working with React, Next.js, and Tailwind CSS, and I
                enjoy turning ideas into functional projects with maintainable
                code. I also have a strong foundation in functional programming
                through Scala, which influences how I think about structure and
                correctness.
              </p>

              <p>
                I’m currently focused on improving my frontend skills while
                continuing to explore functional programming and strengthening
                my backend and DevOps fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 bg-zinc-900 py-16 md:py-24 scroll-mt-24"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading text-center text-4xl md:text-5xl font-extrabold text-[rgb(224,224,224)]">
            Skills
          </h2>

          {/* Content */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <SkillCard
              title="Frontend Development & Delivery"
              items={[
                "React.js",
                "Next.js (App Router, File-Based Routing)",
                "Tailwind CSS",
                "Responsive, Component-Based UI",
                "Visual Hierarchy, Typogrtaphy & Layout",
                "Git & GitHub (Iterative Development, Refactoring)",
                "local → Production Workflow",
                "User-First Design Decisions",
              ]}
            />

            <SkillCard
              title="Programming & Software Development"
              items={[
                "Scala (Functional Programming Concepts)",
                "Clean, Modular Code Design",
                "Debugging & Systematic Problem Solving",
                "Building Small, Structured Applications",
              ]}
            />

            <SkillCard
              title="Cybersecurity Foundations"
              items={[
                "Data Protection & Privacy Fundamentals",
                "GDPR & Regulatory Awareness",
                "DPIA",
                "Threat Modeling",
                "Basic Risk Assessment & Mitigation Principles",
              ]}
            />

            <SkillCard
              title="Computer Science Foundations"
              items={[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Database Systems (SQL)",
                "Operating Systems Basics",
                "Computer Networks Fundamentals",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative z-10 bg-zinc-900 py-16 md:py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading text-center text-4xl md:text-5xl font-extrabold text-[rgb(224,224,224)]">
            Experiences
          </h2>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 bg-zinc-900 py-16 md:py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading text-center text-4xl md:text-5xl font-extrabold text-[rgb(224,224,224)]">
            Projects
          </h2>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 bg-zinc-900 py-16 md:py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading text-center text-4xl md:text-5xl font-extrabold text-[rgb(224,224,224)]">
            Contact Me
          </h2>
        </div>
      </section>
    </main>
  );
}
