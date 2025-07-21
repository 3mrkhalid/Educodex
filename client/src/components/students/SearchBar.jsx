import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <img src={assets.search_icon} alt="search_icon" className="search-icon" />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Find your next lesson..."
        className="search-input"
        value={input}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
