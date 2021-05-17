import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import Content from "./components/Content";
import Homepage from "./components/homepage"


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/content">
              <Content />
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
