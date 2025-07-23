import React from "react";
import vidGrowth from "../assets/Vid/GUT.mp4";
import vidBranding from "../assets/Vid/ShapeTimelineInfographic.mp4";
import vidProduction from "../assets/Vid/Comp1short.mp4";
import vidPartner from "../assets/Vid/Style4_1.mp4";
import vidEdu from "../assets/Vid/Compilation.mp4"; // Pastikan kamu punya video ini

const services = [
  {
    title: "Website & Mobile UI/UX untuk Institusi dan Personal Branding",
    description:
      "Kami merancang dan membangun website berbasis UI/UX modern yang tidak hanya menarik secara visual, tetapi juga meningkatkan kredibilitas, keterlibatan audiens, dan kepercayaan publik. Cocok untuk akademisi, tokoh publik, lembaga pendidikan, dan organisasi profesional.",
    video: vidGrowth,
  },
  {
    title: "Optimasi Pencarian Google (SEO) untuk Bisnis & Institusi",
    description:
      "93% calon customer menggunakan Google untuk mencari produk dan jasa. VSWL membantu menempatkan profil bisnis atau institusi Anda pada posisi teratas Google.",
    video: vidProduction,
  },
  {
    title: "Konten Edukasi & Pembelajaran Interaktif",
    description:
      "Kami menciptakan konten edukatif visual seperti video pembelajaran, animasi data, dan motion infographic untuk kebutuhan dosen, lembaga training, bimbel, dan institusi pendidikan. Membantu meningkatkan daya serap dan engagement audiens.",
    video: vidEdu,
  },
  {
    title: "Konten Kampanye, Visualisasi Data dan Konten Komersil yang Berdampak",
    description:
      "VSWL menciptakan konten visual kreatif dan strategis seperti 3D product advertising, VFX, serta visualisasi data untuk kampanye, sosial media, hingga presentasi akademik dan publik.",
    video: vidBranding,
  },
  // {
  //   title: "Personal & Institutional Branding untuk Akademisi dan Tokoh Publik",
  //   description:
  //     "Kami menjadi partner strategi branding digital bagi akademisi, politisi, tokoh publik, serta lembaga pendidikan. Dengan narasi yang kuat dan tampilan visual yang konsisten, kami bantu Anda membangun citra yang kredibel dan berpengaruh.",
  //   video: vidPartner,
  // },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-gray-900 mb-16">
          Apa Yang VSWL Kerjakan?
        </h2>
        <div className="space-y-24 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="w-full md:w-1/2">
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-xl shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
