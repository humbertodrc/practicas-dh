// Componente encapsulado com HOC

import React from "react";
import Character from "../Character";
import LoadingHOC from "../../hoc/LoadingHOC";
import "./CharacterList.css";

export type CharacterProps = {
  characters: [];
};


const CharacterList = ({ characters }: CharacterProps) => {
  return (
    <section className="characters">
      {characters.map((character, key) => (
        <Character key={key} character={character} />
      ))}
    </section>
  );
};

export default LoadingHOC(CharacterList);
