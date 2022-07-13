import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

type Props = {
  onChange: Function;
  options: string[];
};

const MySelect = ({ onChange, options }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: any) => {
    const value: string = event.target.value;
    onChange(value);
    setValue(value);
  };

  const capitalize = (text: string): string => {
    if (text.length === 0) return "";
    let newText: string = text[0].toUpperCase();
    newText += text.slice(1);

    return newText;
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="todos-sort-select-label">Sort by</InputLabel>
      <Select
        labelId="todos-sort-select-label"
        value={value}
        label="Sort by"
        size="medium"
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {capitalize(option)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
