import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Backdrop — closes menu on outside tap */}
      {open && <div className="nav__backdrop" onClick={close} aria-hidden="true" />}

      <header className="nav">
        <div className="container nav__inner">
          <NavLink to="/" className="nav__logo" onClick={close}>
            Abinexis
          </NavLink>

          <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
            {LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={{ "--i": i }}
                className={({ isActive }) =>
                  `nav__link ${isActive ? "nav__link--active" : ""}`
                }
                onClick={close}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://store.abinexis.com/"
              target="_blank"
              rel="noreferrer"
              style={{ "--i": LINKS.length }}
              className="btn btn-gold nav__cta"
              onClick={close}
            >
              Visit Store
            </a>
          </nav>

          <button
            className={`nav__toggle ${open ? "nav__toggle--open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}