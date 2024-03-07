import React, { useState } from "react";

const LocationSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const apiKey = "";
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((result) => (
          <li key={result.place_id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSearch;
