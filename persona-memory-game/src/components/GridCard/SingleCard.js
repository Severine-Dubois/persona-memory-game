const SingleCard = ({ src }) => {
    return(
        <div className='card'>
        <div>
        {/* recto de la carte */}
        <img className="front" src={src} alt="card front" />
        {/* versp de la carte */}
        <img className="back" src="/img/Tarot_verso.webp" alt="card back" />
        </div>
    </div>
    )
}

export default SingleCard;