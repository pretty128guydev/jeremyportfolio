import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/jeremy-hatchel-a6972534b"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Jeremy Hatchel,
        </a>
        {' '}
        SENIOR .NET DEVELOPER Senior .NET/Angular Developer with over 9+ years of experience delivering scalable, secure, and high-performing web applications.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        I specialized in designing end-to-end solutions using .NET Core, Angular, and cloud platforms, achieving measurable improvements in performance and reliability.
        {' '}
        I demonstrated expertise in leading teams, optimizing processes, and meeting deadlines through innovative approaches and effective collaboration.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="https://drive.google.com/file/d/1tciorak3ZNmMrPPnG_b9eSMnv94fY61_/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
