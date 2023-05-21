import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="desktop">
        <Toolbar disableGutters>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POKÉHUB
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
