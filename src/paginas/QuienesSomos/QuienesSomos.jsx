import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="quienes-container">
      <h1 className="titulo">Quiénes Somos</h1>
      <hr className="divisor" />

      <p className="descripcion">
        Somos una tienda apasionada por la innovación y el diseño. En MiApple, nos dedicamos exclusivamente a ofrecer productos Apple auténticos, con la mejor atención y estilo único.
      </p>

      <img
        src="https://media.admagazine.com/photos/618a62df51ab72df0a764196/master/w_1600%2Cc_limit/76354.jpg"
        alt="Oficina Apple"
        className="imagen"
      />

      <div className="info-extra">
        <h2>Nuestra misión</h2>
        <p>Brindar una experiencia de compra premium, ofreciendo tecnología de punta con atención personalizada.</p>

        <h2>Visión</h2>
        <p>Ser la tienda Apple preferida en la región, destacándonos por confianza, calidad y diseño.</p>

        <h2>Equipo</h2>
        <p>Formado por especialistas en Apple, amantes del detalle y siempre listos para ayudarte.</p>
      </div>
    </div>
  );
}

export default QuienesSomos;
