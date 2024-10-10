import { useState } from 'react';
import './App.css';
import yo from './assets/yo.jpeg';
import instagram from './assets/icons8-instagram.svg';
import facebook from './assets/icons8-facebook.svg';
import correo from './assets/reshot-icon-mail-LA745PGQTF.svg';
import github from './assets/icons8-github.svg';
import linkedin from './assets/icons8-linkedin.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Encabezado con secciones */}
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <nav>
          <ul>
            <li style={{ fontWeight: 'bold', fontFamily: 'serif' }}>Home</li>
            <li style={{ fontWeight: 'bold', fontFamily: 'serif' }}>Projects</li>
            <li style={{ fontWeight: 'bold', fontFamily: 'serif' }}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Sidebar con información personal */}
      <aside className="sidebar">
        <div className="circle"> <img src={yo} alt="Antonio" /> </div>
        <h5> Antonio Atienza Cano </h5>
        <p className='descripcion'> Hello, I'm ToniDev182, a few years ago I started this adventure as
          a developer, inspired by my curiosity and my developer friends, I
          continue every day trying to learn as much as I can. </p><br></br>
        <ul className="learning">
          <li>Java</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>Css</li>
          <li>Sql/Psm</li>
          <li>Php</li>
          <li>React</li>
        </ul>
      </aside>
      {/* Contenido principal */}
      <h1 className='devway'>Follow your Dew Way</h1>
      <aside className="sidebar2">
        {/* Tabla 1x2 */}
        {/* Tabla 1x2 */}
        <table className="table">
          <tr>
            <td>
              <div className="content">
                <div>
                  <iframe className="video-section"
                    src="https://www.youtube.com/embed/_02p28tPaVg?start=1281"
                    title="Programing music"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </td>
            <td>
            <h3>A little reflection</h3>
              <p className="reflection-section">
              Throughout my life I have worked in many things, I have worked the land, I have worked in
               factories, I have worked in marketing companies, supermarkets, restaurants and I have never
                felt truly fulfilled until now, that great search that some have been clear about since
                 an early age. The end of my search is over, now, it's time to go for it. They say that if
                  you work at something you like, you don't really work, that's what I feel, today, Sunday, 
                  at two in the morning. Now I just have to walk the path to my little big dream, to be a web 
                  developer, and I know I will achieve it. Thanks to all those who have encouraged and encouraged 
                  me throughout these years, I owe you a lot, but above all I owe it to myself. So, let's go!!
                  </p>
            </td>
          </tr>
        </table>
      </aside>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          "Bro Counts" {count}
        </button>
      </div>
      <footer>
        <a href="https://www.instagram.com/de.la_sierra_/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/antonio-atienza-cano-3813a7211/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/ToniDev182" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="atienzajobs16@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={correo} alt="Correo" />
        </a>

        <p className="read-the-docs">Hi! I'm TonyDev182</p>

      </footer>
    </>
  );
}

export default App;
