import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SearchIconWrapper = ({ children }: Props) => {
  return (
    <Box
      component="div"
      sx={{
        py: 0,
        px: 2,
        height: 1,
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default SearchIconWrapper;
