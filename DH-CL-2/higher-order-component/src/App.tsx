import React, { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((characters) => setCharacters(characters.results));
    }, 3000);
  }, []);

  return <CharacterList characters={characters} />;
};

export default App;

