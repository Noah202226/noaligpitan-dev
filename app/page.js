// app/page.jsx
"use client";
import { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/Projects";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AboutMe from "./components/About";
import WorkExperienceAndCertificates from "./components/WorkExperienceAndCertificates";

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <ProjectCard />

          <AboutMe />
          <WorkExperienceAndCertificates />
          <Services />

          <Contact />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
