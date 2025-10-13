"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingCart, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Hamburger only on mobile */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-slate-100"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-stone-950" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Brand" width={120} height={34} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products/mens" className="text-sm font-medium text-stone-950 hover:text-[#00D4FF]">Men</Link>
            <Link href="/products/womens" className="text-sm font-medium text-stone-950 hover:text-[#00D4FF]">Women</Link>
            <Link href="/products/gear" className="text-sm font-medium text-stone-950 hover:text-[#00D4FF]">Gear</Link>
            <Link href="/stories" className="text-sm font-medium text-stone-950 hover:text-[#00D4FF]">Stories</Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* <button className="hidden md:flex items-center gap-2 text-sm text-stone-950 hover:text-[#00D4FF]">
              <Search className="w-4 h-4" /> <span>Search</span>
            </button> */}

            {/* <Link href="/cart" className="p-2 rounded-md hover:bg-slate-100"> */}
              <ShoppingCart className="w-5 h-5 text-stone-950" />
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-stone-950 text-white transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between px-4 py-4 border-b border-stone-800 bg-stone-950">
            <Image src="/logo.png" alt="Brand" width={70} height={30} className="invert" />
            <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-stone-800">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="px-6 py-8 space-y-6 text-lg font-medium bg-stone-950">
            <Link href="/products/mens" onClick={() => setOpen(false)} className="block hover:text-[#00D4FF]">Men</Link>
            <Link href="/products/womens" onClick={() => setOpen(false)} className="block hover:text-[#00D4FF]">Women</Link>
            <Link href="/products/gear" onClick={() => setOpen(false)} className="block hover:text-[#00D4FF]">Gear</Link>
            <Link href="/products/stories" onClick={() => setOpen(false)} className="block hover:text-[#00D4FF]">Stories</Link>
            {/* <Link href="/cart" onClick={() => setOpen(false)} className="block hover:text-[#00D4FF]">Cart</Link> */}

            <div className="mt-6 border-t border-stone-800 pt-4">
              <button className="flex items-center gap-2 text-sm hover:text-[#00D4FF]">
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
