import React from "react";
import Img1 from "../assets/blog1.jpg";
import Img2 from "../assets/blog2.jpg";
import Img3 from "../assets/blog3.jpg";

const BlogCard = ({ title, image, description }) => {
  return (
    <div className="mx-auto bg-background rounded-xl shadow-md overflow-hidden md:max-w-2xl transition duration-300 ease-in-out">
      <div className="">
        <div className="">
          <img
            className="h-48 w-full object-cover"
            src={image}
            alt="Blog"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-md text-white text-justify font-semibold mb-4">
            {title}
          </div>
          <a
            href="#"
            className="block text-md leading-tight font-medium text-white text-justify mb-2"
          >
            {description}
          </a>
          <a href="/" className="text-secondary hover:text-white">Baca selanjutnya...</a>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Mengoptimalkan SEO: Langkah-langkah Penting untuk Situs Web Anda",
      image: Img1,
      description:
        "Optimasi mesin pencari (SEO) menjadi kunci kesuksesan untuk meningkatkan visibilitas situs web Anda di halaman hasil pencarian...",
    },
    {
      id: 2,
      title:
        "Pentingnya Teknologi Terbaru dalam Pengembangan Web: Menyongsong Masa Depan Digital",
      image: Img2,
      description:
        "Dalam era digital yang terus berkembang, teknologi terbaru memainkan peran kunci dalam evolusi pengembangan web.",
    },
    {
      id: 3,
      title: "Strategi Konten yang Efektif untuk SEO yang Lebih Baik",
      image: Img3,
      description:
        "Dalam upaya meningkatkan peringkat SEO situs web, strategi konten yang efektif memainkan peran penting dalam menarik perhatian mesin pencari dan pengguna.",
    },
  ];

  return (
    <section id="blog" className="container mx-auto mb-10 mt-20">
      <div>
        <h1 className="text-3xl font-semibold text-center my-8">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
