import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ErrorComponent from "../Error/ErrorComponent";
import Loading from "../Loading/Loading";

import { getCharacters } from "../../api/characters";
//types
import { ApiResponse, Character } from "../../types/character";

const CardList = ({
	data,
	setData,
}: {
	data: Character[] | [];
    setData: Dispatch<SetStateAction<Character[] | []>>;
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [hasError, setHasError] = useState<boolean>(false);

	const getData = async () => {
		const response: ApiResponse = await getCharacters();

		if (response.results) {
			setData(response.results);
			setIsLoading(false);
			setHasError(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{hasError && <ErrorComponent />}
			{isLoading && <Loading />}

			<div className="grid-container">
				{data.map((item) => (
					<div className="card" key={`${item.name}-´${item.id}`}>
						<img className="card-img" src={item?.image} alt={item?.name} />
						<span>{item?.name}</span>
					</div>
				))}
			</div>
		</>
	);
};

export default CardList;
