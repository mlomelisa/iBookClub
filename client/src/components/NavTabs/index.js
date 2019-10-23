import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.css";

function NavTabs(props) {
  return (
    <div>
  <nav className="navbar navbar-inverse">
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Google Books
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/search/${props.userID}`}
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/saved/${props.userID}`}
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/logout"
          className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
        >
          LogOut
        </Link>
      </li>
    </ul>
   
    <ul>
      <li className="nav-item">
        <p className="title">{props.name} <img src={props.src}></img></p>
       
      </li>
    </ul>
</nav>
</div>
  );
}

export default NavTabs;