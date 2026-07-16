import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { profile, hobby } from "../assets";
import { SectionWrapper } from "../hoc";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

/**
 * One "what I do" card: ghost index number, icon, title, and an accent
 * rule that grows on hover. Rendered inside a cursor spotlight.
 */
const ServiceCard = ({ index, title, icon }) => {
    const { t } = useTranslation();

    return (
        <SpotlightCard
            tilt
            variants={fadeIn("up", "spring", 0.15 * index, 0.7)}
            className="rounded-2xl border border-secondary-light/15 dark:border-secondary/10 bg-white/70 dark:bg-tertiary p-6 transition-[border-color,box-shadow] duration-300 hover:border-jairo-accent/50 dark:hover:border-accent-bright/40 hover:shadow-card-light dark:hover:shadow-card"
        >
            <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[72px] font-bold leading-none text-secondary-light/10 dark:text-secondary/[0.07] transition-colors duration-300 group-hover:text-jairo-accent/15">
                0{index + 1}
            </span>

            <img src={icon} alt="" loading="lazy" decoding="async" className="h-12 w-12 object-contain" />
            <h3 className="mt-5 font-display text-[18px] font-semibold text-primary dark:text-white transition-colors duration-300">
                {t(title)}
            </h3>
            <span className="mt-3 block h-[2px] w-8 rounded-full bg-jairo-accent/60 transition-all duration-300 group-hover:w-14 group-hover:bg-jairo-accent" />
        </SpotlightCard>
    )
}

/**
 * "About" section: introduction, CV actions, photo collage, and the four
 * service cards. Wrapped by SectionWrapper, which provides the section
 * element, anchor id, and scroll-triggered stagger container.
 */
const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-14 items-center lg:items-start">

                <div className="flex-1">
                    <SectionHeader index="01" kicker={t('about.sectionSubText')} title={t('about.sectionHeadText')} />

                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className="mt-6 max-w-2xl whitespace-pre-line text-[16px] leading-[1.8] text-secondary-light dark:text-secondary transition-colors duration-300"
                    >
                        {t('about.description')}
                    </motion.p>

                    <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="/cv.pdf"
                            download="Jairo_Nacurena_CV.pdf"
                            className="inline-flex items-center gap-2 rounded-xl bg-jairo-accent px-7 py-3.5 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#456a61] hover:shadow-glow active:translate-y-0 active:scale-[0.98]"
                        >
                            {t('about.downloadCV')}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
                            </svg>
                        </a>
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-xl border border-secondary-light/30 dark:border-secondary/25 px-7 py-3.5 font-medium text-text-light dark:text-white-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-jairo-accent hover:text-jairo-accent dark:hover:border-accent-bright dark:hover:text-accent-bright active:translate-y-0 active:scale-[0.98]"
                        >
                            {t('about.viewCV')}
                        </a>
                    </motion.div>
                </div>

                {/* photo collage: portrait anchored top-left over an offset accent
                    frame, hobby shot overlapping bottom-right */}
                <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 w-full">
                    <div className="relative w-[280px] h-[320px] sm:w-[400px] sm:h-[450px] mx-auto">

                        <div
                            aria-hidden="true"
                            className="absolute top-4 left-4 h-[250px] w-[200px] rounded-2xl border border-jairo-accent/40 sm:h-[350px] sm:w-[280px]"
                        />

                        <motion.img
                            variants={fadeIn("right", "spring", 0.3, 1)}
                            src={profile}
                            alt="Jairo Nacurena, professional portrait"
                            loading="lazy"
                            decoding="async"
                            className="absolute top-0 left-0 z-10 h-[250px] w-[200px] rounded-2xl object-cover shadow-card ring-1 ring-secondary-light/20 dark:ring-secondary/15 transition-transform duration-500 hover:scale-[1.02] sm:h-[350px] sm:w-[280px]"
                        />

                        <motion.img
                            variants={fadeIn("left", "spring", 0.5, 1)}
                            src={hobby}
                            alt="Jairo playing football"
                            loading="lazy"
                            decoding="async"
                            className="absolute bottom-0 right-0 z-20 h-[150px] w-[150px] rounded-2xl object-cover shadow-card ring-4 ring-primary-light dark:ring-primary transition-transform duration-500 hover:scale-[1.03] sm:h-[210px] sm:w-[210px]"
                        />

                    </div>
                </div>

            </div>

            <div className="mt-20 grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");
