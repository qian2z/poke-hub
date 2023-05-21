import { Box, Card } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PokemonCardContainer = ({ children }: Props) => {
  return (
    <Box sx={{ m: 1 }}>
      <Card variant="outlined" sx={{ borderRadius: "16px" }}>
        {children}
      </Card>
    </Box>
  );
};

export default PokemonCardContainer;
