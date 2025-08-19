"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 
      bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 
      dark:from-black dark:via-gray-900 dark:to-gray-800 
      transition-colors duration-300"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <Image
          src="/me.jpeg" // replace with your image
          alt="Noa"
          width={300}
          height={300}
          className="rounded-full shadow-lg border-4 contain-size border-gray-300 dark:border-indigo-500"
        />
      </motion.div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-2xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold 
          text-gray-900 dark:text-white"
        >
          Hi, I’m{" "}
          <span className="text-gray-600 dark:text-indigo-400">Noa</span> 👋
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl 
          text-gray-700 dark:text-gray-300"
        >
          Fullstack Developer | React • Next.js • ElectronJs • Python
        </motion.p>

        {/* Button */}
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-6 py-3 
          bg-gray-700 dark:bg-indigo-600 
          rounded-full text-lg font-semibold text-white 
          shadow-lg hover:bg-gray-600 dark:hover:bg-indigo-500 
          transition"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
