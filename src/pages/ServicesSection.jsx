import React from "react";
import vidGrowth from "../assets/Vid/GUT.mp4";
import vidBranding from "../assets/Vid/coffee.mp4";
import vidProduction from "../assets/Vid/Comp1short.mp4";
import vidPartner from "../assets/Vid/Style.mp4";
import vidEdu from "../assets/Vid/ShapeTimelineInfographic.mp4";

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
    title:
      "Konten Edukasi, Kampanye, Visualisasi Data & Pembelajaran Interaktif",
    description:
      "Kami menciptakan konten edukatif visual seperti video pembelajaran, animasi data, dan motion infographic untuk kebutuhan dosen, lembaga training, bimbel, dan institusi pendidikan. Membantu meningkatkan daya serap dan engagement audiens.",
    video: vidEdu,
  },
  {
    title: "Video dan Foto Produk",
    description:
      "Dengan pendekatan storytelling dan teknik pengambilan gambar yang estetik, kami bantu brand Anda tampil lebih meyakinkan dan kompetitif di pasar digital.",
    video: vidBranding,
  },
  {
    title: "Personal & Institutional Branding untuk Akademisi dan Tokoh Publik",
    description:
      "Kami menjadi partner strategi branding digital bagi akademisi, politisi, tokoh publik, serta lembaga pendidikan. Dengan narasi yang kuat dan tampilan visual yang konsisten, kami bantu Anda membangun citra yang kredibel dan berpengaruh.",
    video: vidPartner,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center tracking-tight leading-snug mb-16">
          Apa Masalah Yang Dapat VSWL Pecahkan?
        </h2>
        <div className="space-y-32 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-16`}
            >
              <div className="w-full md:w-1/2">
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-xl ring-1 ring-gray-200 shadow-sm"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-5">
                <h3 className="text-2xl font-semibold text-gray-800 tracking-tight hover:text-gray-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
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
