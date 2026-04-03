import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            // Quitamos el bg y redondeado. Ahora es minimalista.
            className="text-text-light dark:text-white-100 text-[18px] hover:text-jairo-accent transition-colors duration-300"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;