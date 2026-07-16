import React, { useEffect, useState } from 'react';

/**
 * Resolves the theme for first render: saved preference wins, otherwise
 * default to dark unless the OS explicitly asks for light.
 * (index.html ships with class="dark" so the initial paint matches.)
 */
const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') return false;
    if (stored === 'dark') return true;
    // default to dark, unless the system explicitly prefers light
    return !window.matchMedia('(prefers-color-scheme: light)').matches;
};

/**
 * Sun/moon button that switches Tailwind's `dark` class on <html> and
 * persists the choice to localStorage.
 */
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="text-text-light dark:text-white-100 hover:text-jairo-accent dark:hover:text-accent-bright transition-all duration-300 hover:rotate-12"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
