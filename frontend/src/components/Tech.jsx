import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { textVariant, fadeIn } from "../utils/motion";

function Tech() {
  const { t } = useTranslation();

  const softSkills = t('tech.softSkills', { returnObjects: true }) || [];

  return (
    <>
      <motion.div variants={textVariant()} className="mb-10 text-center">
        <p className={`${styles.sectionSubText} text-secondary-light dark:text-secondary transition-colors duration-300`}>
          {t('tech.sectionSubText')}
        </p>
        <h2 className={`${styles.sectionHeadText} text-primary dark:text-white transition-colors duration-300`}>
          {t('tech.sectionHeadText')}
        </h2>
      </motion.div>

      {/* --- HARD SKILLS  --- */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <Tilt
            key={technology.name}
            className="w-28 h-28"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.1}
            transitionSpeed={450}
          >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.05, 0.75)}
              className="w-full h-full rounded-full shadow-card bg-white dark:bg-tertiary border-4 border-primary-light dark:border-primary flex justify-center items-center transition-all duration-300 cursor-pointer hover:scale-110 dark:hover:shadow-[0_0_15px_rgba(82,121,111,0.5)]"
              title={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* --- SOFT SKILLS --- */}
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="mt-20 flex flex-col items-center"
      >
        <h3 className="text-[24px] font-bold text-primary dark:text-white mb-6 transition-colors duration-300">
          {t('tech.softSkillsTitle')}
        </h3>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {Array.isArray(softSkills) && softSkills.map((skill, index) => (
            <div
              key={`soft-skill-${index}`}
              className="px-6 py-3 rounded-full bg-primary-light dark:bg-tertiary text-text-light dark:text-white-100 font-medium text-[16px] shadow-sm border border-secondary/20 dark:border-primary hover:border-jairo-accent dark:hover:border-jairo-accent hover:text-jairo-accent dark:hover:text-jairo-accent transition-all cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")