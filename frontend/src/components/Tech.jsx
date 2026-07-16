import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { SectionWrapper } from "../hoc"
import { technologies, techCategories } from "../constants"
import { fadeIn } from "../utils/motion";
import SectionHeader from "./SectionHeader";

/** Small icon + label chip for one technology. */
const TechChip = ({ name, icon }) => (
  <li className="group flex items-center gap-2.5 rounded-xl border border-secondary-light/15 dark:border-secondary/10 bg-white/70 dark:bg-tertiary px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-jairo-accent/50 dark:hover:border-accent-bright/40 hover:shadow-card-light dark:hover:shadow-card">
    <img src={icon} alt="" loading="lazy" decoding="async" className="h-6 w-6 object-contain" />
    <span className="text-[14px] font-medium text-text-light dark:text-white-100 transition-colors duration-300">
      {name}
    </span>
  </li>
);

/**
 * "Skills" section: hard skills grouped into rows by category (frontend,
 * backend, data & AI, devops — defined in constants/techCategories), plus
 * soft skills as a closing dashed-chip row. Categories are two-column on
 * desktop: mono label left, chips right.
 */
function Tech() {
  const { t } = useTranslation();

  const softSkills = t('tech.softSkills', { returnObjects: true }) || [];

  return (
    <>
      <SectionHeader index="03" kicker={t('tech.sectionSubText')} title={t('tech.sectionHeadText')} />

      <div className="mt-14 flex flex-col gap-10">
        {techCategories.map((category, catIndex) => {
          const items = technologies.filter((tech) => tech.category === category.id);

          return (
            <motion.div
              key={category.id}
              variants={fadeIn("up", "spring", 0.1 * catIndex, 0.7)}
              className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-8"
            >
              <h3 className="flex items-baseline gap-3 font-mono text-[13px] uppercase tracking-[0.2em] text-secondary-light dark:text-secondary/80 md:pt-3">
                <span className="text-jairo-accent dark:text-accent-bright">/</span>
                {t(category.label)}
              </h3>

              <ul className="flex flex-wrap gap-3">
                {items.map((technology) => (
                  <TechChip key={technology.name} {...technology} />
                ))}
              </ul>
            </motion.div>
          );
        })}

        {/* soft skills as the closing group */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.7)}
          className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-8"
        >
          <h3 className="flex items-baseline gap-3 font-mono text-[13px] uppercase tracking-[0.2em] text-secondary-light dark:text-secondary/80 md:pt-3">
            <span className="text-jairo-accent dark:text-accent-bright">/</span>
            {t('tech.softSkillsTitle')}
          </h3>

          <ul className="flex flex-wrap gap-3">
            {Array.isArray(softSkills) && softSkills.map((skill, index) => (
              <li
                key={`soft-skill-${index}`}
                className="rounded-xl border border-dashed border-secondary-light/25 dark:border-secondary/20 px-4 py-2.5 text-[14px] font-medium text-secondary-light dark:text-secondary transition-all duration-300 hover:border-jairo-accent/60 hover:text-jairo-accent dark:hover:border-accent-bright/50 dark:hover:text-accent-bright"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")
