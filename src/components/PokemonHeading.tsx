import { Box, IconButton, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  selectedType: string;
  searchedText: string;
  onClear: () => void;
}

const PokemonHeading = ({ selectedType, searchedText, onClear }: Props) => {
  const normalHeading = `${
    selectedType.charAt(0).toUpperCase() + selectedType.slice(1) || ""
  } Pokemons`;
  const searchHeading = `Search '${searchedText}'`;
  const heading = (
    searchedText === "" ? normalHeading : searchHeading
  ).toUpperCase();

  const setButton = selectedType === "" && searchedText === "" ? false : true;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: { mobile: "center", tablet: "flex-start" },
      }}
    >
      <CatchingPokemonIcon
        sx={{ fontSize: "30px", ml: 1.2, color: "#616161" }}
      />
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontSize: {
            mobile: "28px",
            tablet: "33px",
            laptop: "40px",
            desktop: "50px",
          },
          fontWeight: 700,
          color: "#616161",
          textDecoration: "none",
          p: 1.2,
        }}
      >
        {heading}
      </Typography>
      {setButton && (
        <IconButton aria-label="delete" onClick={onClear}>
          <ClearIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default PokemonHeading;
