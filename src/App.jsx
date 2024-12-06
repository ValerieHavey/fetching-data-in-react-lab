import { useState, useEffect } from "react";
import { fetchStarships } from "./services/starshipService";


const App = () => {
const [starships, setStarships] = useState([]);
const [search, setSearch] = useState('')
  useEffect(() => {
    async function getInitialStarships() {
      const initialStarships = await fetchStarships()
      setStarships(initialStarships)
    }
    getInitialStarships()
  }, []);

  const handleSearch = async () => {
    const searchedStarships = await fetchStarships(search)
      setStarships(searchedStarships)
  }

  return (
    <>
    <input 
     value={search}
     onChange={(event) => setSearch(event.target.value)}
    />
    <button onClick={handleSearch}>Search</button> 
    {JSON.stringify(starships)}
    </>
  );
}

export default App