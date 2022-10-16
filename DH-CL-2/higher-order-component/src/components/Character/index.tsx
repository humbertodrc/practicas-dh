import React from "react";
import "./Character.css";

export type ListCharacterProps = {
  character: {
    image: string;
    name: string;
    species: string;
    status: string;
  };
};

const Character = ({ character }: ListCharacterProps) => {
  return (
    <div className="character">
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
      />
      <div>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    </div>
  );
};

export default Character;
