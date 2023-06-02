import { useEffect, useState } from "react";
import { pokemonConstants } from "../../Home/constants/pokemon.constan";
import { fetchPokemons } from "../fetchs/pokemons.fetch";
import type { pokemonShowHome, result } from "../models/pokemon.model";



export const useFetchPokemons = () => {

  const [pokemons, setPokemons] = useState<pokemonShowHome[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    fetchPokemons().then((pokemons) => {
      const pokemonsData = pokemons.results.map((pokemon: result) => {
        return {
          name: pokemon.name,
          img: `${pokemonConstants.urlImage}${pokemon.url?.split("/")[6]}.png`
        }
      })
      setPokemons(pokemonsData);
      setLoading(false);
    });
  }, []);
  
  return {pokemons, loading};
}