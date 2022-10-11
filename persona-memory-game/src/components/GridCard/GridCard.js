import './gridcard.scss';
import SingleCard from './SingleCard';

const GridCard = ({ cards }) => {
    return(
    <div className="card-grid">
    {cards.map(card => (
      <SingleCard key={card.id} {...card} />
    ))}
  </div>
  )
}

export default GridCard;