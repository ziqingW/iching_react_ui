import React from 'react';
import { connect } from 'react-redux';
import { Currentanswer } from './Currentanswer.jsx';
import { Navigation } from './Navigation.jsx';
import { Question } from './Question.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from './Footer.jsx';
import { User } from './User.jsx';
import '../css/coins.css';

const clone = require('clone');

export class Coins extends React.Component {
    
    constructor (props) {
        super (props);
        this.state = {
            buttonToggles : [true, false, false, false, false, false, false],
            coinToggles : [false, false, false, false, false, false],
            tutorial : true
        };
    }
    
    tossCoin = i => {
        let new_buttonToggles = clone(this.state.buttonToggles);
        let new_coinToggles = clone(this.state.coinToggles);
        if (i < 6) {
            new_buttonToggles[i] = false;
            new_buttonToggles[i+1] = true;
        } else {
            new_buttonToggles[i] = false;    
        }
        new_coinToggles[i] = true;
        this.setState({
            buttonToggles : new_buttonToggles,
            coinToggles : new_coinToggles
        });
    }
    
    tutorialClose = () => {
        this.setState({
            tutorial : false
        });
    }
    
    showTutorial = () => {
        this.setState({
            tutorial : true
        });  
    }
    
    tutorial_1 = () => {
        return (
            <div className="tutorial-back">
                <div className="tutorial-contents">
                    <div>
                        <h3>Symbol of <span className="tutorial-sub">Now</span></h3>
                        <p>You will toss 3 coins for 6 times, then draw the lines based on the following results from bottom to top:</p>
                        <ul>
                            <li>3 heads <FontAwesomeIcon icon="arrow-right" className="arrow-icon"/> &#x268A; <span className="tutorial-warning">(*mutable)</span></li>
                            <li>2 heads, 1 tail <FontAwesomeIcon icon="arrow-right" className="arrow-icon"/> &#x268A;</li>
                            <li>2 tails, 1 head <FontAwesomeIcon icon="arrow-right" className="arrow-icon"/> &#x268B;</li>
                            <li>3 tails <FontAwesomeIcon icon="arrow-right" className="arrow-icon"/> &#x268B; <span className="tutorial-warning">(*mutable)</span></li>
                        </ul>
                        <p>Combine these lines, which is your first symbol representing Now.</p>
                    </div>
                    <button onClick={this.tutorialClose}>Close</button>
                </div>
            </div>
        );
    }
    
    render () {
        return (
            <div className="coin-back">
            <User />
            <Navigation />
            <div className="question-panel">
            <Question />
            <FontAwesomeIcon onClick={this.showTutorial} icon="info-circle" className="question-icon"/>
            </div>
            {this.state.tutorial ? this.tutorial_1(): null}
            <div className="coins">
                { this.props.coins.map( (coin,i) => {
                    return (
                    <div key={"coin" + i} className="coin-wrapper">
                    <p className="coin-order">{i + 1}</p>
                    <div className="coin-panel" key={i}>
                        <button className={this.state.buttonToggles[i] ? "show-button" : "hide-button"} onClick={ () => this.tossCoin(i)}>Toss</button>
                        <div className={this.state.coinToggles[i] ? "show-coins" : "hide-coins"}>
                        <img className="coin-img" src={require("../imgs/" + coin )} alt={"coin result" + i} />
                        <img className={this.props.changingLines[i] === 1 ? "mutate-line line-img" : "line-img"} src={require("../imgs/" + (this.props.guas.lines[i] === 1 ? "straight.png" : "dash.png") )} alt={"line result" + i} />
                        </div>
                    </div>
                    </div>
                    );
                })}
            </div>
                <div className={this.state.buttonToggles[6] ? "final-button" : "hide-button"}>
                    <Currentanswer />
                </div>
                <Footer />
            </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        coins : state.coins,
        guas : state.guas,
        changingLines : state.changingLines
    };
}

Coins = connect(mapStateToProps)(Coins);