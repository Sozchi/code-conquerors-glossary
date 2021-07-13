import React from 'react';
import { FcSearch } from 'react-icons/fc';




function SearchButton({ search, setSearch }) {

    const handleChange = e => {
        setSearch(e.target.value);
    }
    return (
      <div className="Input">
        <form>
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Search term..."
          />
          <FcSearch size="25px" className="fcSearch" />
        </form>
      </div>
    );
}
export default SearchButton;