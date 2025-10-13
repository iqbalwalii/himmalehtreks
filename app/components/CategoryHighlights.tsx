"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Men’s Collection",
    image: "/men.jpg",
    link: "/products/mens",
  },
  {
    title: "Women’s Collection",
    image: "/women.jpg",
    link: "/products/womens",
  },
  {
    title: "Outdoor Gear",
    image: "/outdoor.jpg",
    link: "/products/gear",
  },
  {
    title: "Adventure Stories",
    image: "/adventure.jpg",
    link: "/products/stories",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-950 mb-12 text-center">
          Explore by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={cat.link} className="group relative block overflow-hidden rounded-2xl">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={600}
                  height={800}
                  className="object-cover w-full h-[400px] transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{cat.title}</h3>
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-stone-950 hover:text-white font-semibold tracking-wide hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20">
                    Discover
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
