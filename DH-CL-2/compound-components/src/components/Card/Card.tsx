import { Characters } from "../../data";
import "./styles/Card.css";

type ChildrenProps = {
	character: Characters;
}

const Card = ({character} : ChildrenProps) => {
	return (
		<article>
			<div>
				<h2>{character.title}</h2>
				<p>{character.desc}</p>
				<img src={character.image} alt={character.alt} />
				<h3>{character.status}</h3>
			</div>
		</article>
	);
};
export default Card;
