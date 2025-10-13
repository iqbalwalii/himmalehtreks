import Image from "next/image";

interface Story {
  name: string;
  location: string;
  quote: string;
  imgSrc: string;
}

const stories: Story[] = [
  {
    name: "Ravi Kumar",
    location: "Himalayas, India",
    quote: "My Himmaleh jacket saved me from hypothermia during a sudden blizzard. Absolute lifesaver!",
    imgSrc: "/ravi.jpg",
  },
  {
    name: "Emily Stone",
    location: "Alaska, USA",
    quote: "While crossing a glacier, my boots provided grip and insulation that literally saved my expedition.",
    imgSrc: "/boots.jpeg",
  },
  {
    name: "Carlos Mendez",
    location: "Patagonia, Chile",
    quote: "The backpack carried all my essentials in a torrential rainstorm without a single leak. Couldn’t have made it without it!",
    imgSrc: "/bag.jpg",
  },
];

export default function AdventureStories() {
  return (
    <section className="bg-[#0B1E33] text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00D4FF]">
            Gear That Goes the Distance
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real adventurers. Real saves. Real stories of survival and epic journeys.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-[#10283F] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform border border-[#1E3A55]"
            >
              <div className="relative w-full h-64">
                <Image
                  src={story.imgSrc}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <p className="text-gray-200 italic">"{story.quote}"</p>
                <h4 className="text-[#00D4FF] font-semibold">{story.name}</h4>
                <p className="text-gray-400 text-sm">{story.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="px-8 py-4 rounded-full bg-[#00D4FF] text-[#0B1E33] font-bold hover:bg-blue-500 transition">
            Share Your Adventure
          </button>
        </div>
      </div>
    </section>
  );
}
