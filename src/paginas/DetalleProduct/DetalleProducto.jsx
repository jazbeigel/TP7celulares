import { useParams } from 'react-router-dom';
import { productos } from '../../data.js';
import './DetalleProducto.css';

export default function DetalleProducto() {
  const { idproduct } = useParams();
  const producto = productos.find(p => p.id === Number(idproduct));
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-container">
      <img className="foto-ancha" src={producto.fotos[0]} alt={`${producto.nombre} imagen principal`} />
      <div className="info-detalle">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p className="price">${producto.precio}</p>
        <p className="año">Año: {producto.año}</p>
      </div>
      {producto.fotos[1] && (
        <img className="foto-normal" src={producto.fotos[1]} alt={`${producto.nombre} imagen secundaria`} />
      )}
    </div>
  );
}