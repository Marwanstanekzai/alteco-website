import { useState } from 'react'
import { X } from 'lucide-react'

const HERO_SLIDES = [
  {
    id: 1,
    title: 'BUSINESS YOUR SATISFACTION',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'CREATIVE STRATEGY & INNOVATION',
    description: 'Empowering your digital growth with tailored, cutting-edge solutions.',
  },
  {
    id: 3,
    title: 'CLEAN CODE & RELIABLE DESIGN',
    description: 'Delivering modern architectures crafted for peak business performance.',
  },
]

function Herobanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [authMode, setAuthMode] = useState(null) // 'login' | 'register' | null
  const [authSuccess, setAuthSuccess] = useState('')

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e) => {
    if (authMode) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      handlePrev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      handleNext()
    }
  }

  const handleAuthSubmit = (e) => {
    e.preventDefault()
    setAuthSuccess(
      authMode === 'login'
        ? 'Login successful! Welcome back.'
        : 'Registration successful! Welcome to Alteco.'
    )
    setTimeout(() => {
      setAuthMode(null)
      setAuthSuccess('')
    }, 1500)
  }

  const slide = HERO_SLIDES[currentSlide]

  return (
    <>
      {/* =========================
          HERO BANNER
          ========================= */}

      <section
        id="home"
        className="hero"
        aria-label="Hero Showcase"
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* Linker pijl */}
        <button
          className="hero-arrow hero-arrow-left"
          type="button"
          aria-label="Previous slide"
          onClick={handlePrev}
        >
          ‹
        </button>

        {/* Inhoud van de Hero */}
        <div className="hero-content" aria-live="polite">
          {/* Hoofdtitel */}
          <h1>{slide.title}</h1>

          {/* Beschrijving */}
          <p>{slide.description}</p>

          {/* Knoppen */}
          <div className="hero-buttons">
            <button
              type="button"
              onClick={() => {
                setAuthSuccess('')
                setAuthMode('login')
              }}
            >
              LOGIN
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthSuccess('')
                setAuthMode('register')
              }}
            >
              REGISTER
            </button>
          </div>
        </div>

        {/* Rechter pijl */}
        <button
          className="hero-arrow hero-arrow-right"
          type="button"
          aria-label="Next slide"
          onClick={handleNext}
        >
          ›
        </button>

        {/* Slide indicatoren */}
        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {HERO_SLIDES.map((s, index) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1}`}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Auth Modal */}
      {authMode && (
        <div
          className="modal-backdrop"
          onClick={() => setAuthMode(null)}
          role="presentation"
        >
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close dialog"
              onClick={() => setAuthMode(null)}
            >
              <X size={20} />
            </button>

            <div className="modal-tabs">
              <button
                type="button"
                className={authMode === 'login' ? 'active' : ''}
                onClick={() => {
                  setAuthSuccess('')
                  setAuthMode('login')
                }}
              >
                LOGIN
              </button>
              <button
                type="button"
                className={authMode === 'register' ? 'active' : ''}
                onClick={() => {
                  setAuthSuccess('')
                  setAuthMode('register')
                }}
              >
                REGISTER
              </button>
            </div>

            <h3 id="auth-title">
              {authMode === 'login' ? 'Sign In to Alteco' : 'Create an Alteco Account'}
            </h3>

            {authSuccess ? (
              <div className="modal-success-msg" role="status">
                {authSuccess}
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="modal-form">
                {authMode === 'register' && (
                  <div className="form-group">
                    <label htmlFor="auth-name">Full Name</label>
                    <input
                      id="auth-name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="auth-email">Email Address</label>
                  <input
                    id="auth-email"
                    type="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="auth-password">Password</label>
                  <input
                    id="auth-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button type="submit" className="modal-submit-btn">
                  {authMode === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Herobanner
