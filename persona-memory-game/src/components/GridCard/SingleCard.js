const SingleCard = ({ item, handleChoice }) => {

    const handleClick = () => {
        handleChoice(item);
    }
   
    return (
        <div className='card'>
            <div>
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