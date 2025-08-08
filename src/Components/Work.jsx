import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "AlmaMingle",
      description:
        "A platform for students to connect, and collaborate on Events, publish blogs and message each other.",
      image:
        "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/projects/project1.png",
      link: "https://se-alma-mingle-18js.vercel.app/",
    },
    {
      title: "HabitFlow",
      description:
        "HabitFlow — a simple habit tracker to help build better routines. I built it using React, and deployed it on Netlify.",
      image:
        "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/projects/habitflow.png",
      link: "https://chipper-profiterole-4f8cbd.netlify.app/",
    },
    {
      title: "RoomieHub",
      description:
        "Java-based app to assign tasks, rooms, and manage roommates with an admin dashboard.",
      image:
        "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/projects/roomiehub.png",
      link: "https://tourmaline-medovik-7c6136.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio built with React, Tailwind, and hosted on Github. Deployed using GitHub Pages.",
      image:
        "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/portfolio.png",
      link: "https://shashankvrma.github.io/portfolio/",
    },
    {
      title: "Travel Bloom",
      description:
        "Travel recommendation website using Javascript, HTML, and CSS. and hosted on Github.",
      image:
        "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/TravelBloom.png",
      link: "https://shashankvrma.github.io/travel_recommendation/",
    },
  ];

  return (
    <div name="work">
      <section className="relative py-16 from-white to-gray-100 bg-transparent">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-100">
          <span className="inline-block border-b-4 border-pink-600 pb-1 text-slate-900 font-poppins">
            My Projects
          </span>
        </h2>

        {/* Custom Arrows */}
        <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2 swiper-button-prev-custom bg-white p-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
          <ArrowLeft />
        </div>
        <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2 swiper-button-next-custom bg-white p-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
          <ArrowRight />
        </div>

        <div className="max-w-screen-xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className=" bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition duration-500 transform hover:scale-105 h-max"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover rounded-t-3xl"
                  />
                  <div className="p-6 flex flex-col h-full text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4 text-white/80">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Work;
