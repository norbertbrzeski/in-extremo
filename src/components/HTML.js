import React, { Component } from "react";
import HTMLImg from '../images/html-128.png'



class HTML extends Component {
    render() {
        return (
            <div className='html-page animated fadeIn'>
                <img src={HTMLImg} className="logos" alt="logo" />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa dolores
                   illum ipsa minus nihil nulla, pariatur tempore temporibus? Provident.</p>
            </div>
        );
    }
}

export default HTML;