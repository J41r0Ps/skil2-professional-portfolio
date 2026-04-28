import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-primary-light dark:bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] shadow-card border border-secondary/20 dark:border-none transition-colors duration-300"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={t(name)}
            className="w-full h-full object-cover rounded-2xl border border-secondary/20 dark:border-none"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">

            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="bg-jairo-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-all"
                title="Live Demo"
              >
                <svg className="w-1/2 h-1/2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            )}

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-all"
              title="Source Code"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

          </div>
        </div>

        <div className='mt-5'>
          <h3 className="text-primary dark:text-white font-bold text-[24px] transition-colors duration-300">{t(name)}</h3>
          <p className="mt-2 text-text-light dark:text-secondary text-[14px] transition-colors duration-300">{t(description)}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-3'>
          {tags.map((tag) => (
            <div key={tag.name} className="flex items-center gap-1 bg-white dark:bg-black-100 px-2 py-1 rounded-md shadow-sm border border-secondary/10 dark:border-primary">
              <img src={tag.icon} alt={tag.name} className="w-4 h-4 object-contain" />
              <span className="text-[12px] text-primary dark:text-secondary-light font-medium">{tag.name}</span>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-secondary-light dark:text-secondary transition-colors duration-300`}>
          {t('projects.sectionSubText')}
        </p>
        <h2 className={`${styles.sectionHeadText} text-primary dark:text-white transition-colors duration-300`}>
          {t('projects.sectionHeadText')}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-text-light dark:text-secondary text-[17px] max-w-3xl leading-[30px] transition-colors duration-300"
        >
          {t('projects.description')}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")