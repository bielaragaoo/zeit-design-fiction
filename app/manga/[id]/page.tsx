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

  // Coletar todas as páginas de todos os capítulos
  const allPages = manga.chapters.flatMap(chapter => chapter.pages);

  return (
    <div 
      className="manga-page-container"
      style={{
        '--cover-image': `url(${manga.coverImage})`,
      } as React.CSSProperties}
    >
      <div className="manga-page-background-overlay"></div>
      <div className="manga-details-section">
        <div className="manga-details-content">
          <div className="manga-details-cover">
            <img 
              src={manga.coverImage} 
              alt={manga.title}
              className="manga-details-cover-image"
            />
          </div>
          
          <div className="manga-details-info">
            <h1 className="manga-details-title">{manga.title}</h1>
            {manga.author && <p className="manga-details-author">por {manga.author}</p>}
            
            <div className="manga-details-meta">
              <span className="meta-item">Gênero: Ficção</span>
              <span className="meta-item">Status: Completo</span>
              <span className="meta-item">Capítulos: {manga.chapters.length}</span>
            </div>
            
            <p className="manga-details-description">{manga.description}</p>
            
            {allPages.length > 0 && (
              <Link 
                href={`/manga/${manga.id}/ler`}
                className="read-now-button"
              >
                LER AGORA
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

