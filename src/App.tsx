import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { HeroSection } from './sections/HeroSection'
import { ValueSection } from './sections/ValueSection'
import { ServicesSection } from './sections/ServicesSection'
import { SharedTransportSection } from './sections/SharedTransportSection'
import { CorporateSection } from './sections/CorporateSection'
import { ExecutiveTransportSection } from './sections/ExecutiveTransportSection'
import { QualitySection } from './sections/QualitySection'
import { RegionsSection } from './sections/RegionsSection'
import { FinalCTA } from './sections/FinalCTA'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <HeroSection />
        <ValueSection />
        <ServicesSection />
        <ExecutiveTransportSection />
        <CorporateSection />
        <SharedTransportSection />
        <QualitySection />
        <RegionsSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
