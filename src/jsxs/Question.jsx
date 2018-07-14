import React from 'react';
import { connect } from 'react-redux';

export class Question extends React.Component {
    
    render () {
        return (
            <h2 className="question-content">Your question:<span>{this.props.question}</span></h2>
            );
    }
}

function mapStateToProps(state) {
    return {
        question : state.question,
    };
}

Question = connect(mapStateToProps)(Question);