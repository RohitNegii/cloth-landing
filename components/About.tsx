import { Award, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            About{" "}
            <span className="text-[var(--brand-primary)]">Royal Cloth</span>
          </h2>

          <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
            Since 2018, Royal Cloth Store has been redefining fashion with
            premium fabrics, affordable pricing, and trend-setting designs. We
            believe clothing is not just fashion, it’s confidence. Since 2018,
            Royal Cloth Store has been redefining fashion with premium fabrics,
            affordable pricing, and trend-setting designs. We believe clothing
            is not just fashion, it’s confidence.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <Award className="mx-auto text-[var(--brand-primary)]" />
              <p className="mt-2 font-semibold">Premium Quality</p>
            </div>

            <div>
              <Users className="mx-auto text-[var(--brand-primary)]" />
              <p className="mt-2 font-semibold">10k+ Customers</p>
            </div>

            <div>
              <Sparkles className="mx-auto text-[var(--brand-primary)]" />
              <p className="mt-2 font-semibold">Latest Trends</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80"
            alt="Clothing Store"
            className="rounded-3xl shadow-2xl"
          />

          {/* DECORATIVE CARD */}
          <div className="absolute -bottom-6 -left-6 bg-[var(--bg-primary)] px-6 py-4 rounded-2xl shadow-xl">
            <p className="text-sm text-[var(--text-muted)]">
              Serving Fashion Since
            </p>
            <p className="text-xl font-bold text-[var(--brand-primary)]">
              2018
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
