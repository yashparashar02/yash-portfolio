import {
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Reveal from "../../components/Reveal/Reveal";

function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionTitle icon={FaGraduationCap}>
          Education
        </SectionTitle>

        <Reveal>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:border-purple-300/30 hover:bg-white/[0.07] sm:p-8 lg:p-10">
            <div className="flex gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 sm:flex">
                <FaGraduationCap className="text-xl text-purple-200" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="break-words text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                      Bachelor of Engineering in Computer Science
                    </h3>

                    <p className="mt-3 text-base font-semibold text-purple-200 sm:text-lg">
                      East West Institute of Technology
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-400 sm:text-base">
                      <FaMapMarkerAlt className="shrink-0 text-purple-300" />

                      <span>Bengaluru, Karnataka</span>
                    </div>
                  </div>

                  <p className="shrink-0 text-sm font-semibold text-slate-300 sm:text-base">
                    Dec 2021 – May 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="my-7 h-px bg-white/10 sm:my-8" />

            <div className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                CGPA
              </span>

              <span className="text-xl font-bold text-white">
                7.76
              </span>
            </div>
          </article>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Education;