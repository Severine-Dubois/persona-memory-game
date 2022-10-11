import './gridcard.scss';
import SingleCard from './SingleCard';

const GridCard = ({ cards, handleChoice, choiceOne, choiceTwo }) => {
    return(
    <div className="card-grid">
    {cards && cards.map(item => (
      <SingleCard 
        key={item.id}
        item={item}
        handleChoice={handleChoice}
        flipped={item === choiceOne || item === choiceTwo || item.matched}
      />
    ))}
  </div>
  )
}

export default GridCard;