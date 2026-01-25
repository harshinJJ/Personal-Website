import React, { useState, useEffect } from "react";

import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        Harshin <br /> Mansoor
      </div>

      {/* Desktop nav */}
      <nav className="header-center">
        <a href="#home">Main</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contacts</a>
      </nav>

      {/* Burger (mobile only) */}
      <div
        className={`burger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contacts
        </a>

        {/* Language mobile menu */}
        <div className="mobile-lang">
          <span>En</span>
          <span className="mobile-lang-divider">/</span>
          <span>Ar</span>
        </div>
      </div>

      {/* Half circle for desktop only */}
      <div className="header-right desktop-lang">
        <div className="lang-circle">
          <div className="lang-text">En</div>
          <div className="lang-divider"></div>

          <a
            href="/under-development"
            className="lang-text"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Ar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
