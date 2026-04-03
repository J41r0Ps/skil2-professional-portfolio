import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

import { styles } from '../styles'
import { LaptopCanvas } from './canvas'

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-jairo-accent" />
          <div className="w-1 md:h-80 h-40 bg-jairo-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-text-light dark:text-white transition-colors duration-300`}>
            {t('hero.greeting')} <span className="text-jairo-accent">Jairo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary-light dark:text-secondary transition-colors duration-300`}>
            {t('hero.subtitle1')} <br className="md:block hidden" />
            {t('hero.subtitle2')}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <LaptopCanvas />
      </div>
    </section>
  )
}

export default Hero