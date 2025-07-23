import React, { useState } from "react";
import {
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleUp,
} from "react-icons/hi";

const FAQ = () => {
  const faqs = [
    {
      question:
        "Apa saja layanan utama yang ditawarkan oleh VSWL?",
      answer:
        "VSWL memiliki tiga layanan utama: Digital Business Growth (peningkatan penjualan melalui digital), The Branding Partner (personal branding untuk akademisi dan politisi), dan Production (video, foto, animasi 3D, motion graphic, dll).",
    },
    {
      question:
        "Bagaimana layanan Digital Business Growth dari VSWL membantu bisnis saya?",
      answer:
        "Kami membantu bisnis Anda tumbuh melalui website yang optimal, SEO lokal, Google Ads, dan strategi media sosial yang tepat sasaran untuk meningkatkan visibilitas dan penjualan.",
    },
    {
      question:
        "Siapa yang cocok menggunakan layanan The Branding Partner dari VSWL?",
      answer:
        "Layanan ini cocok untuk akademisi, tokoh publik, politisi, dan profesional yang ingin membangun personal brand yang kuat dan profesional di dunia digital.",
    },
    {
      question:
        "Apa jenis konten yang bisa diproduksi oleh tim Production VSWL?",
      answer:
        "Kami memproduksi berbagai konten seperti video promosi, animasi 3D, motion graphic, VFX, foto produk, hingga konten reels atau TikTok yang engaging dan profesional.",
    },
    {
      question:
        "Apakah VSWL menyediakan paket lengkap mulai dari strategi hingga eksekusi?",
      answer:
        "Ya, kami menyediakan layanan end-to-end. Mulai dari perencanaan strategi, riset pasar, pembuatan konten, hingga eksekusi kampanye digital untuk mencapai hasil maksimal.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-gray-900 mb-12">
          Pertanyaan Umum Tentang Layanan VSWL
        </h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer p-6"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(index);
                  }}
                  aria-label={
                    openIndex === index ? "Tutup jawaban" : "Buka jawaban"
                  }
                  className="text-gray-500 hover:text-gray-700 transition-all"
                >
                  {openIndex === index ? (
                    <HiOutlineArrowCircleUp size={28} />
                  ) : (
                    <HiOutlineArrowCircleDown size={28} />
                  )}
                </button>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
