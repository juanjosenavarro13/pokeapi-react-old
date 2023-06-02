import axios from "axios"
import { pokemonConstants } from "../constants/pokemon.constan"


export const fetchPokemons = () =>{
  return axios.get(pokemonConstants.apiUrl).then(res => res.data)
}