'use client';

import { motion } from "framer-motion" ;

import { TypingText } from "../components" ;

import styles from "../styles" ;

import {fadeIn, staggerContainer } from "../utils/motion" ;

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
    variants = {staggerContainer}
    initial = "hidden"
    whileInView = "show"
    viewport = {{ once: false , amount: 0.25}}
    className = {`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title = "| About Me" textStyles = "text-center" />

      <motion.p
      variants = { fadeIn('up', 'tween', 0.2, 1)}
      className = "mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
      Welcome to <span className="font-extrabold text-white">My Portfolio</span> website! As a<span className="font-extrabold text-white"> full stack web developer and artist</span>,<br/> I bring a unique perspective to my work that blends both technical expertise and <span className="font-extrabold text-white"> creative vision. </span>With years of experience in both fields, I have honed my skills in creating beautiful and functional websites that are <span className="font-extrabold text-white">tailored</span> to meet the specific needs of each project. Whether you're looking for a visually stunning design, seamless <span className="font-extrabold text-white">user experience,</span> or efficient backend functionality, I have the skills to bring your <span className="font-extrabold text-white"> ideas to life. </span>  Please take a moment to browse through my portfolio and get in touch if you have any questions or would <span className="font-extrabold text-white">like</span> to discuss a potential project.
      </motion.p>

      <motion.img
      variants = {fadeIn('up', 'tween', 0.3, 1)}
      src = "/arrow-down.svg"
      alt = "arrow down"
      className="w-[18px] h-[28px] object-contain mt-[28px]"/>
    </motion.div>
  </section>
);

export default About;
