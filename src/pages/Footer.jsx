import React from "react";
import { Link } from "react-scroll";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/logo/VSWLLOGO.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-gray-800 py-16 mt-20 border-t-2 border-gray-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* About VSWL */}
          <div>
            <img src={Logo} alt="VSWL Logo" className="h-10 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              <em>We code. We create. We tell stories!</em>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>VSWL</p>
              <p>Phone / WA: +62 896-0872-5725</p>
              <p>Email: info@vswl.id</p>
              <p>Based in Bogor, Indonesia</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <FooterLink to="home" label="Home" />
              <FooterLink to="about" label="About" />
              <FooterLink to="services" label="Services" />
              <FooterLink to="faq" label="FAQ" />
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h3>
            <ul className="flex space-x-5">
              <FooterSocialIcon
                link="https://instagram.com/vswl.id"
                icon={<FaInstagram size={22} />}
              />
              <FooterSocialIcon
                link="https://facebook.com/vswl.id"
                icon={<FaFacebook size={22} />}
              />
              <FooterSocialIcon
                link="https://linkedin.com/company/vswl"
                icon={<FaLinkedin size={22} />}
              />
              <FooterSocialIcon
                link="https://wa.me/6282218731973"
                icon={<FaWhatsapp size={22} />}
              />
              <FooterSocialIcon
                link="https://youtube.com/@vswl"
                icon={<FaYoutube size={22} />}
              />
            </ul>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="mt-12 pt-6 text-center text-sm text-gray-500 border-t border-gray-200"
        >
          © 2024 VSWL. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="cursor-pointer"
  >
    <Link to={to} smooth={true} spy={true} offset={-70} duration={500}>
      {label}
    </Link>
  </motion.li>
);

const FooterSocialIcon = ({ icon, link }) => (
  <motion.li
    whileHover={{ scale: 1.15 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600"
    >
      {icon}
    </a>
  </motion.li>
);

export default Footer;
