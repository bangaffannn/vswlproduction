import React from "react";

import img1 from "../assets/logo/GUT.png";
import img2 from "../assets/logo/BNPB.png";
import img3 from "../assets/logo/Kemendes.png";
import img4 from "../assets/logo/Kemenkes.png";
import img5 from "../assets/logo/DD.png";
import img6 from "../assets/logo/drgirmalogo.png";

const logos = [img1, img3, img4, img2, img5, img6];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10">
      <div className="container mx-auto px-6">
        <div className="text-center my-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-14">
            Telah Dipercaya Oleh
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img
              src={img1}
              alt="Logo"
              className="max-h-16 object-contain grayscale"
            />
            <img
              src={img2}
              alt="Logo"
              className="max-h-16 object-contain grayscale"
            />
            <img
              src={img3}
              alt="Logo"
              className="max-h-16 object-contain grayscale"
            />
            <img
              src={img4}
              alt="Logo"
              className="max-h-16 object-contain grayscale"
            />
            <img
              src={img5}
              alt="Logo"
              className="max-h-16 object-contain grayscale"
            />
            <img
              src={img6}
              alt="Logo"
              className="max-h-16 object-contain grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
