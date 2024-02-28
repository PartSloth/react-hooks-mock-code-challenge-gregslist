import React, {useState} from "react";

function Search({onSearchSubmit}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(search);
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={event => setSearch(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
