import usePokemons from "../hooks/usePokemons";

const PokemonGrid = () => {
  const { pokemons, error } = usePokemons();

  if (error) return <p>Request Failed</p>;
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
            {pokemon.imageUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonGrid;
