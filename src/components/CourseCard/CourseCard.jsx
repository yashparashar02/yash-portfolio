import {
  HiOutlineArrowUpRight,
  HiOutlineBookOpen,
} from "react-icons/hi2";

function CourseCard({
  title,
  provider,
  year,
  description,
  technologies,
  courseUrl,
}) {
  return (
    <article className="group rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition-all duration-300 hover:border-purple-300/30 hover:bg-white/[0.08] sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-5">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-2xl text-purple-200 sm:flex">
            <HiOutlineBookOpen />
          </div>

          <div>
            <h3 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h3>

            <p className="mt-3 text-lg font-semibold text-purple-200">
              {provider}
            </p>
          </div>
        </div>

        <span className="shrink-0 font-semibold text-slate-300">
          {year}
        </span>
      </div>

      <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
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
        href={courseUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-200 transition-colors duration-300 hover:text-white"
      >
        View Course
        <HiOutlineArrowUpRight className="text-lg" />
      </a>
    </article>
  );
}

export default CourseCard;