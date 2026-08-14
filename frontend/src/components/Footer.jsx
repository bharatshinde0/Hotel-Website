import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Luxury Hotel</h3>
          <p>Elegant rooms, fine dining, and calm hospitality for memorable city escapes.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><MapPin size={16} /> 21 Royal Avenue, City Center</p>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><Mail size={16} /> hello@luxuryhotel.com</p>
        </div>
        <div>
          <h4>Follow</h4>
          <div className="social-links">
            <a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://www.facebook.com" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Luxury Hotel. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
