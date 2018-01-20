import React, { Component } from "react"
import JavaScriptImg from '../images/javascript-128.png'


class JavaScript extends Component {
    render() {
        return (
            <div className=' javascript-page animated fadeIn   '>
                <img src={JavaScriptImg} className="logos" alt="logo" />

                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis
           consequatur cum doloribus earum eius eligendi enim est exercitationem fuga
           fugit mollitia natus, obcaecati odit officiis pariatur possimus provident
           quam quas quasi quidem rerum sapiente totam vero voluptates? Accusantium dignissimos eius enim
           iure labore nostrum placeat recusandae repellendus sed totam.</div>
            </div>
        );
    }
}

export default JavaScript;