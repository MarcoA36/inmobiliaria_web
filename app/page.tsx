import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PropertiesSection } from "@/components/properties-section"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { TopBar } from "@/components/topbar"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar/>
      <Navbar />
      <Hero />
      <PropertiesSection />
      <AboutSection/>
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
