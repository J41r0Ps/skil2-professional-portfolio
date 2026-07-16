import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

/**
 * Fixed top navigation.
 *
 * - Transparent over the hero; switches to a frosted-glass bar (blur +
 *   border) once the page is scrolled.
 * - Scroll-spy: watches `section[id]` offsets and highlights the link for
 *   the section currently in view with an animated underline.
 * - Includes the language cycler, theme toggle, and a mobile dropdown menu.
 */
function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentSectionId = section.getAttribute("id");
        }
      });

      const currentLink = navLinks.find(link => link.id === currentSectionId);
      if (currentLink) {
        setActive(currentLink.title);
      } else if (window.scrollY < 50) {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-light/80 dark:bg-primary/75 backdrop-blur-md border-b border-secondary-light/10 dark:border-secondary/10 shadow-sm dark:shadow-none"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href="#"
          className="flex items-center gap-2.5"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
          <img src={logo} alt="Jairo Nacurena logo" className="w-9 h-9 object-contain" />
          <p className='text-text-light dark:text-white-100 text-[17px] font-display font-semibold cursor-pointer flex items-baseline gap-2 transition-colors duration-300'>
            Jairo
            <span className="lg:inline hidden font-mono text-[12px] font-normal text-secondary-light dark:text-secondary tracking-wide">
              {t('navbar.role')}
            </span>
          </p>
        </a>

        <div className="flex items-center gap-6">

          <ul className="list-none hidden md:flex flex-row gap-7">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className={`group relative text-[15px] font-medium transition-colors duration-300 ${
                    active === link.title
                      ? "text-jairo-accent dark:text-accent-bright"
                      : "text-text-light dark:text-secondary hover:text-jairo-accent dark:hover:text-white-100"
                  }`}
                >
                  {t(link.title)}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left rounded-full bg-jairo-accent dark:bg-accent-bright transition-transform duration-300 ${
                      active === link.title ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-2 border-l border-secondary-light/25 dark:border-secondary/20 pl-5 transition-colors duration-300">
            <LangToggle />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex justify-end items-center ml-2">
            <button
              type="button"
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              onClick={() => setToggle(!toggle)}
              className="p-1"
            >
              <img
                src={toggle ? close : menu}
                alt=""
                className="w-[26px] h-[26px] object-contain transition-all duration-300 dark:invert dark:brightness-0"
              />
            </button>

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-primary-light/95 dark:bg-black-100/95 backdrop-blur-md absolute top-16 right-4 min-w-[180px] z-[999] rounded-2xl border border-secondary-light/15 dark:border-secondary/15 shadow-card transition-colors duration-300`}>
              <ul className="list-none flex justify-end items-start flex-col gap-1 w-full">
                {navLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={`#${link.id}`}
                      className={`block w-full rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
                        active === link.title
                          ? "text-jairo-accent dark:text-accent-bright bg-jairo-accent/10"
                          : "text-text-light dark:text-secondary hover:bg-jairo-accent/10"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      {t(link.title)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
