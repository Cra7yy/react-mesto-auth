const Card = ({ card, onCardClick }) => {

  return (
    <div key={card._id} class="grid-element">
      <button type="button" class="grid-element__remove"></button>
      <img src={card.link} alt={card.name} class="grid-element__img" onClick={()=>onCardClick(card)} />
      <div class="grid-element__sign">
        <h2 class="grid-element__title">{card.name}</h2>
        <div class="grid-element__likes">
          <button type="button" class="grid-element__like"></button>
          <span class="grid-element__span-like">{card.likes.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Card