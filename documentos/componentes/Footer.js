import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 320">
          <path className="wave-1" fill="#145581a9" fillOpacity="1"
            d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,160C672,213,768,267,864,250.7C960,235,1056,149,1152,96C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
          <path className="wave-2" fill="#72a7cac7" fillOpacity="1"
            d="M0,160L48,160C96,160,192,160,288,133.3C384,107,480,53,576,74.7C672,96,768,192,864,234.7C960,277,1056,267,1152,250.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
          <path className="wave-3" fill="#72a7cac7" fillOpacity="1"
            d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,133.3C672,96,768,64,864,74.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
          <path className="wave-4" fill="#5BA5D7"
            d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,208C672,181,768,139,864,138.7C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      <div className="copyright">
        <h1>Fale Conosco!</h1>
        <section id="contato">
          <div className="container">
            <div className="row">
              <div className="formulario">
                <form action="https://formspree.io/f/mdoqygyz" method="POST">
                  <div className="form-group">
                    <input type="text" id="nome" name="nome" placeholder="Nome Completo" required />
                  </div>
                  <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" id="assunto" name="assunto" placeholder="Assunto" required />
                  </div>
                  <div className="form-group">
                    <textarea id="mensagem" name="mensagem" rows="4" placeholder="Mensagem" required></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit">Enviar</button>
                    <input type="hidden" name="_replyto" value="puracquasac@hotmail.com" />
                  </div>
                </form>
              </div>
              <p>&copy; 2024 Pura Acqua. Todos os direitos reservados.</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
