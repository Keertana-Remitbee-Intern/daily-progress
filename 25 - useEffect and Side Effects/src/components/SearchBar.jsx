function SearchBar({ city, setCity, onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;