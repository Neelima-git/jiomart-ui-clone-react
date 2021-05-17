import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import PersonalCare from "./components/PersonalCare";
import SideBar from "./components/SideBar";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SideBar/>
        <PersonalCare/>
      </div>
    </Router>
  );
}

export default App;
