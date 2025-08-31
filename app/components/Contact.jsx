"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus({ message: "Sending...", type: "loading" });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      setStatus({ message: "✅ Message sent successfully!", type: "success" });
      e.target.reset();
    } else {
      setStatus({ message: `❌ ${result.error}`, type: "error" });
    }

    setTimeout(() => setStatus({ message: "", type: "" }), 5000);
  };

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 
          text-gray-800 dark:text-white"
        >
          Let’s work together
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
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
              name="email"
              type="email"
              required
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
              name="message"
              rows="4"
              required
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

          <AnimatePresence>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={`text-center mt-4 font-medium ${
                  status.type === "success"
                    ? "text-green-600"
                    : status.type === "error"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </section>
  );
}
