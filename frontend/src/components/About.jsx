import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { profile } from "../assets";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    const { t } = useTranslation();

    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full ash-teal-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-primary-light dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-colors duration-300"
                >
                    <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
                    <h3 className="text-text-light dark:text-white text-[20px] font-bold text-center transition-colors duration-300">
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

            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

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
                            className="bg-jairo-accent text-white py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary hover:bg-opacity-80 transition-all cursor-pointer"
                        >
                            {t('about.downloadCV')}
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("left", "spring", 0.5, 1)}
                    className="flex-1 flex justify-center items-center mt-10 md:mt-0"
                >
                    <div className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full p-[3px] ash-teal-gradient shadow-card">
                        <img
                            src={profile}
                            alt="Jairo Nacurena"
                            className="w-full h-full object-cover rounded-full bg-primary-light dark:bg-tertiary"
                        />
                    </div>
                </motion.div>

            </div>

            <div className="mt-20 flex flex-wrap gap-10 justify-center md:justify-start">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </section>
    )
}

export default SectionWrapper(About, "about");