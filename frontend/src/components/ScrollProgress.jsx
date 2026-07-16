import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin accent progress bar fixed to the top of the viewport.
 *
 * Fills left-to-right as the user scrolls the page. Uses a spring so the
 * motion feels weighted instead of linear, and only animates `scaleX`
 * (GPU-composited — no layout or paint work).
 */
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-jairo-accent to-accent-bright"
        />
    );
};

export default ScrollProgress;
