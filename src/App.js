import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import './App.css'


const BasicExample = () => (
    <Router>
        <div  id="container">
            <div id="main-header">in-extremo Norbert Brzeski</div>

            <div id="body">
            <ul className="header" >
                <li><NavLink exact to="/" activeClassName="active" >in-extremo</NavLink></li>
                <li><NavLink to="/Stuff" activeClassName="active">Topics  </NavLink></li>
                <li><NavLink  to="/Contact" activeClassName="active">Topics</NavLink></li>
            </ul>



                <hr/>
            <div className="content">

            <Route exact path="/" component={Home}/>
            <Route path="/Stuff" component={Stuff}/>
            <Route path="/Contact" component={Contact}/>
            </div>
            </div>



        </div>
    </Router>
);


export default BasicExample