import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Fruits from "./components/Fruits";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Fruits/>
     
      
      </div>
    </Router>
  );
}

export default App;
