import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Página não encontrada</h2>
        <p className="not-found-description">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className="not-found-button">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

