import './gridcard.scss';

const GridCard = ({ cards }) => {
    return(
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
  )
}

export default GridCard;