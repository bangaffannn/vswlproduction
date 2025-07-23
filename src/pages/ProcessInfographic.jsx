import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaBalanceScaleRight, FaShieldAlt } from "react-icons/fa";
import vid1 from "../assets/Vid/Comp1short.mp4";
import vid2 from "../assets/Vid/Style.mp4";
import vid3 from "../assets/Vid/WiggleBar2.mp4";
import gut1 from "../assets/Vid/GUT.mp4";
import vid4 from "../assets/Vid/ShapeTimelineInfographic.mp4";
// import vid5 from "../assets/Vid/PieChart0.mp4";
import vid6 from "../assets/Vid/Style3.mp4";
import gut2 from "../assets/Vid/GUT_1.mp4";
import vid7 from "../assets/Vid/PieChart_New.mp4";

const steps = [
  {
    title: "Eksplorasi",
    icon: <FaHandshake className="text-2xl text-gray-500" />,
    desc: "Kami mulai dengan mendalami kebutuhan, tujuan, dan nilai klien. Diskusi awal ini menjadi fondasi untuk solusi kreatif dan berbasis data.",
  },
  {
    title: "Produksi & Analisis",
    icon: <FaBalanceScaleRight className="text-2xl text-gray-500" />,
    desc: "Tim VSWL akan mengerjakan riset, visualisasi, desain, hingga produksi konten atau instalasi dengan pendekatan kolaboratif dan presisi teknis.",
  },
  {
    title: "Presentasi & Dampak",
    icon: <FaShieldAlt className="text-2xl text-gray-500" />,
    desc: "Hasil akhir dipresentasikan dan disesuaikan untuk mencapai dampak maksimal. Kami mendampingi hingga implementasi dan siap memberi dukungan lanjutan.",
  },
];

const ProcessInfographicStylish = () => (
  <section className="mt-4 relative overflow-hidden py-20">
    {/* lampu neon samar di background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-10 blur-3xl rounded-full" />
    </div>

    {/* 🎬 Marquee video portfolio */}
    <div className="w-full overflow-hidden mb-24 group">
      <div className="flex gap-6 w-max animate-slide group-hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex gap-6">
            {[vid1, vid2, vid3, gut1, vid4, vid6, vid7, gut2].map((src, i) => (
              <video
                key={`${idx}-${i}`}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="h-40 w-auto rounded-xl shadow-lg"
              />
            ))}
          </div>
        ))}
      </div>
    </div>

    <motion.h2
      className="text-3xl md:text-4xl font-bold font-serif text-center text-gray-900 mb-16 relative"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Proses Kerja VSWL
    </motion.h2>

    {/* wrapper proses */}
    <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-10 max-w-6xl mx-auto px-6 z-10">
      <div className="hidden md:block absolute top-16 left-0 right-0 border-t border-dashed border-gray-300" />
      {steps.map((s, i) => (
        <motion.div
          key={i}
          className="relative flex-1 group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-lg border border-white/40 shadow-lg flex items-center justify-center group-hover:shadow-purple-300/60 transition">
            {s.icon}
          </div>
          <div className="mt-6 px-6 py-8 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl hover:shadow-purple-300/30 transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProcessInfographicStylish;
