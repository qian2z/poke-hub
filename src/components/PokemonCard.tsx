import { CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../hooks/usePokemons";
import TypesChip from "./TypesChip";
import PokemonCardContainer from "./PokemonCardContainer";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <PokemonCardContainer>
      <CardMedia
        component="img"
        src={pokemon.imageUrl}
        title={pokemon.name}
        sx={{ objectFit: "cover", height: 350 }}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {pokemon.name}
        </Typography>
        <TypesChip type={pokemon.type} />
      </CardContent>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
