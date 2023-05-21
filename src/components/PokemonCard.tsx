import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../hooks/usePokemons";
import TypesChip from "./TypesChip";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Box sx={{ m: 1 }}>
      <Card variant="outlined" sx={{ borderRadius: "16px" }}>
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
      </Card>
    </Box>
  );
};

export default PokemonCard;
