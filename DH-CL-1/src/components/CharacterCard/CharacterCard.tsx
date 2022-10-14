import React from 'react';

type Props = {
	character: Record<string, any>
}

const CharacterCard = (props: Props) => {
	console.log(props.character)
	return <div>{props.character.name}</div>;
};

export default CharacterCard;
