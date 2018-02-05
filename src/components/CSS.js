import React, { Component } from "react";
import CSSImg from '../images/css-im.png'




class CSS extends Component {
    render() {
        return (
            <div className='css-page animated fadeIn   '>
                <img src={CSSImg} className="logos" alt="logo" />

                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>

                </ol>
            </div>
        );
    }
}

export default CSS;