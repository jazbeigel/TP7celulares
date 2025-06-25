import { Link } from 'react-router-dom';
import './productoCard.css';

export default function ProductoCard({ producto }) {
  return (
    <div className="card">
      <img src={producto.fotos[0]} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="price">${producto.precio}</p>
      <Link to={`/producto/${producto.id}`} className="btn">Ver más</Link>
    </div>
  );
}