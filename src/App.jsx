import './App.css'

import Header from './components/Header'
import Herobanner from './components/Herobanner'
import OffersSection from './components/OffersSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Herobanner />
        <OffersSection />
        <AboutSection />
        <ServicesSection />
      </main>

      <Footer />
    </>
  )
}

export default App