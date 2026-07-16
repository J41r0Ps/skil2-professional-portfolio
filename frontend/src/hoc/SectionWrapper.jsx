import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/**
 * Higher-order component that turns a content block into a page section.
 *
 * Provides, for every section:
 * - the semantic <section> element carrying the anchor id (`scroll-mt`
 *   offsets anchor jumps below the fixed navbar — this also feeds the
 *   navbar's scroll-spy, which queries `section[id]`),
 * - consistent max-width + padding,
 * - a framer-motion stagger container that plays the children's variants
 *   once, when ~25% of the section enters the viewport.
 *
 * @param {React.ComponentType} Component  Section content (returns a fragment).
 * @param {string} idName                  Anchor id, e.g. "about" for /#about.
 */
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                id={idName}
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0 scroll-mt-20`}
            >
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper
