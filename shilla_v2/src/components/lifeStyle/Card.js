const Card = ({ propCards }) => {
    return (
        <div className="info-wrap flex min-h-none">
            {propCards.map((card, index) => (
                <div className="card" key={index}>
                    <strong>{card.title}</strong>
                    <div className="img-wrap">
                        <img src={card.imgSrc} alt={card.title} />
                    </div>
                    <div className="txt-wrap">
                        <p className="sub">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card