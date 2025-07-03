import { useState } from "react";
import { useLanguage } from "./context/LanguageContext";

export default function Eventos() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const eventos = [
    {
      src: "https://i.postimg.cc/Y9DwvzSs/Poster1.png",
      alt: "poster 1",
      textoKey: "eventos.inferno",
      subtext: "22/02/2025",
    },
    {
      src: "https://i.postimg.cc/NMSMSHHZ/poster2.jpg",
      alt: "poster 2",
      textoKey: "eventos.inferno",
      subtext: "7/06/2025",
    },
    {
      src: "https://i.postimg.cc/tJ8XvQLb/proximo.png",
      alt: "proximamente",
      textoKey: "eventos.proximamente",
    },
  ];

  return (
    <div className="max-w-screen mx-auto px-4 bg-black/60 pb-20">
      <h2 className="text-2xl font-bold mb-6 text-center uppercase text-red-700">
        {t("eventos.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        {eventos.map((evento, index) => (
          <div
            key={index}
            className="relative w-full max-w-[1080px] sm:max-w-[400px] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => toggleActive(index)}
          >
            <img
              src={evento.src}
              alt={evento.alt}
              className={`w-full h-auto transition-transform duration-300 ease-in-out ${
                activeIndex === index ? "scale-110" : "hover:scale-110"
              }`}
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-semibold bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0 hover:opacity-100"
              }`}
            >
              <p>{t(evento.textoKey)}</p>
              {evento.subtext && <p>{evento.subtext}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
