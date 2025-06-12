import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <Link to="/">
          <img src={logo} alt="Apple Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/about">Quiénes Somos</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}
