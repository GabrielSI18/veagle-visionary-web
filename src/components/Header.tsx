
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Star, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/#home", icon: <Home size={18} /> },
    { name: "About", href: "/about", icon: <Info size={18} /> },
    { name: "Services", href: "/#services", icon: <Briefcase size={18} /> },
    { name: "Testimonials", href: "/#testimonials", icon: <Star size={18} /> },
    { name: "Contact", href: "/#contact", icon: <Mail size={18} /> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/Veagle_Preta.webp"
            alt="Logo Veagle"
            className="h-10 w-32 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <Link key={link.name} to={link.href} className="nav-link">
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-veagle-purple focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div
            className={cn(
              "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex justify-end p-6">
              <button onClick={closeMobileMenu} className="text-veagle-purple">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 p-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl flex items-center space-x-2 text-gray-800 hover:text-veagle-purple transition-colors duration-300"
                  onClick={closeMobileMenu}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
