import { useParams } from "react-router-dom";
import { pokemonConstants } from "./constants/pokemon.constant";
import { useFetchPokemon } from "./hooks/pokemon.hook";



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

          <h2 className="display-6">Estadisticas</h2>
          <ul className="list-group">
            {pokemon?.stats.map((stat, index) => {
              return (
                <li key={index} className="list-group-item">
                  {stat.stat.name}: {stat.base_stat}
                </li>
              );
            })}
          </ul>

          <h2 className="display-6">Habilidades</h2>
          <ul className="list-group">
            {pokemon?.abilities.map((ability, index) => {
              return (
                <li key={index} className="list-group-item">
                  {ability.names?.filter((name) => name.language.name === "es").map((name) => name.name)}
                </li>
              );
            })}
          </ul>
        </div>
      )}    
    </>
  );
}

export default PokemonInfo;