import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import SectionHeader from "./SectionHeader"

/**
 * One entry on the experience timeline: company icon marker on the spine,
 * mono date, role, company, and bullet points. All text comes from i18n
 * keys stored in constants/index.js.
 */
const ExperienceCard = ({ experience, index }) => {
  const { t } = useTranslation();

  return (
    <motion.li
      variants={fadeIn("up", "spring", 0.15 * index, 0.7)}
      className="relative ps-12 sm:ps-16"
    >
      <span
        className="absolute start-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-secondary-light/20 dark:border-secondary/15 bg-white dark:bg-tertiary shadow-sm"
        style={{ backgroundColor: experience.iconBg }}
      >
        <img
          src={experience.icon}
          alt={t(experience.company_name)}
          loading="lazy"
          decoding="async"
          className="h-8 w-8 rounded-lg object-contain"
        />
      </span>

      <div className="group rounded-2xl border border-secondary-light/15 dark:border-secondary/10 bg-white/70 dark:bg-tertiary p-6 sm:p-8 transition-all duration-300 hover:border-jairo-accent/40 dark:hover:border-accent-bright/30 hover:shadow-card-light dark:hover:shadow-card">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-secondary-light dark:text-secondary/80">
          {t(experience.date)}
        </p>

        <h3 className="mt-3 font-display text-[22px] sm:text-[24px] font-semibold leading-tight text-primary dark:text-white transition-colors duration-300">
          {t(experience.title)}
        </h3>
        <p className="mt-1 text-[15px] font-medium text-jairo-accent dark:text-accent-bright">
          {t(experience.company_name)}
        </p>

        <ul className="mt-5 space-y-3">
          {experience.points.map((pointKey, i) => (
            <li
              key={`experience-point-${i}`}
              className="flex gap-3 text-[15px] leading-relaxed text-text-light dark:text-secondary transition-colors duration-300"
            >
              <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-jairo-accent/70" aria-hidden="true" />
              {t(pointKey)}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

/**
 * "Experience" section: custom vertical timeline with a gradient spine.
 * (Replaces the react-vertical-timeline-component dependency.)
 */
function Experience() {
  const { t } = useTranslation();

  return (
    <>
      <SectionHeader index="02" kicker={t('experience.sectionSubText')} title={t('experience.sectionHeadText')} />

      <ol className="relative mt-16 flex max-w-3xl flex-col gap-12 before:absolute before:start-6 before:top-14 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-jairo-accent/50 before:via-secondary-light/20 before:to-transparent dark:before:via-secondary/15">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
        ))}
      </ol>
    </>
  )
}

export default SectionWrapper(Experience, "work")
