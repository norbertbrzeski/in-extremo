import React, { Component } from "react";

import { Parallax } from 'react-parallax';
import './App.css'
import Mail from 'react-icons/lib/md/mail'
import Face from 'react-icons/lib/md/face'
import Box from 'react-icons/lib/md/account-box'
import Scanner from 'react-icons/lib/md/scanner'

class Home extends Component {
    render() {
        return (
            <div className=' animated  fadeIn '>


                <div id="section-1" className='HomeDivs '> <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="feature-item">
                                    <Mail />
                                    <h3>Device Mockups</h3>
                                    <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feature-item">
                                    <Face/>
                                    <h3>Flexible Use</h3>
                                    <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="feature-item">
                                        <Scanner/>
                                    <h3>Free to Use</h3>
                                    <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feature-item">
                                            <Box/>
                                    <h3>Open Source</h3>
                                    <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                                </div>
                            </div>
                        </div>

                </div></div>
                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('./images/bg3.jpg')}
                    bgImageAlt="first"
                    strength={200}
                >

                    <div style={{ height: '400px' }} />
                </Parallax>



                <div  className='HomeDivs feature-item'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque itaque odit! Accusamus,
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


