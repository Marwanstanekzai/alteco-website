import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'

function ContactSection() {
  return (
    <>
      {/* =========================
          CONTACT US
          ========================= */}
      <section id="contact" className="contact-section">
        <div className="contact-header">
          <span>GET IN TOUCH</span>
          <h2>CONTACT US</h2>
          <p>
            Have a project in mind or need expert technical consultation?
            Reach out to our engineering team today.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Linker kolom: Contactinfo */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={22} aria-hidden="true" />
              </div>
              <div>
                <h4>Office Location</h4>
                <p>Corporate Plaza, Suite 400, Central Tech Hub</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={22} aria-hidden="true" />
              </div>
              <div>
                <h4>Direct Email</h4>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={22} aria-hidden="true" />
              </div>
              <div>
                <h4>Phone Support</h4>
                <a href="tel:+77000453">+77 000 453</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock size={22} aria-hidden="true" />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Rechter kolom: Contactformulier */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project Inquiry / Consultation"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>SEND MESSAGE</span>
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
