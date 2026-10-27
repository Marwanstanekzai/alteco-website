import { LayoutDashboard, Pencil, Diamond, ArrowUp } from "lucide-react";

function ServicesSection() {
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
          {/* Service 1 */}
          <div className="service-item">
            <div className="service-icon">
              <Diamond />
            </div>

            <span>TUTORIALS TO HELP</span>

            <h3>PROMOTION AGENCY</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod dolore tempora incididunt ut labore.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-item">
            <div className="service-icon">
              <Pencil />
            </div>

            <span>TUTORIALS TO HELP</span>

            <h3>CONSTRUCTIONS BUILDING</h3>

            <p>
              Non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-item">
            <div className="service-icon">
              <LayoutDashboard />
            </div>

            <span>TUTORIALS TO HELP</span>

            <h3>EDUCATION ONLINE</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod dolore tempora incididunt ut labore.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-item">
            <div className="service-icon">
              <ArrowUp />
            </div>

            <span>TUTORIALS TO HELP</span>

            <h3>FASHION DESIGN</h3>

            <p>
              Non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
