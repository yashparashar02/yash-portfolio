import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Container from "../Container/Container";
import { navigation } from "../../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      ...navigation.map((item) => item.href.replace("#", "")),
    ];

    const handleScroll = () => {
      const navbarOffset = 160;

      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const sectionTop = section.offsetTop;

        if (window.scrollY + navbarOffset >= sectionTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (event, href) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const navbarOffset = window.innerWidth < 640 ? 105 : 120;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);

    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <nav className="relative rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-7">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={(event) => scrollToSection(event, "#home")}
              className="text-2xl font-bold text-white"
            >
              Yash<span className="text-purple-400">.</span>
            </a>

            <div className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(event) =>
                      scrollToSection(event, item.href)
                    }
                    className={`relative py-2 font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-purple-300 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                setMenuOpen((previousState) => !previousState)
              }
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          {menuOpen && (
            <div
              id="mobile-navigation"
              className="absolute left-0 right-0 top-[calc(100%+0.75rem)] lg:hidden"
            >
              <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
                {navigation.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(event) =>
                        scrollToSection(event, item.href)
                      }
                      className={`flex items-center justify-between rounded-xl px-4 py-3 font-semibold transition-colors ${
                        isActive
                          ? "bg-white/10 text-purple-200"
                          : "text-slate-200 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>

                      {isActive && (
                        <span
                          className="h-2 w-2 rounded-full bg-purple-300"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;