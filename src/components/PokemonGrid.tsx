import { Box, Typography } from "@mui/material";
import usePokemons from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";

const PokemonGrid = () => {
  const { pokemons, error } = usePokemons();

  if (error) return <Typography>Request Failed</Typography>;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          mobile: "repeat(1, 1fr)",
          tablet: "repeat(2, 1fr)",
          laptop: "repeat(3, 1fr)",
          desktop: "repeat(4, 1fr)",
        },
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
      ))}
    </Box>
  );
};

export default PokemonGrid;
