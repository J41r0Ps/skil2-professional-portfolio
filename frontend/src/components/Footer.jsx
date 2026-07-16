import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { logo, github, linkedin } from "../assets";

/**
 * Site footer in two parts:
 *
 * 1. CTA band — large display headline + email button. This is the site's
 *    primary contact path while the Contact form is disabled (see
 *    Contact.jsx), so it is deliberately loud.
 * 2. Classic footer row — identity block, email, social links, copyright.
 */
const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-primary-light dark:bg-primary pt-14 pb-8 border-t border-secondary-light/10 dark:border-secondary/10 transition-colors duration-300">

            {/* CTA band */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`${styles.paddingX} max-w-7xl mx-auto mb-16 text-center`}
            >
                <p className={`${styles.sectionSubText} text-jairo-accent dark:text-accent-bright`}>
                    {t('footer.ctaKicker')}
                </p>
                <h2 className="mt-4 font-display font-bold tracking-tight text-primary dark:text-white md:text-[56px] sm:text-[44px] text-[34px] leading-[1.05] transition-colors duration-300">
                    {t('footer.ctaTitle')}
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-secondary-light dark:text-secondary transition-colors duration-300">
                    {t('footer.ctaText')}
                </p>
                <a
                    href="mailto:jaironacurenaturnhout01@gmail.com"
                    className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-jairo-accent px-8 py-4 font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#456a61] active:translate-y-0 active:scale-[0.98]"
                >
                    {t('footer.ctaButton')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m3 7 9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                    </svg>
                </a>
            </motion.div>

            <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-8 border-t border-secondary-light/10 dark:border-secondary/10 pt-10`}>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Jairo Nacurena logo"
                            className="w-10 h-10 object-contain transition-all duration-300"
                        />
                        <div>
                            <p className="font-display text-[18px] font-semibold text-text-light dark:text-white-100 transition-colors duration-300">
                                Jairo Nacurena
                            </p>
                            <p className="font-mono text-[12px] text-secondary-light dark:text-secondary/80 transition-colors duration-300">
                                {t('navbar.role')}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:jaironacurenaturnhout01@gmail.com"
                            className="font-mono text-[13px] text-secondary-light dark:text-secondary transition-colors duration-300 hover:text-jairo-accent dark:hover:text-accent-bright mr-2 hidden xs:inline-block"
                        >
                            jaironacurenaturnhout01@gmail.com
                        </a>

                        <a
                            href="https://github.com/J41r0Ps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            title="GitHub"
                            className="w-11 h-11 rounded-xl border border-secondary-light/20 dark:border-secondary/15 bg-white/60 dark:bg-tertiary flex justify-center items-center transition-all duration-300 hover:-translate-y-0.5 hover:border-jairo-accent/60 hover:shadow-glow active:translate-y-0"
                        >
                            <img src={github} alt="" className="w-5 h-5 object-contain dark:invert-0 invert" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jairo-nacurena/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            title="LinkedIn"
                            className="w-11 h-11 rounded-xl border border-secondary-light/20 dark:border-secondary/15 bg-white/60 dark:bg-tertiary flex justify-center items-center transition-all duration-300 hover:-translate-y-0.5 hover:border-jairo-accent/60 hover:shadow-glow active:translate-y-0"
                        >
                            <img src={linkedin} alt="" className="w-5 h-5 object-contain dark:invert-0 invert" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-secondary-light/10 dark:border-secondary/10 transition-colors duration-300">
                    <p className="text-secondary-light dark:text-secondary text-[13px] transition-colors duration-300 text-center">
                        &copy; {currentYear} Jairo Nacurena. {t('footer.rights')}
                    </p>
                    <p className="font-mono text-[12px] text-secondary-light dark:text-secondary/80 transition-colors duration-300 text-center">
                        {t('footer.built')}
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
