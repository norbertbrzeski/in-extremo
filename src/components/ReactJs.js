import React, { Component } from "react";
import ReactJsImg from '../images/react-128.png'


class ReactJs extends Component {
    render() {
        return (
            <div className='react-page animated fadeIn   '>
                <img src={ReactJsImg} className="logos" alt="logo" />

                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>

                </ol>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem debitis dolore eos exercitationem laudantium magni non odit porro velit?</div>
            </div>
        );
    }
}

export default ReactJs;