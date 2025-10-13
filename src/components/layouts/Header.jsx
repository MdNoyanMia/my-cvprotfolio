import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'
import logu from '/src/assets/logu.png'
import Container from '../Container'
import Flex from '../Flex'

export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return 'light'
    } catch (err) {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    // smooth transition for full body
    body.style.transition = 'background-color 0.7s ease, color 0.7s ease'

    if (theme === 'dark') {
      root.classList.add('dark')
      body.classList.add('bg-gray-900', 'text-white')
      body.classList.remove('bg-white', 'text-black')
    } else {
      root.classList.remove('dark')
      body.classList.add('bg-white', 'text-black')
      body.classList.remove('bg-gray-900', 'text-white')
    }

    try {
      localStorage.setItem('theme', theme)
    } catch (err) {}
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <header className="transition-colors duration-700 bg-white dark:bg-gray-900 shadow-md">
      <Container>
        <Flex className="items-center  gap-x-[370px] py-4">
          <div>
            <Link to={'/'} aria-label="Go to home">
              <Image imgSrc={logu} className="w-[70px]" />
            </Link>
          </div>

          <nav className="flex items-center gap-6">
            <ul className="hidden md:flex gap-x-5 text-[14px] font-bold text-black dark:text-white transition-colors duration-700">
              <li>
                <Link to={'/'} className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-400 after:duration-300 hover:after:w-full">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'about'} className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-400 after:duration-300 hover:after:w-full">
                  About
                </Link>
              </li>
              <li>
                <Link to={'/service'} className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-400 after:duration-300 hover:after:w-full">
                  Service
                </Link>
              </li>
              <li>
                <Link to={'/myprotfolio'} className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-400 after:duration-300 hover:after:w-full">
                My protfolio
                </Link>
              </li>
              <li>
                <Link to={'/contact'} className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-400 after:duration-300 hover:after:w-full">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Theme toggle button with smooth icon transition */}
           
          </nav>
        </Flex>
      </Container>
    </header>
  )
}
