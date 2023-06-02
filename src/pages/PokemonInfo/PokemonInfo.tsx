import { useParams } from "react-router-dom";
import { useFetchPokemon } from "./hooks/pokemon.hook";
import { pokemonConstants } from "./constants/pokemon.constant";


function PokemonInfo() {
  const { name } = useParams<{ name: string }>();

  const {pokemon, loading} = useFetchPokemon(name as string)

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && pokemon && (
        <div className="text-center">
          <h1 className="display-3">{pokemon?.name.toUpperCase()}</h1>
          <img src={`${pokemonConstants.urlImage}${pokemon?.id}.png`} alt={pokemon?.name} loading="lazy" />
        </div>
      )}    
    </>
  );
}

export default PokemonInfo;