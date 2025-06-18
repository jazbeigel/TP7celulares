import CelularCard from '../componentes/CelularCard.jsx';
import { celulares } from '../data.js';

export default function Home() {
  return (
    <>
      <h1>Bienvenido a MiApple</h1>
      <p>Explora nuestros iPhones destacados</p>
      <div className="grid">
        {celulares.map(c => <CelularCard key={c.id} celular={c} />)}
      </div>
    </>
  );
}
