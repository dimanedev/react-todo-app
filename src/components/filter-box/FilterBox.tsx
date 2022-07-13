import SearchInput from "../search-input/SearchInput";
import "./filter-box.scss";

type Props = {};

const FilterBox = (props: Props) => {
  return (
    <div className="filterbox">
      <div className="filterbox__row">
        <div className="filterbox__search">
          <SearchInput />
        </div>
        <select className="filterbox__select">
          <option value="v" disabled>
            sort by
          </option>
          <option value="v">name</option>
          <option value="v">date created</option>
        </select>
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
