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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[360px] flex">
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450
        }}
        // DISEÑO LIMPIO Y ELEGANTE:
        // 1. Eliminamos el nested div y el gradiente feo.
        // 2. dark:bg-tertiary como fondo principal.
        // 3. dark:border-white/10 crea una línea microscópica y elegante que separa la tarjeta del fondo sin ser invasiva.
        className="bg-primary-light dark:bg-tertiary p-5 rounded-2xl w-full h-full shadow-card border border-secondary/20 dark:border-white/10 transition-colors duration-300 flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={t(name)}
            className="w-full h-full object-cover rounded-2xl border border-secondary/10 dark:border-white/5"
          />

          {/* BOTONES FLOTANTES SUPERIORES */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">

            {/* BOTÓN LIVE DEMO (Globo Terráqueo) */}
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="bg-jairo-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-all pointer-events-auto"
                title="Live Demo"
              >
                <svg className="w-1/2 h-1/2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            )}

            {/* BOTÓN GITHUB */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-all pointer-events-auto"
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

        {/* TEXTO DEL PROYECTO */}
        <div className='mt-5 flex flex-col flex-grow'>
          <h3 className="text-primary dark:text-white font-bold text-[24px] transition-colors duration-300 leading-tight">
            {t(name)}
          </h3>
          {/* Usamos dark:text-secondary (#cad2c5) para que contraste perfectamente sobre el fondo tertiary */}
          <p className="mt-2 text-text-light dark:text-secondary text-[15px] transition-colors duration-300 mb-auto leading-relaxed">
            {t(description)}
          </p>
        </div>

        {/* TAGS CON ICONOS */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <div
              key={tag.name}
              // dark:bg-primary con un borde sutil para que resalte sobre el tertiary
              className="flex items-center gap-1.5 bg-white dark:bg-primary px-3 py-1 rounded-md shadow-sm border border-secondary/20 dark:border-white/5"
            >
              {/* Iconos a w-5 h-5 */}
              <img src={tag.icon} alt={tag.name} className="w-5 h-5 object-contain" />
              {/* Texto en dark:text-secondary para legibilidad perfecta */}
              <span className="text-[13px] text-text-light dark:text-secondary font-medium transition-colors duration-300">
                {tag.name}
              </span>
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

      {/* Tarjetas simétricas con items-stretch */}
      <div className="mt-20 flex flex-wrap justify-center gap-7 items-stretch">
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