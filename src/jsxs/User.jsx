import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../actions.js';
import '../css/user.css';

export class User extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            redirect : false
        };
    }
    
    componentDidMount = () => {
        let userInfo = sessionStorage.getItem("myUsername");
        userInfo = JSON.parse(userInfo);
        if (userInfo.username) {
            this.props.setUser(userInfo);
            this.setState({
                user : userInfo.username
            });
        }
    }
    
    logoff = e => {
        e.preventDefault();
        this.props.setUser({username: "", userId: 0});  
        sessionStorage.clear("myUsername");
        this.setState({
            redirect : true
        });
    }
    render () {
        return(this.state.redirect ? <Redirect to="/login" /> :
            (<div className="user-panel">
                <p>Hi, <b>{this.props.user}</b><button onClick={this.logoff}>Log off</button></p>
            </div>)
            );
    }
}

function mapStateToProps(state) {
    return {
        user : state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: function(data) {
            dispatch(setUser(data));
        }
    };
}

User = connect(mapStateToProps, mapDispatchToProps)(User);