import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <section id="search-bar">
      <h1>Believe in Finding it</h1>
      <h3>Search for the property you are looking for</h3>

      <form className="search-form">
        {/* Location Filter*/}
        <label>Postcode area</label><br/>
        <input
          type="search"
          placeholder="e.g. 00300,Colpetty"
          value={searchTerm.location}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, location: e.target.value })
          }
        />
        

        {/* Property Type Filter*/}
        <label>Property Type</label><br/>
        <select
          className="sproperty-select-field"
          value={searchTerm.type}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, type: e.target.value })
          }
        >
          <option value="">Any</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>

        </select>
        

        {/* Bedrooms Filter*/}
        <label>Minimum Bedrooms Requirement</label><br/>
        <select
          value={searchTerm.bedrooms}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, bedrooms: e.target.value })
          }
        >
          <option value="">No preferences</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <br/><br/>

        {/* Price Range Filter */}
        <label>Price Range (Rs)</label><br/>
        <input
          type="number"
          placeholder="Min"
          value={searchTerm.minPrice}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, minPrice: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max"
          value={searchTerm.maxPrice}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, maxPrice: e.target.value })
          }
        />
        <br/><br/>

        {/* Year Filter */}
        <label>Show properties Added after</label><br/>
        <select
          value={searchTerm.year}
          onChange={(e) =>
            setSearchTerm({ ...searchTerm, year: e.target.value })
          }
        >
          <option value="">All Years</option>
          <option value="2024">After 2024</option>
          <option value="2023">After 2023</option>
          <option value="2022">After 2022</option>
        </select>
        <br/><br/>

        <button type="button" className="search-button">Search</button>
      </form>
    </section>
  );
};

export default SearchBar;

