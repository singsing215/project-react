import React from 'react';
import Home from "./Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
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
        <Route path="/test1" component={Test1}></Route>
        <Route path="/test2" component={Test2}></Route>
      </Router>
    </div>
  );
}

export default App;
