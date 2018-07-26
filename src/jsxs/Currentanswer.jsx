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
        let userId = this.props.userId;
        axios.post("https://http://159.65.227.85:9000/api_question", {
            question: question, 
            gua: gua,
            toGua : toGua,
            userId : userId
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
        toGua : state.toGua,
        userId : state.userId
    };
}

Currentanswer = connect(mapStateToProps)(Currentanswer);  