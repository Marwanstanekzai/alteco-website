import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle2, Globe } from 'lucide-react'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74v-8.37H5.1v8.37h2.73z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError('Please provide a valid email address.')
      return
    }

    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <>
      {/* =========================
          FOOTER
          ========================= */}
      <footer className="footer">
        {/* Contactgegevens */}
        <div className="footer-contact">
          <div className="footer-contact-item">
            <Mail size={16} aria-hidden="true" />
            <a href="mailto:info@yoursite.com">info@yoursite.com</a>
          </div>
          <div className="footer-contact-item">
            <Phone size={16} aria-hidden="true" />
            <a href="tel:+77000453">+77 000 453</a>
          </div>
        </div>

        {/* Logo / bedrijfsnaam */}
        <h2>ALTECO</h2>

        {/* Nieuwsbrief sectie */}
        <div className="footer-newsletter">
          <h3>STAY CONNECTED</h3>
          <p>Subscribe for our latest technical insights and quarterly project updates.</p>

          {subscribed ? (
            <div className="newsletter-success" role="status">
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>Thank you for subscribing! Check your inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form" noValidate>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your corporate email..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  aria-label="Newsletter email address"
                  className={error ? 'newsletter-input-error' : ''}
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe to newsletter">
                  <span>Subscribe</span>
                  <Send size={14} aria-hidden="true" />
                </button>
              </div>
              {error && <span className="newsletter-error-msg">{error}</span>}
            </form>
          )}
        </div>

        {/* Footer navigatie */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          {/* Home */}
          <a href="#home">HOME</a>

          {/* About Us */}
          <a href="#about">ABOUT US</a>

          {/* Services */}
          <a href="#services">SERVICES</a>

          {/* Testimonials */}
          <a href="#testimonials">REVIEWS</a>

          {/* FAQ */}
          <a href="#faq">FAQ</a>

          {/* Contact */}
          <a href="#contact">CONTACT US</a>
        </nav>

        {/* Social media links */}
        <div className="footer-social" aria-label="Social media profiles">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alteco on LinkedIn"
            className="social-link"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alteco on Twitter"
            className="social-link"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alteco on Instagram"
            className="social-link"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://alteco.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alteco Global Network"
            className="social-link"
          >
            <Globe size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Copyright */}
        <p className="copyright">© 2026 Alteco. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
