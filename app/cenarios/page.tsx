import './cenarios.css';

export default function CenariosPage() {
  return (
    <div className="cenarios-page-container">
      <section className="cenarios-hero">
        <div className="cenarios-hero-content">
          <h1 className="cenarios-title">Cenários: Visões do Amanhã</h1>
          <p className="cenarios-subtitle">
            Na Zeit Aracaju, os cenários são o núcleo da nossa exploração de design fiction. Usando a Matrix 2x2, construímos 8 narrativas futuras plausíveis, divididas em dois eixos: para profissionais de design e para estudantes de design. Cada um é um "mundo possível" que mistura tendências reais com ficção especulativa, ajudando a preparar o setor para mudanças disruptivas.
          </p>
        </div>
      </section>

      <section className="cenarios-content">
        <div className="cenarios-section">
          <h2 className="cenarios-section-title">Cenários para Profissionais de Design</h2>
          <p className="cenarios-section-intro">
            Esses 4 cenários exploram como o dia a dia de um designer pode evoluir até 2050, considerando incertezas como Regulamentação da Profissão de Design e a Regulamentação da Inteligência Artificial (IA):
          </p>

          <div className="cenario-card">
            <h3 className="cenario-name">O Caos Criativo</h3>
            <p className="cenario-subtitle">(Profissão Não Regulamentada + IA Não Regulamentada)</p>
            <p className="cenario-description">
              Ambiente de liberdade criativa extrema, mas sem regras para IA ou profissão, levando a guerras por propriedade intelectual, precarização e competição feroz com amadores e IAs.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Freelancer perpétuo com instabilidade financeira, dilema ético como desvantagem competitiva e exaustão em marketing pessoal e defesa legal.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Diferenciação por reputação e ideias originais, fomentando aprendizado autodidata em engenharia de prompt para sobrevivência em um mercado fragmentado.
              </div>
            </div>
          </div>

          <div className="cenario-card">
            <h3 className="cenario-name">O Artesão Estratégico</h3>
            <p className="cenario-subtitle">(Profissão Regulamentada + IA Não Regulamentada)</p>
            <p className="cenario-description">
              Profissão valorizada por licenças e padrões éticos, mas IA selvagem exige auditoria constante, posicionando o designer como fiador legal de outputs tecnológicos.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Auditoria exaustiva de vieses e riscos em IAs não reguladas, dividindo o mercado entre caos barato e confiança premium, com responsabilidade civil/criminal pelos erros da IA.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Mercado de alta confiança com salários elevados em clientes sérios (bancos, governos), novas nichos em engenharia de prompt e formação adaptada para habilidades humanas estratégicas.
              </div>
            </div>
          </div>

          <div className="cenario-card">
            <h3 className="cenario-name">O Designer Orquestrador</h3>
            <p className="cenario-subtitle">(Profissão Não Regulamentada + IA Regulamentada)</p>
            <p className="cenario-description">
              IA confiável e ética como aliada, mas profissão sem padronização dilui o papel do designer, tornando o bom design uma commodity acessível a não-especialistas.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Commoditização do trabalho, exaustão em justificar valor estratégico contra concorrentes (engenheiros, gerentes), e diluição da identidade profissional sem regulamentação.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Foco em orquestração de ecossistemas de IA para soluções complexas, com IA minimizando riscos éticos, impulsionando networking e autopromoção para relevância em um mercado dinâmico.
              </div>
            </div>
          </div>

          <div className="cenario-card">
            <h3 className="cenario-name">O Guardião Ético</h3>
            <p className="cenario-subtitle">(Profissão Regulamentada + IA Regulamentada)</p>
            <p className="cenario-description">
              Ambas regulamentadas com licenças, códigos éticos e auditorias, elevando o designer a guardião humano de valores, com veto ético sobre IAs classificadas por risco.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Responsabilidade legal plena por criações (civil/criminal), exigindo formação rigorosa em ética, transparência e sustentabilidade para evitar danos sistêmicos.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Prestígio social equiparado a médicos/engenheiros, mercado estável e inovador com foco em design regenerativo e impacto social, colaborando com IAs para soluções inclusivas, equitativas e de alto propósito.
              </div>
            </div>
          </div>
        </div>

        <div className="cenarios-section">
          <h2 className="cenarios-section-title">Cenários para Estudantes de Design</h2>
          <p className="cenarios-section-intro">
            Para os futuros designers, imaginamos trajetórias educacionais transformadas por Relevância das Grades Curriculares e a Formação Ética e Responsabilidade Social:
          </p>

          <div className="cenario-card">
            <h3 className="cenario-name">O Navegador Autodidata</h3>
            <p className="cenario-subtitle">(Grades Desatualizadas + Baixa Ênfase Ética)</p>
            <p className="cenario-description">
              Estudantes forçados a aprender sozinhos em meio a currículos obsoletos e foco superficial em ética, preenchendo lacunas com certificações de Big Techs, resultando em profissionais fragmentados e ansiosos.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Ansiedade crônica, síndrome do impostor e precarização em um mercado bifurcado por IA e amadores.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Desenvolvimento de autodidatismo resiliente, mas risco de erosão coletiva da profissão sem base ética unificada.
              </div>
            </div>
          </div>

          <div className="cenario-card">
            <h3 className="cenario-name">O Especialista Técnico</h3>
            <p className="cenario-subtitle">(Grades Adaptadas + Baixa Ênfase Ética)</p>
            <p className="cenario-description">
              Formação técnica imersiva e atualizada, mas negligenciando ética social, produzindo prodígios eficientes que dominam IAs e prompts, mas ignoram impactos humanos.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Obsolescência programada pela automação, com danos sistêmicos involuntários (como vieses em algoritmos críticos) e burnout por competição constante.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Sucesso inicial com altos salários, mas necessidade de evolução para gerenciamento ético de tecnologias.
              </div>
            </div>
          </div>

          <div className="cenario-card">
            <h3 className="cenario-name">O Ativista Desconectado</h3>
            <p className="cenario-subtitle">(Grades Desatualizadas + Alta Ênfase Ética)</p>
            <p className="cenario-description">
              Ênfase forte em valores éticos e sociais, mas currículos defasados, criando designers com propósito profundo, mas sem ferramentas técnicas para execução viável.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Guetização em nichos marginais (ONGs ou academia), frustração por lacuna entre teoria e prática, e papel de crítico inofensivo ignorado pelo mercado tech.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Consciência aguçada para inclusão e sustentabilidade, impulsionando aprendizado reverso para integração prática.
              </div>
            </div>
          </div>

          <div className="cenario-card">
            <h3 className="cenario-name">O Designer Integral</h3>
            <p className="cenario-subtitle">(Grades Adaptadas + Alta Ênfase Ética)</p>
            <p className="cenario-description">
              Currículos ágeis e flexíveis, equilibrando pilares técnico (imersão em IA e prompts), ético-social (análise de impactos integrados) e prático (estágios reais com suporte psicológico), formando profissionais completos e transformadores.
            </p>
            <div className="cenario-details">
              <div className="cenario-challenge">
                <strong>Desafio:</strong> Exigir reformas regulatórias (MEC flexível) e integração ética em todos os projetos para evitar superficialidade.
              </div>
              <div className="cenario-opportunity">
                <strong>Oportunidade:</strong> Profissionais plenos com alto impacto social e mercado, valorizados por inovação responsável, colaborativa com IA e focada em equidade e sustentabilidade.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
