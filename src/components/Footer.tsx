
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center">
              <img
                src="/Veagle_Branco_-_Real.webp" // Caminho relativo da imagem dentro da pasta public
                alt="Logo Veagle"
                className="h-14 w-32 object-contain" // Ajuste o tamanho para algo menor
              />
            </div>
            <p className="text-gray-400 mb-6">
              Digital solutions to boost your business. We specialize in
              creating impactful digital experiences that drive results.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-veagle-purple transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-veagle-purple transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-veagle-purple transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-veagle-purple transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#home"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonials"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/landing-page"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Landing Page Creation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/paid-traffic"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Paid Traffic Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/store-creation"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Online Store Creation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/store-management"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Online Store Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-veagle-light">Email:</span>
                <a
                  href="mailto:contact@veaglecompany.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  contact@veaglecompany.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-veagle-light">Address:</span>
                <span className="text-gray-400">
                  412 W 7th St STE 908, Clovis, NM 88101
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} Veagle Company LLC. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-veagle-purple rounded-full shadow-lg hover:bg-veagle-dark transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
