import { Link } from "react-router-dom";
import BridgeMotif from "../components/BridgeMotif";
import HeroGlobe from "../components/HeroGlobe";
import SEO from "../components/SEO";
import {
  IconCode,
  IconChip,
  IconCart,
  IconGlobe,
  IconBulb,
  IconApp,
  IconCloud,
} from "../components/ServiceIcons";
import "./Home.css";

const PILLARS = [
  {
    title: "Technology & software",
    copy: "Web apps, business software, and AI-powered automation built to solve real operating problems.",
    icon: IconCode,
  },
  {
    title: "Hardware & IoT",
    copy: "Embedded systems, sensors, and connected devices — taken from prototype through to a working product.",
    icon: IconChip,
  },
  {
    title: "E-commerce",
    copy: "Digital storefronts, sourcing, and store automation for technology-enabled commerce, not just an online shop.",
    icon: IconCart,
  },
  {
    title: "Global trade & export",
    copy: "Connecting Indian suppliers and producers with international buyers, from sourcing through to logistics.",
    icon: IconGlobe,
  },
  {
    title: "Entrepreneurship",
    copy: "Validating ideas and building new ventures — the thread that connects every vertical at Abinexis.",
    icon: IconBulb,
  },
];

const SERVICES_PREVIEW = [
  {
    title: "Software & app development",
    copy: "Web platforms, business software, and mobile apps built on modern stacks.",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    icon: IconApp,
  },
  {
    title: "Hardware & IoT engineering",
    copy: "Embedded systems and connected devices, from schematic to working prototype.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    icon: IconChip,
  },
  {
    title: "AWS deployment & hosting",
    copy: "Cloud infrastructure that scales with traffic, not against it.",
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
    icon: IconCloud,
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Abinexis Group | Engineering, Technology & Global Ventures"
        description="Abinexis Group is an engineering-led entrepreneurial group building software, hardware IoT systems, e-commerce platforms, and global trade solutions."
        path="/"
      />
      <section className="hero section">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow">Abinexis Group</span>
            <h1>
              Building technology. Engineering products. Connecting
              markets.
            </h1>
            <p>
              Abinexis Group is a technology-driven entrepreneurial group
              spanning software, hardware, e-commerce, and global trade —
              built by engineers who take ideas from prototype to market.
            </p>
            <div className="hero__actions">
              <a
                href="https://store.abinexis.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Visit the store
              </a>
              <Link to="/services" className="btn btn-outline-dark">
                Explore services
              </Link>
            </div>
          </div>
          <HeroGlobe />
        </div>
      </section>

      <section className="section--ink section pillars">
        <div className="container">
          <span className="eyebrow">What we build</span>
          <h2>Five verticals, one engineering-led group.</h2>
          <div className="pillars__list">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              const num = String(i + 1).padStart(2, "0");
              return (
                <div className="pillar-card" key={p.title}>
                  <span className="pillar-card__icon">
                    <Icon width="24" height="24" />
                  </span>
                  <div className="pillar-card__text">
                    <h3>{p.title}</h3>
                    <p>{p.copy}</p>
                  </div>
                  <span className="pillar-card__num" aria-hidden="true">{num}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="services-preview__head">
            <div>
              <span className="eyebrow">Services</span>
              <h2>We also build the tech behind other businesses.</h2>
            </div>
            <Link to="/services" className="btn btn-outline-dark">
              See all services
            </Link>
          </div>

          <div className="services-preview__grid">
            {SERVICES_PREVIEW.map((s) => {
              const Icon = s.icon;
              return (
                <Link to="/services" className="service-tile" key={s.title}>
                  <div className="service-tile__media">
                    <img src={s.img} alt={`${s.title} - Abinexis`} loading="lazy" />
                    <span className="service-tile__icon">
                      <Icon width="20" height="20" />
                    </span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                  <span className="service-tile__link">Learn more</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="cta-panel">
            <BridgeMotif className="cta-panel__motif" />
            <div className="cta-panel__content">
              <span className="eyebrow">Get started</span>
              <h2>Have an idea worth building?</h2>
              <p>
                Software, hardware, an export inquiry, or a new venture —
                tell us what you're building and we'll help you get it to
                market.
              </p>
            </div>
            <Link to="/contact" className="btn btn-gold cta-panel__btn">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}