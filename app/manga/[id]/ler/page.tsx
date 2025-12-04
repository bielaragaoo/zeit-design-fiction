'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMangaById } from '@/app/data/mangas';
import { useEffect, useRef, useState } from 'react';
import '../manga-page.css';

interface PageProps {
  params: {
    id: string;
  };
}

export default function MangaReaderPage({ params }: PageProps) {
  const manga = getMangaById(params.id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  if (!manga) {
    notFound();
  }

  // Coletar todas as páginas de todos os capítulos
  const allPages = manga.chapters.flatMap(chapter => chapter.pages);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const pageWidth = scrollContainerRef.current.clientWidth;
        const page = Math.round(scrollLeft / pageWidth);
        setCurrentPage(page);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (scrollContainerRef.current) {
        const pageWidth = scrollContainerRef.current.clientWidth;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const newPage = Math.max(0, currentPage - 1);
          scrollContainerRef.current.scrollTo({
            left: newPage * pageWidth,
            behavior: 'smooth',
          });
          setCurrentPage(newPage);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          const newPage = Math.min(allPages.length - 1, currentPage + 1);
          scrollContainerRef.current.scrollTo({
            left: newPage * pageWidth,
            behavior: 'smooth',
          });
          setCurrentPage(newPage);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, allPages.length]);

  const scrollToPage = (pageIndex: number) => {
    if (scrollContainerRef.current) {
      const pageWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: pageIndex * pageWidth,
        behavior: 'smooth',
      });
      setCurrentPage(pageIndex);
    }
  };

  if (allPages.length === 0) {
    return (
      <div className="manga-page-container">
        <main className="manga-page-main">
          <div className="no-chapters">
            <p>Esta história ainda não possui páginas publicadas.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="manga-reader-page">
      <header className="reader-header">
        <Link href={`/manga/${manga.id}`} className="reader-back-button">
          ← Voltar
        </Link>
        <h2 className="reader-title">{manga.title}</h2>
      </header>

      <div className="manga-reader-wrapper">
        <main className="manga-reader-main" ref={scrollContainerRef}>
          <div className="manga-pages-container">
            {allPages.map((page, index) => (
              <div key={index} className="manga-page-wrapper">
                <img 
                  src={page} 
                  alt={`Página ${index + 1}`}
                  className="manga-page-image"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </main>

        <footer className="manga-reader-footer">
          <div className="manga-reader-controls">
            <button
              onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="manga-nav-button prev"
            >
              ← Anterior
            </button>
            
            <div className="manga-page-indicator">
              Página {currentPage + 1} de {allPages.length}
            </div>

            <button
              onClick={() => scrollToPage(Math.min(allPages.length - 1, currentPage + 1))}
              disabled={currentPage === allPages.length - 1}
              className="manga-nav-button next"
            >
              Próxima →
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

