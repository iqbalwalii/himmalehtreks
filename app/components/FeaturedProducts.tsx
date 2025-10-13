"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Men’s Alpine Jacket",
    image: "/prod2.jpg",
    price: "$249",
    link: "/products/mens-alpine-jacket",
  },
  {
    name: "Women’s Summit Parka",
    image: "/prod1.jpg",
    price: "$279",
    link: "/products/womens-summit-parka",
  },
  {
    name: "Explorer Backpack",
    image: "/prod5.jpg",
    price: "$199",
    link: "/products/explorer-backpack",
  },
  {
    name: "All-Weather Hiking Boots",
    image: "/prod4.jpg",
    price: "$189",
    link: "/products/hiking-boots",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-950 mb-12 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-gray-50"
            >
              <Link href={product.link} className="block">
                <div className="relative w-full h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-stone-950 mb-1">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.price}</p>
                  {/* <span className="inline-block mt-2 px-4 py-2 bg-amber-300 text-stone-950 font-medium rounded-full text-sm group-hover:bg-amber-400 transition">
                    View
                  </span> */}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
