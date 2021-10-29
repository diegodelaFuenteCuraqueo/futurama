import Card from './Card'
//  TODO : check wtf "props validation" really means...
function CardList( props) {
  const cards = props.allCards.map(card => (
    <Card
      key={card.id}
      name={card.name.first+" "+card.name.middle+" "+card.name.last}
      species={card.species}
      homePlanet={card.homePlanet}
      age={card.age}
      occupation={card.occupation}
      images={card.images.main}
    />
  ))
  return (
    <div className="cardList">
      {cards}
    </div>
  )
}

export default CardList

