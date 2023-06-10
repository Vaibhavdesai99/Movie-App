import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      setPopularMovies(data.results);
    }
  };

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <div key={movie.id} className="posterImages">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt="img"
              />
            </Link>
            <div className="PosterImage_Overlay">
              <div className="posterImageTitle">
                {movie ? movie.original_title : ""}
              </div>
              <div className="poster" id="mages_runTime">
                {movie ? movie.releaase_date : ""}
                <span className="poster_img_Rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="posterimage_description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
