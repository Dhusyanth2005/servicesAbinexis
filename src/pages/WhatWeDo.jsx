import "./WhatWeDo.css";

const AREAS = [
  {
    title: "Technology & software",
    copy: "Web applications, business software, and e-commerce platforms, alongside AI-powered solutions, automation, and the APIs and backend systems that hold them together.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Developer working across multiple screens of code",
  },
  {
    title: "Hardware, embedded systems & IoT",
    copy: "Electronic product development, microcontroller-based projects, sensors, and hardware-software integration — moving from idea, to prototype, to a testable product.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up of an electronic circuit board with components",
  },
  {
    title: "E-commerce & digital commerce",
    copy: "Online retail and digital storefronts backed by technology — product sourcing, dropshipping, store automation, and product management, not just a shop front.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    alt: "Warehouse shelves stocked with retail packages",
  },
  {
    title: "Global trade & export",
    copy: "Connecting Indian suppliers and producers — spices, pulses, agricultural and marine products — with international buyers, through sourcing, documentation, and logistics coordination.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
    alt: "Shipping containers at a port",
  },
  {
    title: "Entrepreneurship & innovation",
    copy: "The foundation connecting every vertical: business ideation, market research, product validation, and new venture creation.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Team reviewing a business plan on a whiteboard",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <section className="section what-hero">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h1>Five verticals, one ecosystem.</h1>
          <p>
            Abinexis Group brings technology, hardware, commerce, and trade
            together under one roof. Here's how each part works, and how
            they connect.
          </p>
        </div>
      </section>

      {AREAS.map((area, i) => (
        <section
          className={`section area ${i % 2 === 1 ? "area--reverse" : ""}`}
          key={area.title}
        >
          <div className="container area__inner">
            <img src={area.img} alt={area.alt} loading="lazy" />
            <div>
              <h2>{area.title}</h2>
              <p>{area.copy}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}