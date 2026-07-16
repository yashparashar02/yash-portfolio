import Reveal from "../Reveal/Reveal";

function SectionTitle({ icon: Icon, children }) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-4 sm:mb-12">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 sm:h-16 sm:w-16">
          {Icon && (
            <Icon className="text-xl text-purple-200 sm:text-2xl" />
          )}
        </div>

        <h2 className="min-w-0 text-3xl font-bold leading-tight text-white sm:text-4xl">
          {children}
        </h2>
      </div>
    </Reveal>
  );
}

export default SectionTitle;