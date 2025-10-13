"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/hero-1.jpg", title: "Built for the elements", subtitle: "Shop performance outerwear & gear" },
  { src: "/hero-2.jpg", title: "Gear that lasts", subtitle: "Sustainably sourced materials" },
  { src: "/hero-3.jpg", title: "Explore farther", subtitle: "New arrivals — ready for adventure" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="h-[70vh] md:h-[80vh] w-full relative">
        <AnimatePresence initial={false}>
          {slides.map((s, i) =>
            i === index ? (
              <motion.div
                key={s.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <Image src={s.src} alt={s.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
                <div className="absolute left-6 md:left-20 top-1/3 md:top-1/2 transform -translate-y-1/2 max-w-xl text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">{s.title}</h1>
                  <p className="mt-4 text-sm md:text-lg max-w-md">{s.subtitle}</p>

                  <div className="mt-6 flex gap-3">
                    <a href="/products" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold tracking-wide hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20">Shop Now</a>
                    <a href="/stories" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-stone-950 transition">Explore Stories</a>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Small dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-amber-300" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
