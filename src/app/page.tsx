import { Hero } from '@/components/home/hero/hero'
import { Canvas } from '@/components/home/canvas/canvas'
import { Projects } from '@/components/home/projects/projects'
import { Reviews } from '@/components/home/reviews/reviews'
import { CTA } from '@/components/home/cta/cta'
import { Footer } from '@/components/home/footer/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Canvas />
      <Projects />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
