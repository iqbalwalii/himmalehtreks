"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & tagline */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image src="/logo.png" alt="Brand Logo" width={140} height={34} />
          </Link>
          <p className="text-gray-300 text-sm md:text-base">
            Gear up for your next adventure with apparel built to withstand nature’s extremes.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/mens" className="hover:text-amber-300 transition">Men</Link></li>
            <li><Link href="/womens" className="hover:text-amber-300 transition">Women</Link></li>
            <li><Link href="/gear" className="hover:text-amber-300 transition">Gear</Link></li>
            <li><Link href="/stories" className="hover:text-amber-300 transition">Stories</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/faq" className="hover:text-amber-300 transition">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300 transition">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:text-amber-300 transition">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-amber-300 transition">Returns</Link></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
          <div className="flex gap-4 mb-6">
            <Link href="#" className="hover:text-amber-300 transition"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-amber-300 transition"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-amber-300 transition"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-amber-300 transition"><Youtube className="w-5 h-5" /></Link>
          </div>

          <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-full text-stone-950 focus:outline-none"
            />
            <button className="px-4 py-2 rounded-full bg-amber-300 text-stone-950 font-semibold hover:bg-amber-400 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-stone-800 py-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} [BrandName]. All rights reserved.
      </div>
    </footer>
  );
}
