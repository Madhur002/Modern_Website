"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import styles from "../styles";

import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} pt-[100px] mb-[100px] relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative`}
      >
        <img
          src="/logonew.svg"
          alt="Search"
          className="w-[40px] h-[40px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
          M Y &nbsp; P O R T F O L I O
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={toggleMenu}
        />

        {menuVisible && (
          <div
            className="absolute
                rounded-[24px]
              bg-[#44475536]
                right-0
                mt-10
                flex
                flex-col
                p-7
                w-[250px]
                text-[20px]
              text-white
                items-center
                z-[50]
                font-medium
                backdrop-filter 
                backdrop-blur-xl
                cursor-pointer
                border-[#6f738ae8]
                border-2
             "
          >
            <a
              className="p-[5px] hover:font-extrabold "
              href="#hero"
              onClick={closeMenu}
            >
              HERO
            </a>
            <a
              className="p-[5px] hover:font-extrabold "
              href="#about"
              onClick={closeMenu}
            >
              ABOUT
            </a>
            <a
              className="p-[5px] hover:font-extrabold "
              href="#explore"
              onClick={closeMenu}
            >
              EXPLORE
            </a>
            <a
              className="p-[5px] hover:font-extrabold "
              href="#getStarted"
              onClick={closeMenu}
            >
              GET STARTED
            </a>
            <a
              className="p-[5px] hover:font-extrabold "
              href="#world"
              onClick={closeMenu}
            >
              WORLD
            </a>
            <a
              className="p-[5px] hover:font-extrabold "
              href="#insights"
              onClick={closeMenu}
            >
              INSIGHTS
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
};
export default Navbar;
