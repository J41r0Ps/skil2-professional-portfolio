import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

import { github, website } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn } from '../utils/motion';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';

/**
 * One project card: screenshot with hover zoom + quick links (live demo /
 * source), title with arrow-out affordance, description, and mono tech tags.
 * The whole card sits inside a cursor spotlight and lifts on hover.
 *
 * @param {number}  props.index            Position in the grid (staggers the entrance).
 * @param {string}  props.name             i18n key for the project name.
 * @param {string}  props.description      i18n key for the description.
 * @param {Array}   props.tags             `{ name, icon }` tech tags.
 * @param {string}  props.image            Screenshot asset.
 * @param {string}  props.source_code_link GitHub URL.
 * @param {?string} props.live_demo_link   Live URL, or null when not deployed.
 */
const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  const { t } = useTranslation();

  return (
    <SpotlightCard
      as="article"
      tilt
      variants={fadeIn("up", "spring", 0.15 * index, 0.7)}
      className="rounded-2xl border border-secondary-light/15 dark:border-secondary/10 bg-white/70 dark:bg-tertiary transition-[border-color,box-shadow] duration-300 hover:border-jairo-accent/40 dark:hover:border-accent-bright/30 hover:shadow-card-light dark:hover:shadow-card"
    >
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px]">
        <img
          src={image}
          alt={t(name)}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-100/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {live_demo_link && (
            <a
              href={live_demo_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(name)} — ${t('projects.liveDemo')}`}
              title={t('projects.liveDemo')}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/85 backdrop-blur-sm transition-transform duration-200 hover:scale-110 focus-visible:opacity-100"
            >
              <img src={website} alt="" className="h-1/2 w-1/2 object-contain" />
            </a>
          )}

          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t(name)} — ${t('projects.viewCode')}`}
            title={t('projects.viewCode')}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/85 backdrop-blur-sm transition-transform duration-200 hover:scale-110 focus-visible:opacity-100"
          >
            <img src={github} alt="" className="h-1/2 w-1/2 object-contain" />
          </a>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[21px] font-semibold leading-tight text-primary dark:text-white transition-colors duration-300">
            {t(name)}
          </h3>
          <a
            href={live_demo_link || source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${t(name)}`}
            className="mt-1 shrink-0 text-secondary-light transition-all duration-300 group-hover:text-jairo-accent dark:text-secondary/60 dark:group-hover:text-accent-bright"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <p className="mb-auto mt-3 text-[14.5px] leading-relaxed text-text-light dark:text-secondary transition-colors duration-300">
          {t(description)}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-secondary-light/10 dark:border-secondary/10 pt-4">
          {tags.map((tag) => (
            <li key={tag.name} className="flex items-center gap-1.5">
              <img src={tag.icon} alt="" loading="lazy" decoding="async" className="h-4 w-4 object-contain" />
              <span className="font-mono text-[12px] text-secondary-light dark:text-secondary/80">
                {tag.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  )
}

/**
 * "Projects" section: intro paragraph + responsive 2-column card grid.
 * Project data (links, tags, images) lives in constants/index.js; all
 * user-facing text resolves through i18n.
 */
const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionHeader index="04" kicker={t('projects.sectionSubText')} title={t('projects.sectionHeadText')} />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-secondary-light dark:text-secondary transition-colors duration-300"
        >
          {t('projects.description')}
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
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
