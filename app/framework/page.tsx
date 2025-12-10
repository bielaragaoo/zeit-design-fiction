import Image from 'next/image';
import './framework.css';

export default function FrameworkPage() {
  return (
    <div className="framework-page-container">
      <section className="framework-hero">
        <div className="framework-hero-content">
          <h1 className="framework-title">Framework da Jornada</h1>
          <p className="framework-subtitle">
            Esta é a seção que revela o coração metodológico do projeto da Zeit Aracaju. Nossa jornada de design fiction seguiu um framework inspirado em práticas de Foresight e Design Estratégico. Dividimos o processo em quatro pilares fundamentais: Framing, Scanning, Futuring e Designing. Essa estrutura nos permitiu navegar das incertezas do presente para visões concretas do futuro, garantindo que cada etapa fosse colaborativa e conectada com evidências reais.
          </p>
        </div>
      </section>

      <section className="framework-content">
        <div className="framework-steps">
          <div className="framework-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h2 className="step-title">Framing: Definindo o Terreno</h2>
              <p className="step-description">
                Tudo começou com Framing, onde estabelecemos o escopo do projeto. Em julho de 2024, em parceria com a Coordenação de Design da UNIT, identificamos o tema central: "Os Futuros do Profissional de Design".
              </p>
              <p className="step-description">
                Perguntamos: Quais são os desafios e oportunidades para designers no horizonte? Focamos em três dimensões chave – profissionais de design e estudantes de design e ser estratégico – para mapear o ecossistema do design em Aracaju e além.
              </p>
              <p className="step-description">
                Utilizando o brainstorm para ter ideias e definir o escopo do projeto.
              </p>
              <p className="step-description step-result">
                Resultado? Um quadro claro que guiou toda a pesquisa, evitando divagações e maximizando o impacto.
              </p>
            </div>
          </div>

          <div className="framework-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h2 className="step-title">Scanning: Capturando Sinais do Futuro</h2>
              <p className="step-description">
                Em seguida, mergulhamos no Scanning, a fase de coleta e análise de dados. Consultamos mais de 80 fontes diversificadas, incluindo entrevistas com designers locais, relatórios globais de tendências, artigos acadêmicos e etc. Identificamos:
              </p>
              <ul className="step-list">
                <li><strong>Sinais fracos:</strong> aqueles indícios sutis de mudanças, como o impacto da IA generativa no processo criativo ou a ascensão do design sustentável pós-pandemia.</li>
                <li><strong>Tendências emergentes:</strong> como a hibridização de habilidades em design e tecnologia.</li>
              </ul>
              <p className="step-description">
                Aqui, usamos ferramentas como horizon scanning para filtrar ruídos, resultando em 20 incertezas críticas. Foi como montar um quebra-cabeça gigante: cada peça revelava um futuro possível.
              </p>
            </div>
          </div>

          <div className="framework-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h2 className="step-title">Futuring: Projetando Possibilidades</h2>
              <p className="step-description">
                Com os dados em mãos, entramos no Futuring, onde a imaginação encontrou a estratégia. Aplicamos a Matrix 2x2 para cruzar as incertezas mais impactantes. Isso gerou 8 cenários vibrantes: 4 para profissionais e 4 para estudantes. Esses cenários não são previsões rígidas, mas narrativas plausíveis que exploram "e se...?", incentivando o debate.
              </p>
            </div>
          </div>

          <div className="framework-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h2 className="step-title">Designing: Materializando o Invisível</h2>
              <p className="step-description">
                Finalmente, o Designing transformou ideias em tangíveis. Criamos 6 personas de futuros (3 profissionais e 3 estudantes), personagens ricos, motivações e dilemas, para humanizar os cenários. Em seguida, desenvolvemos 16 artefatos de futuros: objetos fictícios que servem como pontes entre o agora e o amanhã.
              </p>
              <p className="step-description">
                Essa fase foi hands-on: protótipos, sketches e até narrativas visuais.
              </p>
            </div>
          </div>
        </div>

        <div className="framework-conclusion">
          <p className="conclusion-text">
            Esse framework não é linear; é cíclico, permitindo refinamentos constantes. Ele reflete nossa crença de que o design é uma ferramenta poderosa para navegar incertezas.
          </p>
          <p className="conclusion-text">
            Quer se aprofundar? Explore os cenários e artefatos em nosso site. – Quem sabe, você não contribui com sua própria visão?
          </p>
        </div>
      </section>

      <section className="framework-team-section">
        <div className="framework-team-content">
          <Image
            src="/images/framework-team.jpg"
            alt="Equipe Framework Zeit Aracaju"
            width={1200}
            height={800}
            className="framework-team-image"
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}
