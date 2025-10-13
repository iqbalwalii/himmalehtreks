"use client";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 2000);
  };

  return (
    <section className="bg-[#0B1E33] text-[#F4F7FA] px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00D4FF]">
            Reach the Summit With Us
          </h1>
          <p className="text-[#7DA0B6] text-lg max-w-2xl mx-auto">
            Have a question about our gear or need support with an order?  
            Let’s get your adventure started.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#10283F] rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 border border-[#1E3A55]"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg bg-[#0E243A] text-gray-200 focus:ring-2 focus:ring-[#00D4FF] outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg bg-[#0E243A] text-gray-200 focus:ring-2 focus:ring-[#00D4FF] outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full h-32 p-4 rounded-lg bg-[#0E243A] text-gray-200 focus:ring-2 focus:ring-[#00D4FF] outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-lg bg-[#00D4FF] text-[#0B1E33] font-bold hover:bg-[#35E0FF] transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-2 text-[#AFC3D2]">
          <a
            href="mailto:support@himmalehtreks.com"
            className="block hover:text-[#00D4FF]"
          >
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
    </section>
  );
}
