import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  console.log(type);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      setMovieList(data.results);
    }
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
