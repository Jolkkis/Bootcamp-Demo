import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Osto from "./Components/Cars";
import Myynti from "./Components/AddCar";

function App() {
  return (
    <Router>
        <NavBar/>
        <Header/>
        <Switch>
            <Route exact path="/" component = {Home}/>
            <Route path = "/osto"><Osto/></Route>
            <Route path = "/myynti"><Myynti/></Route>
            <Route render = { () => "404 - Not Found!"}/>
         </Switch>
         <Footer/>
    </Router>  
  );
}

export default App;
