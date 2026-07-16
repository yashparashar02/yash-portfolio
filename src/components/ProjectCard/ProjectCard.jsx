import {
  HiOutlineArrowUpRight,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

function ProjectCard({
  title,
  description,
  technologies,
  github,
}) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.08] sm:p-8">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-2xl text-purple-200">
          <HiOutlineCodeBracket />
        </div>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-400 transition-all duration-300 hover:border-purple-300/30 hover:bg-white/[0.08] hover:text-white"
        >
          <HiOutlineArrowUpRight />
        </a>
      </div>

      <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-base leading-8 text-slate-300">
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-200 transition-colors duration-300 hover:text-white"
      >
        View on GitHub
        <HiOutlineArrowUpRight className="text-lg" />
      </a>
    </article>
  );
}

export default ProjectCard;