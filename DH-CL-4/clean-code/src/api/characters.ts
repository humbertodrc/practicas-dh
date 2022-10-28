import { ApiResponse} from '../types/character';

export const getCharacters = async (): Promise<ApiResponse> => {
  return await fetch(`https://rickandmortyapi.com/api/character`).then((res) =>
    res.json()
  );
};

