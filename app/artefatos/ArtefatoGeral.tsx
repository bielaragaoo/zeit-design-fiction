'use client';

import { useState } from 'react';
import './artefatos.css';

interface ArtefatoGeralProps {
  title: string;
  subtitle: string;
  content: string;
}

export default function ArtefatoGeral({ title, subtitle, content }: ArtefatoGeralProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="artefato-geral-card">
      <div className="artefato-geral-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div>
          <h3 className="artefato-geral-title">{title}</h3>
          <p className="artefato-geral-text">{subtitle}</p>
        </div>
        <button className="artefato-geral-toggle" aria-label={isExpanded ? 'Recolher' : 'Expandir'}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={isExpanded ? 'expanded' : ''}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div className="artefato-geral-content">
          <div className="artefato-geral-body" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
}
