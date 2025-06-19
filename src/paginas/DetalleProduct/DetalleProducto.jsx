import { useParams } from 'react-router-dom';
import { celulares } from '../../data.js';
import './DetalleProducto.css';

export default function DetalleProducto() {
  const { idCelular } = useParams();
  const cel = celulares.find(c => c.id === Number(idCelular));
  if (!cel) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-container">
      {/* Foto ancha (primer elemento fotos[0]) */}
      <img className="foto-ancha" src={cel.fotos[0]} alt={`${cel.nombre} imagen principal`} />

      {/* Info */}
      <div className="info-detalle">
        <h1>{cel.nombre}</h1>
        <p>{cel.descripcion}</p>
        <p className="price">${cel.precio}</p>
      </div>

      {/* Foto normal (segundo elemento fotos[1]) */}
      {cel.fotos[1] && (
        <img className="foto-normal" src={cel.fotos[1]} alt={`${cel.nombre} imagen secundaria`} />
      )}
    </div>
  );
}
