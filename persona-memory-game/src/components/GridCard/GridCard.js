import './gridcard.scss';
import SingleCard from './SingleCard';

const GridCard = ({ cards, handleChoice }) => {
    return(
    <div className="card-grid">
    {cards && cards.map(item => (
      <SingleCard key={item.id} item={item} handleChoice={handleChoice} />
    ))}
  </div>
  )
}

export default GridCard;