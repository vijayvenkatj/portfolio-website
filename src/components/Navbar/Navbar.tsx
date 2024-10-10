"use client"
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars as Menu, FaTimes as X } from 'react-icons/fa'



function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className='bg-transparent backdrop-blur-sm px-10 py-3 border-b-[1px] border-gray-900 fixed z-50 min-w-full'>
      <div className='container mx-auto flex justify-between items-center'>
        <motion.div whileHover={{ scaleX: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href='/'>
            <span className='text-xl text-orange-600 font-semibold'>Vijay Venkat J</span>
          </Link>
        </motion.div>

        <div className='hidden md:flex items-center text-lg gap-12'>
          <Link href='#home' className='text-white hover:text-gray-600'>Home</Link>
          <Link href='#skills' className='text-white hover:text-gray-500'>Skills</Link>
          <Link href='#projects' className='text-white hover:text-gray-500'>Projects</Link>
        </div>

        <div className='hidden md:flex items-center gap-4'>
          <Link href="#contact">
            <button className="px-6 py-3 bg-transparent border-2 border-orange-600 text-white hover:bg-orange-700 hover:text-white transition-colors rounded-md">
            Contact Me
            </button>
          </Link>
        </div>


        <div className='md:hidden flex items-center space-x-4'>
  
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 200 }} 
          animate={{ opacity: 1, x: 0 }}  
          transition={{ ease:'easeInOut' ,duration: 0.2 }}
          exit={{ opacity: 0, x: 200 }}  
          className='fixed top-0 right-0 h-full w-full bg-black shadow-lg p-6 flex flex-col items-center rounded-lg space-y-6 z-50'
        >
          {/* Close Button */}
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-white focus:outline-none'>
            <X className='h-8 w-8 ' />
          </button>

          {/* Mobile Menu Links */}
  
          <Link href='#home' className='text-gray-600 text-lg font-semibold hover:text-white'>Home</Link>
          <Link href='#projects' className='text-gray-600 text-lg font-semibold hover:text-white'>Projects</Link>
          <Link href='#skills' className='text-gray-600 text-lg font-semibold hover:text-white>Contact'>Skills</Link>

        </motion.div>
      )}
    </nav>
  )
}

export default Navbar;