import Head from 'next/head';
import Hero from "../components/Hero/Hero";
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Skills from '@/components/Skills/Skills';
export default function Home() {
  return(
    <div id='home'>
    <Head>
      <title>Vijay&apos;s Portfolio</title>
      <meta name="description" content="Vijay's personal portfolio showcasing web development skills." />
    </Head>
    <Hero />
    <Skills />
    <Portfolio />
    <Contact />
    </div>
  )
}