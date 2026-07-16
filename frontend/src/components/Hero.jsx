import { lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next';

import { styles } from '../styles'

// Lazy-loaded so the three.js stack (~1 MB) stays out of the critical bundle
// and the hero text paints immediately.
const LaptopCanvas = lazy(() => import('./canvas/Laptop'))

/** Easing curve shared by the entrance animations (fast out, soft landing). */
const EASE_OUT = [0.22, 1, 0.36, 1];

/**
 * Headline that reveals word by word through an overflow mask.
 * Screen readers get the plain string via aria-label; the animated
 * spans are hidden from the accessibility tree.
 */
const MaskedName = ({ text }) => (
  <span aria-label={`${text}.`} role="text">
    {text.split(" ").map((word, i) => (
      <span key={word} aria-hidden="true" className="inline-block overflow-hidden align-bottom">
        <motion.span
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE_OUT }}
          className="inline-block"
        >
          {word}
          {' '}
        </motion.span>
      </span>
    ))}
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6, ease: EASE_OUT }}
      className="inline-block text-jairo-accent dark:text-accent-bright"
    >
      .
    </motion.span>
  </span>
);

/**
 * Full-viewport hero: intro copy + CTAs layered over the interactive
 * 3D laptop. The text block parallax-fades as the user scrolls away,
 * and every entrance animation uses transform/opacity only (composited).
 */
function Hero() {
  const { t } = useTranslation();

  // Parallax: content drifts down and fades while scrolling out of the hero.
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 700], [0, 140]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full min-h-[100dvh] mx-auto overflow-hidden">

      <div className="absolute inset-0 bg-grid-faint" aria-hidden="true" />

      <div className={`${styles.paddingX} absolute inset-0 top-[110px] sm:top-[130px] max-w-7xl mx-auto z-10 pointer-events-none`}>
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.3em] text-jairo-accent dark:text-accent-bright"
          >
            {t('hero.greeting')}
          </motion.p>

          <h1 className={`${styles.heroHeadText} text-primary dark:text-white transition-colors duration-300`}>
            <MaskedName text="Jairo Nacurena" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE_OUT }}
            className={`${styles.heroSubText} mt-5 max-w-xl text-secondary-light dark:text-secondary transition-colors duration-300`}
          >
            {t('hero.subtitle1')} {t('hero.subtitle2')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE_OUT }}
            className="mt-9 flex flex-wrap items-center gap-4 pointer-events-auto"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-jairo-accent px-7 py-3.5 font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#456a61] active:translate-y-0 active:scale-[0.98]"
            >
              {t('hero.viewProjects')}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true">
                <path d="M7 7h10v10M7 17 17 7" transform="rotate(90 12 12)" />
              </svg>
            </a>

            <a
              href="https://github.com/J41r0Ps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-secondary-light/30 dark:border-secondary/25 px-7 py-3.5 font-medium text-text-light dark:text-white-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-jairo-accent hover:text-jairo-accent dark:hover:border-accent-bright dark:hover:text-accent-bright active:translate-y-0 active:scale-[0.98]"
            >
              GitHub
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 inline-flex items-center gap-2.5 font-mono text-[13px] text-secondary-light dark:text-secondary/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jairo-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-jairo-accent dark:bg-accent-bright" />
            </span>
            {t('hero.location')}
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
        <Suspense fallback={null}>
          <LaptopCanvas />
        </Suspense>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to about section" className="pointer-events-auto flex flex-col items-center gap-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-secondary-light dark:text-secondary/70">
            {t('hero.scroll')}
          </span>
          <span className="relative block h-12 w-px overflow-hidden bg-secondary-light/25 dark:bg-secondary/20">
            <motion.span
              animate={{ y: [-16, 48] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-0 h-4 w-px bg-jairo-accent dark:bg-accent-bright"
            />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero
