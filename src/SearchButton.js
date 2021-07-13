import React from 'react';
import { FcSearch } from 'react-icons/fc';




function SearchButton({ search, setSearch }) {

    const handleChange = e => {
        setSearch(e.target.value);
    }
    return (
      <div className="Input">
        <form>
          <FcSearch size="25px" className="fcSearch" />

          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Search term..."
          />
        </form>
      </div>
    );
}
export default SearchButton;