import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Accordian from "./components/Accordian";
import Filters from "./components/Filters";
import PersonalCare from "./components/PersonalCare";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Accordian />
        <Filters/>
        <PersonalCare/>
      </div>
    </Router>
  );
}

export default App;
