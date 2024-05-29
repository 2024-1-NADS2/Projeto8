import React, { useState, useEffect } from 'react';
import golfinho from '../Paginas/Pictures/golfinho.jpg';
import caudaBaleia from '../Paginas/Pictures/cauda baleia.jpg';
import baleia2 from '../Paginas/Pictures/baleia2.jpg';
import tubaraoBaleia2 from '../Paginas/Pictures/tubarao_baleia2.jpg';
import coralPeixes from '../Paginas/Pictures/coral_peixes.jpg';
import tartarugaFilhote from '../Paginas/Pictures/tartaruga filhote.jpg';
import polvo from '../Paginas/Pictures/polvo.jpg';
import tubaraoBaleia from '../Paginas/Pictures/tubarao baleia.jpg';
import '../componentes/style/style.css'; // Importação do arquivo de estilos CSS

const images = [golfinho, caudaBaleia, baleia2, tubaraoBaleia2, coralPeixes, tartarugaFilhote, polvo, tubaraoBaleia];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    showImage(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(prevIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 2600);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div id="main">
      <section id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
              <img src={image} className="d-block w-100 h-auto carousel-image" alt="#" />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={prevImage} data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={nextImage} data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="white-space"></div>
      </section>
    </div>
  );
}
