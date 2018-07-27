import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navigation } from './Navigation.jsx';
import { Answer } from './Answer.jsx';
import { GuaDetail } from './GuaDetail.jsx';
import { Question } from './Question.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from './Footer.jsx';
import { User } from './User.jsx';
import '../css/results.css';

export class Results extends React.Component {
    
    constructor (props) {
        super (props);
        this.state = {
            tutorial : true,
            detailed : "",
            checked : ""
        };
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
    
    tutorial_2 = () => {
        return (
            <div className="tutorial-back">
                <div className="tutorial-contents">
                    <div>
                        <h3>Symbol of <span className="tutorial-sub">Future</span></h3>
                        <p>Those mutable lines (<span className="tutorial-warning">3 heads</span> or <span className="tutorial-warning">3 tails</span>) can turn to be their opposite form:</p>
                        <ul>
                            <li><span className="tutorial-warning">3 heads</span> (&#x268A;) will become a dashed line</li>
                            <li><span className="tutorial-warning">3 tails</span> (&#x268B;) will become a straight line</li>
                        </ul>
                        <p>Then, you will get another symbol representing Future.</p>
                    </div>
                    <button onClick={this.tutorialClose}>Close</button>
                </div>
            </div>
        );    
    }
    
    detail = item => {
        this.setState({
           detailed:  item,
           checked : item
        });
    }
    
    render () {
        return (
            <div className="coin-back">
                <User />
                <Navigation />
                <div className="question-panel">
                    <Question />
                    <FontAwesomeIcon onClick={this.showTutorial} icon="info-circle" className="question-icon2"/>
                </div>
                {this.state.tutorial ? this.tutorial_2(): null}
                <div className="results-wrapper-wrapper">
                    <p>Explore the hidden answer within these symbols!</p>
                    <div className="results-wrapper">
                        <div className="result-single">
                            <div>
                                <p>Now</p>
                                <p className="results-gua"><Answer guas={this.props.guas} /></p>
                            </div>
                            <div className={this.state.checked === "guas"? "result-modal result-checked": "result-modal"} onClick={()=>this.detail("guas")}></div>
                        </div>
                        <div className="result-single">
                            <div>
                                <p>Future</p> 
                                <p className="results-gua"><Answer guas={this.props.toGua} /></p>
                            </div>
                            <div className={this.state.checked === "toGua"? "result-modal result-checked": "result-modal"} onClick={()=>this.detail("toGua")}></div>
                        </div>
                    </div>
                </div>
                {this.state.detailed !== "" ? (this.state.detailed === "guas" ? <GuaDetail guas={this.props.guas}/> 
                : <GuaDetail guas={this.props.toGua}/>) : null}
                <div className="detour_back"><h3>Satisfied with the answer? Let's try <Link to="/main">another one!</Link></h3></div>
                <Footer />
            </div>);
    }
}


function mapStateToProps(state) {
    return {
        guas : state.guas,
        toGua : state.toGua
    };
}

Results = connect(mapStateToProps)(Results);