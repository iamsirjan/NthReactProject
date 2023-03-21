import React from 'react';
import "./detailnavbar.css";
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom';

const DetailPageNavBar = () => {
    return (
       <div className="detailpage-navbarcontainer">
        <Navbar bg="light" expand="lg">
            <ul className='navbar-container'>
            <Link to ="/">
                <li>OVERVIEW</li>
            </Link>
            <Link to ="/trailers">
                <li>TRAILERS & MORE</li>
            </Link>
            <Link to ="/more">
                <li>MORE LIKE THIS</li>
            </Link> 
            <Link to ="/details">
                <li>DETAILS</li>
            </Link>         
            </ul>
        </Navbar>
       </div>

    );
}

export default DetailPageNavBar;