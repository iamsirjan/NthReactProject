import React from "react";
import "./navbar.css";
import { IoSearch } from "react-icons/io5";
import { BiBell } from "react-icons/bi";

export default function NavbarComponent() {
  return (
    <>
      <div className="navbarcomponent">
        <div className="left-part">
          <div className="logo">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              width={100}
            />
          </div>
          <div className="text">
            <p>browse</p>
          </div>
          <div className="search">
            <IoSearch className="search-icon" color="#fff" />
            <input className="search-input" type="text" placeholder="search" />
          </div>
        </div>
        <div className="right-part">
          <div className="bell-icon">
            <BiBell color="#fff" />
          </div>

          <div className="user-image">
            <img src="https://thumbs.dreamstime.com/b/big-lion-lying-savannah-grass-landscape-characteristic-trees-plain-hills-background-35172905.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
