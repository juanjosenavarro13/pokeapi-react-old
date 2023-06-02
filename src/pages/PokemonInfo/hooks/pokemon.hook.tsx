import { useEffect, useState } from "react";
import { pokemonFetch } from "../fetch/pokemon.fetch";
import { pokemon } from "../models/pokemon.model";



export const useFetchPokemon = (name:string) => {

  const [pokemon, setPokemon] = useState<pokemon>();

  useEffect(() => {

    pokemonFetch(name).then((response) => {
      setPokemon(response);
    });

  }, [name]);
  
  return pokemon;
}