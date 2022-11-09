import React from "react";
import { FcSearch } from "react-icons/fc";

const Search = ({ searchItems }) => {
  return (
    <div>
      <form>
        <div className="recipe__search__container">
          <span>
            <FcSearch className="searchIcon" size={25} />
          </span>
          <input
            type="search"
            className="recipe__search"
            placeholder="Search recipe"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
gs
export default Search;


