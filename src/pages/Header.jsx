import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo/VSWLBLACK.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClick = () => setIsMenuOpen(false);

  // Hide/show header based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll down
        setShowHeader(false);
      } else {
        // Scroll up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`text-gray-800 shadow-md fixed w-full top-0 z-50 bg-white transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="about" smooth spy>
          <img
            src={logo} // Ganti ini dengan path atau import gambar kamu
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden"
              : "hidden md:flex md:items-center md:gap-6"
          }`}
        >
          <HeaderLink to="home" label="Home" onClick={handleMenuClick} />
          <HeaderLink to="about" label="About" onClick={handleMenuClick} />
          <HeaderLink
            to="services"
            label="Services"
            onClick={handleMenuClick}
          />
          <HeaderLink to="faq" label="FAQ" onClick={handleMenuClick} />
        </ul>
      </nav>
    </header>
  );
}

const HeaderLink = ({ to, label, onClick }) => (
  <li>
    <Link
      to={to}
      smooth={true}
      spy={true}
      onClick={onClick}
      className="cursor-pointer px-3 py-2 rounded-full hover:text-gray-600 transition-colors duration-300"
    >
      {label}
    </Link>
  </li>
);

export default Header;
