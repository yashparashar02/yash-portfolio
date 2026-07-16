import {
  HiOutlineAcademicCap,
  HiOutlineMapPin,
} from "react-icons/hi2";

function EducationCard({
  degree,
  institution,
  location,
  duration,
  cgpa,
}) {
  return (
    <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition-all duration-300 hover:border-purple-300/30 hover:bg-white/[0.08] sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-5">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-2xl text-purple-200 sm:flex">
            <HiOutlineAcademicCap />
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {degree}
            </h3>

            <p className="mt-3 text-lg font-semibold text-purple-200">
              {institution}
            </p>

            <div className="mt-4 flex items-center gap-2 text-slate-400">
              <HiOutlineMapPin className="shrink-0 text-purple-300" />

              <span>{location}</span>
            </div>
          </div>
        </div>

        <p className="shrink-0 font-semibold text-slate-300">
          {duration}
        </p>
      </div>

      <div className="mt-8 border-t border-white/10 pt-7">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3">
          <span className="text-sm font-medium uppercase tracking-wider text-slate-400">
            CGPA
          </span>

          <span className="text-xl font-bold text-white">
            {cgpa}
          </span>
        </div>
      </div>
    </article>
  );
}

export default EducationCard;