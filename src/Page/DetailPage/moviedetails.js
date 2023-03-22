import React from "react";
import "./moviedetails.css";
import { RxStarFilled } from "react-icons/rx";
import ImageThumnailsComponent from "../../component/imagecomponent";
import MovieTabs from "./movietab";

const MovieDetail = ({
  title,
  rating,
  releaseyear,
  duration,
  viewers,
  intro,
  starting,
  createdby,
  genre,
}) => {
  const movies = [
    {
      id: 1,
      image: "/images/image2.jpg",
      moviename: "Captain America:Civil War",
    },
    {
      id: 2,
      image: "/images/image3.jpg",
      moviename: "Avenger: Age of Ultron",
    },
    {
      id: 3,
      image: "/images/image4.jpg",
      moviename: "The Avengers",
    },
  ];
  return (
    <div className="moviedetails-container">
      <div className="movie-poster">
        <img src="/images/image1.jpg" alt=" " />
      </div>

      <div className="moviesdetails-info">
        <div className="moviename-rating">
          <p className="moviename-big">{title}</p>
          <p classsName="rating-star">
            {rating}
            <RxStarFilled color="yellow" />
          </p>
        </div>
        <div className="moviedetails-time">
          <ul>
            <li>
              {releaseyear} <span> | </span>
            </li>
            <li>
              {duration} <span> | </span>
            </li>
            <li> {viewers} </li>
          </ul>
        </div>

        {/* //detail page navbar */}
        <div className="navbar-detailpage">
          <MovieTabs
            intro={intro}
            starting={starting}
            createdby={createdby}
            genre={genre}
          />
        </div>

        <div className="movie-related">
          <p>Related Movies</p>
        </div>

        <div className="moviedetails-previous">
          {movies.map((data, i) => (
            <ImageThumnailsComponent
              key={i}
              image={data.image}
              moviename={data.moviename}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
