/**
 * Shared Tailwind class recipes — the typographic scale and section spacing.
 *
 * Type system: Space Grotesk (font-display) for display text, Geist for body,
 * Geist Mono for kickers/labels. Display sizes use tight tracking and short
 * line-height; kickers are mono, uppercase, wide-tracked.
 */
const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-20 py-12",

    heroHeadText:
    "font-display font-bold lg:text-[78px] sm:text-[60px] xs:text-[48px] text-[38px] leading-[1.04] tracking-tight mt-3",

    heroSubText:
    "lg:text-[24px] sm:text-[20px] xs:text-[17px] text-[16px] leading-relaxed font-normal",

    sectionHeadText:
    "font-display font-bold md:text-[52px] sm:text-[44px] xs:text-[36px] text-[30px] tracking-tight leading-[1.08]",

    sectionSubText:
    "font-mono sm:text-[13px] text-[12px] uppercase tracking-[0.25em]",
};

export { styles };
