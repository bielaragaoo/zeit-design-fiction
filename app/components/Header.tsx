'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/home" className="logo" onClick={closeMenu}>
          {!logoError ? (
            <Image
              src="/logos/zeit-logo.jpeg"
              alt="ZEIT Logo"
              width={50}
              height={50}
              className="header-logo"
              unoptimized
              onError={() => setLogoError(true)}
            />
          ) : (
            <h1 className="logo-text">Zeit Design Fiction</h1>
          )}
        </Link>
        <nav className={`main-nav ${isMenuOpen ? 'main-nav-open' : ''}`}>
          <Link href="/home" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link href="/framework" className="nav-link" onClick={closeMenu}>Framework</Link>
          <Link href="/cenarios" className="nav-link" onClick={closeMenu}>Cenários</Link>
          <Link href="/mangas" className="nav-link" onClick={closeMenu}>Mangás</Link>
          <Link href="/artefatos" className="nav-link" onClick={closeMenu}>Artefatos</Link>
          <Link href="/contato" className="nav-link" onClick={closeMenu}>Contato</Link>
        </nav>
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'mobile-menu-toggle-open' : ''}`}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

