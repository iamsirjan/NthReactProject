import React from 'react';
import "./imagecomponent.css";


const ImageThumnailsComponent = ({image, moviename}) => {
    return (
        <div className="movie-cards">
            <div ClassName="image-card">
                <img width="250" heigth="200" src={image} alt=" "/>
            </div>

            <div className="movie-name">
                <p>{moviename}</p>
            </div>

        </div>
    );
}
export default ImageThumnailsComponent;