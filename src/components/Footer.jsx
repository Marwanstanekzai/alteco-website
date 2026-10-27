import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react'

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

        {/* Copyright */}
        <p className="copyright">© 2026 Alteco. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
