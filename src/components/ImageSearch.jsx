import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.prevenetDefault();
    searchText(text);
  };

  return (
    <div>
      <div className="input-group mb-3 my-4 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Image Here..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn btn-success text-white"
          type="button"
          id="button-addon1"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ImageSearch;
