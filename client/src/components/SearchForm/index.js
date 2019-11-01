import React from "react";

function SearchForm(props) {
  return (
    <form class='my-4'>
      <div className="form-row">
        {/* <label htmlFor="search" class="sr-only">Search:</label> */}
        <div class="col"> <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Book"
          id="search"
        />
        </div>
        <div class="row">
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        </div>
       
        
      </div>
    </form>
  );
}

export default SearchForm;
