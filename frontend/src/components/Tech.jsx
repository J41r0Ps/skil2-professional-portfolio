import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { textVariant } from "../utils/motion";

function Tech() {
  const { t } = useTranslation();

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

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")