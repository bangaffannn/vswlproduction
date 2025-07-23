import React from "react";
import { motion } from "framer-motion";
import aboutData from "../data/aboutData";

const About = () => {
  return (
    <section id="about" className="mt-24 mb-24 px-6 sm:px-0 bg-[#F5F7FA]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={aboutData.image}
            alt="Illustration"
            className="mx-auto w-[80%] md:w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <div className="space-y-8">
            {aboutData.highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * index }}
              >
                <h3 className="text-2xl font-semibold text-[#2C73D2] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-800 text-lg mb-4">{aboutData.cta.topText}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] mb-6 leading-tight">
            <span className="text-[#2F80ED]">{aboutData.cta.mainText}</span>
            <br />
            {aboutData.cta.subText}
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            {aboutData.cta.bottomText}
          </p>
          <a
            href={aboutData.cta.buttonLink}
            className="inline-block px-8 py-4 bg-[#2F80ED] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            {aboutData.cta.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
