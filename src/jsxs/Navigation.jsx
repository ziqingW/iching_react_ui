import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';

export class Navigation extends React.Component {
    
    render () {
        return (
            <div className="nav-back">
                <ul>
                    <Navilink link="/ask" des="Ask Yingyang" />
                    <Navilink link="/history" des="History" />
                    <Navilink link="/glossary" des="Glossary" />
                    <Navilink link="/links" des="Other Chinese culture" />
                </ul>
                <hr />
            </div>
            );
    }
}

class Navilink extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
          active : false  
        };
    }
    
    checkActive = () => {
        let currentLink = window.location.href.split("//")[1].split("/")[1];
        currentLink = "/" + currentLink;
        if (this.props.link === currentLink) {
            this.setState({
                active : true
            });
        } else {
            this.setState({
                active : false
            });
        }
    }
    
    componentDidMount() {
        this.checkActive();
    }
    
    render () {
        return (
            <li><Link to={this.props.link}><p className={this.state.active?"link-common link-active":" link-common link-nonactive"}>{this.props.des}</p></Link></li>
            );
    }
}