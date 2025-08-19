"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 
          text-gray-800 dark:text-white"
        >
          Get In Touch
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 
              bg-gray-50 dark:bg-gray-900 px-4 py-2 text-gray-800 dark:text-gray-200
              focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 
              bg-gray-50 dark:bg-gray-900 px-4 py-2 text-gray-800 dark:text-gray-200
              focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 
              bg-gray-50 dark:bg-gray-900 px-4 py-2 text-gray-800 dark:text-gray-200
              focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-600 text-white font-medium py-2 
            hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
