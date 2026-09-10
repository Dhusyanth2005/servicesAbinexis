import BridgeMotif from "../components/BridgeMotif";
import "./About.css";

const VALUES = [
  { title: "Innovation", copy: "Constantly explore better solutions." },
  { title: "Engineering", copy: "Build with technical discipline and practical thinking." },
  { title: "Execution", copy: "Turn ideas into real products and businesses." },
  { title: "Learning", copy: "Continuously learn from technology, markets, and customers." },
  { title: "Integrity", copy: "Build trustworthy relationships with customers, suppliers, and partners." },
  { title: "Global thinking", copy: "Develop products and businesses capable of serving international markets." },
];

export default function About() {
  return (
    <>
      <section className="section about-hero">
        <div className="container about-hero__inner">
          <div>
            <span className="eyebrow">About Abinexis Group</span>
            <h1>An engineering-led group, not a single product.</h1>
            <p>
              Abinexis Group is a technology-driven entrepreneurial group
              building innovative products, digital platforms, and scalable
              businesses. We bring software, hardware engineering,
              e-commerce, and international trade together under one
              ecosystem — identifying opportunities, validating them, and
              building ventures with both Indian and global market
              potential.
            </p>
          </div>
          <BridgeMotif className="about-hero__motif" />
        </div>
      </section>

      <section className="section--ink section about-mission">
        <div className="container about-mission__grid">
          <div>
            <span className="eyebrow">Vision</span>
            <h2>A globally recognized technology and entrepreneurial group.</h2>
            <p>
              We're working toward products, businesses, and solutions that
              hold up in a changing world — not just in one market.
            </p>
          </div>
          <div>
            <span className="eyebrow">Mission</span>
            <h2>Engineering and entrepreneurship, combined.</h2>
            <p>
              We combine engineering, technology, and innovation to develop
              useful products and scalable businesses, creating
              opportunities across Indian and international markets.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <span className="eyebrow">How we work</span>
          <h2>Six principles behind every vertical.</h2>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder">
        <div className="container founder__inner">
          <img
            className="founder__photo"
            src="/about.png"
            alt="Abinash Ramakrishnan, Founder of Abinexis Group"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">Founder</span>
            <h2>Abinash Ramakrishnan</h2>
            <p>
              Abinash is an engineering professional and entrepreneur
              working at the intersection of technology, product
              development, and business. Based in Tamil Nadu, India, he
              founded Abinexis Group to bring software, hardware, commerce,
              and trade together under one ecosystem.
            </p>
            <p>
              His approach is centered on learning through execution:
              identifying opportunities, building prototypes and
              businesses, testing them in real markets, and continuously
              improving them.
            </p>
            <ul className="founder__tags">
              <li>Technology &amp; Hardware</li>
              <li>E-Commerce</li>
              <li>Export &amp; International Trade</li>
              <li>Entrepreneurship</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}