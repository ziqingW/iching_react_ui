import React from 'react';
import { Footer } from './Footer.jsx';
import { User } from './User.jsx';
import { Navigation } from './Navigation.jsx';
import '../css/otherCulture.css';

export class Otherculture extends React.Component {
    
    render () {
        return (
            <div className="cultures-back-wrap">
                <User />
                <Navigation />
                <div className="cultures-back">
                <div className="cultures-imgs">
                    <div className="cultures-img-wrapper"><img className="cultures-img" alt="chinese myth" src={require("../imgs/myth.jpg")} />
                    <a className="img-modal" href="https://www.gutenberg.org/files/15250/15250-h/15250-h.htm"><p>Chinese mythology</p></a>
                    </div>
                    <div className="cultures-img-wrapper"><img className="cultures-img" alt="Confucius" src={require("../imgs/confucius.png")} />
                    <a className="img-modal" href="https://www.iep.utm.edu/confuciu/"><p>Confucius</p></a>
                    </div>
                    <div className="cultures-img-wrapper"><img className="cultures-img" alt="Peking Opera" src={require("../imgs/opera.jpg")} />
                    <a className="img-modal" href="http://factsanddetails.com/china/cat7/sub41/entry-2777.html"><p>Peking opera</p></a>
                    </div>
                    <div className="cultures-img-wrapper"><img className="cultures-img" alt="Chinese food" src={require("../imgs/cuisine.jpg")} />
                    <a className="img-modal" href="https://intothemiddlekingdom.com/tag/huaiyang-cai/"><p>Amazing food</p></a>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
            );
    }
}