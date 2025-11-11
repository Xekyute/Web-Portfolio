import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center h-screen overflow-hidden bg-black">
      <ParticlesBackground />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-[rgb(224,224,224)]">
          Vicky Narotamo
        </h1>
        <p className="text-gray-400 text-lg mt-4">Further Info</p>
      </div>
    </main>
  );
}
