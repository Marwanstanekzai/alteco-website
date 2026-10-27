import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'What digital solutions and services does Alteco specialize in?',
    answer:
      'Alteco specializes in end-to-end enterprise software development, clean front-end engineering, high-conversion UI/UX design, cloud infrastructure, and custom API integrations tailored for modern organizations.',
  },
  {
    question: 'How long does a typical project implementation take from start to finish?',
    answer:
      'Timelines vary based on scope: small-to-medium digital web projects typically take 2 to 4 weeks, whereas complex enterprise architectures usually span 6 to 12 weeks with regular milestone deliveries and agile feedback sprints.',
  },
  {
    question: 'Can you refactor and modernize our existing legacy web codebase?',
    answer:
      'Yes. We perform comprehensive technical audits, identifying performance bottlenecks and security gaps, and incrementally refactor legacy codebases without interrupting your live production traffic.',
  },
  {
    question: 'Do you provide continuous maintenance and support after launch?',
    answer:
      'Absolutely. We offer tailored SLA packages including 24/7 uptime monitoring, security patching, cloud optimization, and ongoing feature iterations to support your business expansion.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <>
      {/* =========================
          FAQ SECTION
          ========================= */}
      <section id="faq" className="faq-section">
        <div className="faq-header">
          <span>FREQUENTLY ASKED QUESTIONS</span>
          <h2>HAVE QUESTIONS? WE ARE HERE TO HELP</h2>
          <p>
            Find quick answers to common questions about our technical capabilities, workflow process, and delivery standards.
          </p>
        </div>

        <div className="faq-accordion">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-icon ${isOpen ? 'rotated' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className={`faq-answer ${isOpen ? 'open' : ''}`}
                  role="region"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default FAQSection
