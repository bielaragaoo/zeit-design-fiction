import Link from 'next/link';
import './contato.css';

export default function ContatoPage() {
  return (
    <div className="contato-container">
      <div className="contato-content">
        <h1 className="contato-title">Contato</h1>
        <p className="contato-text">
          Entre em contato conosco através das redes sociais ou envie uma mensagem.
        </p>
        <div className="contato-links">
          <a href="#" className="contato-link">Instagram</a>
          <a href="#" className="contato-link">Twitter</a>
          <a href="#" className="contato-link">Facebook</a>
        </div>
        <Link href="/" className="contato-back-link">
          ← Voltar para Mangás
        </Link>
      </div>
    </div>
  );
}

