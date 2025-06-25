import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductoCard from '../../componentes/ProductoCard/ProductoCard.jsx';
import { productos } from '../../data.js';
import './Home.css';

export default function Home() {
  const [productosRandom, setProductosRandom] = useState([]);

  useEffect(() => {
    const productosMezclados = [...productos].sort(() => 0.5 - Math.random());
    setProductosRandom(productosMezclados.slice(0, 6)); 
  }, []);

  const videosCarousel = [
    "https://www.apple.com/assets-www/en_WW/ipad/welcome/x1fba949bf_large.mp4",
    "https://www.apple.com/assets-www/en_WW/mac/welcome/x4fa4f3ce9_large.mp4",
    "https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge.mp4",
    "https://www.apple.com/105/media/us/airpods-max/2024/e8f376d6-82b2-40ca-8a22-5f87de755d6b/anim/max-loop/xlarge.mp4",
    "https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/xlarge.mp4"
  ];

  return (
    <div className="home-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={6000}
        className="carousel"
        showArrows={false}
      >
        {videosCarousel.map((url, index) => (
          <div key={index} className="video-slide">
            <video
              src={url}
              autoPlay
              loop
              muted
              playsInline
              className="carousel-video"
            />
          </div>
        ))}
      </Carousel>

      <h1 className="home-title">Bienvenido a Apple</h1>
      <p className="home-subtitle">Explorá nuestros productos destacados</p>

      <div className="grid-home">
        {productosRandom.map(p => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}