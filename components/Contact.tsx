import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      title: "Our Location",
      icon: MapPin,
      description: "Main Market, Your City",
      link: "https://maps.google.com",
      isExternal: true,
    },
    {
      title: "Call Us",
      icon: Phone,
      description: "+91 99999 99999",
      link: "tel:9999999999",
      isExternal: false,
    },
    {
      title: "WhatsApp",
      icon: MessageCircle,
      description: "Chat with us",
      link: "https://wa.me/919999999999",
      isExternal: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-[var(--brand-primary)]">Touch</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Visit our store or contact us for the latest collections and best
            offers.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map(
            ({ title, icon: Icon, description, link, isExternal }) => (
              <a
                key={title}
                href={link}
                target={isExternal ? "_blank" : "_self"}
                className="bg-[var(--bg-secondary)] p-6 rounded-2xl text-center
                         hover:-translate-y-2 transition flex flex-col items-center
                         shadow-lg hover:shadow-2xl"
              >
                <Icon
                  size={32}
                  className="mx-auto mb-3 text-[var(--brand-primary)]"
                />
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <span className="text-sm text-[var(--text-muted)]">
                  {description}
                </span>
              </a>
            )
          )}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-12">
          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full
                       bg-[var(--brand-primary)] text-black font-semibold
                       hover:scale-105 transition"
          >
            <MapPin size={18} />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
