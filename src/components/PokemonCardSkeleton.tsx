import { CardContent, CardMedia, Skeleton } from "@mui/material";
import PokemonCardContainer from "./PokemonCardContainer";

const PokemonCardSkeleton = () => {
  return (
    <PokemonCardContainer>
      <CardMedia>
        <Skeleton variant="rectangular" sx={{ height: "300px" }} />
      </CardMedia>
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </CardContent>
    </PokemonCardContainer>
  );
};

export default PokemonCardSkeleton;
