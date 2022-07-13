import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import "./search-input.scss";

const SearchInput = () => {
  return (
    <TextField
      size="medium"
      label={
        <div className="search-input-label">
          <Search className="search-input-label__icon" />
          <span className="search-input-label__text">Search todos</span>
        </div>
      }
    />
  );
};

export default SearchInput;
