"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/60 backdrop-blur-lg shadow-lg transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="#hero"
            className="text-2xl font-bold text-black dark:text-white"
          >
            NOA
          </Link>
        </motion.div>

        {/* Nav Links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center space-x-6 text-black dark:text-gray-200"
        >
          <Link href="#about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
