import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useFetchPokemons } from "./hooks/pokemon.hook";


function Home() {

  const {pokemons, loading} = useFetchPokemons();

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && pokemons && (
        <div className="row">
          {pokemons.map((pokemon, key) => {
            return (
              <PokemonCard key={key} name={pokemon.name} img={pokemon.img} />
            )
          })}
        </div>
      )}
    </>
  );
}

export default Home;