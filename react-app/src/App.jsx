import React from 'react';
import Home from "./Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter as Router,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/home" component={Home}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
