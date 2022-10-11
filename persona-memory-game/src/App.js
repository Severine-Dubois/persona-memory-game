import { useEffect, useState } from 'react';
import './App.scss';
import GridCard from './components/GridCard/GridCard';

const cardImages = [
  { "src": "/img/Emperor-0.webp", matched: false },
  { "src": "/img/Empress-0.webp", matched: false },
  { "src": "/img/Fool-0.webp", matched: false },
  { "src": "/img/Hierophant-0.webp", matched: false },
  { "src": "/img/Priestess-0.webp", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    // on ne fait pas le check des cartes ici car le state ne sera pas
    // mis à jour à ce moment
  }

  // A chaque tour de jeu, on reset le choix des cartes
  // et on augmente le compteur
  const resetTurn = () => {
    let prevTurns = turns;
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns = prevTurns + 1);
  }

  // comparer les cartes
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCard}>Start a new game</button>
      <GridCard
        cards={cards}
        handleChoice={handleChoice} 
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
      />
    </div>
  );
}

export default App;
