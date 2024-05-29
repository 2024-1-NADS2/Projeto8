import React from 'react';
import Navbar from '../componentes/Navbar';
import Carousel from '../componentes/Carousel';
import Cardsection from '../componentes/Cardsection';
import Conteudo from '../componentes/Conteudo';
import Sobre from '../componentes/Sobre';
import Footer from '../componentes/Footer';
import '../componentes/style/style.css'; // Importação do arquivo de estilos CSS

function Home(){
    return(
        <div>
            <Navbar />
            <Carousel />
            <div className="white-space"></div>
            <Cardsection />
            <Conteudo />
            <Sobre />
            <Footer />
        </div>
    );
};

export default Home;
