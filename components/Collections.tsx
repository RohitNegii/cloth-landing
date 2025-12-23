import { Shirt, User, Baby, Sparkles } from "lucide-react";

const categories = [
  { name: "Mens Wear", icon: Shirt },
  { name: "Womens Wear", icon: User },
  // { name: "Kids Wear", icon: Baby },
  { name: "Ethnic Collection", icon: Sparkles },
];

export default function Collections() {
  return (
    <section id="collections" className="py-20 px-6 bg-[var(--bg-primary)]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-[var(--brand-primary)]">Categories</span>
        </h2>
        <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
          Explore our fashion categories curated for everyone.
        </p>
      </div>

      {/* Category Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group relative bg-[var(--bg-secondary)] rounded-3xl p-8
                       flex flex-col items-center justify-center text-center
                       cursor-pointer shadow-lg hover:shadow-2xl
                       transition-transform duration-300 hover:-translate-y-3
                       overflow-hidden"
          >
            {/* Decorative Circle */}
            <div
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full
                            bg-[var(--brand-primary)] opacity-20 rotate-45"
            />

            <Icon size={36} className="text-[var(--brand-primary)] mb-4" />
            <h3 className="font-semibold text-lg text-[var(--text-primary)]">
              {name}
            </h3>

            {/* <span className="mt-2 text-sm text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition">
              Explore
            </span> */}
          </div>
        ))}
      </div>
    </section>
  );
}
