import Link from 'next/link';
import './sobre.css';

export default function SobrePage() {
  return (
    <div className="sobre-container">
      <div className="sobre-content">
        <h1 className="sobre-title">Sobre o Autor</h1>
        <p className="sobre-text">
          Zeit Design Fiction é um projeto dedicado à criação de histórias originais de mangá,
          explorando temas de ficção científica, acessibilidade, justiça social e tecnologia.
        </p>
        <p className="sobre-text">
          Cada história apresenta personagens únicos e narrativas que refletem sobre o futuro
          e os desafios da sociedade contemporânea.
        </p>
        <Link href="/" className="sobre-back-link">
          ← Voltar para Mangás
        </Link>
      </div>
    </div>
  );
}

