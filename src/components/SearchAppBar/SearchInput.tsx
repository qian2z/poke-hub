import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import SearchIcon from "@mui/icons-material/Search";
import StyledInputBase from "./StyledInputBase";

const SearchInput = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchInput;
