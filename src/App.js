import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Accordian from "./components/Accordian";
import CheckBoxes from "./components/personalcareCheck";
import PersonalCare from "./components/personalcare";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Accordian />
        <CheckBoxes/>
        <PersonalCare/>
      </div>
    </Router>
  );
}

export default App;
