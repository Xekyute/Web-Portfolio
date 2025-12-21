import ParticlesBackground from "@/components/ParticlesBackground";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import Image from "next/image";
import SkillCard from "@/components/SkillCard";

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
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </section>
      {/* About */}
      <section
        id="about"
        className="relative z-10 bg-zinc-900 py-16 md:py-24 scroll-mt-24  border-t border-white/5"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading text-center text-4xl md:text-5xl">
            <span className="text-brand-light mr-2">/</span>
            About Me
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] items-start">
            {" "}
            {/* Profile card */}
            <div className="flex flex-col items-center">
              <div className="group relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={224}
                  height={224}
                  className="h-56 w-56 rounded-2xl object-cover border-2 border-white/20 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                />
              </div>

              {/* BUTTON */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm text-[rgb(224,224,224)] transition hover:border-white/40 hover:bg-white/5"
              >
                <Download className="mr-2 h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>
            {/* Text */}
            <div className="text-left space-y-5 text-base sm:text-lg lg:text-xl text-gray-300/90 leading-relaxed">
              <p>
                I&apos;m{" "}
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
                I&apos;m currently focused on improving my frontend skills while
                continuing to explore functional programming and strengthening
                my backend and DevOps skills.
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
          <h2 className="section-heading text-center text-4xl md:text-5xl">
            <span className="text-brand-light mr-2">/</span>
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
                "Visual Hierarchy, Typography & Layout",
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
                "Python (Scripting, Backend APIs, Automation)",
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
          <h2 className="section-heading text-center text-4xl md:text-5xl">
            <span className="text-brand-light mr-2">/</span>
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
          <h2 className="section-heading text-center text-4xl md:text-5xl">
            <span className="text-brand-light mr-2">/</span>
            Projects
          </h2>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 bg-zinc-900 py-16 md:py-24 scroll-mt-24"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading text-center text-4xl md:text-5xl">
            <span className="text-brand-light mr-2">/</span>
            Contact Me
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-center text-sm md:text-base text-gray-400 leading-relaxed">
            Whether it&apos;s a project, idea, or inquiry.
            <br />
            Use the form below to get in touch and I&apos;ll respond as soon as
            possible.
          </p>
        </div>

        {/* Form wrapper */}
        <div className="mt-12 mx-auto max-w-3xl">
          <form className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-[rgb(224,224,224)] placeholder:text-gray-500 outline-none transition focus:border-white/40"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-[rgb(224,224,224)] placeholder:text-gray-500 outline-none transition focus:border-white/40"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Your message here..."
                className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3
                text-[rgb(224,224,224)] placeholder:text-gray-500 
                outline-none transition focus:border-white/40"
              />
            </div>

            {/* Submit row */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full rounded-xl border border-brand-light/50 bg-zinc-950/40 py-3 text-brand-light transition-all duration-200 hover:bg-brand-light/15 hover:border-brand-light"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Separator + Footer belong OUTSIDE the form */}
        <div className="mt-20 border-t border-white/10" />

        <footer className="py-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 text-center space-y-6">
            <div className="flex justify-center gap-6 text-gray-400">
              <a
                href="https://github.com/Xekyute"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="hover:text-white transition"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/vicky-narotamo-aa3785363/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:vickynarotamo18@gmail.com"
                aria-label="Send email"
                className="hover:text-white transition"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <p>© 2025 Vicky Narotamo. All rights reserved.</p>
              <p>Built with Next.js & Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
