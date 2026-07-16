import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Interactive card shell combining two hover effects:
 *
 * 1. Spotlight — a radial accent glow follows the cursor across the surface.
 *    The position is written straight to CSS custom properties on the DOM
 *    node, so mouse movement never triggers a React re-render.
 * 2. 3D tilt (opt-in) — the card rotates up to ±5° toward the cursor with
 *    spring smoothing and a perspective transform, and lifts slightly while
 *    hovered. Both run on the compositor (transform/opacity only).
 *
 * Works inside SectionWrapper's stagger container: entrance `variants` are
 * forwarded to the underlying motion element.
 *
 * @param {object}  props
 * @param {string}  [props.as="div"]   HTML tag to render (must exist on `motion`, e.g. "article").
 * @param {boolean} [props.tilt=false] Enable the 3D tilt + hover lift.
 * @param {string}  [props.className]  Extra classes for the card shell.
 * @param {object}  [props.variants]   framer-motion entrance variants (forwarded).
 */
const SpotlightCard = ({ as = "div", tilt = false, className = "", children, ...rest }) => {
    const ref = useRef(null);
    const MotionTag = motion[as] ?? motion.div;

    // Cursor position normalized to 0..1 across the card, spring-smoothed so
    // the tilt eases instead of snapping.
    const cursorX = useMotionValue(0.5);
    const cursorY = useMotionValue(0.5);
    const springX = useSpring(cursorX, { stiffness: 180, damping: 22 });
    const springY = useSpring(cursorY, { stiffness: 180, damping: 22 });
    const rotateX = useTransform(springY, [0, 1], [5, -5]);
    const rotateY = useTransform(springX, [0, 1], [-5, 5]);

    const handleMouseMove = (event) => {
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // spotlight position (px) + tilt position (0..1)
        ref.current.style.setProperty("--spot-x", `${x}px`);
        ref.current.style.setProperty("--spot-y", `${y}px`);
        cursorX.set(x / rect.width);
        cursorY.set(y / rect.height);
    };

    const handleMouseLeave = () => {
        cursorX.set(0.5);
        cursorY.set(0.5);
    };

    return (
        <MotionTag
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
            whileHover={tilt ? { y: -6 } : undefined}
            className={`group relative overflow-hidden ${className}`}
            {...rest}
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(340px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(82, 121, 111, 0.16), transparent 70%)",
                }}
            />
            <div className="relative z-10 flex h-full flex-col">{children}</div>
        </MotionTag>
    );
};

export default SpotlightCard;
