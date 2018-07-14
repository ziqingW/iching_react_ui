import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation.jsx';
import { Footer } from './Footer.jsx';
import { Answer } from './Answer.jsx';
import { Gua_detail } from './Gua_detail.jsx';
import axios from 'axios';

class Hexshow extends React.Component {
    render() {
        return (this.props.gua == "hex" ?
            (<div className="detail-wrap">
                <p>Hexagram&nbsp;<span className="gram-number"> No.{this.props.number}</span>: <Answer guas={this.props.guas}/></p>
                    <Gua_detail guas={this.props.guas} />
                    <Link to="/glossary"><button className="glossary-btn">Back</button></Link>
            </div>)
            : null
        );
    }
}

class Trishow extends React.Component {
    render() {
        return (this.props.gua == "tri" ?
            (<div className="detail-wrap">
                <p>Trigram&nbsp;<span className="gram-number"> No.{this.props.number}</span>: <span className="make-gua">{this.props.guas.character}</span></p>
                <div className="guas-details-back">
                <ul>
                    <li>Chinese name: <span className="guas">{this.props.guas.chineseName}</span>, {this.props.guas.pinyinName}</li>
                    <li>English names: <span className="underline">{this.props.guas.names.map( name => (<span key={name}>{name}, </span>))}</span></li>
                    <li>Images: {this.props.guas.images.map( image => (<span key={image}>{image}, </span>))}</li>
                    <li>Attribute: <span className="underline">{this.props.guas.attribute}</span></li>
                    <li>Family relationship: <span className="underline">{this.props.guas.familyRelationship}</span></li>
                </ul>
                </div>
                <Link to="/glossary"><button className="glossary-btn">Back</button></Link>
            </div>)
            : null
        );
    }
}

export class Glossary_page extends React.Component {
    
    constructor (props) {
        super (props);
        this.state = {
            gua : "",
            number : 0,
            result : {}
        };
    }
    
    componentDidMount() {
        this.checkPage();
    }
    
    checkPage = () => {
        let gua = this.props.match.params.gua;
        let number = parseInt(this.props.match.params.id, 10);
        axios.get(`https://ichingapi.herokuapp.com/api_glossary/${gua}/${number}`)
            .then( response => {
                let result = response.data;
                this.setState({
                    gua : gua,
                    number : number,
                    result : result
                });   
            })
            .catch( err=> {
                console.log(err);
            });
    }
    
    render () {
        return (
            <div className="coin-back">
                <Navigation />
                    {this.state.gua == "hex"?
                        <Hexshow gua={this.state.gua} number={this.state.number} guas={this.state.result} />
                        : <Trishow gua={this.state.gua} number={this.state.number} guas={this.state.result} />
                    }
                <Footer />
            </div>);
    }
}