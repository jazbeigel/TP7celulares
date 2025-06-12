export default function Contacto() {
    return (
      <>
        <h1>Contacto</h1>
        <form className="form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
  