import { motion } from "framer-motion";

export default function ExperienceCertifications() {
  const workExperience = [
    {
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      description: "Developed web applications using Next.js and Firebase.",
    },
    {
      role: "Frontend Developer",
      company: "Creative Web Studio",
      duration: "Jan 2020 - Dec 2021",
      description: "Built responsive UI using React and TailwindCSS.",
    },
  ];

  const certifications = [
    {
      title: "Certified JavaScript Developer",
      provider: "Udemy",
      image: "/certificates/js-cert.png",
      link: "#", // Optional: link to PDF or image
    },
    {
      title: "React Advanced Course",
      provider: "Coursera",
      image: "/certificates/react-cert.png",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="certifications">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work Experience & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 shadow-md p-5 rounded-xl"
                >
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                  <p className="mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="block bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-sm text-gray-500">{cert.provider}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
