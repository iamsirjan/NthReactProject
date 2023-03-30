import React, { useEffect } from "react";
import Button from "../../component/button/button";
import "./home.css";
import { TbPlayerPlayFilled } from "react-icons/tb";
import ImageThumnailsComponent from "../../component/imagecomponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useDispatch, useSelector } from "react-redux";
import { GetAllMovieList } from "../../slice/movie.slice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllMovieList({}));
  }, []);

  const movieList = useSelector((state) => state?.movie);
  console.log(movieList);

  return (
    <div className="home">
      {movieList.data?.data
        ?.filter((data) => data.isPoster === true)
        .map((description) => (
          <div
            className="home-container"
            style={{
              backgroundImage: `url(${description?.image})`,
            }}
          >
            <div className="thumbnail-description">
              <div className="logo-container">
                <img src="https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" />
                <h3> {description.isSeries ? "Series" : "Movie"}</h3>
              </div>
              <div className="main-title">
                <h1>{description.name}</h1>
                <h4>{description.description}</h4>
              </div>
              <div className="button-component">
                <Button
                  title="Play"
                  background="white"
                  width="150px"
                  marginRight="15px"
                  lefticon={<TbPlayerPlayFilled />}
                />
                <Button
                  title="More Info"
                  background="grey"
                  color="white"
                  width="150px"
                />
              </div>
            </div>
          </div>
        ))}
      <div className="card-container">
        <div className="card-container-title">
          <h3>Trending now </h3>
        </div>

        <div className="card-component">
          <Splide
            aria-label="My Favorite Images"
            options={{
              width: "100%",

              perPage: 8,

              type: "loop",
              pagination: false,
              perMove: 1,
              breakpoints: {
                640: {
                  perPage: 1,
                },
                768: {
                  perPage: 2,
                },
                1024: {
                  perPage: 3,
                },
                1440: {
                  perPage: 5,
                },
              },
            }}
          >
            {movieList.data?.data
              ?.filter((data) => data.isPoster === false)
              .map((data) => (
                <SplideSlide>
                  <ImageThumnailsComponent image={data.image} />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}
