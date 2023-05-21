import { Grid, Typography } from "@mui/material";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";

function App() {
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
        <Typography>Aside</Typography>
      </Grid>
      <Grid item tablet={10} mobile={12}>
        <PokemonGrid />
      </Grid>
    </Grid>
  );
}

export default App;
