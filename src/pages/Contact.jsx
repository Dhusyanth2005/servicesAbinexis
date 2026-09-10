import { useState } from "react";
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
              <span>Email</span>
              <a href="mailto:abinashramakrishnan0308@gmail.com">
                abinashramakrishnan0308@gmail.com
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
  );
}