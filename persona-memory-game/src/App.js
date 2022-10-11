import { useState } from 'react';
import './App.scss';

const cardImages = [
  { "src": "/img/Emperor-0.webp" },
  { "src": "/img/Empress-0.webp" },
  { "src": "/img/Fool-0.webp" },
  { "src": "/img/Hierophant-0.webp" },
  { "src": "/img/Priestess-0.webp" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCard = () => {
    // On veut dupliquer chaque carte pour les avoir en double
    const shuffle = [...cardImages, ...cardImages]
      // on les mélange
      .sort(() => Math.random() - 0.5)
      // et pour chaque objet carte, on lui associe un id random
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffle);
    // On utilise le setTurns car on va appeler la fonction shuffleCard à
    // chaque nouvelle partie et donc remettre le compteur à 0
    setTurns(0);
  }

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCard}>Start a new game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              {/* recto de la carte */}
              <img className="front" src={card.src} alt="card front" />
              {/* versp de la carte */}
              <img className="back" src="/img/Tarot_verso.webp" alt="card back" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
