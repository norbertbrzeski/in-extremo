import React, { Component } from "react";
import BackgroundOne from './images/bg1.jpg'
import BackgroundTwo from './images/bg2.jpg'
import BackgroundThree from './images/bg3.jpg'



class Home extends Component {
    render() {
        return (
            <div className='home,fonts'>
                <h2 >HELLO</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>

                <div><img src={BackgroundOne} className="home-parallax" alt="logo" /></div>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

                <div className='footer' > portfolio © Norbert  Brzeski <a  href="https://github.com/norbertbrzeski">Link do repozytorium</a></div>

                <div><img src={BackgroundTwo} className="home-parallax" alt="logo" /></div>


                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque itaque odit! Accusamus,
                    autem, eius? Iure labore nisi optio, quas velit voluptas? Et impedit incidunt iste odio quos
                    tempora veniam.
                </div>
                <div><img src={BackgroundThree} className="home-parallax" alt="logo" /></div>

            </div>
        );
    }
}

export default Home;