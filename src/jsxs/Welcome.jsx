import React from 'react';
import { Link } from 'react-router-dom';
import '../css/welcome.css';

export class Welcome extends React.Component {
    render () {
        return (
        <div className="welcome">
            <div className="contents">
                <div className="bar bar-top"></div>
                <img className="welcome-img" alt="background" src={require("../imgs/welcome.jpg")} />
                <div className="taiji">
                <Link to="/login"><img className="yingyang spin" src={require("../imgs/yingyang.png")} alt="yingyang" /></Link>
                <h2>Ask <span>Yingyang</span></h2>
                </div>
                <div className="bar bar-bottom"></div>
            </div>
        </div>
        );
    }
}