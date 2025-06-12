import CelularCard from '../componentes/CelularCard.jsx';
import { celulares } from '../data.js';

export default function Home() {
  const random = celulares.sort(() => 0.5 - Math.random()).slice(0, 2);
  return (
    <>
      <h1>Bienvenido a MiApple</h1>
      <p>Explora nuestros iPhones destacados</p>
      <div className="grid">
        {random.map(c => <CelularCard key={c.id} celular={c} />)}
      </div>
    </>
  );
}
