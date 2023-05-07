'use client';

import { motion } from "framer-motion" ;

import styles from "../styles" ;

import {slideIn, staggerContainer, textVariant} from "../utils/motion" ;

const Hero = () => (
  <section id="hero" className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false , amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
      <motion.div variants={textVariant(1.2)}
        className="flex flex-row justify-center items-center"
        >
           {/* ========= Our Main Heading ========== */}

          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}/>
          <h1 className={styles.heroHeading}>HUR</h1>
          </motion.div>
        <motion.h1 variants={textVariant(1.1)}
        className={styles.heroHeading}>
          S H A R M A
        </motion.h1>

      </div>
      <motion.div
      variants={slideIn('right', 'tween' , 0.2 , 1)}
      className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] rounded-tr-[140px] rounded-br-[30px] rounded-bl-[30px] z-[0] -top-[30px]"/>
          <img 
          src="/space.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] rounded-tr-[140px] rounded-br-[30px] rounded-bl-[30px] z-10 relative"
          />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
