import { HiOutlineMapPin } from "react-icons/hi2";

import GlassCard from "../GlassCard/GlassCard";
import HighlightedText from "../HighlightedText/HighlightedText";

function ExperienceCard({
  role,
  company,
  location,
  duration,
  highlights,
}) {
  return (
    <GlassCard className="p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {role}
          </h3>

          <p className="mt-2 text-base font-medium text-purple-200 sm:text-lg">
            {company}
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-400 sm:text-base">
            <HiOutlineMapPin className="shrink-0 text-lg text-purple-300" />

            <span>{location}</span>
          </div>
        </div>

        <p className="shrink-0 text-sm font-medium text-slate-300 sm:text-base">
          {duration}
        </p>
      </div>

      <ul className="mt-8 space-y-4">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
          >
            <span
              className="mt-[0.85rem] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300"
              aria-hidden="true"
            />

            <span>
              <HighlightedText text={highlight} />
            </span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default ExperienceCard;