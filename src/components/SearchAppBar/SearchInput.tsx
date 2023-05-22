import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import SearchIcon from "@mui/icons-material/Search";
import StyledInputBase from "./StyledInputBase";
import { useRef, useState } from "react";

interface Props {
  onSearch: (inputValue: string) => void;
  searchedText: string;
  onClearType: () => void;
}

const SearchInput = ({ onSearch, onClearType }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onClearType();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputValue);
        onSearch(inputValue);
        setInputValue("");
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Name or ID"
          inputProps={{ "aria-label": "search" }}
          inputRef={ref}
          value={inputValue}
          onChange={handleInputChange}
        />
      </Search>
    </form>
  );
};

export default SearchInput;
