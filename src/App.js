/*========== REACT HOOKS ==========*/
import { useState, useEffect } from "react"

/*========== MY COMPONENTS ==========*/
import Header from "./components/Header/Header"
import CharacterTable from "./components/CharacterTable"
import ScrollUp from "./components/ScrollUp";

/*========== HTTP REQUEST TOOL ==========*/
import axios from "axios";

/*========== CUSTOM CSS ==========*/
import './App.css';

//? Api key converted to m5.
const HASH_KEY = "13ea42e61137ed21ed14b1b3bfbdf620"

const App = () => {

  //? Variable declaration
  //* The data from the api will be set to the character variable.
  //* Boolean value will be defined for loading bar.
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let offSet = 0;

  //? Function that sends requests to api as scroll goes down for infinite scroll.
  const loadMoreCharacter = async () => {

    //? Get request is thrown with axios
    const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0cf7f09b70da23d0d35e8ca51b5fff24&hash=${HASH_KEY}&offset=${offSet}`)
    const newCharacter = []
    result.data.data.results.forEach((c) => { newCharacter.push(c) })

    //? Set to variable
    setCharacters(oldCharacter => [...oldCharacter, ...newCharacter])

    setIsLoading(false)
    //? Increased the number of characters by 10 more
    offSet = 10;
  }

  const handleScroll = (e) => {
    //? As the scroll goes down, the loadMoreCharacter function is executed.
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight
    ) {
      loadMoreCharacter()
    }
  }

  //? Necessary functions are run with useEffect every time the page is rendered.
  useEffect(() => {
    loadMoreCharacter()
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterTable characters={characters} isLoading={isLoading} />
      <ScrollUp />
    </div>
  );
}

export default App;
