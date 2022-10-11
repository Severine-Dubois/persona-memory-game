import './gridcard.scss';
import SingleCard from './SingleCard';

const GridCard = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
    return(
    <div className="card-grid">
    {cards && cards.map(item => (
      <SingleCard 
        key={item.id}
        item={item}
        handleChoice={handleChoice}
        flipped={item === choiceOne || item === choiceTwo || item.matched}
        disabled={disabled}
      />
    ))}
  </div>
  )
}

export default GridCard;