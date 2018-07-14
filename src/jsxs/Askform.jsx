import React from 'react';
import { Redirect } from 'react-router-dom';
import { askGua } from '../actions.js';
import { connect } from 'react-redux';
import { Navigation } from './Navigation.jsx';
import { Footer } from './Footer.jsx';
import axios from 'axios';


export class Askform extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            redirect : false,
            question: ""
        };
    }
    
    changeHandler = e => {
        let inputQuestion = e.target.value;
        this.setState({
           question :  inputQuestion
        });
    }
    
    askGua = e => {
        e.preventDefault();
        axios.get("https://ichingapi.herokuapp.com/api")
            .then( response => {
                let results = response.data;
                results.question = this.state.question;
                this.props.askGua(results);
                this.setState({
                    redirect : true
                });
            })
            .catch( err => {
                console.log(err);
            });
    }
    
    render () {
        return ( this.state.redirect ? <Redirect to="/ask/guas" />
                : (<div className="form-back">
                <Navigation />
                <form onSubmit={this.askGua}>
                    <p>Any question to ask the Prophet?</p>
                    <div>
                    <input type="text" value={this.state.question} name="question" onChange={e => this.changeHandler(e)} required/>
                    <button className="btn" type="submit">Ask</button>
                    </div>
                </form>
                <Footer />
                </div>)
            );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        askGua: function(data) {
            dispatch(askGua(data));
        }
    };
}

Askform = connect(null, mapDispatchToProps)(Askform);