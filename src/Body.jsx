import Cards from "./Cards";
import particles from "./assets/particles.mp4";
import "./styles/body.css";
import About from "./About";
import Technology from "./Technology";

function Body() {
  return (
    <div className="body-container">
      <div className="relative min-h-screen w-full overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto z-[1] transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={particles} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        <div className="relative z-10">
          <About />
          <Cards />
          <Technology />
        </div>
      </div>
    </div>
  );
}

export default Body;
