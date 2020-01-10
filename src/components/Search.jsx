import React from "react";

const SearchBar = props => {
  const { onChange, onSubmit } = props;
  return (
    <div className="form-search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search"
          name="searchBar"
          onChange={onChange}
        />
        <button type="submit">Search!</button>
      </form>
    </div>
  );
};

export default SearchBar;
