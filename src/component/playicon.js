import React from 'react';
import "./playicon.css";
import {GrPlayFill} from "react-icons/gr";

const PlayIcon = () => {
    return (
        <div className="playicon-button">
            <button> < GrPlayFill className="icon-play"/> Play</button>
        </div>
    );
}
export default PlayIcon;