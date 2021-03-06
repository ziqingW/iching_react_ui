import React from 'react';
import { Link } from 'react-router-dom';
import { User } from './User.jsx';
import { Footer } from './Footer.jsx';
import '../css/main.css';
export class Main extends React.Component {
    
    makeOption = (link, chi, eng) => {
        return (
            <div className="main-option"><img alt="cloud" src={require("../imgs/cloud.png")} /><Link to={link}><p><span className="main-chi">{chi}</span><span className="main-eng">{eng}</span></p></Link></div>
            );       
    }
    
    render() {
        return (
            <div className="main-wrap">
            <User />
            <div className="main">
                <div className="grid-item item1">{this.makeOption("/ask", "占卜", "Ask Yingyang")}</div>
                <div className="grid-item item2">{this.makeOption("/history", "歷史", "History")}</div>
                <div className="grid-item item5"><img alt="taichi" src={require("../imgs/taiji.png")} /></div>
                <div className="grid-item item3">{this.makeOption("/glossary", "詞典", "Glossary")}</div>
                <div className="grid-item item4">{this.makeOption("/links", "國粹", "Other Chinese culture")}</div>
            </div>
            <Footer />
            </div>
        );
    }
}
