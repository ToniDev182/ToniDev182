import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import "./styles/card-dj.css";
import { useLanguage } from "./context/LanguageContext";

const techIcons = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  gulp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://i.postimg.cc/MGKrN85T/Express-Js-Logo.png",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  tailwind: "https://i.postimg.cc/CKBbzPL7/tailwindcss-Logo.png",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  bootstrap: "https://i.postimg.cc/0jJYFVhr/Boots-Trap-Logo.png",
  dynamoDB: "https://i.postimg.cc/dtrXT6Dq/Amazon-Dynamo-DBLogo.png",
  amplify: "https://i.postimg.cc/zBvSSzjC/Amplify.png",
  route53: "https://i.postimg.cc/tR189pjn/aws-route53-Logo.png",
  ec2: "https://i.postimg.cc/DwcMxzqH/EC2Logo.png",
  github: "https://i.postimg.cc/Y2mDJR61/git-Hub-Logo.png",
  wordpress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  elementor: "https://i.postimg.cc/cH3BnTZR/ElementorLogo.png",
};

const backgroundVideoUrl = "https://cdn.pixabay.com/video/2022/08/16/08/56/technology-7396.mp4";

function Cards() {
  const { t } = useLanguage();

  const cards = [
    {
      img: "https://i.postimg.cc/HnxRPCmZ/Frailes-Fit-Logo.png",
      text: "FRAILES FIT",
      url: "https://www.frailesfit.com/",
      tech: [
        "html",
        "css",
        "gulp",
        "sass",
        "javascript",
        "nodejs",
        "express",
        "bootstrap",
        "dynamoDB",
        "amplify",
        "ec2",
        "route53",
        "github",
      ],
    },
    {
      img: "https://i.postimg.cc/VNmBdD0K/logoA.png",
      text: "Masa Critica Granada",
      url: "https://www.masacriticagrx.com/",
      tech: [
        "react",
        "html",
        "css",
        "nodejs",
        "amplify",
        "route53",
        "github",
      ],
    },
    {
      img: "https://i.postimg.cc/nLDVrdQS/Black-Mesa-Logo.png",
      text: "Black Mesa Collective",
      url: "https://blackmesacollective.com/",
      tech: [
        "react",
        "html",
        "css",
        "nodejs",
        "amplify",
        "route53",
        "github",
        "tailwind",
      ],
    },
    {
      img: "https://i.postimg.cc/wTSzgjM7/UgtLogo.png",
      text: "UGT Granada",
      url: "https://www.ugtserviciospublicosgranada.org/",
      tech: [
        "wordpress",
        "elementor",
      ],
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="h-auto pt-20 flex flex-col items-center justify-center text-white">
      <h2 className="text-5xl text-black font-bold mb-8 santafe">{t("cards-tittle")}</h2>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="w-full"
      >
        {cards.map((card, i) => (
          <SwiperSlide
            key={i}
            className="!w-[250px] !h-[350px] md:!w-[500px] md:!h-[600px] lg:!w-[600px] lg:!h-[700px] flex items-center justify-center my-5 mt-4 md:mt-8 md:mb-40 lg:mb-45 lg:mt-20"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="card-dj relative bg-black text-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
                src={backgroundVideoUrl}
                autoPlay
                loop
                muted
                playsInline
              />
              <img
                src={card.img}
                alt={`Slide ${i}`}
                className="relative w-full h-2/3 object-cover"
                draggable={false}
              />
              <div className="relative p-4 flex flex-col justify-between h-1/3">
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`title-dj flex justify-center text-xl md:text-2xl lg:text-3xl mb-2 transition-transform duration-300 ${
                    hoverIndex === i ? "scale-110" : "scale-100"
                  }`}
                >
                  {hoverIndex === i ? t("visit_website") : card.text}
                </a>
                <div className="flex flex-wrap justify-center gap-2 mt-2 relative">
                  {card.tech?.map((tech) => (
                    <img
                      key={tech}
                      src={techIcons[tech]}
                      alt={tech}
                      title={tech}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Cards;
