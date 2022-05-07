const Card = ({ card, onCardClick }) => {

  return (
    <div key={card._id} className="grid-element">
      <button type="button" className="grid-element__remove"></button>
      <img src={card.link} alt={card.name} className="grid-element__img" onClick={()=>onCardClick(card)} />
      <div className="grid-element__sign">
        <h2 className="grid-element__title">{card.name}</h2>
        <div className="grid-element__likes">
          <button type="button" className="grid-element__like"></button>
          <span className="grid-element__span-like">{card.likes.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Card