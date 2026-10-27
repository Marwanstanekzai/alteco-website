import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Alteco transformed our digital platform with robust performance, stunning responsive design, and seamless user journeys. Highly recommended.',
    author: 'Sarah Jenkins',
    role: 'VP of Digital Product',
    company: 'NexaCorp',
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The engineering team's attention to clean code, performance optimization, and accessible architecture exceeded our technical expectations.",
    author: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Vertex Solutions',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Our lead generation and user engagement metrics surged significantly right after deploying the new Alteco-designed corporate portal.',
    author: 'Elena Rostova',
    role: 'Managing Director',
    company: 'Lumina Media Group',
    rating: 5,
  },
]

function TestimonialsSection() {
  return (
    <>
      {/* =========================
          TESTIMONIALS
          ========================= */}
      <section id="testimonials" className="testimonials">
        <div className="testimonials-header">
          <span>WHAT OUR CLIENTS SAY</span>
          <h2>TRUSTED BY INDUSTRY LEADERS</h2>
          <p>
            Real results and genuine feedback from organizations that rely on Alteco for their digital success.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-top">
                <Quote size={28} className="quote-icon" aria-hidden="true" />
                <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="testimonial-author">
                <h4>{t.author}</h4>
                <span>{t.role} • <strong>{t.company}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection
