import { Box, Typography } from "@mui/material";
import usePokemons from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import useTypePokemons from "../hooks/useTypePokemons";
import useSearchedPokemon from "../hooks/useSearchedPokemon";

interface Props {
  selectedType: string;
  searchedText: string;
}

const PokemonGrid = ({ selectedType, searchedText }: Props) => {
  const { pokemons, error, isLoading } = usePokemons();
  const { typePokemons, tIsLoading } = useTypePokemons(selectedType);
  const { pokemon } = useSearchedPokemon(searchedText.toLowerCase());

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Typography>Request Failed</Typography>;

  return (
    <Box
      sx={{
        mr: { mobile: 0, tablet: 4 },
        display: "grid",
        gridTemplateColumns: {
          mobile: "repeat(1, 1fr)",
          tablet: "repeat(2, 1fr)",
          laptop: "repeat(3, 1fr)",
          desktop: "repeat(4, 1fr)",
        },
      }}
    >
      {isLoading ||
        (tIsLoading &&
          skeletons.map((skeleton) => <PokemonCardSkeleton key={skeleton} />))}
      {selectedType === "" &&
        searchedText === "" &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      {selectedType !== "" &&
        typePokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      {searchedText !== "" && (
        <PokemonCard key={pokemon?.id} pokemon={pokemon || null}></PokemonCard>
      )}
    </Box>
  );
};

export default PokemonGrid;
