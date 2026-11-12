import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
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
    hasApply: true,
  },
];

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwWsf1X5yxPABW3f_kbiBAMdhruGCKjsaFMqeM67DQSt9iFdqajZ-KjDu5I7X3tUaPrCQ/exec";

const EMPTY_FORM = {
  name: "",
  dob: "",
  gender: "",
  phone: "",
  email: "",
};

export default function WhatWeDo() {
  const { hash } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /* Scroll to hash anchor after route navigation */
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    // Retry a few times in case the DOM isn't painted yet
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 80);
      }
    };
    tryScroll();
  }, [hash]);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  /* Close on Escape key */
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") closeModal();
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, handleKeyDown]);

  function openModal() {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.dob) errs.dob = "Date of birth is required.";
    if (!form.gender) errs.gender = "Please select a gender.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim()))
      errs.phone = "Enter a valid phone number.";
    if (!form.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Enter a valid email address.";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSubmitting(true);
    setSubmitError("");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",          // Apps Script requires no-cors
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SEO
        title="What We Do | Abinexis Group - Five Core Verticals"
        description="Discover the 5 verticals of Abinexis Group: Technology & software, hardware IoT, digital commerce, global trade & export, and entrepreneurial innovation."
        path="/what-we-do"
      />
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
          id={area.hasApply ? "entrepreneurship" : undefined}
        >
          <div className="container area__inner">
            <img src={area.img} alt={area.alt} loading="lazy" />
            <div>
              <h2>{area.title}</h2>
              <p>{area.copy}</p>
              {area.hasApply && (
                <button className="btn btn-gold apply-btn" onClick={openModal}>
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ── Apply Modal ───────────────────────────────────── */}
      {modalOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="modal-card">
            {/* Header */}
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">Entrepreneurship Programme</span>
                <h2 id="modal-title" className="modal-title">Apply Now</h2>
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {submitted ? (
              /* Success state */
              <div className="modal-success">
                <span className="modal-success__icon" aria-hidden="true">✓</span>
                <h3>Application Received!</h3>
                <p>Thanks for applying. We'll review your details and get back to you soon.</p>
                <button className="btn btn-gold" onClick={closeModal}>Close</button>
              </div>
            ) : (
              /* Form */
              <form className="modal-form" onSubmit={handleSubmit} noValidate>
                <div className="modal-form__row">
                  <div className={`modal-field ${errors.name ? "modal-field--error" : ""}`}>
                    <label htmlFor="apply-name">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="apply-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Arjun Sharma"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <span className="modal-field__error">{errors.name}</span>}
                  </div>

                  <div className={`modal-field ${errors.dob ? "modal-field--error" : ""}`}>
                    <label htmlFor="apply-dob">Date of Birth <span aria-hidden="true">*</span></label>
                    <input
                      id="apply-dob"
                      name="dob"
                      type="date"
                      value={form.dob}
                      onChange={handleChange}
                      max={new Date().toISOString().split("T")[0]}
                    />
                    {errors.dob && <span className="modal-field__error">{errors.dob}</span>}
                  </div>
                </div>

                <div className="modal-form__row">
                  <div className={`modal-field ${errors.gender ? "modal-field--error" : ""}`}>
                    <label htmlFor="apply-gender">Gender <span aria-hidden="true">*</span></label>
                    <select
                      id="apply-gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select…</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                    {errors.gender && <span className="modal-field__error">{errors.gender}</span>}
                  </div>

                  <div className={`modal-field ${errors.phone ? "modal-field--error" : ""}`}>
                    <label htmlFor="apply-phone">Phone Number <span aria-hidden="true">*</span></label>
                    <input
                      id="apply-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                    {errors.phone && <span className="modal-field__error">{errors.phone}</span>}
                  </div>
                </div>

                <div className={`modal-field ${errors.email ? "modal-field--error" : ""}`}>
                  <label htmlFor="apply-email">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    id="apply-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <span className="modal-field__error">{errors.email}</span>}
                </div>

                <div className="modal-form__footer">
                  <p className="modal-form__note">We'll never share your details with third parties.</p>
                  <div className="modal-form__footer-right">
                    {submitError && <p className="modal-form__submit-error">{submitError}</p>}
                    <button
                      type="submit"
                      className="btn btn-gold modal-submit"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting…" : "Submit Application →"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
