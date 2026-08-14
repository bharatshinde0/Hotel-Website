import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
        <span className="brand-mark">LH</span>
        <span>
          <strong>Luxury Hotel</strong>
          <small>Grand stays, warm service</small>
        </span>
      </NavLink>

      <button className="nav-toggle" type="button" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu">
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={isOpen ? "nav nav-open" : "nav"}>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
