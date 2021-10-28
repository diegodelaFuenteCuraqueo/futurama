import { useEffect, useState } from 'react'
import SearchCharacter from './SearchCharacter'

import CardList from './CardList'

// TODO: separate searchbar in new component

function FuturamaCharacters(){
  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")

  const baseURL = 'https://api.sampleapis.com/futurama/characters';
  useEffect(() => { 
    fetch(baseURL)
      .then(response => response.json())
      .then(data => setCharacters(data))
  },[])

  useEffect(() => {
    console.log(filterName)
  },[filterName])
  
  const filteredCharacters = characters.filter( character => { 
    const flatName = (character.name.first+" "+character.name.middle+" "+character.name.last).toUpperCase()
    return flatName.includes( filterName.toUpperCase() )
  })
  
  //preguntar por maña del puto console.log en relación con errores de react
  console.log(characters)

  return (
    <>
      <div className="searchBar">
      <form>
        <input 
          type="text" 
          placeholder="Search by name"
          onChange={e => setFilterName(e.target.value)}></input>
      </form>
      </div>
      <CardList allCards={filteredCharacters} />
    </>
  )
}

export default FuturamaCharacters
