import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Content from "./components/Content";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "personal_care",
      personal_care: {
        products: [
            {id: "p1", name: "Bathing Bars & Soaps"},
            {id: "p2", name: "Toothpaste"},
            {id: "p3", name: "Shampoo & Conditioner"}
        ],
        brands: [
            {id: "b1", name: "Colgate"},
            {id: "b2", name: "Sebamed"},
            {id: "b3", name: "Nivea"}
        ]
      }
    }
  }

  render() {
    return (
      <Router>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="App">
          <Navbar />
          <Content content={this.state[this.state.category]}/>
        </div>
      </Router>
    );
  }
}

export default App;
