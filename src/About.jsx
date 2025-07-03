import React from "react";

function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 gap-4 py-16 grid mt-5 grid-cols-1 lg:grid-cols-2 lg:gap-30 items-center justify-center md:items-center md:justify-center relative rounded-2xl lg:shadow-lg">
      {/* Contenedor de la imagen */}
      <div className="relative rounded-2xl overflow-visible  flex justify-center md:mb-8">
        <img
          src="https://i.postimg.cc/63xt01rY/CODING.png"
          alt="Coding Illustration"
          draggable={false}
          className="rounded-2xl w-full max-w-md object-cover"
        />
      </div>

      {/* Contenedor de texto con superposición sutil */}
      <div className="relative bg-white rounded-2xl p-8 shadow-lg md:mx-auto -translate-x-0 lg:-translate-x-16 max-w-xl">
        <h2 className="text-3xl font-extrabold mb-4 leading-tight text-gray-900 text-center md:text-left">
          ¿NECESITAS UNA SOLUCIÓN WEB PARA TU NEGOCIO?<br />¡ESTÁS EN EL LUGAR PERFECTO!
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center md:text-left">
          Diseño y desarrollo sitios web modernos, funcionales y adaptados a tus necesidades para impulsar tu marca y crecer en el mundo digital.
        </p>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center md:text-left">
          ¡Hola, soy Antonio Atienza Cano! 👨‍💻
        </h3>
        <p className="text-gray-700 mb-3 text-center md:text-left">
          Programador apasionado por el desarrollo de aplicaciones web. Bienvenido/a a mi página. Desde que comencé mi trayectoria en el mundo de la programación, he adquirido conocimientos valiosos en diversas áreas del desarrollo web y siempre estoy buscando nuevas formas de mejorar mis habilidades.
        </p>
        <p className="text-gray-700 text-center md:text-left">
          A través de este perfil, quiero compartir mis proyectos y mostrar mi enfoque hacia la resolución de problemas.
        </p>
      </div>
    </section>
  );
}

export default About;
