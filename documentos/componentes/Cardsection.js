import React from 'react';
import '../componentes/style/style.css'; // Importação do arquivo de estilos CSS

function CardSection() {
  return (
    <section className="card-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 card-conteudo" id="conteudo1">
            <div className="card">
              <img
                src={require('../Paginas/Pictures/exterior-portrait-kids-world-environment-day.jpg')}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Projeto Seashepherd</h5>
                <p className="card-text">
                  Saiba mais sobre os projetos do Seashepherd, uma organização internacional que luta pela preservação ambiental e proteção dos oceanos.
                </p>
                <a href="https://seashepherd.org.br/" className="btn btn-primary">Saber mais</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 card-conteudo" id="conteudo2">
            <div className="card">
              <img
                src={require('../Paginas/Pictures/baleia.jpg')}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Iniciativas da Oceana Brasil</h5>
                <p className="card-text">
                  Conheça as iniciativas da Oceana Brasil na proteção dos ecossistemas marinhos e na promoção de práticas sustentáveis para preservação dos oceanos.
                </p>
                <a href="https://brasil.oceana.org/o-que-nos-fazemos/" className="btn btn-primary">Saber mais</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 card-conteudo" id="conteudo3">
            <div className="card">
              <img
                src={require('../Paginas/Pictures/garrafa pet.jpg')}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Ocean Conservancy</h5>
                <p className="card-text">
                  Descubra como a Ocean Conservancy trabalha para combater a poluição dos oceanos e proteger a vida marinha em todo o mundo.
                </p>
                <a href="https://www.oceanconservancy.org/" className="btn btn-primary">Saber mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSection;
