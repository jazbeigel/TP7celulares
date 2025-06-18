import './contacto.css';
import imgContacto from '../../assets/cont.png';

function Contacto() {
  return (
    <div className="contacto-container">
      <h1 className="productos-titulo">Apple Support</h1>
      <hr className="divisor" />

      <img src={imgContacto} alt="imagen ilustrativa" className="img" />

      <form className="form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" rows="6" required />
        <button type="submit" className="boton">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
