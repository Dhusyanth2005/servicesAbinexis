import { useState } from "react";
import SEO from "../components/SEO";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Static build: no backend wired up yet.
    // Replace with a real submit handler (Formspree, API route, etc.)
    // or fall back to: window.location.href = `mailto:hello@abinexis.com?subject=...`
    setSent(true);
  }

  return (
    <>
      <SEO
        title="Contact Abinexis Group | Start a Project or Partnership"
        description="Get in touch with Abinexis Group for software, hardware engineering, international trade inquiries, or partnership opportunities."
        path="/contact"
      />
      <section className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="eyebrow">Contact</span>
          <h1>Let's talk about what you're building.</h1>
          <p>
            Whether it's a software or hardware project, an export inquiry,
            or a partnership idea — reach out and we'll get back to you.
          </p>

          <ul className="contact__list">
            <li>
              <span>Phone & WhatsApp</span>
              <div className="contact__phone-wrap">
                <span className="contact__phone-text">
                  +91 82480 38528
                </span>
                <div className="contact__phone-actions">
                  <a
                    href="tel:+918248038528"
                    className="contact__action-btn contact__action-btn--phone"
                    title="Call +91 82480 38528"
                    aria-label="Call +91 82480 38528"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/918248038528"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__action-btn contact__action-btn--whatsapp"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:founder@abinexis.com">
                founder@abinexis.com
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a
                href="https://in.linkedin.com/in/abinash-ramakrishnan-14a844291"
                target="_blank"
                rel="noreferrer"
              >
                Abinash Ramakrishnan
              </a>
            </li>
            <li>
              <span>Store</span>
              <a href="https://store.abinexis.com/" target="_blank" rel="noreferrer">
                store.abinexis.com
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="contact__success">
              <h3>Message received.</h3>
              <p>Thanks for reaching out — we'll reply by email shortly.</p>
            </div>
          ) : (
            <>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="btn btn-gold">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
      </section>
    </>
  );
}
