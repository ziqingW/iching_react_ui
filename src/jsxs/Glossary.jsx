import React from 'react';
import { Redirect } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
import { Footer } from './Footer.jsx';
import { User } from './User.jsx';
import '../css/glossary.css';

export class Glossary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hex: "",
            tri: "",
            show_hex : false,
            show_tri : false
        };
    }

    hex_change = e => {
        e.preventDefault();
        let hex = e.target.value;
        this.setState({
            hex: hex
        });
    }

    tri_change = e => {
        e.preventDefault();
        let tri = e.target.value;
        this.setState({
            tri: tri
        });
    }

    hex_submit = e => {
        e.preventDefault();
        this.setState({
            show_hex : true,
        });
    }

    tri_submit = e => {
        e.preventDefault();
        this.setState({
            show_tri : true
        });
    }

    render () {
        return(this.state.show_hex ? <Redirect to={"/glossary/hex/" + this.state.hex} />
            : (this.state.show_tri ? <Redirect to={"/glossary/tri/" + this.state.tri} />
            : 
            (<div className="coin-back">
                <User />
                <Navigation />
                    <div className="glossary-back">
                        <h3>Search the symbols</h3>
                        <div className="glossary-forms">
                            <div>
                            <form onSubmit={this.hex_submit}>
                                <p>Hexagram's number</p>
                                <div className="glossary-form-wrap">
                                <input type="number" min="1" max="64" value={this.state.hex} onChange={this.hex_change} placeholder="1 ~ 64"/>
                                <button type="sumbit">OK</button>
                                </div>
                            </form>
                            <form onSubmit={this.tri_submit}>
                                <p>Trigram's number</p>
                                <div className="glossary-form-wrap">
                                <input type="number" min="1" max="8" value={this.state.tri} onChange={this.tri_change} placeholder="1 ~ 8"/>
                                <button type="sumbit">OK</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    <br />
                    <ul className="glossary-links">
                    <h3>References</h3>
                        <li><a href="https://en.wikipedia.org/wiki/I_Ching"><span className="guas">易經</span> I Ching — <i>"Book of Changes"</i></a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Bagua"><span className="guas">八卦</span> Bāguà — The eight trigrams</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Feng_shui"><span className="guas">風水</span> Feng Shui — The harmony between nature and human</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Qimen_Dunjia"><span className="guas">奇門遁甲</span>Qimen Dunjia — Ancient art of divination from China</a></li>
                    </ul>
                </div>
                <Footer />
            </div>)
            )
            );
    }
}