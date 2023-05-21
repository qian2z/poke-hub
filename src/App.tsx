import { Grid, Typography } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid container>
      <Grid item mobile={12}>
        <Typography>
          <NavBar />
        </Typography>
      </Grid>
      <Grid
        item
        tablet={3}
        sx={{ display: { mobile: "none", tablet: "block", laptop: "block" } }}
      >
        <Typography>Aside</Typography>
      </Grid>
      <Grid item tablet={9} mobile={12}>
        <Typography>Main</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
