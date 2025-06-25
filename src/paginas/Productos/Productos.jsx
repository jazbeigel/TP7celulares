import './Productos.css';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard.jsx';
import { productos } from '../../data.js';
import { useState } from 'react';

export default function Productos() {
  const [filtrados, setFiltrados] = useState(productos);

  const mostrarIphones = () => {
    const iphones = productos.filter(p => p.producto.toLocaleLowerCase() === "iphone");
    setFiltrados(iphones);
  };

  const mostrarComputadoras = () => {
    const computadoras = productos.filter(p => p.producto.toLocaleLowerCase() === "computadora");
    setFiltrados(computadoras);
  };

  const mostrarTodo = () => {
    setFiltrados(productos);
  };

  return (
    <>
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

      <div className="filtros">
        <button onClick={mostrarIphones}>Iphones</button>
        <button onClick={mostrarComputadoras}>Computadoras</button>
        <button onClick={mostrarTodo}>Todo</button>
      </div>

      <div className="productos-grid">
        {filtrados.map(p => <ProductoCard key={p.id} producto={p} />)}
      </div>
    </>
  );
}