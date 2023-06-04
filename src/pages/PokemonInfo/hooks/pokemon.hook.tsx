/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { abilitiesFetch, pokemonFetch } from "../fetch/pokemon.fetch";
import { pokemon } from "../models/pokemon.model";



export const useFetchPokemon = (name:string) => {

  const [pokemon, setPokemon] = useState<pokemon>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    pokemonFetch(name).then((response) => {
      setPokemon(response);
      abilitiesFetch(response.abilities).then((abilities) => {
        setPokemon((prevState:any) => {
          return { ...prevState, abilities: abilities };
        });
      });
    }).finally(() => {
      setLoading(false);
    });

  }, [name]);
  
  return { pokemon, loading};
}