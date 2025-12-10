import { mangas } from '../data/mangas';
import MangaCard from '../components/MangaCard';
import './mangas.css';

export default function MangasPage() {
  return (
    <div className="mangas-page-container">
      <section className="mangas-hero">
        <div className="mangas-hero-content">
          <h1 className="mangas-title">Mangás</h1>
          <p className="mangas-subtitle">
            Os mangás da Zeit Aracaju elevam a design fiction a um novo nível: histórias em quadrinhos inspiradas nos nossos cenários e personas, criadas para tornar o futuro acessível e envolvente. Desenvolvidos como parte dos 16 artefatos, esses 6 mangás curtos (cada um com 10-42 páginas) usam o estilo dinâmico do mangá para narrar jornadas pessoais de designers fictícios.
          </p>
          <p className="mangas-subtitle">
            Cada mangá foca em uma persona e cenário, com temas como dilemas éticos e triunfos criativos. Esses mangás estão disponíveis para leitura online ou download em PDF. Eles não só ilustram os cenários, mas incentivam leitores a "remixar" as histórias – envie suas ideias! Ideal para educadores, designers e fãs de narrativas visuais. Qual mangá você quer ler primeiro?
          </p>
        </div>
      </section>

      <section className="mangas-section">
        <div className="mangas-grid">
          {mangas.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))}
        </div>
      </section>
    </div>
  );
}
