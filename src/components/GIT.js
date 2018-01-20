import React, { Component } from "react";
import GITImg from '../images/git-128.png'


class GIT extends Component {
    render() {
        return (
            <div className=' git-page animated fadeIn  '>
                <img src={GITImg} className="logos" alt="logo" />

                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam  lorem50</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
}

export default GIT;