import "./SearchBar.scss";

function SearchBar({ handleChange, filter }) {
  return (
    <>
      <div className="search-bar" alt="search">
        <input
          type="text"
          placeholder="Search by name or location"
          onChange={handleChange}
          value={filter}
        />
        <button
          type="submit"
          className="search-button"
          onSubmit={handleChange}
        ></button>
      </div>
    </>
  );
}

export default SearchBar;
