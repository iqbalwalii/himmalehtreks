"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been subscribed.`);
    setEmail("");
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-stone-900 via-stone-950 to-black text-white overflow-hidden">
      {/* Glacial Accent Lights */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          Stay Ahead of the Summit
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg"
        >
          Subscribe for exclusive drops, mountain stories, and expedition-ready gear updates.
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
            className="flex-1 px-6 py-4 rounded-full text-stone-900 font-medium focus:outline-none border border-stone-700"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold tracking-wide hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}
