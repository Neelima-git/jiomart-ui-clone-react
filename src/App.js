import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Content from "./components/Content";


class App extends React.Component {
  render() {
    return (
      <Router>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="App">
          <Navbar />
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
