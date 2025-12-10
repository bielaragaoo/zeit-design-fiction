import './contato.css';

export default function ContatoPage() {
  return (
    <div className="contato-container">
      <div className="contato-content">
        <h1 className="contato-title">Contato</h1>
        <p className="contato-text">
          Obrigado por explorar o Zeit Aracaju! 
        </p>
        <p className="contato-text">
          Se os cenários, artefatos e mangás inspiraram você, queremos ouvir sua voz. Seja para parcerias com a Zeit, colaborações em novos projetos de design fiction, feedback sobre o framework ou simplesmente uma conversa sobre os futuros do design – estamos abertos.
        </p>
        
        <div className="contato-info">
          <h2 className="contato-subtitle">Como Entrar em Contato</h2>
          <div className="contato-details">
            <div className="contato-item">
              <strong>E-mail Principal:</strong>
              <a href="mailto:zeitaracaju@gmail.com" className="contato-link">zeitaracaju@gmail.com</a>
            </div>
            <div className="contato-item">
              <strong>Instagram:</strong>
              <a href="https://instagram.com/zeitcapituloaracaju" target="_blank" rel="noopener noreferrer" className="contato-link">@zeitcapituloaracaju</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

