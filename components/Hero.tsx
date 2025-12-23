import { PhoneCall, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-6 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80)",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm tracking-wide bg-white/10 text-[var(--brand-primary)]">
            Premium Fashion Store
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Royal <span className="text-[var(--brand-primary)]">Cloth</span>{" "}
            Store
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto md:mx-0">
            Discover premium mens & womens wear crafted with quality fabrics,
            timeless designs, and modern trends.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:gap-4 gap-4 justify-center md:justify-start">
            <a
              href="tel:9999999999"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full
                         bg-[var(--brand-primary)] text-black font-semibold
                         hover:scale-105 transition"
            >
              <PhoneCall size={18} />
              Call Now
            </a>

            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full
                         border border-[var(--brand-primary)] text-white
                         hover:bg-[var(--brand-primary)] hover:text-black
                         transition"
            >
              View Categories
              <ArrowDown size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-96 md:h-[26rem] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80"
              alt="Fashion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[var(--brand-primary)] animate-bounce">
        <ArrowDown size={72} />
      </div>
    </section>
  );
}
