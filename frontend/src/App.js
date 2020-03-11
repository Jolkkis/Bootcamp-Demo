import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from "./Components/Home"
import NavBar from "./Components/NavBar"

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component = "Home"/>
            <Route render = { () => "404 - Not Found!"}/>
         </Switch>
    </Router>  
  );
}

export default App;
