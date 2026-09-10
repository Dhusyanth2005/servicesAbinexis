import {
  IconCode,
  IconAutomation,
  IconApp,
  IconCloud,
  IconChip,
  IconCart,
  IconGlobe,
  IconBulb,
} from "../components/ServiceIcons";
import SEO from "../components/SEO";
import "./Services.css";

const SERVICES = [
  {
    title: "Software & web development",
    copy: "Web applications, business software, and e-commerce platforms built on modern, maintainable stacks.",
    points: ["Web apps & business software", "APIs & backend systems", "Database-driven applications"],
    icon: IconCode,
  },
  {
    title: "AI & automation systems",
    copy: "Workflow automation and AI-powered solutions that remove repetitive manual work from operations.",
    points: ["Process automation", "AI-driven workflows", "Custom internal tooling"],
    icon: IconAutomation,
  },
  {
    title: "App development",
    copy: "Mobile and cross-platform apps for businesses and entrepreneurs who need a product, not just a prototype.",
    points: ["iOS & Android", "Cross-platform builds", "MVP to production"],
    icon: IconApp,
  },
  {
    title: "Cloud deployment & hosting (AWS)",
    copy: "Infrastructure setup and hosting on AWS, so applications scale with demand instead of breaking under it.",
    points: ["Cloud architecture", "Deployment pipelines", "Monitoring & scaling"],
    icon: IconCloud,
  },
  {
    title: "Hardware, embedded & IoT engineering",
    copy: "Electronic product development and hardware-software integration, from schematic to working prototype.",
    points: ["Microcontrollers & sensors", "PCB & prototype development", "Hardware-software integration"],
    icon: IconChip,
  },
  {
    title: "E-commerce & digital commerce",
    copy: "Storefront setup, product sourcing, and store automation for technology-enabled online retail.",
    points: ["Store setup & catalog structure", "Sourcing & dropshipping support", "Payment integration"],
    icon: IconCart,
  },
  {
    title: "Global trade & export facilitation",
    copy: "Connecting Indian suppliers and producers with international buyers, end to end.",
    points: ["Supplier & buyer sourcing", "Export documentation", "Logistics coordination"],
    icon: IconGlobe,
  },
  {
    title: "Startup & business development",
    copy: "Business ideation and validation for new ventures, built on the same execution-first approach as the rest of the group.",
    points: ["Market & product validation", "Business strategy", "Partnership development"],
    icon: IconBulb,
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Engineering & Technology Services | Abinexis Group"
        description="Explore Abinexis Group services: Custom software development, AI & automation, IoT & embedded hardware, AWS cloud hosting, e-commerce, and export trade."
        path="/services"
      />
      <section className="section services-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>What Abinexis Group builds — for us, and for others.</h1>
          <p>
            The same technology, hardware, and commerce capabilities we use
            to build our own ventures are available to other founders and
            businesses — from a single product to the systems running
            behind it.
          </p>
        </div>
      </section>

      <section className="section--tight section services-grid-wrap">
        <div className="container services-grid">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article className="service-card" key={s.title}>
                <span className="service-card__icon">
                  <Icon width="22" height="22" />
                </span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <ul>
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}