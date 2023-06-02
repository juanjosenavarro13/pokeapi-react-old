import { useEffect, useState } from "react";
import { pokemonConstants } from "../../Home/constants/pokemon.constan";
import { fetchPokemons } from "../fetchs/pokemons.fetch";
import type { pokemonShowHome, result } from "../models/pokemon.model";



export const useFetchPokemons = () => {

  const [pokemons, setPokemons] = useState<pokemonShowHome[]>([]);

  useEffect(() => {

    fetchPokemons().then((pokemons) => {
      const pokemonsData = pokemons.results.map((pokemon: result) => {
        return {
          name: pokemon.name,
          img: `${pokemonConstants.urlImage}${pokemon.url?.split("/")[6]}.png`
        }
      })
      setPokemons(pokemonsData);
    });
  }, []);
  
  return pokemons;
}