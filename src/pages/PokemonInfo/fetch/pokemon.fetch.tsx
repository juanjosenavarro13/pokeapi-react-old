import axios from "axios";
import { pokemonConstants } from "../constants/pokemon.constant";

export const pokemonFetch = (name:string) => {
  return axios.get(`${pokemonConstants.apiUrl}${name}`).then(res => res.data);
}