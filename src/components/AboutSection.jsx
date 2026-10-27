const COMPANY_STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '450+', label: 'Delivered Projects' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedicated Support' },
]

function AboutSection() {
  return (
    <>
      {/* =========================
          ABOUT US
          ========================= */}
      <section id="about" className="about">

        {/* Kleine blauwe tekst */}
        <span>ABOUT OUR COMPANY</span>

        {/* Titel */}
        <h2>ABOUT US</h2>

        {/* Beschrijving */}
        <p>
          We create modern and professional solutions for businesses,
          combining creative design with clean and reliable development.
        </p>

        {/* Statistieken */}
        <div className="about-stats">
          {COMPANY_STATS.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default AboutSection