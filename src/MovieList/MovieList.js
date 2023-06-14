import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./MovieList.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const searchBox = useSelector((state) => state.search.query);

  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  console.log(type);

  useEffect(() => {
    getData();
  }, [type, searchBox]);

  const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      setMovieList(data.results);
    }
  };

  const filteredMovieList = movieList.filter((movie) => {
    if (!searchBox) {
      return true; // No search query, include all movies
    } else {
      return movie.original_title
        .toLowerCase()
        .includes(searchBox.toLowerCase());
    }
  });

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {filteredMovieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
