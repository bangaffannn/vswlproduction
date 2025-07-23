import React from "react";
import { motion } from "framer-motion";
import logoMotion from "../assets/Vid/WiggleBar2.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <section id="home" className="pt-28">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold font-serif text-gray-900 leading-tight">
              <em>PARTNER FOR YOUR GROWTH!</em>
            </h1>
            <p className="text-gray-700 text-lg">
              VSWL adalah mitra strategis untuk bisnis, akademisi, dan institusi
              melalui tiga pilar utama: <em>Digital Business Growth</em> untuk
              solusi pengembangan teknologi dan pertumbuhan digital,{" "}
              <em>The Branding Partner</em> untuk membangun identitas yang
              berdampak, serta <em>Production</em> untuk menciptakan konten
              visual yang kuat dan bermakna.
            </p>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <video
              className="w-full object-contain rounded-xl"
              src={logoMotion}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div id="about"
          className="relative mt-12 py-20 px-6 md:px-12 bg-white/40 backdrop-blur-md rounded-3xl shadow-md overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200 opacity-40 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6">
              <em>We code. We create. We tell stories.</em>
            </h2>
            <section className="py-8 border-t-2">
              <div className="container mx-auto px-6 text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  Kami memiliki 3 misi utama dalam menciptakan karya
                  bermakna dan berdampak.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Misi 1 */}
                  <div className="shadow-xl p-8 rounded-2xl border-gray-300 hover:scale-105 transition-transform duration-300">
                    <div className="mb-4 text-gray-500 text-5xl mx-auto"></div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Growth
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tumbuh untuk menumbuhkan. VSWL memiliki misi menjadi katalisator klien untuk dapat mencapai pertumbuhannya.
                    </p>
                  </div>

                  {/* Misi 2 */}
                  <div className="shadow-xl p-8 rounded-2xl border-gray-300 hover:scale-105 transition-transform duration-300">
                    <div className="mb-4 text-gray-500 text-5xl mx-auto"></div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Reputasi
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      VSWL memiliki misi untuk membangun kredibilitas, eksistensi dan reputasi klien di ruang publik.
                    </p>
                  </div>

                  {/* Misi 3 */}
                  <div className="shadow-xl p-8 rounded-2xl border-gray-300 hover:scale-105 transition-transform duration-300">
                    <div className="mb-4 text-gray-500 text-5xl mx-auto"></div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Dampak
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      VSWL memberikan dampak positif melalui teknologi dan visualisasi yang
                      mendukung perubahan sosial, pendidikan dan gerakan
                      publik.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-slate-400 text-slate-600 text-base md:text-lg font-medium px-7 py-3 rounded-xl hover:border-slate-600 hover:text-slate-800 transition-colors duration-300"
            href="https://wa.me/6289608725725?text=Halo%20VSWL,%20saya%20mau%20konsultasi%20tentang%20layanan%20VSWL."
          >
            Kerjasama dengan VSWL
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
