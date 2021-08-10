import React, { useState } from "react";
import MovieCard from "./MovieCard";
const API_KEY = "74d4905bc05234f8f2f718d62b3169fe";
const Add = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else if (data.results === "") {
          alert("No results found");
        } else {
          setMovies([]);
        }
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          {movies.length === 0 && (
            <div>No movies were found , Plz Search a Correct One</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
