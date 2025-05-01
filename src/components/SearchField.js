import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ value, onChange }) => {
  return (
    <TextField
      placeholder="Пошук за заголовком"
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "100%",
      }}
    />
  );
};

export default SearchField;
