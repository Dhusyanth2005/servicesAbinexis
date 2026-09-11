import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Abinexis Group</span>
          <p>
            A technology-driven entrepreneurial group building software,
            hardware, e-commerce, and global trade ventures under one
            ecosystem.
          </p>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Elsewhere</h4>
          <ul>
            <li>
              <a href="https://store.abinexis.com/" target="_blank" rel="noreferrer">
                Storefront
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/abinexis" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Abinexis. All rights reserved.</span>
        <span>Founded by Abinash Ramakrishnan</span>
      </div>
    </footer>
  );
}