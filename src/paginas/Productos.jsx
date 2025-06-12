import CelularCard from '../componentes/CelularCard.jsx';
import { celulares } from '../data.js';

export default function Productos() {
  return (
    <>
      <h1>Productos</h1>
      <div className="grid">
        {celulares.map(c => <CelularCard key={c.id} celular={c} />)}
      </div>
    </>
  );
}
