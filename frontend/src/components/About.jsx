import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// IMPORTANTE: Asegúrate de importar 'hobby' desde tus assets (junto con profile)
import { profile, hobby } from "../assets";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    const { t } = useTranslation();

    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full bg-primary-light dark:bg-tertiary rounded-[20px] shadow-card border border-secondary/20 dark:border-white/10 transition-colors duration-300"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
                    <h3 className="text-primary dark:text-white text-[20px] font-bold text-center transition-colors duration-300">
                        {t(title)}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="relative w-full">

            <div className="flex flex-col lg:flex-row gap-14 items-center lg:items-start">

                <div className="flex-1">
                    <motion.div variants={textVariant()}>
                        <p className={`${styles.sectionSubText} text-secondary-light dark:text-secondary transition-colors duration-300`}>
                            {t('about.sectionSubText')}
                        </p>
                        <h2 className={`${styles.sectionHeadText} text-primary dark:text-white transition-colors duration-300`}>
                            {t('about.sectionHeadText')}
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className="mt-4 text-text-light dark:text-secondary text-[17px] max-w-3xl leading-[30px] transition-colors duration-300"
                    >
                        {t('about.description')}
                    </motion.p>

                    <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mt-8">
                        <a
                            href="/cv.pdf"
                            download="Jairo_Nacurena_CV.pdf"
                            className="bg-jairo-accent text-white py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
                        >
                            {t('about.downloadCV')}
                        </a>
                    </motion.div>
                </div>

                <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 w-full">

                    <div className="relative w-[280px] h-[320px] sm:w-[400px] sm:h-[450px] mx-auto">

                        <motion.img
                            variants={fadeIn("right", "spring", 0.5, 1)}
                            src={profile}
                            alt="Jairo Profesional"
                            className="absolute top-0 left-0 w-[200px] h-[250px] sm:w-[280px] sm:h-[350px] object-cover rounded-2xl shadow-card border-4 border-primary-light dark:border-tertiary z-10 transition-colors duration-300"
                        />

                        <motion.img
                            variants={fadeIn("left", "spring", 0.7, 1)}
                            src={hobby}
                            alt="Jairo Hobby"
                            className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] object-cover rounded-full shadow-card border-4 border-primary-light dark:border-tertiary z-20 transition-colors duration-300"
                        />

                    </div>
                </div>

            </div>

            {/* TARJETAS DE SERVICIOS */}
            <div className="mt-20 flex flex-wrap gap-10 justify-center lg:justify-start">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </section>
    )
}

export default SectionWrapper(About, "about");