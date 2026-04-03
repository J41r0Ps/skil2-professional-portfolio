import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

import { styles } from '../styles'
import { LaptopCanvas } from './canvas'

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-jairo-accent" />
          <div className="w-1 sm:h-80 h-40 bg-jairo-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-primary dark:text-white transition-colors duration-300`}>
            {t('hero.greeting')} <span className="text-jairo-accent">Jairo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary-light dark:text-secondary transition-colors duration-300`}>
            {t('hero.subtitle1')} <br className="md:block hidden" />
            {t('hero.subtitle2')}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
        <LaptopCanvas />
      </div>

      <div className="absolute bottom-5 sm:bottom-10 w-full flex justify-center items-center z-10 pointer-events-auto">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary dark:border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-primary dark:bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero