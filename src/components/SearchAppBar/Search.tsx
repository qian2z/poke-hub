import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Search = ({ children }: Props) => {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        backgroundColor: alpha("#fafafa", 0.15),
        "&:hover": {
          backgroundColor: alpha("#fafafa", 0.25),
        },
        ml: { mobile: 1, tablet: 0 },
        mr: 1.5,
        width: { mobile: "auto", tablet: 0.7 },
      }}
    >
      {children}
    </Box>
  );
};

export default Search;
