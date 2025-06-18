import './Productos.css';
import CelularCard from '../../componentes/CelularCard.jsx';
import { celulares } from '../../data.js';

export default function Productos() {
  return (
    <>
      {/* Sección blanca a pantalla completa */}
      <div className="productos-container">
        <div className="productos-inner">
          <h1 className="productos-titulo">Productos</h1>
          <hr className="divisor" />

          <div className="iphone-header">
            <h2 className="iphone-title">iPhone</h2>
            <p className="iphone-subtitle">Designed to be loved.</p>
          </div>

          <div className="iphone-video-wrapper">
            <video
              className="iphone-video"
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/xlarge.mp4#t=3.324701"
                type="video/mp4"
              />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>

      {/* Cards fondo gris */}
      <div className="productos-grid-section">
        <h2 className="productos-grid-titulo">Explore the lineup.</h2>
        <div className="productos-grid">
          {celulares.map(c => <CelularCard key={c.id} celular={c} />)}
        </div>
      </div>
    </>
  );
}
