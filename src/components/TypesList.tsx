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

interface Props {
  onSelectType: (type: string) => void;
  selectedType: string;
}

const TypesList = ({ onSelectType, selectedType }: Props) => {
  const { types, error, isLoading } = useTypes();

  if (error) return <Typography>Request Failed</Typography>;
  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ mx: 3 }}>
      <List>
        {types.map((type) => (
          <ListItem
            disablePadding
            key={type.name}
            sx={{
              backgroundColor:
                type.name === selectedType ? "#e3f2fd" : "inherit",
            }}
          >
            <ListItemButton onClick={() => onSelectType(type.name)}>
              <ListItemText
                sx={{ fontSize: "3rem" }}
                primary={
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "25px",
                      fontWeight:
                        type.name === selectedType ? "bold" : "normal",
                    }}
                  >
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
