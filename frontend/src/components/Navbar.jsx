import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary-light dark:bg-primary transition-colors duration-300 shadow-sm dark:shadow-none`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className='text-text-light dark:text-white-100 text-[18px] font-bold cursor-pointer flex items-center transition-colors duration-300'>
            Jairo &nbsp;
            <span className="sm:block hidden text-secondary-light dark:text-secondary font-medium">
              {t('navbar.role')}
            </span>
          </p>
        </Link>

        <div className="flex items-center gap-6">

          <ul className="list-none hidden sm:flex flex-row gap-8">
            {navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title
                ? "text-jairo-accent"
                : "text-text-light dark:text-secondary"
                } hover:text-jairo-accent dark:hover:text-white-100 text-[15px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{t(link.title)}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 ml-2 border-l border-secondary-light dark:border-tertiary pl-5 transition-colors duration-300">
            <LangToggle />
            <ThemeToggle />
          </div>

          <div className="sm:hidden flex justify-end items-center ml-4">
            <img
              src={toggle ? close : menu}
              alt="Menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300 dark:invert dark:brightness-0"
              onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-primary-light dark:bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[999] rounded-xl shadow-card transition-colors duration-300`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
                {navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title
                    ? "text-jairo-accent"
                    : "text-text-light dark:text-secondary"
                    } font-poppins font-medium cursor-pointer text-[15px] w-full`}
                  >
                    <a
                      href={`#${link.id}`}
                      className="block w-full"
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