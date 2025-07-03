import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";
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

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-5"
        style={{
          backgroundImage: "url('https://i.postimg.cc/8z0nLVZ8/footerME.jpg')",
          opacity: 1,
        }}
      />

      <div className="footer-background-image" />

      {/* Overlay negro con opacidad 70% */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10" />

      <div className="relative z-30 h-full w-full px-6 flex flex-col md:flex-row justify-between items-center gap-6">
  <div className="flex flex-col mt-4 items-center gap-4 md:flex-row md:items-center">

          <img
            src="https://i.postimg.cc/156rTPtc/Toni-Dev-Logo.png"
            alt={t("footerLogoAlt")}
            className="lg:h-50 h-20 w-auto white-shadow"
          />
          <p className="text-lg md:text-xl santafe font-semibold">{t("footerAllRights")}</p>
        </div>

        <div className="text-center max-w-3xl px-4">
          <h1 className="sferenet text-xl md:text-2xl font-semibold drop-shadow-md">
            {t("footerSlogan")}
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/de.la_sierra_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
            aria-label="Instagram"
          >
            <Instagram size={36} />
            <span className="text-xs santafe mt-1">Instagram</span>
          </a>

          <a
            href="mailto:atienzajobs16@gmail.com"
            className="cursor-pointer transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs mt-1 santafe">Email</span>
          </a>

          <a
            href="https://github.com/ToniDev182"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
            aria-label="GitHub"
          >
            <Github size={36} />
            <span className="text-xs santafe mt-1">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/tonidev182/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
            aria-label="LinkedIn"
          >
            <Linkedin size={36} />
            <span className="text-xs santafe mt-1">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
