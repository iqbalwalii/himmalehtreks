export default function AboutPage() {
  return (
    <section className="bg-[#0B1E33] text-[#F4F7FA] px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#00D4FF] tracking-tight">
            Forged in the Mountains
          </h1>
          <p className="text-[#7DA0B6] text-lg md:text-xl max-w-3xl mx-auto">
            Himmaleh Treks isn’t just a brand — it’s a call to the wild.  
            Our mission: craft performance apparel that thrives where limits end.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/about-mountain.jpg"
            alt="Adventure Story"
            className="rounded-2xl w-full h-80 object-cover shadow-xl border border-[#1E3A55]"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00D4FF]">
              Designed for the Ascent
            </h2>
            <p className="text-[#B7C9D9] leading-relaxed">
              From Himalayan base camps to icy ridge lines, every piece is tested 
              in nature’s most demanding playgrounds. Every seam, fabric, and zipper 
              is tuned for performance and endurance.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Planet-First", desc: "Recycled, responsible, and designed to last for years, not seasons." },
            { title: "Built for Extremes", desc: "Field-tested by explorers, climbers, and trekkers worldwide." },
            { title: "Purpose in Every Stitch", desc: "Precision craftsmanship that blends comfort with resilience." },
          ].map((item, i) => (
            <div
              key={i}
              className="space-y-3 bg-[#10283F] rounded-xl py-10 px-6 hover:scale-105 transition-transform border border-[#1E3A55]"
            >
              <h3 className="text-xl font-semibold text-[#00D4FF]">{item.title}</h3>
              <p className="text-[#AFC3D2]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Final Statement */}
        <div className="text-center space-y-4 pt-10 border-t border-[#1E3A55]">
          <h3 className="text-2xl font-bold text-[#F4F7FA]">
            Built by explorers. Inspired by altitude.
          </h3>
          <p className="text-[#7DA0B6] max-w-2xl mx-auto">
            Himmaleh Treks is for those who move with the mountains — who rise with every climb.
          </p>
        </div>
      </div>
    </section>
  );
}
