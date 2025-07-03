import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaInstagram, FaSoundcloud } from "react-icons/fa";
import "./styles/card-dj.css";
import { useLanguage } from "./context/LanguageContext";

function Cards() {
  const { t } = useLanguage();

  const cards = [
    {
      img: "https://i.postimg.cc/htrydMrr/SantaFe1.jpg",
      text: "SANTA FE",
      key: "santaFe",
      instagram: "https://www.instagram.com/alvaro.xposito/",
      soundcloud: "https://soundcloud.com/iridium_992",
    },
    {
      img: "https://i.postimg.cc/Z5CB85PM/sfernet.png",
      text: "SFERENET",
      key: "sferenet",
      instagram: "https://www.instagram.com/sferenet/",
      soundcloud: "https://soundcloud.com/zenidd",
    },
    {
      img: "https://i.postimg.cc/KvBJXT9t/romedjmash.jpg",
      text: "ROME DJMASH",
      key: "rome",
      instagram: "https://www.instagram.com/romedjmash/",
      soundcloud: "https://on.soundcloud.com/uDKv3IFHkZiIfLZMTh",
    },
  ];

  return (
    <div className="h-auto py-20 flex items-center justify-center bg-black/60 text-white">
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
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full"
      >
        {cards.map((card, i) => (
          <SwiperSlide
            key={i}
            className="!w-[250px] !h-[350px] md:!w-[500px] md:!h-[600px] lg:!w-[600px] lg:!h-[700px] flex items-center justify-center my-5 mt-4 md:mt-8 md:mb-40 lg:mb-45 lg:mt-20"
          >
            <div className="card-dj bg-black text-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img
                src={card.img}
                alt={`Slide ${i}`}
                className="w-full h-2/3 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-1/3">
                <p className="title-dj flex justify-center text-xl md:text-2xl lg:text-3xl mb-2">
                  {card.text}
                </p>
                <p className="flex text-dj justify-center text-justify hidden md:flex md:text-xl md:py-2 lg:py-4">
                  {t(card.key)}
                </p>
                <div className="flex justify-between">
                  <a href={card.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-red-500 text-xl md:text-4xl hover:scale-120 transition" />
                  </a>
                  <a href={card.soundcloud} target="_blank" rel="noopener noreferrer">
                    <FaSoundcloud className="text-red-500 text-xl md:text-4xl hover:scale-120 transition" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-4 !text-white"></div>
      </Swiper>
    </div>
  );
}

export default Cards;
