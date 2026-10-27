import { Target, CheckCircle2, Users } from 'lucide-react'

const COMPANY_STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '450+', label: 'Delivered Projects' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedicated Support' },
]

const CORE_VALUES = [
  {
    icon: Target,
    title: 'Creative Excellence',
    description: 'Transforming complex ideas into intuitive, elegant digital interfaces.',
  },
  {
    icon: CheckCircle2,
    title: 'Engineering Integrity',
    description: 'Building robust, maintainable code architectures that stand the test of time.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Working side-by-side with our partners to ensure long-term measurable growth.',
  },
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

        {/* Kernwaarden */}
        <div className="about-values">
          {CORE_VALUES.map((val, i) => {
            const Icon = val.icon
            return (
              <div key={i} className="value-card">
                <div className="value-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            )
          })}
        </div>

      </section>
    </>
  )
}

export default AboutSection