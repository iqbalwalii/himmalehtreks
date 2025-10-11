"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been subscribed.`); // Replace with real API later
    setEmail("");
  };

  return (
    <section className="py-20 bg-stone-950 text-white relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Join the Expedition
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-200 mb-8 text-base md:text-lg"
        >
          Get the latest gear, adventure stories, and tips straight to your inbox.
        </motion.p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full text-stone-950 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-amber-300 text-stone-950 font-semibold hover:bg-amber-400 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
