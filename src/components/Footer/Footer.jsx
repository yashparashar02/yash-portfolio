import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-400 md:flex-row">
        <div>
          © 2026 Yash Parashar
        </div>

        <div>
          Built with React + Tailwind CSS
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yashparashar02"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/yash-parashar-7708b3231/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;