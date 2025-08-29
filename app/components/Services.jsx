"use client";

import { motion } from "framer-motion";
import { FaCode, FaKeyboard, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-indigo-500 text-4xl" />,
    title: "Web Development",
    desc: "Building responsive, modern websites with Next.js, Tailwind, and scalable backend solutions.",
  },
  {
    icon: <FaKeyboard className="text-green-500 text-4xl" />,
    title: "Data Entry",
    desc: "Accurate and efficient data management to help businesses stay organized and productive.",
  },
  {
    icon: <FaHeadset className="text-purple-500 text-4xl" />,
    title: "Virtual Assistance",
    desc: "Reliable support for scheduling, email management, and business operations.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 max-w-6xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
      >
        My Services
      </motion.h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900 
                       border border-gray-200 dark:border-gray-700 hover:shadow-xl 
                       transition"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
