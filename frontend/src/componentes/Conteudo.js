import React from 'react';
import '../componentes/style/style.css'; // Importação do arquivo de estilos CSS
import tartarugaImg from '../Paginas/Pictures/tartaruga_imagem-removebg-preview.png'; 
import calendario_eventos_1 from '../Paginas/Pictures/calendario_eventos_1.png'; 
import eventos_2 from '../Paginas/Pictures/eventos_2.png'; 

const conteudoStyle = {
  marginTop: '50px',
  color: 'black',
};

function Conteudo() {
    return (
        <div>
            <section id="conteudo" style={conteudoStyle}>
                <div className="container text720">
                    <div className="row">
                        <h1 className="custom-heading animate__animated animate__fadeInUp">Conservação Marinha: Um Chamado Urgente à Proteção dos Oceanos</h1>
                        <p>Os oceanos, vastos e profundos, são os pulmões da Terra, responsáveis por regular o clima global, fornecer oxigênio e sustentar uma rica diversidade de vida. No entanto, eles enfrentam ameaças crescentes devido à atividade humana desenfreada, colocando em risco a saúde dos ecossistemas marinhos e a sobrevivência de milhões de espécies.</p>
                        <p>Ameaças aos Oceanos: O aumento da temperatura global está causando o derretimento das calotas polares e o consequente aumento do nível do mar, ameaçando comunidades costeiras e ilhas baixas. Além disso, o aquecimento dos oceanos está causando o branqueamento em massa dos recifes de coral, prejudicando ecossistemas críticos e levando à perda de biodiversidade marinha.</p>
                        <p>Poluição Marinha: A poluição plástica é uma das maiores ameaças aos oceanos, com milhões de toneladas de resíduos plásticos sendo despejadas nos mares a cada ano. Esses resíduos poluem as águas, prejudicam a vida marinha e representam uma séria ameaça à saúde humana, pois os microplásticos entram na cadeia alimentar.</p>
                        <p>Pesca Predatória e Sobrepesca: A pesca predatória e a sobrepesca estão esgotando os recursos marinhos de forma alarmante. Muitas espécies de peixes estão sendo pescadas até o limite de suas capacidades de reprodução, levando a uma diminuição drástica das populações e desequilibrando os ecossistemas marinhos.</p>
                        <p>As atividades humanas exercem uma pressão sem precedentes sobre os oceanos, causando danos significativos aos ecossistemas marinhos e à vida que eles sustentam. Desde a Revolução Industrial, a exploração desenfreada dos recursos marinhos e a busca por desenvolvimento econômico têm deixado um rastro de destruição nos mares e oceanos do mundo. Aqui, exploramos os impactos das atividades humanas nos oceanos e os desafios que enfrentamos para garantir a sustentabilidade marinha.</p>
                        <p>A exploração de petróleo e gás no fundo do mar representa uma ameaça significativa aos ecossistemas marinhos. Os derramamentos de petróleo podem ter efeitos devastadores, contaminando a água, prejudicando a vida marinha e afetando as comunidades costeiras que dependem dos recursos marinhos para subsistência.</p>
                        <p>A crescente demanda por minerais e metais preciosos levou ao desenvolvimento da mineração oceânica, uma prática que envolve a extração de minerais do fundo do mar. No entanto, essa atividade pode causar danos irreversíveis aos ecossistemas marinhos, destruindo habitats frágeis e perturbando as cadeias alimentares.</p>
                        <p>A pesca destrutiva, incluindo a pesca com arrasto de fundo e a pesca com redes de emalhar, causa danos significativos aos ecossistemas marinhos. Essas práticas não seletivas capturam não apenas as espécies-alvo, mas também uma grande variedade de espécies não desejadas, levando à sobrepesca e à degradação dos habitats marinhos.</p>
                        <p>Alterações Climáticas: As atividades humanas, como a queima de combustíveis fósseis e o desmatamento, estão aumentando os níveis de dióxido de carbono na atmosfera, levando ao aquecimento global e à acidificação dos oceanos. Essas mudanças climáticas têm impactos profundos nos ecossistemas marinhos, afetando a distribuição das espécies, a saúde dos recifes de coral e o equilíbrio dos ecossistemas.</p>
                        <p>O despejo de resíduos sólidos, incluindo plásticos, produtos químicos tóxicos e esgoto não tratado, polui os oceanos e ameaça a vida marinha. Milhões de toneladas de plástico são despejadas nos oceanos a cada ano, causando a morte de animais marinhos por ingestão ou emaranhamento e contaminando a cadeia alimentar.</p>
                        <p>O desenvolvimento costeiro descontrolado, incluindo a construção de portos, resorts e infraestrutura turística, causa danos aos habitats naturais e interfere nos processos naturais dos ecossistemas marinhos. O desmatamento de manguezais e a drenagem de áreas úmidas costeiras reduzem a proteção contra tempestades e erosão costeira, aumentando a vulnerabilidade das comunidades costeiras ao impacto das mudanças climáticas.</p>
                        <p>Desafios para a Sustentabilidade Marinha: Enfrentar os impactos das atividades humanas nos oceanos é um desafio complexo que requer ação coordenada em nível global. É necessário adotar abordagens integradas de conservação marinha que promovam a utilização sustentável dos recursos marinhos, protejam os ecossistemas vulneráveis e reduzam as emissões de gases de efeito estufa.</p>
                        <p>Proteger e preservar os oceanos para as gerações futuras requer um compromisso sério com a sustentabilidade marinha. Isso inclui a implementação de políticas de gestão pesqueira eficazes, a criação de áreas marinhas protegidas, a redução da poluição e o investimento em fontes de energia limpa e renovável. Ao reconhecer os impactos das atividades humanas nos oceanos e trabalhar juntos para mitigar esses efeitos, podemos garantir a saúde e a resiliência dos ecossistemas marinhos e assegurar um futuro sustentável para todos os habitantes do planeta.</p>
                        <p>Importância da Conservação Marinha: A conservação marinha é essencial para garantir a saúde dos oceanos e o bem-estar das gerações futuras. Ela não apenas protege a biodiversidade marinha, mas também sustenta as economias locais, promove o turismo sustentável e contribui para a segurança alimentar global.</p>
                        <p>Ações Necessárias: Para reverter o declínio dos oceanos, são necessárias ações urgentes em todos os níveis, desde políticas globais até iniciativas locais. Isso inclui a criação de áreas marinhas protegidas, a implementação de práticas de pesca sustentável, a redução do uso de plásticos e o investimento em fontes de energia limpa.</p>
                        <p>Papel das ONGs e da Sociedade Civil: As organizações não governamentais desempenham um papel crucial na conservação marinha, mobilizando comunidades locais, conduzindo pesquisas científicas e pressionando por políticas públicas eficazes. O engajamento da sociedade civil é fundamental para promover a conscientização e promover a mudança.</p>
                        <div className="text-center" style={{ marginBottom: '20px' }}>
    <a href="https://seashepherd.org.br/agenda/">
        <img src={calendario_eventos_1} alt="Calendário de Eventos" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
    </a>
</div>
<div className="text-center" style={{ marginBottom: '20px' }}>
    <a href="https://seashepherd.org.br/agenda/">
        <img src={eventos_2} alt="Calendário de Eventos" style={{ maxWidth: '80%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
    </a>
</div>
                    </div>
                </div>
            </section>

            <section id="sobre" style={conteudoStyle}>
                <div className="container text720">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="tb-heading has-text-color" data-toolset-blocks-heading="0136c3721649b00810c5b9e56f2c8aab" data-last-update="1.4">O Que Nós Fazemos?</h1>
                            <p>O projeto visa conscientizar as pessoas sobre a importância da conservação marinha e incentivá-las a contribuir com ONGs e iniciativas que trabalham para proteger os oceanos e a vida marinha.</p>
                            <p>Ao promover a educação ambiental, a sustentabilidade e ações individuais e coletivas, o projeto busca garantir um futuro mais saudável e sustentável para as gerações futuras e para o nosso planeta como um todo.</p>

                            <h1 className="tb-heading has-text-color" data-toolset-blocks-heading="0136c3721649b00810c5b9e56f2c8aab" data-last-update="1.4">Como você pode ajudar?</h1>
                            <p>Você pode se juntar a nós apoiando nossas iniciativas, participando de eventos de conscientização e adotando hábitos sustentáveis em sua vida diária. Juntos, podemos fazer a diferença na proteção dos oceanos e na preservação da vida marinha para as futuras gerações.</p>
                            <p>Junte-se a nós e faça parte desta importante missão de conservação marinha!</p>
                        </div>

                        <div className="col-md-6">
                          <img id="tartaruga" src={tartarugaImg} alt="Tartaruga de Pente" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Conteudo;
