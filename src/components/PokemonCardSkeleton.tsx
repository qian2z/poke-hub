import { Box, Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const PokemonCardSkeleton = () => (
  <Box sx={{ m: 1 }}>
    <Card variant="outlined" sx={{ borderRadius: "16px" }}>
      <CardMedia>
        <Skeleton variant="rectangular" sx={{ height: "300px" }} />
      </CardMedia>
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </CardContent>
    </Card>
  </Box>
);

export default PokemonCardSkeleton;
