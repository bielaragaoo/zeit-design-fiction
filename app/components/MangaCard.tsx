import Link from 'next/link';
import { Manga } from '../data/mangas';
import './MangaCard.css';

interface MangaCardProps {
  manga: Manga;
}

export default function MangaCard({ manga }: MangaCardProps) {
  return (
    <Link href={`/manga/${manga.id}`} className="manga-card">
      <div className="manga-card-image-wrapper">
        <img 
          src={manga.coverImage} 
          alt={manga.title}
          className="manga-card-image"
        />
        <div className="manga-card-overlay">
          <span className="manga-card-read">Ver Detalhes</span>
        </div>
      </div>
      <div className="manga-card-content">
        <h3 className="manga-card-title">{manga.title}</h3>
      </div>
    </Link>
  );
}

