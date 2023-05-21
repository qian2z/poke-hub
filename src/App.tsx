import { Grid, Typography } from "@mui/material";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import TypesList from "./components/TypesList";
import { useState } from "react";

function App() {
  const [selectedType, setSelectedType] = useState("");
  return (
    <Grid container sx={{ rowGap: 3 }}>
      <Grid item mobile={12}>
        <Typography>
          <NavBar />
        </Typography>
      </Grid>
      <Grid
        item
        tablet={2}
        sx={{ display: { mobile: "none", tablet: "block", laptop: "block" } }}
      >
        <Typography>
          <TypesList
            onSelectType={(type) => setSelectedType(type)}
            selectedType={selectedType}
          />
        </Typography>
      </Grid>
      <Grid item tablet={10} mobile={12}>
        <PokemonGrid selectedType={selectedType} />
      </Grid>
    </Grid>
  );
}

export default App;
