"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto
      "
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/loading.gif')] bg-repeat-x opacity-10 dark:opacity-20 pointer-events-none"></div>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Hi, I’m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Noa Ligpitan
          </span>{" "}
          👋
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          Fullstack Developer <span className="text-indigo-500">&</span> Virtual
          Assistant
        </p>

        <p className="mt-4 max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          I help startups and entrepreneurs build modern websites and provide
          reliable virtual assistance to keep their business running smoothly.
        </p>

        {/* Skills */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
          {["Next.js", "Tailwind CSS", "Google Workspace", "Data Entry"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl text-gray-700 dark:text-gray-300">
          {[
            { icon: <FaGithub />, link: "https://github.com/Noah202226" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/noaligpitan26/",
            },
            { icon: <FaTwitter />, link: "https://x.com/Xavier26_2022" },
            { icon: <FaEnvelope />, link: "mailto:your@email.com" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-indigo-500 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-indigo-500/40 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative z-10 mt-10 md:mt-0"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96">
          <Image
            src="/NOA.png"
            alt="Noa"
            fill
            className="rounded-3xl object-fill border-4 border-gray-200 dark:border-indigo-500 shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
