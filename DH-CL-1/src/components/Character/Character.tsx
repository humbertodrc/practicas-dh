import {WithApiDataValidator} from "../WithApiDataValidator";
import React from "react";
import {CharacterCard} from "../CharacterCard";

export interface CharacterInterface {
	characters: [];
}

const Character = (props: CharacterInterface) => {
	return props.characters.map((character) => (
		<CharacterCard key={character.id} character={character} />
	));
};

export default WithApiDataValidator(Character, "characters");
