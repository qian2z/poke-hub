import { Chip } from "@mui/material";

interface Props {
  type: string;
}

const TypesChip = ({ type }: Props) => {
  return (
    <Chip
      label={type}
      color="info"
      variant="filled"
      sx={{ fontWeight: "bold" }}
    />
  );
};

export default TypesChip;
