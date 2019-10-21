import React from "react";
import GoogleContainer from "./pages/googleBooksContainer.js";
import Saved from "./pages/saved.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/Search" component={GoogleContainer} />
          <Route exact path="/Saved" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  ) ;
}

export default App;

