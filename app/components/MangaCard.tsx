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
          <span className="manga-card-read">Ler Agora</span>
        </div>
      </div>
      <div className="manga-card-content">
        <h3 className="manga-card-title">{manga.title}</h3>
        {manga.author && <p className="manga-card-author">{manga.author}</p>}
        <p className="manga-card-description">{manga.description}</p>
      </div>
    </Link>
  );
}

