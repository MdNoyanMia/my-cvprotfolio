import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../Image";
import logu from "/src/assets/logu.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <Link to="/">
            <Image
              imgSrc={logu}
              alt="MyCompany Logo"
              className="w-32 md:w-40 lg:w-44 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">About</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-blue-500">Services</Link>
            </li>
            <li>
              <Link to="/myprotfolio" className="hover:text-blue-500">My Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 01746446008</li>
            <li>✉️ mdnoyanmia22@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-x-4">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-transform transform hover:scale-110"
            >
              <FaFacebookSquare size={28} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved. |
        <Link to="/privacy" className="ml-1 hover:text-blue-500"> Privacy Policy</Link> |
        <Link to="/terms" className="ml-1 hover:text-blue-500"> Terms of Service</Link>
      </div>
    </footer>
  );
}
