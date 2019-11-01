import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.css";

function NavTabs(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light transparent">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="btn btn-link">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div class="collapse navbar-collapse navbar-custom" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Google Books
          </Link>
          </li>
          <li class="nav-item">
          <Link to={`/search/${props.userID}`}
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
          </li>
          <li class="nav-item">
          <Link
          to={`/saved/${props.userID}`}
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        >
          Saved Books
        </Link>
          </li>
          <li class="nav-item">
        <Link
          to="/logout"
          className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
        >
          Log Out
        </Link>
      </li>
      {/* This is the user profile information */}
        </ul>
       <ul class="navbar-nav mt-2 mt-lg-0"> 
       <li class="nav-item">
       <div class="profile-image">
        <img id="profileImage" class="profile-image" src={props.src}></img>
        </div>
        <div class="profile-info">
          <p class="title"><small>Welcome, </small>
          <br/>{props.name} !</p>
        </div>
      
        
       
      </li>
       </ul>
        </div>
    
      
       </div> 

      
    </nav>
  </div>
  );
}

export default NavTabs;