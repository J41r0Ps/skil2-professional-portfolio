import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

/**
 * Shared animated heading used by every page section.
 *
 * Renders the numbered mono kicker ("01 — Introduction"), the display-size
 * title, and an accent rule that draws in from the left when the section
 * scrolls into view. Keeping this in one place guarantees identical rhythm
 * across sections.
 *
 * @param {object} props
 * @param {string} props.index   Section number, e.g. "01".
 * @param {string} props.kicker  Small uppercase label above the title.
 * @param {string} props.title   Section title.
 */
const SectionHeader = ({ index, kicker, title }) => (
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-jairo-accent dark:text-accent-bright transition-colors duration-300`}>
            {index} — {kicker}
        </p>
        <h2 className={`${styles.sectionHeadText} mt-2 text-primary dark:text-white transition-colors duration-300`}>
            {title}
        </h2>
        <motion.span
            aria-hidden="true"
            variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { type: "spring", duration: 1, delay: 0.3 } },
            }}
            className="mt-5 block h-[3px] w-16 origin-left rounded-full bg-jairo-accent dark:bg-accent-bright"
        />
    </motion.div>
);

export default SectionHeader;
