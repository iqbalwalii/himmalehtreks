"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-3.jpg"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Gear Up for the Wild
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          Explore apparel built to withstand nature’s extremes — and empower your next adventure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="bg-amber-300 text-stone-950 px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition"
          >
            Shop Now
          </Link>
          <Link
            href="/gear"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-stone-950 transition"
          >
            Explore Gear
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
