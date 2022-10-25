import { ApiResponse} from '../types/character';

export const getCharacters = async (): Promise<ApiResponse> => {
  //El error es que character tiene el ultimo caracter demás.
  // es api/character y no api/characterS
  return await fetch(`https://rickandmortyapi.com/api/character`).then((res) =>
    res.json()
  );
};
