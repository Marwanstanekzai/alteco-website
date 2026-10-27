import { useState } from 'react'
import { LayoutDashboard, Pencil, Diamond, ArrowUp, X, Check } from 'lucide-react'

const SERVICES = [
  {
    id: 'promo',
    icon: Diamond,
    subtitle: 'TUTORIALS TO HELP',
    title: 'PROMOTION AGENCY',
    shortDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempora incididunt ut labore.',
    fullDesc:
      'Our promotion agency services elevate brand visibility across multi-channel digital campaigns, influencer partnerships, and strategic conversion funnels.',
    highlights: ['Multi-channel ad strategy', 'Conversion rate optimization', 'Brand identity guidelines'],
  },
  {
    id: 'build',
    icon: Pencil,
    subtitle: 'TUTORIALS TO HELP',
    title: 'CONSTRUCTIONS BUILDING',
    shortDesc:
      'Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    fullDesc:
      'Precision architectural planning and enterprise digital construction workflows designed to coordinate projects from blueprint to deployment.',
    highlights: ['BIM & 3D visualization', 'Project lifecycle tracking', 'Sustainable materials audit'],
  },
  {
    id: 'edu',
    icon: LayoutDashboard,
    subtitle: 'TUTORIALS TO HELP',
    title: 'EDUCATION ONLINE',
    shortDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempora incididunt ut labore.',
    fullDesc:
      'Next-generation learning management systems (LMS) with interactive video streaming, automated assessments, and student progress dashboards.',
    highlights: ['Interactive course portals', 'Live virtual classrooms', 'Accredited certificate tracking'],
  },
  {
    id: 'fashion',
    icon: ArrowUp,
    subtitle: 'TUTORIALS TO HELP',
    title: 'FASHION DESIGN',
    shortDesc:
      'Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    fullDesc:
      'Cutting-edge digital lookbooks, 3D garment rendering, and high-conversion e-commerce storefronts tailored specifically for luxury fashion brands.',
    highlights: ['Lookbook interactive galleries', 'Virtual try-on integrations', 'Omnichannel inventory sync'],
  },
]

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <>
      {/* =========================
          SERVICES
          ========================= */}
      <section id="services" className="services">
        {/* Titel en introductietekst */}
        <div className="services-header">
          <span>ELABORATED CODE AND CREATIVE DESIGN</span>

          <h2>OUR SERVICES</h2>

          <p>
            Non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>

        {/* Vier services */}
        <div className="service-items grid-4">
          {SERVICES.map((svc) => {
            const Icon = svc.icon
            return (
              <div key={svc.id} className="service-item">
                <div className="service-icon">
                  <Icon />
                </div>

                <span>{svc.subtitle}</span>

                <h3>{svc.title}</h3>

                <p>{svc.shortDesc}</p>

                <button
                  type="button"
                  className="service-explore-btn"
                  onClick={() => setSelectedService(svc)}
                >
                  EXPLORE SERVICE →
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="presentation"
        >
          <div
            className="modal-box service-modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close service details"
              onClick={() => setSelectedService(null)}
            >
              <X size={20} />
            </button>

            <span className="offers-modal-badge">{selectedService.subtitle}</span>
            <h3 id="service-modal-title">{selectedService.title}</h3>
            <p className="service-modal-text">{selectedService.fullDesc}</p>

            <div className="service-modal-highlights">
              <h4>Key Capabilities</h4>
              <ul>
                {selectedService.highlights.map((h, i) => (
                  <li key={i}>
                    <Check size={16} className="highlight-check" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="modal-submit-btn"
              onClick={() => setSelectedService(null)}
            >
              CLOSE DETAILS
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ServicesSection
