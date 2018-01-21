import React, { Component } from "react";

import { Parallax } from 'react-parallax';
import './App.css'
class Home extends Component {
    render() {
        return (
            <div className=' animated  fadeIn '>

                <div className='navbar'>
                <div id="section-1" className='HomeDivs'>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</div>
                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('./images/bg3.jpg')}
                    bgImageAlt="first"
                    strength={200}
                >

                    <div style={{ height: '400px' }} />
                </Parallax>



                <div id="section-2" className='HomeDivs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque itaque odit! Accusamus,
                    autem, eius? Iure labore nisi optio, quas velit voluptas? Et impedit incidunt iste odio quos
                    tempora veniam.
                </div>
                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('./images/bg2.jpg')}
                    bgImageAlt="second"
                    strength={200}
                >
                    Blur transition from min to max
                    <div style={{ height: '400px' }} />
                </Parallax>

                <div id="section-3" className='footer' > portfolio © Norbert  Brzeski
                    <p>        <a href='https://www.linkedin.com/in/norbert-brzeski/'>Linkedin</a> </p>
                    <p>    <a href='https://github.com/norbertbrzeski/'>Repozytorium github</a></p>
                </div>

                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('./images/bg1.jpg')}
                    bgImageAlt="third"
                    strength={200}
                >
                    Blur transition from min to max
                    <div style={{ height: '400px' }} />
                </Parallax>


</div>

            </div>
        );
    }
}

export default Home;


