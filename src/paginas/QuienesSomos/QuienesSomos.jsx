import './QuienesSomos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function QuienesSomos() {
  const imagenesCarousel = [
    "https://media.admagazine.com/photos/618a62df51ab72df0a764196/master/w_1600%2Cc_limit/76354.jpg",
    "https://i0.wp.com/hanaringo.com/wp-content/uploads/2018/10/Apple-Park-4.jpg?resize=852%2C479&ssl=1",
    "https://iphoneros.com/wp-content/uploads/2021/12/wal273.apple_.211109_shiny_ap_js_001654_and_1650_and_1604.jpg",
    "https://iphoneros.com/wp-content/uploads/2021/12/wal273.apple_.211109_shiny_ap_js_000878v2.jpg",
    "https://purodiseno.lat/wp-content/uploads/2025/02/APPLE-PARK-3.webp"
  ];
  return (
    
    <div className="quienes-container">
      <h1 className="titulo">Quiénes Somos</h1>
      <hr className="divisor" />

      <p className="descripcion">
        Somos una tienda apasionada por la innovación y el diseño. En MiApple, nos dedicamos exclusivamente a ofrecer productos Apple auténticos, con la mejor atención y estilo único.
      </p>

      <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={6000} //tarde mucho en ir a la otra slide dle carrusel
      className="carousel"
      showArrows={false}
    >
      {imagenesCarousel.map((url, index) => (
        <div key={index} className="img-slide">
          <img src={url} alt={`Imagen ${index + 1}`} className="carousel-img" />
        </div>
      ))}
    </Carousel>

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
