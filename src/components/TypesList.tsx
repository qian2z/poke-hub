import useTypes from "../hooks/useTypes";
import { Typography } from "@mui/material";

const TypesList = () => {
  const { types, error, isLoading } = useTypes();

  if (error) return <Typography>Request Failed</Typography>;

  return (
    <ul>
      {types.map((type) => (
        <li key={type.name}>{type.name}</li>
      ))}
    </ul>
  );
};

export default TypesList;
