import React, { Component } from 'react';
import logo from '../src/gomycode.png'; 
import './Calcul.css';

class Calculs extends Component {
    state = {}
    render() {
        return (
         
            <div>
                <div style={{ display:'flex',  border: 'solid 1px black', maxWidth: '100vw',flexDirection:'column' }}>
                    <h1 className="title red">Ghoul Yassine</h1>
                    <img src={logo} />
                    <img src="./logo192.png" />
                </div>
                <video width={320} height={240} controls>
                    <source src="myVideo.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default Calculs;