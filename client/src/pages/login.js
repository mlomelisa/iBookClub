import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
import NavTabL from "../components/navTabL";
import NavTabs from "../components/NavTabs";
import Jumbotron from "../components/jumbotron";
import GoogleContainer from "./googleBooksContainer";
import Saved from "./saved.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default class Login extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  }

  responseFacebook = response => {
   // console.log(response);
   this.setState({
     isLoggedIn: true,
     userID: response.userID,
     name: response.name,
     email: response.email,
     picture: response.picture.data.url
   });
  };

  responseGoogle = response => {
    console.log(response);
   this.setState({
    isLoggedIn: true,
     userID: response.El,
     name: response.profileObj.name,
     email: response.profileObj.email,
     picture: response.profileObj.imageUrl
   });
  };

  componentClicked = () => console.log("clicked");


    handleClick = () => {
      useHistory.push("/search");
    }


  render() {
    let AuthContent;
 
    if (this.state.isLoggedIn) { 
      
      
     
      
      AuthContent = (
     
       
        <Router>
      <div>
        <NavTabs src={this.state.picture} name={this.state.name} />
        <Jumbotron />
        {/* <GoogleContainer /> */}
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/Search" component={GoogleContainer} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </div>
    </Router>
 
      //   <div style={{
      //     width: '400px',
      //     margin: 'auto',
      //     background: '#f4f4f4',
      //     padding: '20px'
      //   }} >
      //     <img src={this.state.picture} alt={this.state.name} />
      //     <h2>Welcome {this.state.name}</h2>
      //     Email: {this.state.email}
      //     <p>ID: {this.state.userID}</p>
         
      //   </div>
      )
    } else {
      AuthContent = (
        <div >
        <NavTabL />
        <div style={{
              marginLeft: '700px',
              marginTop: '100px'
            }} >
        <FacebookLogin
        appId="2617830041642662"
       // autoLoad={true}
        fields="name,email,picture"
        onClick={window.location.pathname === "/search"}
        callback={this.responseFacebook} />

        <GoogleLogin
        clientId={'194250480637-a0c99ojc4kgkk7i8i4lta3f3rjr07daa.apps.googleusercontent.com'}
        buttonText="Login with Google"
        onClick={this.handleClick}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
         />
         </div>
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