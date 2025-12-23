import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* BRAND INFO */}
        <div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            Royal <span className="text-[var(--brand-primary)]">Cloth</span>{" "}
            Store
          </h3>

          <p className="mt-3 text-sm leading-relaxed">
            Premium clothing store delivering quality fabrics, latest trends and
            affordable prices since 2018.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-[var(--brand-primary)] mt-0.5"
              />
              <span>Main Market, Your City</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--brand-primary)]" />
              <a
                href="tel:9999999999"
                className="hover:text-[var(--brand-primary)] transition"
              >
                +91 99999 99999
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MessageCircle
                size={18}
                className="text-[var(--brand-primary)]"
              />
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="hover:text-[var(--brand-primary)] transition"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>

        {/* GOOGLE MAP */}
        <div className="w-full h-56 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=delhi&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Royal Cloth Store • All Rights Reserved
      </div>
    </footer>
  );
}
