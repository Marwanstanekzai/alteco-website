import { useState } from 'react'

const HERO_SLIDES = [
  {
    id: 1,
    title: 'BUSINESS YOUR SATISFICTION',
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

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))
  }

  const slide = HERO_SLIDES[currentSlide]

  return (
    <>
      {/* =========================
          HERO BANNER
          ========================= */}

      <section id="home" className="hero" aria-label="Hero Showcase">
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
        <div className="hero-content">
          {/* Hoofdtitel */}
          <h1>{slide.title}</h1>

          {/* Beschrijving */}
          <p>{slide.description}</p>

          {/* Knoppen */}
          <div className="hero-buttons">
            <button type="button">LOGIN</button>
            <button type="button">REGISTER</button>
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
    </>
  )
}

export default Herobanner
