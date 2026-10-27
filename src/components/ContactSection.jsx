import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a message subject.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message of at least 10 characters.'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    }, 700)
  }

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
            {submitted ? (
              <div className="contact-success-card" role="status">
                <CheckCircle2 size={48} className="success-icon" aria-hidden="true" />
                <h3>Thank You!</h3>
                <p>
                  Your message has been delivered to our consulting team. We will review your request and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  className="modal-submit-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'input-error' : ''}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'input-error' : ''}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject *</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry / Consultation"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'input-error' : ''}
                    aria-invalid={Boolean(errors.subject)}
                  />
                  {errors.subject && <span className="field-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={submitting}
                >
                  <span>{submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <Send size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
