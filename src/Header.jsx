import React from "react";
import clip from "../src/assets/fog1.mp4";
import './styles/header.css'
import { useLanguage } from "./context/LanguageContext";

function Header() {
  const genres = ["TECHNO", "BASS HOUSE", "BREAKS", "DRUM AND BASS"];
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <header className="relative text-white h-screen overflow-hidden bg-black">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={clip} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa de color roja con mezcla */}
      <div className="absolute top-0 left-0 w-full h-full bg-red-600 mix-blend-multiply opacity-100 z-10" />

      {/* Botón de cambio de idioma */}
<button
  onClick={toggleLanguage}
  className="lang-button fixed top-6 left-6 z-30 bg-black text-white px-3 py-1 rounded border-1 border-red-600"
  aria-label="Toggle Language"
>
  {language === "es" ? "EN" : "ES"}
</button>

      <img
        src="https://i.postimg.cc/nLDVrdQS/Black-Mesa-Logo.png"
        alt="Black Mesa Logo"
        className="heartbeat absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-100 md:h-100 lg:w-175 lg:h-175 w-75 h-75 z-15 opacity-50"
      />

      {/* Contenido del header */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center gap-20 px-6">
        <h1 className="title font-bold text-5xl md:text-7xl lg:text-8xl flex text-center">BLACK MESA</h1>

        <div className="subcontent flex flex-col gap-5">
          <div className="nombres flex flex-row justify-center items-center gap-9 text-2xl md:text-4xl lg:text-6xl">
            <h2 className="santafe flex text-center">SANTA FE</h2>
            <h2 className="sferenet pb-2 md:pb-3 lg:pb-5 flex text-center">SFERENET</h2>
            <h2 className="djsmash pb-1 md:pb-2 flex text-center">ROME DJMASH</h2>
          </div>
          {/* seccion de musica */}
          <div className="musica flex flex-col md:flex-row gap-2 text-xl items-center md:justify-center md:text-2xl lg:text-3xl">
            {genres.map((genre, index) => (
              <h3 key={index}>
                {genre}
                {index !== genres.length - 1 && <span className="ps-2">/</span>}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
