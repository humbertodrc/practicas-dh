import axios from "axios";

export const getCharacteres = async () => {
  const URL = 'https://rickandmortyapi.com/api/character/';
  try {
    const { data } = await axios(URL)
    return data.results;
  } catch (error) {
    
  }
}