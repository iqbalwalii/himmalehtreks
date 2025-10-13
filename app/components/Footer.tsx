"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1E33] text-[#F4F7FA] border-t border-[#1E3A55]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand / Logo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-light.png"
              alt="Himmaleh Treks Logo"
              width={120}
              height={120}
              className="rounded"
            />
            <h2 className="text-2xl font-extrabold text-[#00D4FF] tracking-tight">
              Himmaleh Treks
            </h2>
          </div>
          <p className="text-[#7DA0B6] text-sm leading-relaxed">
            Gear built for explorers who live beyond limits.  
            Where performance meets the spirit of the mountains.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#00D4FF] mb-4">Explore</h3>
          <ul className="space-y-2 text-[#AFC3D2]">
            <li><Link href="/" className="hover:text-[#00D4FF] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#00D4FF] transition">About</Link></li>
            <li><Link href="/outerwear" className="hover:text-[#00D4FF] transition">Outerwear</Link></li>
            <li><Link href="/baselayers" className="hover:text-[#00D4FF] transition">Base Layers</Link></li>
            <li><Link href="/accessories" className="hover:text-[#00D4FF] transition">Accessories</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#00D4FF] mb-4">Contact</h3>
          <p className="text-[#AFC3D2] text-sm mb-3">
            Have a question? Reach out — we’ll get back faster than your next summit.
          </p>
          <div className="space-y-1 text-sm">
            <a href="mailto:support@himmalehtreks.com" className="block hover:text-[#00D4FF]">
              support@himmalehtreks.com
            </a>
            <a href="tel:+971559533290" className="block hover:text-[#00D4FF]">
              🇦🇪 +971 559533290
            </a>
            <a href="tel:+917006432968" className="block hover:text-[#00D4FF]">
              🇮🇳 +91 7006432968
            </a>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#00D4FF] mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[#00D4FF] transition">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-[#00D4FF] transition">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="hover:text-[#00D4FF] transition">
              <Twitter size={22} />
            </Link>
            <Link href="#" className="hover:text-[#00D4FF] transition">
              <Youtube size={22} />
            </Link>
          </div>
          <p className="text-xs text-[#7DA0B6] mt-6">
            © {new Date().getFullYear()} Himmaleh Treks  
            <br /> Crafted with altitude and precision.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#10283F] text-center text-[#7DA0B6] py-4 text-xs">
        Adventure Awaits — Never Stop Climbing 🏔️
      </div>
    </footer>
  );
}
