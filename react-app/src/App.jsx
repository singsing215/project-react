import React from 'react';
import Home from "./Home";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Test2 from "./pages/Test2";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Redirect from='/app' to='/home' /> */}
        <Route path="/home" component={Home}></Route>
        <Route path="/browse" component={Browse}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/test2" component={Test2}></Route>
      </Router>
    </div>
  );
}

export default App;
