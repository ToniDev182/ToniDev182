import React from "react";
import { useLanguage } from "./context/LanguageContext";
import "./styles/animaciones.css"; // Importación de animaciones

const techData = {
  languages: [
    { name: "HTML", img: "https://i.postimg.cc/QdSfpyDr/HTMLogo.png" },
    { name: "CSS", img: "https://i.postimg.cc/v8pkBkYq/css3Logo.png" },
    { name: "JavaScript", img: "https://i.postimg.cc/fLS5QW9w/Logo-Java-Script.png" },
    { name: "Java", img: "https://i.postimg.cc/qvBLMx3D/javaLogo.png" },
    { name: "PHP", img: "https://i.postimg.cc/HLR4zGPF/PHP-logo.png" },
    { name: "SQL", img: "https://i.postimg.cc/hPsLwQ5L/SQL.png" },
  ],
  frameworks: [
    { name: "React", img: "https://i.postimg.cc/cCMRdv4N/React-Logo.png" },
    { name: "Sass", img: "https://i.postimg.cc/RV41XLXC/SassLogo.png" },
    { name: "Tailwind CSS", img: "https://i.postimg.cc/CKBbzPL7/tailwindcss-Logo.png" },
  ],
  tools: [
    { name: "Gulp", img: "https://i.postimg.cc/FsyWKKnz/gulp-logo.png" },
    { name: "GitHub", img: "https://i.postimg.cc/Y2mDJR61/git-Hub-Logo.png" },
    { name: "Git", img: "https://i.postimg.cc/fbLB5fWS/gitLogo.png" },
    { name: "Figma", img: "https://i.postimg.cc/NMKCG7Wv/Figma-Logo.png" },
  ],
  ides: [
    { name: "NetBeans", img: "https://i.postimg.cc/8Pm4S0jr/Net-Beans-Logo.png" },
    { name: "PhpStorm", img: "https://i.postimg.cc/Xvpk9Nxw/Php-Storm-icon.png" },
    { name: "Visual Studio", img: "https://i.postimg.cc/Hxb5trM7/Visual-Logo.png" },
  ],
  os: [
    { name: "Windows", img: "https://i.postimg.cc/NF4HWZps/Windows-Logo.png" },
    { name: "Ubuntu", img: "https://i.postimg.cc/gcNrbyG2/Ubuntu-Logo.png" },
  ],
  awsServices: [
    { name: "DynamoDB", img: "https://i.postimg.cc/dtrXT6Dq/Amazon-Dynamo-DBLogo.png" },
    { name: "Amplify", img: "https://i.postimg.cc/zBvSSzjC/Amplify.png" },
    { name: "Route53", img: "https://i.postimg.cc/tR189pjn/aws-route53-Logo.png" },
    { name: "EC2", img: "https://i.postimg.cc/DwcMxzqH/EC2Logo.png" },
    { name: "Express.js", img: "https://i.postimg.cc/MGKrN85T/Express-Js-Logo.png" },
  ],
  cms: [
    { name: "WordPress", img: "https://i.postimg.cc/tgGPPZdK/WordpressLogo.png" },
    { name: "Elementor", img: "https://i.postimg.cc/cH3BnTZR/ElementorLogo.png" },
  ],
};

function TechCategory({ titleKey, items }) {
  const { t } = useLanguage();

  return (
    <section className="mb-10 w-full max-w-6xl">
      <h3 className="text-3xl font-semibold mb-6 santafe text-black text-center">
        {t(titleKey)}
      </h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {items.map(({ name, img }, index) => (
          <div
            key={name}
            className="flex flex-col items-center text-center w-20 md:w-24 animate-zoom-in"
            style={{ animationDelay: `${index * 0.1}s` }} // Delay escalonado
          >
            <img
              src={img}
              alt={`${name} logo`}
              title={name}
              className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 transition-transform duration-300 hover:scale-110"
              draggable={false}
            />
            <span className="text-black text-sm md:text-base santafe">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Technology() {
  const { t } = useLanguage();

  return (
    <div className="py-16 px-6 md:px-12 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-12 santafe text-black text-center">
        {t("techTitle")}
      </h2>

      <TechCategory titleKey="languages" items={techData.languages} />
      <TechCategory titleKey="frameworks" items={techData.frameworks} />
      <TechCategory titleKey="tools" items={techData.tools} />
      <TechCategory titleKey="ides" items={techData.ides} />
      <TechCategory titleKey="os" items={techData.os} />
      <TechCategory titleKey="awsServices" items={techData.awsServices} />
      <TechCategory titleKey="cms" items={techData.cms} />
    </div>
  );
}
