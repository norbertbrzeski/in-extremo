import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

import Home from './Home';
import GIT from './components/GIT';
import HTML from "./components/HTML";
import CSS from './components/CSS';
import JavaScript from './components/JavaScript';
import ReactJs from './components/ReactJs'
import './App.css'
import $ from 'jquery'
import 'animate.css'

class HomePage extends React.Component {
    render() {
        return (

            <Router>
        <div  id="container">
            <div className='animated fadeIn header-fade' id="main-header">in-extremo </div>
            <div id="body">
            <ul className="header animated fadeIn" >
                <li><NavLink exact to="/" activeClassName="active" >in-extremo</NavLink></li>
                <li><NavLink to="/GIT" activeClassName="active">GIT  </NavLink></li>
                <li><NavLink to="/HTML" activeClassName="active">HTML</NavLink></li>
                <li><NavLink to="/CSS" activeClassName="active">CSS</NavLink></li>
                <li><NavLink to="/JavaScript" activeClassName="active">JavaScript</NavLink></li>
                <li><NavLink to="/ReactJs" activeClassName="active">React</NavLink></li>
            </ul>

                <hr/>
            <div className="content  ">
            <Route path="/GIT" component={GIT}/>
            <Route path="/HTML" component={HTML}/>
            <Route path="/CSS" component={CSS}/>
            <Route path="/JavaScript" component={JavaScript}/>
            <Route path="/ReactJs" component={ReactJs}/>
            </div>
            </div>
            <Route exact path="/" component={Home}/>
            <button  id="myBtn">Top</button>
        </div>
    </Router>
)}
    componentDidMount() {
        $("#myBtn").hide().click(function(){
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });


            $(document).scroll(function() {
                let y = $(this).scrollTop();
                if (y > 100) {
                    $('#myBtn').fadeIn();
                } else {
                    $('#myBtn').fadeOut();
                }
            });
    }
}
    export default HomePage;