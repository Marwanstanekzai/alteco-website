import image2 from '../assets/image2.jpg'
import { Code, Sparkles } from 'lucide-react'

function OffersSection() {
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
          >
            VIEW ALL OFFERS →
          </button>

        </div>
      </section>
    </>
  )
}

export default OffersSection