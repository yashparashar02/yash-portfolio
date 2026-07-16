import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import Reveal from "../../components/Reveal/Reveal";

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-500/15 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-purple-100">
                Let's Connect
              </span>

              <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's build something great.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Open to Software Engineer, Java Backend, and Full-Stack
                Development opportunities. Let's connect and build reliable
                software.
              </p>

              <a
                href="mailto:yashparashar.211@gmail.com"
                className="mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/10 sm:w-fit sm:text-base"
              >
                <FiMail className="shrink-0 text-lg" />

                <span className="min-w-0 break-all sm:break-normal">
                  yashparashar.211@gmail.com
                </span>

                <FiArrowUpRight className="hidden shrink-0 text-lg sm:block" />
              </a>

              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="https://github.com/yashparashar02"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit GitHub profile"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/10"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/yash-parashar-7708b3231/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/10"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Contact;