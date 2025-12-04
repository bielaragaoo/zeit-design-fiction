import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMangaById } from '@/app/data/mangas';
import './chapter-page.css';

interface PageProps {
  params: {
    id: string;
    chapterId: string;
  };
}

export default function ChapterPage({ params }: PageProps) {
  const manga = getMangaById(params.id);

  if (!manga) {
    notFound();
  }

  const chapter = manga.chapters.find(ch => ch.id === params.chapterId);

  if (!chapter) {
    notFound();
  }

  const currentChapterIndex = manga.chapters.findIndex(ch => ch.id === params.chapterId);
  const prevChapter = currentChapterIndex > 0 ? manga.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < manga.chapters.length - 1 
    ? manga.chapters[currentChapterIndex + 1] 
    : null;

  return (
    <div className="chapter-page-container">
      <header className="chapter-page-header">
        <div className="chapter-header-content">
          <Link href={`/manga/${manga.id}`} className="chapter-back-link">
            ← {manga.title}
          </Link>
          <h1 className="chapter-title">{chapter.title}</h1>
        </div>
      </header>

      <main className="chapter-page-main">
        <div className="chapter-pages">
          {chapter.pages.map((page, index) => (
            <div key={index} className="chapter-page-wrapper">
              <img 
                src={page} 
                alt={`Página ${index + 1}`}
                className="chapter-page-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="chapter-page-footer">
        <div className="chapter-navigation">
          {prevChapter ? (
            <Link 
              href={`/manga/${manga.id}/chapter/${prevChapter.id}`}
              className="chapter-nav-button prev"
            >
              ← Capítulo Anterior
            </Link>
          ) : (
            <div className="chapter-nav-button disabled">← Capítulo Anterior</div>
          )}

          <Link 
            href={`/manga/${manga.id}`}
            className="chapter-nav-button home"
          >
            Índice
          </Link>

          {nextChapter ? (
            <Link 
              href={`/manga/${manga.id}/chapter/${nextChapter.id}`}
              className="chapter-nav-button next"
            >
              Próximo Capítulo →
            </Link>
          ) : (
            <div className="chapter-nav-button disabled">Próximo Capítulo →</div>
          )}
        </div>
      </footer>
    </div>
  );
}

