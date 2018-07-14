import React from 'react';


export class Gua_detail extends React.Component {
    
    render () {
        return (
            <div className="guas-details-back">
            <div>
            <ul>
                <li>Chinese name: <span className="guas">{this.props.guas.chineseName}</span>, {this.props.guas.pinyinName}</li>
                <li>English names: <span className="underline">{this.props.guas.names.map( name => (<span key={name}>{name}, </span>))}</span></li>
            </ul>
            <p>This hexagram can be divided into two parts:</p>
            <ul>
            <li>Top: {this.props.guas.topTrigram.character}
                <ul>
                    <li>Chinese name: <span className="guas">{this.props.guas.topTrigram.chineseName}</span>, {this.props.guas.topTrigram.pinyinName}</li>
                    <li>English names: <span className="underline">{this.props.guas.topTrigram.names.map( name => (<span key={name}>{name}, </span>))}</span></li>
                    <li>Images: {this.props.guas.topTrigram.images.map( image => (<span key={image}>{image}, </span>))}</li>
                    <li>Attribute: <span className="underline">{this.props.guas.topTrigram.attribute}</span></li>
                </ul>
                </li>
            <li>Bottom: {this.props.guas.bottomTrigram.character}
                <ul>
                    <li>Chinese name: <span className="guas">{this.props.guas.bottomTrigram.chineseName}</span>, {this.props.guas.bottomTrigram.pinyinName}</li>
                    <li>English names: <span className="underline">{this.props.guas.bottomTrigram.names.map( name => (<span key={name}>{name}, </span>))}</span></li>
                    <li>Images: {this.props.guas.bottomTrigram.images.map( image => (<span key={image}>{image}, </span>))}</li>
                    <li>Attribute: <span className="underline">{this.props.guas.bottomTrigram.attribute}</span></li>
                </ul>
                </li>
            </ul>
            </div>
            </div>);
    }
}