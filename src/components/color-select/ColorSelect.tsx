import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CircleIcon from "@mui/icons-material/Circle";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Props = {
  colors: { name: string; hex: string }[];
  onChange: Function;
  selectedColors: string[];
};

export default function ColorSelect({
  colors,
  onChange,
  selectedColors,
}: Props) {
  const handleChange = (event: SelectChangeEvent<typeof selectedColors>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    onChange(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="color-select-label">Colors</InputLabel>
        <Select
          labelId="color-select-label"
          multiple
          value={selectedColors}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {colors.map((color) => (
            <MenuItem key={color.name} value={color.hex}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  marginRight: "2px",
                  transform: "translateY(2px)",
                }}
              >
                <CircleIcon style={{ color: color.hex }} />
                <span>{color.name}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
