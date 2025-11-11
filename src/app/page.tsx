import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center scroll-mt-24 py-16 md:py-24"
      >
        <ParticlesBackground />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-[rgb(224,224,224)]">
            Vicky Narotamo
          </h1>
          <p className="text-gray-400 text-lg mt-4">Further Info</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-[rgb(224,224,224)]">
            About
          </h2>
          <p className="mt-4 text-gray-400">Short Intro...</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-[rgb(224,224,224)]">
            My Expertise
          </h2>
          {/* Content */}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-[rgb(224,224,224)]">
            Key Experiences
          </h2>
        </div>
      </section>

      {/* Projects */}
      <section id="projetcs" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-[rgb(224,224,224)]">
            My Work
          </h2>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py=24 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-[rgb(224,224,224)]">
            Get in touch
          </h2>
        </div>
      </section>
    </main>
  );
}
