import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LangToggle = () => {
    const { i18n } = useTranslation();
    const languages = ['en', 'nl', 'es', 'fr'];
    useEffect(() => {
        const currentLang = i18n.language.substring(0, 2).toLowerCase();
        document.documentElement.lang = currentLang;
    }, [i18n.language]);

    const toggleLang = () => {
        const currentLang = i18n.language.substring(0, 2).toLowerCase();
        const currentIndex = languages.indexOf(currentLang);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % languages.length;

        i18n.changeLanguage(languages[nextIndex]);
    };

    return (
        <button
            onClick={toggleLang}
            className="text-text-light dark:text-white-100 font-bold text-[15px] hover:text-jairo-accent transition-colors duration-300 uppercase tracking-widest"
            aria-label="Toggle Language"
        >
            {i18n.language.substring(0, 2)}
        </button>
    );
};

export default LangToggle;