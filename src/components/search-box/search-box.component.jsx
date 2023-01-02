import "./search-box.styles.css";

const SearchBox = ({handleChange, placeHolder}) => {
  return (
    <input className="search-box" type="search" placeholder={placeHolder} onChange={handleChange} />
  );
};

export default SearchBox;
