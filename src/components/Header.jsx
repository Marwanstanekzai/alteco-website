import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

function Header() {
  // Houdt bij of het mobiele menu open of dicht is
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* =========================
          HEADER
          ========================= */}
      <header>

        {/* Bovenste donkere contactbalk */}
        <div className="topbar">
          <div className="topbar-item">
            <Mail size={14} aria-hidden="true" />
            <a href="mailto:info@yoursite.com">info@yoursite.com</a>
          </div>
          <div className="topbar-item">
            <Phone size={14} aria-hidden="true" />
            <a href="tel:+77000453">+77 000 453</a>
          </div>
        </div>

        {/* Hoofdnavigatie */}
        <nav className="main-nav">

          {/* Logo */}
          <h2>ALTECO</h2>

          {/* Hamburger knop voor mobiel */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Menu-items */}
          <ul className={menuOpen ? 'menu-open' : ''}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT US</a>
            </li>

            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
            </li>

            <li>
              <a href="#offers" onClick={() => setMenuOpen(false)}>PAGES</a>
            </li>

            <li>
              <a href="#offers" onClick={() => setMenuOpen(false)}>SHOP</a>
            </li>

            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>BLOG</a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a>
            </li>
          </ul>

        </nav>
      </header>
    </>
  )
}

export default Header