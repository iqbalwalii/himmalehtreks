"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/brand-story.gif"
            alt="Adventure Lifestyle"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-950 mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
            At Himmaleh Treks, we create clothing and gear that empower your adventures.
            From rugged mountain trails to urban exploration, our products are built
            to withstand nature’s extremes while keeping you comfortable and stylish.
          </p>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            Sustainability, quality craftsmanship, and performance are at the heart of
            everything we do. Join our community of explorers and experience apparel
            designed for those who chase the horizon.
          </p>
          <a
            href="/about"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold tracking-wide hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
