import { useEffect, useState } from 'react'


function SearchCharacter() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(name)
  },[name])

  return (
    <div className="searchBar">
      <form>
        <label>
          <input
            placeholder="Search by name"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name === "" ? "look for someone" : "Looking for "+name}
        </label>
      </form>
    </div>
  )
}

export default  SearchCharacter