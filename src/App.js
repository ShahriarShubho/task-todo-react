import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='home' component={Home}></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
