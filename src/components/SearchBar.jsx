import "./SearchBar.scss";

function SearchBar({ onClickEdit }) {
  return (
    <>
      <div className="search-bar" alt="search">
        <input type="text" placeholder="Search by name or location" />
        <button className="search-button"></button>
      </div>
    </>
  );
}

export default SearchBar;
