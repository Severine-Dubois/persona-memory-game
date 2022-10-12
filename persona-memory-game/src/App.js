import { useEffect, useState } from 'react';
import './App.scss';
import GridCard from './components/GridCard/GridCard';
import { Menu } from './components/Menu/Menu';
import { Modal } from './components/Modal/Modal';
import { TurnsCounter } from './components/TurnsCounter/TurnsCounter';

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
  const [disabled, setDisabled] = useState(false);
  const [modal, setModal] = useState(false);

  const shuffleCard = () => {
    // On veut dupliquer chaque carte pour les avoir en double
    const shuffle = [...cardImages, ...cardImages]
      // on les mélange
      .sort(() => Math.random() - 0.5)
      // et pour chaque objet carte, on lui associe un id random
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setModal(false);
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
    setDisabled(false);
  }

  // comparer les cartes
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
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
    gameOver();
  }, [choiceOne, choiceTwo]);

  // démarrer une partie automatiquement
  useEffect(() => {
    shuffleCard();
  }, []);

  // terminer une partie
  const gameOver = () => {
    if (cards.length > 0) {
      const matched = (item) => item.matched === true;
      if (cards.every(matched)) {
        setModal(true)
      }
    }
  }

  return (
    <div className="App">
      <Menu />
      <div className="game">
        <h1>Memory Game</h1>
        <button onClick={shuffleCard}>Nouvelle partie</button>
        <GridCard
          cards={cards}
          handleChoice={handleChoice}
          choiceOne={choiceOne}
          choiceTwo={choiceTwo}
          disabled={disabled}
        />
        <TurnsCounter turns={turns} />
        <Modal modal={modal} />
      </div>
    </div>
  );
}

export default App;
