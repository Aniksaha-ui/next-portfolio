"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NAME,
  TITLE,
  DESCRIPTION,
  PRIMARY_BTN_LINK,
  PRIMARY_BTN_TEXT,
  SECONDARY_BTN_LINK,
  SECONDARY_BTN_TEXT,
  IMAGE_SRC,
} from "@/helpers/constants/pageConst";
import { FullRoundShape } from "@/helpers/icons/icon";

// ====== CONTENT VARIABLES ======

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {NAME}
              </span>
            </h1>

            <h2 className="mt-3 text-lg font-semibold text-gray-700 dark:text-gray-300 sm:text-xl">
              {TITLE}
            </h2>

            <p className="mt-6 text-base text-gray-600 dark:text-gray-400 sm:text-lg leading-relaxed">
              {DESCRIPTION}
            </p>

            {/* ===== BUTTONS ===== */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <Link
                href={PRIMARY_BTN_LINK}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative z-10">{PRIMARY_BTN_TEXT}</span>
              </Link>

              <Link
                href={SECONDARY_BTN_LINK}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                {SECONDARY_BTN_TEXT}
              </Link>
            </div>
          </motion.div>

          {/* ===== RIGHT IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 blur-lg transition-all duration-500 group-hover:opacity-70"></div>
              <Image
                src={IMAGE_SRC}
                alt={NAME}
                width={420}
                height={420}
                className="relative rounded-full border-4 border-blue-500/20 dark:border-blue-400/30 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <FullRoundShape />
      </div>
    </section>
  );
};

export default Hero;
