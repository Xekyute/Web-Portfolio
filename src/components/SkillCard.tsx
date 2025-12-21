type SkillCardProps = {
  title: string;
  items: string[];
};

export default function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-6 md:p-8 transition-colors duration-300 hover:border-white">
      <h3 className="text-xl md:text-2xl font-bold text-[rgb(224,224,224)]">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-200 transition hover:border-white/35 hover:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
