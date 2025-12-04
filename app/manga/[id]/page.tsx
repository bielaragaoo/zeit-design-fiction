import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMangaById } from '@/app/data/mangas';
import './manga-page.css';

interface PageProps {
  params: {
    id: string;
  };
}

export default function MangaPage({ params }: PageProps) {
  const manga = getMangaById(params.id);

  if (!manga) {
    notFound();
  }

  const firstChapter = manga.chapters[0];

  return (
    <div className="manga-page-container">
      <header className="manga-page-header">
        <Link href="/" className="back-button">
          ← Voltar
        </Link>
        <div className="manga-page-header-content">
          <img 
            src={manga.coverImage} 
            alt={manga.title}
            className="manga-page-cover"
          />
          <div className="manga-page-info">
            <h1 className="manga-page-title">{manga.title}</h1>
            <p className="manga-page-author">por {manga.author}</p>
            <p className="manga-page-description">{manga.description}</p>
            {firstChapter && (
              <Link 
                href={`/manga/${manga.id}/chapter/${firstChapter.id}`}
                className="read-button"
              >
                Ler Capítulo 1
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="manga-page-main">
        <section className="chapters-section">
          <h2 className="chapters-title">Capítulos</h2>
          {manga.chapters.length > 0 ? (
            <div className="chapters-list">
              {manga.chapters.map((chapter, index) => (
                <Link
                  key={chapter.id}
                  href={`/manga/${manga.id}/chapter/${chapter.id}`}
                  className="chapter-item"
                >
                  <span className="chapter-number">Capítulo {index + 1}</span>
                  <span className="chapter-name">{chapter.title}</span>
                  <span className="chapter-arrow">→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-chapters">
              <p>Esta história ainda não possui capítulos publicados.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

