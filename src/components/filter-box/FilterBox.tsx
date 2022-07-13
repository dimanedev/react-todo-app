import { useState } from "react";
import MySelect from "../my-select/MySelect";
import SearchInput from "../search-input/SearchInput";
import "./filter-box.scss";

type Props = {};

const FilterBox = (props: Props) => {
  const [sort, setSort] = useState<string>("");

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
          <div className="checkbox">
            <input
              className="checkbox__btn"
              type="checkbox"
              value="show completed"
              id="show-completed-checkbox"
            />
            <label htmlFor="show-completed-checkbox">show completed</label>
          </div>
          <div className="checkbox">
            <input
              className="checkbox__btn"
              type="checkbox"
              value="show completed"
              id="show-dates-checkbox"
            />
            <label htmlFor="show-dates-checkbox">show dates</label>
          </div>
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
