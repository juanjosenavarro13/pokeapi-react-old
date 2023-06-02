import { useParams } from "react-router-dom";
import { useFetchPokemon } from "./hooks/pokemon.hook";


function PokemonInfo() {
  const { name } = useParams<{ name: string }>();

  const pokemon = useFetchPokemon(name as string)

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <h1>{pokemon?.name}</h1>
    </div>
  );
}

export default PokemonInfo;