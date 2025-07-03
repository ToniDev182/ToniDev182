import React from "react";
import { Instagram } from "lucide-react";
import clip from "../src/assets/fog1.mp4"; 
import "../src/styles/footer.css"; 
import { useLanguage } from "./context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative text-white h-[40vh] overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={clip} type="video/mp4" />
        {t("footerVideoUnsupported")}
      </video>

      <div className="footer-background-image" />

      <div className="absolute top-0 left-0 w-full h-full bg-red-600 mix-blend-multiply opacity-100 z-10" />

      <div className="relative z-30 h-full w-full px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img
            src="https://i.postimg.cc/nLDVrdQS/Black-Mesa-Logo.png"
            alt={t("footerLogoAlt")}
            className="h-10 w-auto"
          />
          <p className="text-sm md:text-base santafe">{t("footerAllRights")}</p>
        </div>

        <div className="text-center max-w-3xl px-4">
          <h1 className="sferenet text-lg md:text-xl font-semibold drop-shadow-md">
            {t("footerDescription")}
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/blackmesa_collective"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
          >
            <Instagram size={36} />
            <span className="text-xs santafe mt-1">{t("footerInstagram")}</span>
          </a>

          <a
            href="mailto:fatfreemanblackmesa@gmail.com"
            className="cursor-pointer transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
          >
            <img
              src="https://i.postimg.cc/7hzsCDtC/logoC.png"
              alt={t("footerLogoAlt")}
              className="h-12 w-auto"
            />
            <span className="text-xs mt-1 santafe">{t("footerContactUs")}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
