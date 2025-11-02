import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Recipes from '@/components/Recipes'
import Download from '@/components/Download'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Recipes />
      <Download />
      <Contact />
      <Footer />
    </main>
  )
}
