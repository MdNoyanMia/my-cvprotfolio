import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../Image";
import logu from "/src/assets/logu.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/">
            <Image imgSrc={logu} className="w-32 md:w-40" />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item, i) => (
              <li key={i}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 01746446008</li>
            <li>✉️ mdnoyanmia22@gmail.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600"><FaFacebookSquare size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <p className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Noyan Mia — All rights reserved.
      </p>
    </footer>
  );
}
