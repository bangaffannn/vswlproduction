import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTint, FaTools, FaBath } from "react-icons/fa";           // ganti ikon
import ImgInstalasi from "../assets/Tab/content.png";      // ganti gambar
import ImgPerbaikan from "../assets/Tab/seo.png";
import ImgToren from "../assets/Tab/web.png";

const tabs = [
  { title: "Instalasi Pipa Baru",      icon: <FaTint />,  image: ImgInstalasi },
  { title: "Perbaikan & Pemeliharaan", icon: <FaTools />, image: ImgPerbaikan },
  { title: "Pembersihan Toren Air",    icon: <FaBath />,  image: ImgToren },
];

const services = {
  "Instalasi Pipa Baru": {
    title: "Instalasi Pipa Profesional",
    description: [
      "Pemasangan jalur pipa air bersih & air panas (PVC, PPR, HDPE).",
      "Instalasi untuk rumah, ruko, apartemen, hotel, dan gedung perkantoran.",
      "Pemasangan kran, shower, water heater, wastafel, kloset, dan saniter lain.",
      "Perhitungan tekanan & debit air sesuai standar keselamatan dan efisiensi.",
    ],
  },
  "Perbaikan & Pemeliharaan": {
    title: "Perbaikan & Perawatan Plumbing",
    description: [
      "Deteksi dan perbaikan kebocoran pipa di dinding maupun bawah lantai.",
      "Penggantian pipa, fitting, valve, dan saniter yang rusak atau aus.",
      "Pembersihan & pelancaran saluran air atau wastafel mampet.",
      "Program maintenance berkala untuk mencegah kerusakan lebih besar.",
    ],
  },
  "Pembersihan Toren Air": {
    title: "Jasa Pembersihan Toren Air",
    description: [
      "Pembersihan toren/tangki air skala rumah hingga gedung bertingkat.",
      "Pengurasan, penyikatan, dan disinfeksi untuk menjaga kualitas air.",
      "Pemeriksaan dan penggantian pelampung, pipa inlet‑outlet, dan valve.",
      "Laporan kebersihan & rekomendasi perawatan lanjutan.",
    ],
  },
};

const ServicesTabPlumbing = () => {
  const [activeTab, setActiveTab] = useState("Instalasi Pipa Baru");

  return (
    <section id="services" className="py-2">
      <div className="container mx-auto px-6 pt-20">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-16 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Layanan Plumbing Qaf Engineering
        </motion.h1>

        {/* Tab buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          {tabs.map((tab) => (
            <motion.button
              key={tab.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-full text-base md:text-lg font-medium transition-all border
                ${
                  activeTab === tab.title
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-center gap-10"
          >
            <img
              src={tabs.find((tab) => tab.title === activeTab).image}
              alt={activeTab}
              className="w-full md:w-1/3 rounded-xl object-cover"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {services[activeTab].title}
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 text-left">
                {services[activeTab].description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesTabPlumbing;
