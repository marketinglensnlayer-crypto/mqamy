import Navbar from './components/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import ValueSection from './components/ValueSection'
import PropertiesSection from './components/PropertiesSection'
import AgentSection from './components/AgentSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main>
        <Hero />
        <LogoStrip />
        <ValueSection />
        <PropertiesSection />
        <AgentSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
