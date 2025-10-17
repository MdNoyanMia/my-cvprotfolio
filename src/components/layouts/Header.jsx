import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "/src/components/context/ThemeContext" 

import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Image from "../Image";
import logu from "/src/assets/logu.png";
import Container from "../Container";
import Flex from "../Flex";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "My Portfolio", path: "/myprotfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="transition-colors duration-700 bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <Container>
        <Flex className="items-center justify-between py-3">
          <Link to="/" aria-label="Go to home">
            <Image imgSrc={logu} className="w-[70px]" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-5 text-[14px] font-bold text-black dark:text-white">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-amber-400 after:duration-300 hover:after:w-full transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full shadow-md transition ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                  : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </Flex>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 text-black dark:text-white bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md transition">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 hover:text-amber-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </header>
  );
}
