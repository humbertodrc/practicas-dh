import {ReactNode, useContext, useState} from "react";
import {CardContext} from "./CardContext";

const Card = ({children}: {children: ReactNode}) => {
	const [likes, setLikes] = useState(0);
	const [shares, setShares] = useState(0);

	const handleLike = () => {
		setLikes(likes + 1);
	};

	const handleShare = () => {
		setShares(shares + 1);
	};

	return (
		<CardContext.Provider
			value={{
				likes,
				shares,
				handleLike,
				handleShare,
			}}
		>
			{children}
		</CardContext.Provider>
	);
};

Card.Image = ({source}: {source: string}) => {
	return (
		<div>
			<img src={source} alt="Rick and Morty" />
		</div>
	);
};

Card.Actions = () => {
  const { likes, shares, handleLike, handleShare } = useContext(CardContext);

  return (
    <div>
      <button onClick={handleLike}>Like {likes}</button>
      <button onClick={handleShare}>Share {shares}</button>
    </div>
    )
};

export default Card;
