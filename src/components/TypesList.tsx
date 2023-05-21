import useTypes from "../hooks/useTypes";
import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const TypesList = () => {
  const { types, error, isLoading } = useTypes();

  if (error) return <Typography>Request Failed</Typography>;
  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ mx: 3 }}>
      <List>
        {types.map((type) => (
          <ListItem disablePadding key={type.name}>
            <ListItemButton>
              <ListItemText
                sx={{ fontSize: "3rem" }}
                primary={
                  <Typography variant="body1" style={{ fontSize: "25px" }}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TypesList;
