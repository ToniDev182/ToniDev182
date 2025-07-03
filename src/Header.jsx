import React, { useState, useEffect } from "react";
import { useLanguage } from "./context/LanguageContext";
import "./styles/header.css";
import "./styles/animaciones.css";

const images = [
  "https://i.postimg.cc/1tF0YWkX/react-Banner.png",
  "https://i.postimg.cc/mZQNY536/sass-banner.png",
  "https://i.postimg.cc/T3PVX2zZ/SQLBanner.png",
  "https://i.postimg.cc/YCy12Kkj/Tailwind-Banner.png",
  "https://i.postimg.cc/nLyB74XJ/Ubuntu-Windows-Banner.png",
  "https://i.postimg.cc/fWjmt0ZG/visual-studio-code-banner.png",
  "https://i.postimg.cc/1td0vkCL/AWSBanner.png",
  "https://i.postimg.cc/htC0JQ8D/PHPBanner.png",
  "https://i.postimg.cc/NFw8h6t4/phpstorm-Banner.png",
  "https://i.postimg.cc/26gc1LDb/Git-Hub-Banner.png",
  "https://i.postimg.cc/28R9mWGg/gulp-banner.png",
  "https://i.postimg.cc/NLq6c1wD/bootstrap-Banner.png",
  "https://i.postimg.cc/0yv4GSJ7/css-Banner.png",
  "https://i.postimg.cc/0NWHqHXC/figma-Banner.png",
  "https://i.postimg.cc/tJPrWRqr/git-Banner.png",
  "https://i.postimg.cc/05mZtQvn/nodejs-express-Banner.png",
  "https://i.postimg.cc/y87f3zwP/HTML5-Banner.png",
  "https://i.postimg.cc/ZqMjQv07/Java-Banner.png",
  "https://i.postimg.cc/yxFPWfjt/Net-Beans-Banner.png",
  "https://i.postimg.cc/PJGyXGW1/Java-Script-Banner.png",
];

function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <header className="relative text-white overflow-hidden bg-black h-[80vh] max-h-[500px] font-orbitron">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Banner ${index + 1}`}
            loading="lazy"
            draggable={false}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100 z-10 animate-fade-in"
                : "opacity-0 z-0"
            } select-none`}
          />
        ))}

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20 pointer-events-none" />

        <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 gap-4 lg:gap-40 lg:flex-row lg:justify-arround lg:px-12">
          <img
            src="https://i.postimg.cc/4yMPX89D/MELogo.png"
            alt="Logo Izquierda"
            className="select-none white-shadow w-28 h-auto lg:w-90"
            draggable={false}
          />

          <div className="text-center select-none max-w-lg">
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight white-shadow headerH1 animate-slide-left">
              🖥️ Antonio Atienza Cano
            </h1>
            <p className="text-lg lg:text-2xl font-semibold leading-tight white-shadow headerp animate-slide-left delay-200">
              {t("role")}
            </p>
            <p className="text-base lg:text-xl font-medium leading-tight white-shadow headerp2 animate-slide-left delay-400">
              {t("description")}
            </p>
          </div>

          <img
            src="https://i.postimg.cc/156rTPtc/Toni-Dev-Logo.png"
            alt="Logo Derecha"
            className="select-none white-shadow w-20 h-auto lg:w-50 lg:mb-70 animate-zoom-in"
            draggable={false}
          />
        </div>

        <button
          onClick={toggleLanguage}
          className="fixed top-6 right-6 z-50 bg-black text-white px-3 py-1 rounded border border-black hover:bg-white hover:text-black transition-colors"
          aria-label="Toggle Language"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </header>

      <div className="font-orbitron bg-white w-full white-shadow line-header"></div>
    </>
  );
}

export default Header;
