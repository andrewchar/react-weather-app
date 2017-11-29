import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="container city-form">
      <div className="form-group">
        <form className="form-inline" onSubmit={props.submitForm}>
          <input
            placeholder="Search your city!"
            className="form-control"
            value={props.term}
            onChange={props.onInputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
