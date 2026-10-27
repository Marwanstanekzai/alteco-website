import './App.css'

import Header from './components/Header'
import Herobanner from './components/Herobanner'
import OffersSection from './components/OffersSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Header />

      <main>
        <Herobanner />
        <OffersSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App