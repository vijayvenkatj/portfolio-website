import Image from 'next/image';
import Gojo from '../../Assets/gojo.png';
import BgImage from '../../Assets/desktop-wallpaper-portfolio.jpg'
import Link from 'next/link';
import {BiSolidArrowFromTop } from 'react-icons/bi';

function Hero() {
  return (
    <section className="relative bg-stone-950 text-gray-100 min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={BgImage}
          alt="Background"
          layout="fill" 
          objectFit="cover"
          quality={100}
          className="filter blur-md opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
\
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
        <div className="md:w-2/5 w-full">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            I&apos;M <span className="text-orange-600">Vijay J</span>
          </h1>
          <p className="text-lg lg:text-xl mb-4">Web Developer and DevOps Engineer</p>
          <Link href="#contact">
          <button className="px-6 py-3 mt-4 bg-transparent border-2 border-orange-600 text-white hover:bg-orange-700 hover:text-white transition-colors rounded-md">
            Contact Me
          </button>
          </Link>
        </div>
        <div className="md:w-3/5 w-full mt-8 md:mt-0 relative flex justify-center">
          <Image
            src={Gojo}
            alt="Gojo Satoru"
            width={500}
            height={500}
            className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
        <BiSolidArrowFromTop className="absolute bottom-6 text-5xl text-gray-200 animate-bounce" />
    </div>
    </section>
  );
}

export default Hero;
