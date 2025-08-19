"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js, TailwindCSS, and Framer Motion.",
    image: "/portfolio/portfolio.png",
    link: "https://yourportfolio.com",
  },
  {
    title: "Rakape - Coffee shop website",
    description: "Full-stack store with Next.js, Stripe, and Appwrite backend.",
    image: "/portfolio/rakape-web.png",
    link: "https://ecommerce-demo.com",
  },
  {
    title: "Blog Platform",
    description:
      "A fast, MDX-powered blog platform with dark/light mode support.",
    image: "/projects/blog.png",
    link: "https://yourblog.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 py-20 px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
      >
        My Projects
      </motion.h2>

      {/* Grid of Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
