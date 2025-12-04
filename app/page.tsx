import { mangas } from './data/mangas';
import MangaCard from './components/MangaCard';
import './page.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Mangás Originais</h1>
          <p className="hero-subtitle">Explore histórias criativas e envolventes</p>
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

