import { CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../hooks/usePokemons";
import TypesChip from "./TypesChip";
import PokemonCardContainer from "./PokemonCardContainer";

interface Props {
  pokemon: Pokemon | null;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <PokemonCardContainer>
      <CardMedia
        component="img"
        src={pokemon?.imageUrl}
        title={pokemon?.name}
        sx={{ objectFit: "cover", height: 0.7, width: 1 }}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {pokemon?.name}
        </Typography>
        <TypesChip type={pokemon?.type || ""} />
      </CardContent>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
