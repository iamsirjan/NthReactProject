import React from "react";
import "./home.css";

export default function Home() {
  const description = {
    id: 1,
    image:
      "https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
    subtitle: "SERIES",
    title: "STRANGER THINGS",
  };

  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1598879722898-d55323f416c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" +
            ")",
          //   backgroundImage: `url("https://images.unsplash.com/photo-1598879722898-d55323f416c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="thumbnail-description">
          <div className="logo-container">
            <img src={description.image} />
            <h3> {description.subtitle}</h3>
          </div>
          <div className="main-title">
            <h1>{description.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
