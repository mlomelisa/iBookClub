import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

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

  render() {
    let AuthContent;

    if (this.state.isLoggedIn) {
      AuthContent = (
        <div style={{
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px'
        }} >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
          <p>ID: {this.state.userID}</p>
         
        </div>
      )
    } else {
      AuthContent = (
        <div>
        <FacebookLogin
        appId="2617830041642662"
       // autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />

        <GoogleLogin
        clientId={'194250480637-a0c99ojc4kgkk7i8i4lta3f3rjr07daa.apps.googleusercontent.com'}
        buttonText="Login with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
         />
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