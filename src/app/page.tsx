import Hero from "../components/Hero/Hero";
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Skills from '@/components/Skills/Skills';
export default function Home() {
  return(
    <div id='home'>
    <Hero />
    <Skills />
    <Portfolio />
    <Contact />
    </div>
  )
}