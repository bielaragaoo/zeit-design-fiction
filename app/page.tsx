import { mangas } from './data/mangas';
import MangaCard from './components/MangaCard';
import './page.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1 className="site-title">Zeit Design Fiction</h1>
          <p className="site-subtitle">Explore histórias de mangá criativas e envolventes</p>
        </div>
      </header>

      <main className="home-main">
        <div className="mangas-grid">
          {mangas.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))}
        </div>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 Zeit Design Fiction. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

