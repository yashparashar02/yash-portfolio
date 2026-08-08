import {
  HiOutlineArrowUpRight,
  HiOutlineBookOpen,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

function CourseCard({
  title,
  provider,
  year,
  description,
  technologies,
  courseUrl,
  certificateUrl,
}) {
  return (
    <article className="rounded-3xl border border-white/15 bg-white/[0.05] p-7 shadow-2xl backdrop-blur-md sm:p-10">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-5">
          {/* Course Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06]">
            <HiOutlineBookOpen className="text-3xl text-purple-200" />
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

      {/* Description */}
      <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>

      {/* Technologies */}
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

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-4">
        {/* Course */}
        {courseUrl && (
          <a
            href={courseUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 font-semibold text-purple-200 transition-all duration-300 hover:border-purple-300/40 hover:bg-white/[0.1] hover:text-white"
          >
            View Course
            <HiOutlineArrowUpRight className="text-lg" />
          </a>
        )}

        {/* Certificate */}
        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-5 py-3 font-semibold text-purple-200 transition-all duration-300 hover:border-purple-300/40 hover:bg-purple-400/20 hover:text-white"
          >
            View Certificate
            <HiOutlineAcademicCap className="text-lg" />
          </a>
        )}
      </div>
    </article>
  );
}

export default CourseCard;