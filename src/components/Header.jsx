import { useState, useEffect } from 'react'
import { Mail, Phone } from 'lucide-react'

function Header() {
  // Houdt bij of het mobiele menu open of dicht is
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detecteer scrollen voor sticky header schaduw
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sluit het mobiele menu bij Escape of bij venstervergroting
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  return (
    <>
      {/* Toegankelijke skip-link voor toetsenbordgebruikers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* =========================
          HEADER
          ========================= */}
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>

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
        <nav className="main-nav" aria-label="Main Navigation">

          {/* Logo */}
          <h2>ALTECO</h2>

          {/* Hamburger knop voor mobiel */}
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>

          {/* Menu-items */}
          <ul id="primary-navigation" className={menuOpen ? 'menu-open' : ''}>
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