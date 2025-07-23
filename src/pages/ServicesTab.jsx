import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaUserTie, FaVideo } from "react-icons/fa";
import ImgGrowth from "../assets/Tab/web.png";
import ImgBranding from "../assets/Tab/seo.png";
import ImgProduction from "../assets/Tab/content.png";

const tabs = [
  { title: "Production", icon: <FaVideo />, image: ImgProduction },
  { title: "The Branding Partner", icon: <FaUserTie />, image: ImgBranding },
  { title: "Digital Business Growth", icon: <FaChartLine />, image: ImgGrowth },
];

const services = {
  Production: {
    title:
      "VSWL menciptakan konten visual yang bermakna, seperti 3D product advertising, VFX, hingga data visual motion graphics untuk iklan dan sosial media.",
    description: [
      "Produksi video promosi, storytelling, dan konten digital berdampak.",
      "Animasi 3D, motion graphics, dan visual efek (VFX).",
      "Foto produk dan dokumentasi profesional.",
      "Paket konten siap posting untuk keperluan media sosial dan kampanye digital.",
    ],
  },
  "The Branding Partner": {
    title:
      "VSWL adalah partner visi dan misi personal maupun lembaga untuk membangun dampak melalui konten visual. Kami membantu membentuk narasi, identitas, dan citra yang otentik agar cerita Anda dikenali, dipercaya dan diingat.",
    description: [
      "Strategi branding untuk akademisi, tokoh publik, dan politisi.",
      "Desain visual dan tone komunikasi yang sesuai dengan positioning Anda.",
      "Manajemen media sosial dan personal website untuk membangun kredibilitas.",
      "Produksi konten naratif & dokumentatif untuk mendukung narasi publik.",
    ],
  },
  "Digital Business Growth": {
    title:
      "VSWL meningkatkan penjualan dan potensi pasar melalui optimalisasi website, local SEO, hingga digital campaign. Kami menggabungkan teknologi dan performa untuk menciptakan pengalaman pelanggan yang efektif dan berkelanjutan.",
    description: [
      "Pembuatan website bisnis yang cepat, SEO-friendly, dan konversi tinggi.",
      "Optimasi Google Business Profile & Local SEO untuk meningkatkan visibilitas lokal.",
      "Manajemen iklan melalui Google Ads dan Meta Ads.",
      "Strategi konten dan integrasi digital untuk peningkatan penjualan secara berkelanjutan.",
    ],
  },
};

const ServicesTab = () => {
  const [activeTab, setActiveTab] = useState("Production");

  return (
    <section
      id="services"
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-3xl md:text-4xl font-bold font-serif text-center text-gray-900 mb-16 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Apa Yang Kami Lakukan?
        </motion.h1>

        <div className="flex justify-center flex-wrap gap-4 mb-14">
          {tabs.map((tab) => (
            <motion.button
              key={tab.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-base md:text-lg font-medium transition-all duration-300 border
              ${
                activeTab === tab.title
                  ? "bg-white border-gray-700 text-gray-900 shadow-lg"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-800 hover:shadow-md"
              }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.icon} <span className="hidden sm:inline">{tab.title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-10 rounded-3xl shadow-xl flex flex-col-reverse md:flex-row items-center gap-10"
          >
            <div className="text-center md:text-left md:w-2/3">
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">
                {activeTab}
              </h2>
              <p className="text-gray-600 mb-5">
                {services[activeTab].title}
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 text-left">
                {services[activeTab].description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <img
              src={tabs.find((tab) => tab.title === activeTab).image}
              alt={activeTab}
              className="w-full md:w-1/3 rounded-xl object-cover grayscale hover:grayscale-0 transition duration-500 shadow-md"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesTab;
