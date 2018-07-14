import React from 'react';

export class Answer extends React.Component {
    
    render () {
        return (
            <span className="make-gua">
                <span>{this.props.guas.topTrigram.character}</span>
                <span>{this.props.guas.bottomTrigram.character}</span>
            </span>
            );
    }
}  