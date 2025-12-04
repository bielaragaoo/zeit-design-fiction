import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo">
          <h1 className="logo-text">Zeit Design Fiction</h1>
        </Link>
        <nav className="main-nav">
          <Link href="/" className="nav-link">Mangás</Link>
          <Link href="/sobre" className="nav-link">Sobre</Link>
          <Link href="/contato" className="nav-link">Contato</Link>
        </nav>
        <button className="mobile-menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

