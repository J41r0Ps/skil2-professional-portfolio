import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const { t } = useTranslation();

  // Estado para guardar los datos del formulario
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para simular la carga (cuando envías el mensaje)
  const [loading, setLoading] = useState(false);

  // Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Manejador del envío del formulario (Aquí conectarás tu API C# en el futuro)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ====================================================================
    // 🔗 FUTURA CONEXIÓN CON TU API EN C# .NET CORE
    // ====================================================================
    /*
      try {
        const response = await fetch('https://tu-api-en-csharp.com/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        });
        
        if(response.ok) {
           alert("Message sent successfully!");
           setForm({ name: '', email: '', message: '' });
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setLoading(false);
      }
    */

    // Simulación temporal para que veas el efecto de carga
    setTimeout(() => {
      setLoading(false);
      alert('This is a demo! In the future, this will be sent to the C# Backend.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>

      {/* TARJETA DEL FORMULARIO */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-white dark:bg-tertiary p-8 rounded-2xl shadow-card border border-secondary/20 dark:border-white/5 transition-colors duration-300'
      >
        <p className={`${styles.sectionSubText} text-secondary-light dark:text-secondary transition-colors duration-300`}>
          {t('contact.sectionSubText')}
        </p>
        <h3 className={`${styles.sectionHeadText} text-primary dark:text-white transition-colors duration-300`}>
          {t('contact.sectionHeadText')}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-8'
        >
          {/* CAMPO: NOMBRE */}
          <label className='flex flex-col'>
            <span className='text-text-light dark:text-white font-medium mb-4 transition-colors duration-300'>
              {t('contact.nameLabel')}
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.namePlaceholder')}
              required
              className='bg-primary-light dark:bg-primary py-4 px-6 placeholder:text-secondary-light dark:placeholder:text-secondary text-text-light dark:text-white rounded-lg outline-none border border-secondary/20 dark:border-transparent focus:border-jairo-accent dark:focus:border-jairo-accent focus:ring-1 focus:ring-jairo-accent transition-all duration-300 font-medium shadow-sm'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-text-light dark:text-white font-medium mb-4 transition-colors duration-300'>
              {t('contact.emailLabel')}
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              required
              className='bg-primary-light dark:bg-primary py-4 px-6 placeholder:text-secondary-light dark:placeholder:text-secondary text-text-light dark:text-white rounded-lg outline-none border border-secondary/20 dark:border-transparent focus:border-jairo-accent dark:focus:border-jairo-accent focus:ring-1 focus:ring-jairo-accent transition-all duration-300 font-medium shadow-sm'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-text-light dark:text-white font-medium mb-4 transition-colors duration-300'>
              {t('contact.messageLabel')}
            </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              required
              className='bg-primary-light dark:bg-primary py-4 px-6 placeholder:text-secondary-light dark:placeholder:text-secondary text-text-light dark:text-white rounded-lg outline-none border border-secondary/20 dark:border-transparent focus:border-jairo-accent dark:focus:border-jairo-accent focus:ring-1 focus:ring-jairo-accent transition-all duration-300 font-medium shadow-sm resize-none'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-jairo-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary/20 hover:scale-105 hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100'
          >
            {loading ? t('contact.sendingButton') : t('contact.sendButton')}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center rounded-2xl bg-white/5 dark:bg-tertiary/20 border border-secondary/10'
      >
        <div className="text-center p-8">
          <h4 className="text-jairo-accent font-bold text-2xl mb-2">Let's Connect</h4>
          <p className="text-text-light dark:text-secondary-light">I'm currently looking for new opportunities and my inbox is always open.</p>
        </div>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, 'contact');