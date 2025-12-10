import Image from 'next/image';
import ArtefatoGeral from './ArtefatoGeral';
import './artefatos.css';

export default function ArtefatosPage() {
  const profissionais = [
    {
      name: 'Lara',
      persona: 'Lara Valença',
      artefatos: [
        {
          nome: 'Sistema de Mapeamento Holográfico de Acessibilidade',
          description: 'Sistema de Mapeamento Holográfico de Acessibilidade, composto por uma esfera de escaneamento que se conecta à cadeira de rodas do usuário. Este dispositivo varre o ambiente em 360 graus e gera um holograma 3D completo do espaço. O usuário visualiza este mapa holográfico em tempo real através de um dispositivo visual (como óculos ou lentes de contato), permitindo uma compreensão total do ambiente social. O objetivo é humanizar a navegação em locais públicos, aumentando a acessibilidade e a percepção espacial do usuário.',
          image: '/artefatos/lara-esfera.png',
          imageAlt: 'Lara - Esfera de Escaneamento'
        },
        {
          nome: 'Esfera Holográfica (Variação)',
          description: 'Variação do sistema de mapeamento holográfico de acessibilidade.',
          image: '/artefatos/lara-esfera-2.png',
          imageAlt: 'Lara - Esfera Holográfica'
        }
      ]
    },
    {
      name: 'Damião',
      persona: 'Damião "Dami" Luembe',
      artefatos: [
        {
          nome: 'Gerador de Avatar',
          description: 'Equipamento/hardware auricular que cria pequenos hologramas para traduzir LIBRAS para a língua falada e da língua falada para LIBRAS. Será utilizado em empresas e órgãos públicos.',
          image: '/artefatos/dami-artefato.png',
          imageAlt: 'Dami - Gerador de Avatar'
        },
        {
          nome: 'Auricular Tradutor',
          description: 'Dispositivo auricular para tradução de LIBRAS em tempo real.',
          image: '/artefatos/dami-auricular.png',
          imageAlt: 'Dami - Auricular'
        },
        {
          nome: 'Tradutor de Linguagem de Sinais',
          description: 'Sistema de tradução de linguagem de sinais para comunicação acessível.',
          image: '/artefatos/dami-tradutor.png',
          imageAlt: 'Dami - Tradutor de Linguagem de Sinais'
        }
      ]
    },
    {
      name: 'Akari',
      persona: 'Akari Mizuta',
      artefatos: [
        {
          nome: 'Sistema Inteligente de Upcycling para Centros de Triagem',
          description: 'Equipamento que escaneia resíduos e, em vez de focar apenas no material, analisa a geometria e a forma existente de cada item. Com base nessa análise, o sistema gera sugestões criativas de "complemento por adição", indicando como novas peças podem ser anexadas ou modificações podem ser feitas para transformar o resíduo – que iria para o lixo – em um novo produto funcional, aproveitando sua estrutura original e dando-lhe uma nova utilidade.',
          image: '/artefatos/akari-centro-triagem.png',
          imageAlt: 'Akari - Centro de Triagem'
        }
      ]
    }
  ];

  const estudantes = [
    {
      name: 'Iara',
      persona: 'Iara',
      artefatos: [
        {
          nome: 'Impressora 3D Bio-regenerativa',
          description: 'Impressora 3D Bio-regenerativa que fabrica tecidos curativos personalizados diretamente sobre a ferida. O sistema primeiro analisa o DNA do paciente para otimizar a compatibilidade biológica e, em seguida, imprime um curativo avançado em camadas. Esse tecido contém agentes hemostáticos para estancar o sangramento e uma matriz de hidrogel e alginato para acelerar drasticamente a cicatrização. Ao ser aplicado, o material também libera substâncias que proporcionam um efeito anestésico, aliviando imediatamente a dor no local e, adicionalmente, pode ser personalizado esteticamente para cobrir ou suavizar imperfeições como quelóides e cicatrizes.',
          image: '/artefatos/iara-impressora.png',
          imageAlt: 'Iara - Impressora 3D Bio-regenerativa'
        },
        {
          nome: 'Pele Bio-regenerativa',
          description: 'Tecnologia de pele bio-regenerativa desenvolvida por Iara para cicatrização e regeneração de tecidos.',
          image: '/artefatos/iara-pele.png',
          imageAlt: 'Iara - Pele Bio-regenerativa'
        }
      ]
    },
    {
      name: 'Theo',
      persona: 'Theo',
      artefatos: [
        {
          nome: 'Ressoar - Tiara Didática Sensorial',
          description: 'Ressoar é um dispositivo vestível (uma tiara leve) que utiliza computação espacial combinada com haptics acessível. Ela não é um óculos de realidade virtual que isola o usuário; em vez disso, ela projeta camadas de informação visual, auditiva e sensorial (pequenas vibrações táteis) que se integram ao ambiente real do usuário.',
          image: '/artefatos/theo-tiara.png',
          imageAlt: 'Theo - Tiara Didática Sensorial'
        },
        {
          nome: 'Ressoar - Variação 2',
          description: 'Variação do dispositivo Ressoar para aprendizado sensorial.',
          image: '/artefatos/theo-tiara-2.png',
          imageAlt: 'Theo - Tiara 2'
        },
        {
          nome: 'Ressoar - Variação 3',
          description: 'Variação do dispositivo Ressoar para aprendizado sensorial.',
          image: '/artefatos/theo-tiara-3.png',
          imageAlt: 'Theo - Tiara 3'
        }
      ]
    },
    {
      name: 'Farid',
      persona: 'Farid Al-Khatib',
      artefatos: [
        {
          nome: 'Protocolo Ágora',
          description: 'Protocolo Ágora (Rede Cívica de Verificação). É um protocolo público e auditável que se integra a redes sociais e aplicativos cívicos. Ele funciona como uma camada de verificação e mediação.',
          image: '/artefatos/farid-protocolo.png',
          imageAlt: 'Farid - Protocolo Ágora'
        }
      ]
    }
  ];

  return (
    <div className="artefatos-page-container">
      <section className="artefatos-hero">
        <div className="artefatos-hero-content">
          <h1 className="artefatos-title">Personas e Artefatos</h1>
          <p className="artefatos-subtitle">
            Os artefatos de futuros são o toque mágico da design fiction na Zeit Aracaju: <strong>16 criações fictícias</strong> que tornam os cenários palpáveis. Inspirados nos nossos 8 cenários e 6 personas, esses "objetos especulativos" – de apps a wearables – provocam: "E se isso existisse hoje?". Desenvolvidos em colaboração com o aluno da UNIT, eles foram exibidos na Semana de Design, gerando debates sobre inovação ética e prática.
          </p>
        </div>
      </section>

      <section className="artefatos-content">
        <div className="artefatos-section">
          <h2 className="artefatos-section-title">Para Profissionais</h2>
          {profissionais.map((persona, personaIndex) => (
            <div key={personaIndex} className="persona-group">
              <h3 className="persona-group-title">{persona.persona}</h3>
              <div className="artefatos-grid">
                {persona.artefatos.map((artefato, artefatoIndex) => (
                  <div key={artefatoIndex} className="artefato-card">
                    <div className="artefato-image-container">
                      <Image
                        src={artefato.image}
                        alt={artefato.imageAlt}
                        width={600}
                        height={400}
                        className="artefato-image"
                        unoptimized
                      />
                    </div>
                    <div className="artefato-info">
                      <h4 className="artefato-name">{artefato.nome}</h4>
                      <p className="artefato-description">{artefato.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="artefatos-section">
          <h2 className="artefatos-section-title">Para Estudantes</h2>
          {estudantes.map((persona, personaIndex) => (
            <div key={personaIndex} className="persona-group">
              <h3 className="persona-group-title">{persona.persona}</h3>
              <div className="artefatos-grid">
                {persona.artefatos.map((artefato, artefatoIndex) => (
                  <div key={artefatoIndex} className="artefato-card">
                    <div className="artefato-image-container">
                      <Image
                        src={artefato.image}
                        alt={artefato.imageAlt}
                        width={600}
                        height={400}
                        className="artefato-image"
                        unoptimized
                      />
                    </div>
                    <div className="artefato-info">
                      <h4 className="artefato-name">{artefato.nome}</h4>
                      <p className="artefato-description">{artefato.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="artefatos-section">
          <h2 className="artefatos-section-title">Artefatos Gerais</h2>
          <div className="artefatos-gerais">
            <ArtefatoGeral
              title="Descrição de vaga de 2050"
              subtitle="Designer de Sistemas Adaptativos e Experiências Híbridas"
              content={`
                <p><strong>Descrição da Vaga:</strong></p>
                <p>Buscamos um Designer de Sistemas Adaptativos e Experiências Híbridas para integrar nossa equipe multidisciplinar. O profissional será responsável por projetar soluções que combinem interfaces físicas e digitais, criando experiências que se adaptam dinamicamente às necessidades dos usuários e contextos de uso.</p>
                <p><strong>Requisitos:</strong></p>
                <ul>
                  <li>Formação em Design ou áreas afins</li>
                  <li>Experiência com design de sistemas adaptativos</li>
                  <li>Conhecimento em tecnologias emergentes (IA, IoT, Realidade Aumentada)</li>
                  <li>Capacidade de trabalhar em equipes multidisciplinares</li>
                  <li>Visão estratégica e pensamento sistêmico</li>
                </ul>
                <p><strong>Responsabilidades:</strong></p>
                <ul>
                  <li>Projetar sistemas que se adaptam a diferentes contextos e usuários</li>
                  <li>Desenvolver experiências híbridas que integram físico e digital</li>
                  <li>Colaborar com equipes de desenvolvimento, pesquisa e negócios</li>
                  <li>Prototipar e testar soluções inovadoras</li>
                </ul>
              `}
            />
            <ArtefatoGeral
              title="Estrutura curricular"
              subtitle="Bacharelado em Design para Futuros Adaptativos (Visão 2050)"
              content={`
                <p><strong>Visão Geral do Curso:</strong></p>
                <p>O Bacharelado em Design para Futuros Adaptativos prepara profissionais para atuar em um mundo em constante transformação, onde a capacidade de adaptação e inovação são essenciais. O curso integra conhecimentos técnicos, éticos e estratégicos para formar designers capazes de criar soluções responsáveis e transformadoras.</p>
                <p><strong>Estrutura Curricular:</strong></p>
                <p><strong>1º ao 4º Semestre - Base Fundamentadora:</strong></p>
                <ul>
                  <li>Fundamentos do Design</li>
                  <li>História e Teoria do Design</li>
                  <li>Metodologias de Projeto</li>
                  <li>Ética e Responsabilidade Social</li>
                  <li>Introdução à Tecnologia e IA</li>
                </ul>
                <p><strong>5º ao 8º Semestre - Especialização e Aplicação:</strong></p>
                <ul>
                  <li>Design de Sistemas Adaptativos</li>
                  <li>Design e Inteligência Artificial</li>
                  <li>Sustentabilidade e Design Regenerativo</li>
                  <li>Design para Inclusão e Acessibilidade</li>
                  <li>Projetos Integradores</li>
                </ul>
                <p><strong>9º e 10º Semestre - Aprofundamento e TCC:</strong></p>
                <ul>
                  <li>Estágio Supervisionado</li>
                  <li>Trabalho de Conclusão de Curso</li>
                  <li>Portfólio Profissional</li>
                </ul>
              `}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
