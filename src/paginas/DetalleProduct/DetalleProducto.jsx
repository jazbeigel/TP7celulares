import { useParams } from 'react-router-dom';
import { celulares } from '../../data.js';
import './DetalleProducto.css';


export default function DetalleProducto() {
  const { idCelular } = useParams();
  const cel = celulares.find(c => c.id === Number(idCelular));
  if (!cel) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-container">
      <h1>{cel.nombre}</h1>
      <p>{cel.descripcion}</p>
      <p className="price">${cel.precio}</p>
      <div className="detalle-imgs">
        {cel.fotos.map((f, i) => (
          <img key={i} src={f} alt={`${cel.nombre} ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
