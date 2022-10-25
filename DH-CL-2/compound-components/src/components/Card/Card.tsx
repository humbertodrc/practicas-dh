import {ReactNode} from "react";
import "./styles/Card.css";

type ChildrenProps = {
	children?: ReactNode;
	src?: string;
	alt?: string;
};

const Card = ({children}: ChildrenProps) => {
	return (
		<article>
			{/* <div>
				<h2>{character.title}</h2>
				<p>{character.desc}</p>
				<img src={character.image} alt={character.alt} />
				<h3>{character.status}</h3>
			</div> */}
			{children}
		</article>
	);
};

Card.Body = function CardBody({children}: ChildrenProps) {
	return <div>{children}</div>;
};

Card.Title = function CardTitle({children}: ChildrenProps) {
	return <h2>{children}</h2>;
};

Card.Text = function CardText({children}: ChildrenProps) {
	return <p>{children}</p>;
};

Card.Imagen = function CardImagen({src, alt}: ChildrenProps) {
	return <img src={src} alt={alt} />;
};

Card.Status = function CardStatus({children}: ChildrenProps) {
	return <h3>{children}</h3>;
};

export default Card;
