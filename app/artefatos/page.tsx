import Image from 'next/image';
import './artefatos.css';

export default function ArtefatosPage() {
  const profissionais = [
    {
      name: 'Lara',
      persona: 'Lara Valença',
      artefato: 'Sistema de Mapeamento Holográfico de Acessibilidade',
      description: 'Sistema de Mapeamento Holográfico de Acessibilidade, composto por uma esfera de escaneamento que se conecta à cadeira de rodas do usuário. Este dispositivo varre o ambiente em 360 graus e gera um holograma 3D completo do espaço. O usuário visualiza este mapa holográfico em tempo real através de um dispositivo visual (como óculos ou lentes de contato), permitindo uma compreensão total do ambiente social. O objetivo é humanizar a navegação em locais públicos, aumentando a acessibilidade e a percepção espacial do usuário.',
      image: '/artefatos/lara-esfera.png',
      imageAlt: 'Lara - Esfera de Escaneamento'
    },
    {
      name: 'Damião',
      persona: 'Damião "Dami" Luembe',
      artefato: 'Gerador de Avatar',
      description: 'Equipamento/hardware auricular que cria pequenos hologramas para traduzir LIBRAS para a língua falada e da língua falada para LIBRAS. Será utilizado em empresas e órgãos públicos.',
      image: '/artefatos/dami-artefato.png',
      imageAlt: 'Dami - Gerador de Avatar'
    },
    {
      name: 'Akari',
      persona: 'Akari Mizuta',
      artefato: 'Sistema Inteligente de Upcycling para Centros de Triagem',
      description: 'Equipamento que escaneia resíduos e, em vez de focar apenas no material, analisa a geometria e a forma existente de cada item. Com base nessa análise, o sistema gera sugestões criativas de "complemento por adição", indicando como novas peças podem ser anexadas ou modificações podem ser feitas para transformar o resíduo – que iria para o lixo – em um novo produto funcional, aproveitando sua estrutura original e dando-lhe uma nova utilidade.',
      image: '/artefatos/akari-centro-triagem.png',
      imageAlt: 'Akari - Centro de Triagem'
    }
  ];

  const estudantes = [
    {
      name: 'Iara',
      persona: 'Iara',
      artefato: 'Impressora 3D Bio-regenerativa',
      description: 'Impressora 3D Bio-regenerativa que fabrica tecidos curativos personalizados diretamente sobre a ferida. O sistema primeiro analisa o DNA do paciente para otimizar a compatibilidade biológica e, em seguida, imprime um curativo avançado em camadas. Esse tecido contém agentes hemostáticos para estancar o sangramento e uma matriz de hidrogel e alginato para acelerar drasticamente a cicatrização. Ao ser aplicado, o material também libera substâncias que proporcionam um efeito anestésico, aliviando imediatamente a dor no local e, adicionalmente, pode ser personalizado esteticamente para cobrir ou suavizar imperfeições como quelóides e cicatrizes.',
      image: '/artefatos/iara-impressora.png',
      imageAlt: 'Iara - Impressora 3D Bio-regenerativa'
    },
    {
      name: 'Theo',
      persona: 'Teodora',
      artefato: 'Ressoar',
      description: 'Ressoar é um dispositivo vestível (uma tiara leve) que utiliza computação espacial combinada com haptics acessível. Ela não é um óculos de realidade virtual que isola o usuário; em vez disso, ela projeta camadas de informação visual, auditiva e sensorial (pequenas vibrações táteis) que se integram ao ambiente real do usuário.',
      image: '/artefatos/theo-tiara.png',
      imageAlt: 'Theo - Tiara Didática Sensorial'
    },
    {
      name: 'Farid',
      persona: 'Farid Al-Khatib',
      artefato: 'Protocolo Ágora',
      description: 'Protocolo Ágora (Rede Cívica de Verificação). É um protocolo público e auditável que se integra a redes sociais e aplicativos cívicos. Ele funciona como uma camada de verificação e mediação.',
      image: '/artefatos/farid-protocolo.png',
      imageAlt: 'Farid - Protocolo Ágora'
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
          <div className="artefatos-grid">
            {profissionais.map((item, index) => (
              <div key={index} className="artefato-card">
                <div className="artefato-image-container">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={600}
                    height={400}
                    className="artefato-image"
                    unoptimized
                  />
                </div>
                <div className="artefato-info">
                  <h3 className="artefato-persona">{item.persona}</h3>
                  <h4 className="artefato-name">{item.artefato}</h4>
                  <p className="artefato-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="artefatos-section">
          <h2 className="artefatos-section-title">Para Estudantes</h2>
          <div className="artefatos-grid">
            {estudantes.map((item, index) => (
              <div key={index} className="artefato-card">
                <div className="artefato-image-container">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={600}
                    height={400}
                    className="artefato-image"
                    unoptimized
                  />
                </div>
                <div className="artefato-info">
                  <h3 className="artefato-persona">{item.persona}</h3>
                  <h4 className="artefato-name">{item.artefato}</h4>
                  <p className="artefato-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="artefatos-section">
          <h2 className="artefatos-section-title">Artefatos Gerais</h2>
          <div className="artefatos-gerais">
            <div className="artefato-geral-card">
              <h3 className="artefato-geral-title">Descrição de vaga de 2050</h3>
              <p className="artefato-geral-text">Designer de Sistemas Adaptativos e Experiências Híbridas</p>
              <p className="artefato-geral-note">(Link para a descrição da vaga)</p>
            </div>
            <div className="artefato-geral-card">
              <h3 className="artefato-geral-title">Estrutura curricular</h3>
              <p className="artefato-geral-text">Bacharelado em Design para Futuros Adaptativos (Visão 2050)</p>
              <p className="artefato-geral-note">(Link para a descrição da estrutura)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
