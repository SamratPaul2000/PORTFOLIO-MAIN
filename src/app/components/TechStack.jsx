"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const skillIcons = [
  {
    icon: "/html5.svg",
    name: "HTML5"
  },
  {
    icon: "/css.svg",
    name: "CSS"
  },
  {
    icon: "/react.svg",
    name: "React"
  },
  {
    icon: "/bootstrap.svg",
    name: "Bootstrap"
  },
  {
    icon: "/tailwind.svg",
    name: "Tailwind"
  },
  {
    icon: "/javascript.svg",
    name: "JavaScript"
  },
  {
    icon: "/nextjs.svg",
    name: "Next.js"
  },
  {
    icon: "/python.svg",
    name: "Python"
  },
  {
    icon: "/mysql.svg",
    name: "MySQL"
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <div className="container mx-auto ">
        <h1 className="text-white text-4xl font-bold lg:text-3xl text-center mb-4">
          My Tech Stack
        </h1>
        <h2 className="text-warmGray-300 text-center text-xl md:text-2xl py-4 mb-12">
          Technologies I have been working with recently....
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={6000}
            modules={[Autoplay]}
            className="py-8"
          >
            {skillIcons.map((skill, index) => (
              <SwiperSlide key={index} className="">
                <div className="flex rounded-full bg-white flex-col items-center justify-center p-4 transition-transform hover:scale-110 text-white">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                  <span className="mt-2 text-xl text-black">{skill.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TechStack;