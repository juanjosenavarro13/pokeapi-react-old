import axios from "axios";
import { pokemonConstants } from "../constants/pokemon.constant";
import { abilities } from "../models/pokemon.model";

export const pokemonFetch = (name:string) => {
  return axios.get(`${pokemonConstants.apiUrl}${name}`).then(res => res.data);
}

export const abilitiesFetch = (abilities:abilities[]) => {
    
  const urls = abilities.map(ability =>{
    return ability.ability.url;
  });

  return axios.all(urls.map(url => axios.get(url))).then(
    axios.spread((...responses) => {
      const data = responses.map(res => res.data);
      return data;
    })
  );

}