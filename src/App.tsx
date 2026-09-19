import { useReveal } from './lib/useReveal'
import { NavBar } from './sections/NavBar'
import { Hero } from './sections/Hero'
import { PhotoSlider } from './sections/PhotoSlider'
import { Trust } from './sections/Trust'
import { Problem } from './sections/Problem'
import { Explainer } from './sections/Explainer'
import { Workflow } from './sections/Workflow'
import { Products } from './sections/Products'
import { Showcase } from './sections/Showcase'
import { Integrations } from './sections/Integrations'
import { Benefits } from './sections/Benefits'
import { Security } from './sections/Security'
import { Industries } from './sections/Industries'
import { Pricing } from './sections/Pricing'
import { Implementation } from './sections/Implementation'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'

export default function App() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="min-h-screen overflow-x-clip bg-white">
      <NavBar />
      <Hero />
      <PhotoSlider />
      <Trust />
      <Problem />
      <Explainer />
      <Industries />
      <Workflow />
      <Products />
      <Showcase />
      <Integrations />
      <Security />
      <Benefits />
      <Pricing />
      <Implementation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
