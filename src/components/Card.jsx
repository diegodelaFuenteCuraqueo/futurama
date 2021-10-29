function Card(props) {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={props.images} alt="Character" className="characterImage"/>  
      </div>
      <div>
        <h2> {props.name} </h2>
        <ul>
          <li> Species: {props.species} </li>
          <li> Planet:{props.homePlanet} </li>
          <li> Age: {props.age} </li>
          <li> Occupation: {props.occupation} </li>
        </ul>

      </div>
    </div>
  )
}

export default Card

