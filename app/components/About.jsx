"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 max-w-6xl mx-auto text-center md:text-left"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/NOA2.png"
            alt="About Me"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg border-4 border-gray-300 dark:border-indigo-500 object-cover"
          />
        </motion.div>

        {/* About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            — a passionate{" "}
            <span className="font-medium">Fullstack Developer</span> and
            <span className="font-medium"> Virtual Assistant</span> with a
            mission to help businesses grow through modern web solutions and
            reliable support.
          </p>
          <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
            With skills ranging from <strong>Next.js & Tailwind</strong> to
            <strong> Google Workspace & Data Management</strong>, I combine
            technical expertise with organizational skills to help clients save
            time and focus on what matters most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
