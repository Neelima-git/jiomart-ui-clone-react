import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Cart from "./components/cart";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Cart/>
      </div>
    </Router>
  );
}

export default App;
