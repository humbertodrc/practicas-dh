import { useState } from "react";
import CardList from "../CardList/CardList";
import "./main.css";

import { Character } from "../../types/character";

const Main = () => {
	const [data, setData] = useState<Character[] | []>([]);
  

	return (
		<div className="main">
			<CardList data={data} setData={setData} />
		</div>
	);
};

export default Main;
