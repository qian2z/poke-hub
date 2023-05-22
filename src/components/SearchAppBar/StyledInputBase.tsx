import { InputBase, styled } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("mobile")]: {
      width: "10ch",
    },
    [theme.breakpoints.up("tablet")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
    [theme.breakpoints.up("laptop")]: {
      width: "60ch",
      "&:focus": {
        width: "65ch",
      },
    },
  },
}));

export default StyledInputBase;
