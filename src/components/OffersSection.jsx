import { useState } from 'react'
import image2 from '../assets/image2.jpg'
import { Code, Sparkles, X, Layers, ShieldCheck, Smartphone, Cloud } from 'lucide-react'

const ALL_OFFERS = [
  {
    icon: Code,
    title: 'Clean Modern Code',
    description: 'Scalable architecture written with modern standards and maintainable patterns.',
  },
  {
    icon: Sparkles,
    title: 'Design To Brag About',
    description: 'Eye-catching user interfaces designed to maximize engagement and conversion.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'High-availability deployment pipelines, hosting management, and DevOps automation.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Fully responsive and high-performing experience across every mobile device screen.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Quality Audit',
    description: 'Rigorous security practices, code reviews, and performance optimizations.',
  },
  {
    icon: Layers,
    title: 'Custom API Integrations',
    description: 'Seamless third-party system integrations, payment processing, and backend microservices.',
  },
]

function OffersSection() {
  const [showAllOffers, setShowAllOffers] = useState(false)

  return (
    <>
      {/* =========================
          OFFERS
          ========================= */}
      <section id="offers" className="offers grid-12">

        {/* Afbeelding aan de linkerkant */}
        <div className="offers-image">
          <img
            src={image2}
            alt="Business professional collaborating at desk"
          />
        </div>

        {/* Tekst aan de rechterkant */}
        <div className="offers-content">

          {/* Kleine blauwe tekst */}
          <span>
            ELABORATED CODE AND CREATIVE DESIGN
          </span>

          {/* Hoofdtitel */}
          <h2>WHAT WE OFFERS</h2>

          {/* Beschrijving */}
          <p>
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsum
            velit.
          </p>

          {/* Twee aanbiedingen */}
          <div className="offer-items grid-2">

            {/* Eerste aanbieding */}
            <div className="offer-item">
              <div className="offer-item-icon">
                <Code size={22} aria-hidden="true" />
              </div>
              <h3>Clean Modern Code</h3>

              <p>
                Phasellus enim libero, blandit vel sapien vitae, condimentum
                ultricies magna et.
              </p>

              <a href="#services">
                READ MORE →
              </a>
            </div>

            {/* Tweede aanbieding */}
            <div className="offer-item">
              <div className="offer-item-icon">
                <Sparkles size={22} aria-hidden="true" />
              </div>
              <h3>Design To Brag About</h3>

              <p>
                Phasellus enim libero, blandit vel sapien vitae, condimentum
                ultricies magna et.
              </p>

              <a href="#services">
                READ MORE →
              </a>
            </div>

          </div>

          {/* Knop */}
          <button
            className="offers-button"
            type="button"
            onClick={() => setShowAllOffers(true)}
          >
            VIEW ALL OFFERS →
          </button>

        </div>
      </section>

      {/* View All Offers Modal */}
      {showAllOffers && (
        <div
          className="modal-backdrop"
          onClick={() => setShowAllOffers(false)}
          role="presentation"
        >
          <div
            className="modal-box offers-modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="all-offers-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close offers dialog"
              onClick={() => setShowAllOffers(false)}
            >
              <X size={20} />
            </button>

            <span className="offers-modal-badge">FULL CATALOG</span>
            <h3 id="all-offers-title">All Alteco Professional Solutions</h3>
            <p className="offers-modal-intro">
              Explore our comprehensive range of design and software development services tailored for modern enterprises.
            </p>

            <div className="all-offers-grid">
              {ALL_OFFERS.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="all-offers-card">
                    <div className="offer-item-icon">
                      <IconComponent size={20} aria-hidden="true" />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>

            <button
              type="button"
              className="modal-submit-btn"
              onClick={() => setShowAllOffers(false)}
            >
              CLOSE CATALOG
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default OffersSection