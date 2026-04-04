import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'var(--tw-bg-opacity)',
        boxShadow: '0px 15px 35px -5px rgba(0,0,0,0.15)'
      }}

      contentClassName="bg-white dark:bg-black-100 border-t-4 border-jairo-accent transition-colors duration-300"

      contentArrowStyle={{ borderRight: 'none' }}

      date={t(experience.date)}

      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full shadow-md rounded-full">
          <img
            src={experience.icon}
            alt={t(experience.company_name)}
            className="w-[70%] h-[70%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-primary dark:text-white text-[24px] font-bold transition-colors duration-300">
          {t(experience.title)}
        </h3>
        <p className="text-jairo-accent text-[16px] font-semibold" style={{ margin: 0 }}>
          {t(experience.company_name)}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((pointKey, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-text-light dark:text-white-100 text-[14px] pl-1 tracking-wider transition-colors duration-300"
          >
            {t(pointKey)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Experience() {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-secondary-light dark:text-secondary transition-colors duration-300`}>
          {t('experience.sectionSubText')}
        </p>
        <h2 className={`${styles.sectionHeadText} text-primary dark:text-white transition-colors duration-300`}>
          {t('experience.sectionHeadText')}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")