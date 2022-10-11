import './gridcard.scss';

const SingleCard = ({ item, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if(!disabled) {
            handleChoice(item);
        }
    }
   
    return (
        <div className='card'>
            <div className={flipped ?  "flipped" : ""}>
                {/* recto de la carte */}
                <img className="front" src={item.src} alt="card front" />
                {/* versp de la carte */}
                <img
                    className="back"
                    src="/img/Tarot_verso.webp"
                    alt="card back"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default SingleCard;