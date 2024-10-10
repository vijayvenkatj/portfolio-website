import Head from 'next/head';
import Hero from "../components/Hero/Hero";
import Portfolio from '@/components/Portfolio/Portfolio';
export default function Home() {
  return(
    <>
    <Head>
      <title>Vijay&apos;s Portfolio</title>
      <meta name="description" content="Vijay's personal portfolio showcasing web development skills." />
    </Head>
    <Hero />
    <Portfolio />
    </>
  )
}