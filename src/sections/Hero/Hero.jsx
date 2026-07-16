import { motion } from "motion/react";

import {
  HiOutlineArrowDownTray,
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineMapPin,
} from "react-icons/hi2";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";

function Hero() {
  return (
    <Section id="home">
      <Container>
        <div className="flex min-h-[calc(100vh-7rem)] items-center">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Yash Parashar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mt-6 max-w-5xl text-2xl font-semibold leading-tight text-purple-200 sm:text-3xl lg:text-4xl">
                Java Software Engineer • Full-Stack Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 flex flex-col gap-4 text-base text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:text-lg"
            >
              <div className="flex items-center gap-2">
                <HiOutlineMapPin className="shrink-0 text-xl text-purple-300" />

                <span>Bengaluru, Karnataka</span>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineBriefcase className="shrink-0 text-xl text-purple-300" />

                <span>1+ year of experience</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full border border-purple-300/30 bg-purple-400/15 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-purple-400/25"
              >
                View My Work

                <HiOutlineArrowRight className="text-xl" />
              </a>

              <a
                href="/Yash_Parashar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-6 py-4 font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/10 hover:text-white"
              >
                Resume

                <HiOutlineArrowDownTray className="text-xl" />
              </a>

              <a
                href="https://github.com/yashparashar02"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit GitHub profile"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-xl text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/10 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/yash-parashar-7708b3231/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn profile"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-xl text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/10 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>

            <div className="hidden justify-center lg:flex">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />

                <img
                  src="/profile.png"
                  alt="Yash Parashar"
                  className="relative h-80 w-80 rounded-full border-4 border-white/10 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;