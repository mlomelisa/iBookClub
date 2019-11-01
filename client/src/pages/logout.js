import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import NavTabL from "../components/navTabL";
import NavTabs from "../components/NavTabs";
import Jumbotron from "../components/jumbotron";
import GoogleContainer from "./googleBooksContainer";
import Saved from "./saved.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../utils/API";


export default class Logout extends Component {

render() {
    console.log(this.state.userID)
    console.log("this is the logout page!!!")
    let AuthContent;
 
    if (this.state.isLoggedIn) { 
      AuthContent = (     
        <Router>
      <div>
        <NavTabs src={this.state.picture} name={this.state.name} userID={this.state.userID}/>
       <h2>Still Logged in!</h2>
      </div>
    </Router>
       )
    } else {
      AuthContent = (
        <div >
            <NavTabL/>
        <h2>Logged Out.</h2>
        </div>
      );
    }
 
    return (
      <div>
        {AuthContent}
      </div>
    )
  }
}