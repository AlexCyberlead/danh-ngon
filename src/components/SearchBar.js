import React, { useState } from "react";

export default function SearchBar({ quotes, setFilteredQuotes }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = quotes.filter((quote) =>
        quote.author.toLowerCase().includes(value.toLowerCase()) ||
        quote.tag.toLowerCase().includes(value.toLowerCase()) ||
        quote.year.toLowerCase().includes(value.toLowerCase()) ||
        quote.quote.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    handleSearch(suggestion);
  };

  const handleSearch = (query) => {
    const filtered = quotes.filter((quote) =>
      quote.author.toLowerCase().includes(query.toLowerCase()) ||
      quote.tag.toLowerCase().includes(query.toLowerCase()) ||
      quote.year.toLowerCase().includes(query.toLowerCase()) ||
      quote.quote.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredQuotes(filtered);
  };

  return (
    <div className="search-bar input-group mb-3 relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Tìm kiếm..."
        className="form-control"
      />
      <button onClick={() => handleSearch(query)} className="btn btn-primary">Tìm</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list list-group position-absolute w-100">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelect(suggestion.quote)} className="suggestion-item list-group-item list-group-item-action">
              {suggestion.quote}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
