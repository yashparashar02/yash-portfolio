function SkillCard({ name, icon: Icon }) {
  return (
    <div className="group flex min-h-40 flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-slate-900/45 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.08]">
      <Icon className="text-4xl text-slate-400 transition-all duration-300 group-hover:text-purple-200 sm:text-5xl" />

      <h3 className="text-base font-semibold text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-lg">
        {name}
      </h3>
    </div>
  );
}

export default SkillCard;