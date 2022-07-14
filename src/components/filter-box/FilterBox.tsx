import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import ColorSelect from "../color-select/ColorSelect";
import MySelect from "../my-select/MySelect";
import SearchInput from "../search-input/SearchInput";
import "./filter-box.scss";

const colors = [
  { name: "red", hex: "#C9414D" },
  { name: "orange", hex: "#EC7F37" },
  { name: "yellow", hex: "#E7C335" },
  { name: "green", hex: "#4FA757" },
  { name: "blue", hex: "#1C9ACF" },
  { name: "purple", hex: "#8731c1" },
];

type Props = {};

type ShowType = {
  showCompleted: boolean;
  showDates: boolean;
};

const FilterBox = (props: Props) => {
  const [sort, setSort] = useState<string>("");
  const [showInfo, setShowInfo] = useState<ShowType>({
    showCompleted: false,
    showDates: true,
  });

  const toggleShowCompleted = () => {
    setShowInfo({ ...showInfo, showCompleted: !showInfo.showCompleted });
  };

  const toggleShowDates = () => {
    setShowInfo({ ...showInfo, showDates: !showInfo.showDates });
  };

  const selectSort = (sort: string) => {
    setSort(sort);
  };

  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  return (
    <div className="filterbox">
      <div className="filterbox__row">
        <div className="filterbox__search">
          <SearchInput />
        </div>
        <div className="filterbox__select">
          <MySelect
            onChange={selectSort}
            options={["name", "date created", "color"]}
          />
        </div>
      </div>
      <div className="filterbox__row">
        <div className="filterbox__checkboxes">
          <FormControlLabel
            label="Show completed"
            control={
              <Checkbox
                size="small"
                checked={showInfo.showCompleted}
                onChange={toggleShowCompleted}
              />
            }
          />
          <FormControlLabel
            label="Show dates"
            control={
              <Checkbox
                size="small"
                checked={showInfo.showDates}
                onChange={toggleShowDates}
              />
            }
          />
        </div>
        <ColorSelect
          colors={colors}
          onChange={setSelectedColors}
          selectedColors={selectedColors}
        />
      </div>
    </div>
  );
};

export default FilterBox;
