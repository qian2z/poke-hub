import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import SearchInput from "./SearchAppBar/SearchInput";

interface Props {
  onSearch: (inputValue: string) => void;
  searchedText: string;
  onClearType: () => void;
}

const NavBar = ({ onSearch, searchedText, onClearType }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="desktop">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AdbIcon sx={{ mr: 1, ml: 1 }} />
              <Typography
                variant="h5"
                component="h5"
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
            </Box>
            <SearchInput
              onSearch={onSearch}
              searchedText={searchedText}
              onClearType={onClearType}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
