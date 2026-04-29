import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { logo, github, linkedin } from "../assets";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-primary-light dark:bg-primary pt-12 pb-8 border-t border-secondary-light/10 dark:border-secondary/10 transition-colors duration-300">
            <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-6`}>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Jairo Logo"
                            className="w-11 h-11 object-contain transition-all duration-300"
                        />
                        <p className="text-text-light dark:text-white-100 text-[22px] font-bold transition-colors duration-300 flex items-center gap-2">
                            Jairo <span className="hidden sm:inline-block text-jairo-accent text-[18px] font-medium">| {t('navbar.role')}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">

                        <div
                            onClick={() => window.open("https://github.com/J41r0Ps", "_blank")}
                            className="w-11 h-11 rounded-full bg-jairo-accent flex justify-center items-center cursor-pointer shadow-sm hover:scale-110 hover:opacity-80 transition-all duration-300"
                            title="GitHub"
                        >
                            <img
                                src={github}
                                alt="github"
                                className="w-6 h-6 object-contain"
                            />
                        </div>

                        <div
                            onClick={() => window.open("https://www.linkedin.com/in/jairo-nacurena/", "_blank")}
                            className="w-11 h-11 rounded-full bg-jairo-accent flex justify-center items-center cursor-pointer shadow-sm hover:scale-110 hover:opacity-80 transition-all duration-300"
                            title="LinkedIn"
                        >
                            <img
                                src={linkedin}
                                alt="linkedin"
                                className="w-6 h-6 object-contain"
                            />
                        </div>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 mt-2 border-t border-secondary-light/10 dark:border-secondary/10 transition-colors duration-300">
                    <p className="text-text-light dark:text-secondary text-[14px] font-medium transition-colors duration-300 text-center">
                        &copy; {currentYear} Jairo Nacurena. {t('footer.rights')}
                    </p>
                    <p className="text-text-light dark:text-secondary text-[14px] font-medium transition-colors duration-300 text-center">
                        {t('footer.built')} <span className="text-jairo-accent font-bold">React & Tailwind</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;