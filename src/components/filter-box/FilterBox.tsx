import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import MySelect from "../my-select/MySelect";
import SearchInput from "../search-input/SearchInput";
import "./filter-box.scss";

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
        <select className="filterbox__select">
          <option value="v" disabled>
            color:
          </option>
          <option value="v">color1</option>
          <option value="v">color2</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBox;
