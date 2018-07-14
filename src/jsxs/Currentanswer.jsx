import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Answer } from './Answer.jsx';
import axios from 'axios';
const clone = require('clone');

export class Currentanswer extends React.Component {
    onSubmit = () => {
        let question = clone(this.props.question);
        let gua = clone(this.props.guas);
        let toGua = clone(this.props.toGua);
        axios.post("https://ichingapi.herokuapp.com/api_question", {
            question: question, 
            gua: gua,
            toGua : toGua
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    render () {
        return (
            <div>
                <p className="result-short">The Prophet's answer is: <Answer guas={this.props.guas}/> <span className="guas">({this.props.guas.chineseName}, {this.props.guas.pinyinName})</span></p>
                <Link to="/ask/results"><button onClick={this.onSubmit}>Next</button></Link>
            </div>
            );
    }
}  
  
function mapStateToProps(state) {
    return {
        guas : state.guas,
        question : state.question,
        toGua : state.toGua
    };
}

Currentanswer = connect(mapStateToProps)(Currentanswer);  