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



export default class Login extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  }

  
// Google Response, send user object to DB
  responseGoogle = response => { 
    
      API.updateUser({ 
         userID: response.El,
          name: response.profileObj.name,
          email: response.profileObj.email,
          picture: response.profileObj.imageUrl
       })
   
    return this.signup(response);
  }


 signup(response) {   
      this.setState({
      isLoggedIn: true,
     userID: response.El,
     name: response.profileObj.name,
     email: response.profileObj.email,
     picture: response.profileObj.imageUrl
   });
}

 
  render() {
    console.log(this.state.userID)
    let AuthContent;
 
    if (this.state.isLoggedIn) { 
      AuthContent = (     
        <Router>
      <div>
        <NavTabs src={this.state.picture} name={this.state.name} userID={this.state.userID}/>
        <Jumbotron />
        <Switch>
          <Route exact path={`/search/${this.state.userID}`} render={(props) => <GoogleContainer {...props} userID={this.state.userID}/>} />
          <Route exact path={`/saved/:${this.state.userID}`} render={(props) => <Saved {...props} userID={this.state.userID}/>} />
        </Switch>
      </div>
    </Router>
       )
    } else {
      AuthContent = (
        <div >
        <NavTabL />
        <div style={{
              marginLeft: '700px',
              marginTop: '100px'
            }} >
        <GoogleLogin
        clientId={'194250480637-a0c99ojc4kgkk7i8i4lta3f3rjr07daa.apps.googleusercontent.com'}
        buttonText="Login with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
         />
         </div>
         <Router>
        <Switch>
          <Route exact path="/search" component={Login} />
          <Route exact path="/saved" component={Login} />
        </Switch>
       </Router>
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