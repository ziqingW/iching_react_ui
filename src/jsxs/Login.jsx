import React from 'react';
import axios from 'axios';
import { setUser } from '../actions.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../css/login.css';

export class Login extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            username : "",
            password : "",
            re_password : "",
            message : "",
            redirect : false,
            signForm : false
        };
    }
    
    componentDidMount = () => {
        let username = sessionStorage.getItem("myUsername");
        if (username) {
            this.props.setUser(username);
            this.setState({
                redirect : true
            });
        }
    }
    
    usernameInput = e => {
        let username = e.target.value;
        this.setState({
            username : username,
            message : ""
        });
    }
    
    passwordInput = e => {
        let password = e.target.value;
        this.setState({
            password : password,
            message : ""
        });
    }
    
    re_passwordInput = e => {
        let re_password = e.target.value;
        this.setState({
            re_password : re_password,
            message : ""
        });
    }
    
    showSign = e => {
        e.preventDefault();
        this.setState({
            username : "",
            password : "",
            message: "",
            signForm : true
        });
    }
    
    showLog = e => {
        e.preventDefault();
        this.setState({
            username : "",
            password : "",
            re_password : "",
            message: "",
            signForm : false
        });
    }
    
    onSubmit_login = e => {
        this.setState({
           message : "Logging..." 
        });
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        axios.post("http://159.65.227.85:9000/api_login", {username: username, password: password})
            .then(response => {
                let message = response.data.message;
                if (message !== "Logged in"){
                    this.setState({
                        message: message
                    });
                } else {
                    let userInfo = JSON.stringify({"username": username, "userId": response.data.userId});
                    console.log(userInfo);
                    sessionStorage.setItem('myUsername', userInfo);
                    this.props.setUser(userInfo);
                    this.setState({
                        redirect : true
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    onSubmit_signup = e => {
        this.setState({
           message : "Signing up..." 
        });
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let re_password = this.state.re_password;
        if (password !== re_password) {
            this.setState({
                message : "Password not consistent"
            });
        } else {
            axios.post("http://159.65.227.85:9000/api_signup", {username: username, password: password})
            .then(response => {
                console.log(response.data);
                let message = response.data.message;
                if (message !== "Signed up"){
                    this.setState({
                        message: message
                    });
                } else {
                    let userInfo = JSON.stringify({"username": username, "userId": response.data.userId});
                    sessionStorage.setItem('myUsername', userInfo);
                    this.props.setUser(userInfo);
                    this.setState({
                        redirect : true
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    }
    
    loginForm = () => {
        return(<div className="login-form">
                <form onSubmit={this.onSubmit_login}>
                    <div className="login-input-wrap">
                        <h4>LOG IN</h4>
                        <div className="login-inputs">
                            <input type="text" id="username" placeholder="Username" name="username" value={this.state.username} onChange={this.usernameInput} required/>
                            <input type="password" id="password" placeholder="Password" name="password" value={this.state.password}onChange={this.passwordInput} required/>
                        </div>
                        <div className="login-message">{this.state.message ? <h4>{this.state.message}</h4> : null}</div>
                    </div>
                    <div className="login-buttons">
                        <button onClick={this.showSign}>New User</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>);
    }
    
    signupForm = () => {
        return(<div className="login-form">
            <form onSubmit={this.onSubmit_signup}>
                <div className="login-input-wrap">
                    <h4>SIGN UP</h4>
                    <div className="login-inputs">
                        <input type="text" id="username" placeholder="Username" name="username" value={this.state.username} onChange={this.usernameInput} required/>
                        <input type="password" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordInput} required/>
                        <input type="password" id="re-password" placeholder="Re-enter Password" name="re_password" value={this.state.re_password} onChange={this.re_passwordInput} required/>
                    </div>
                    <div className="login-message">{this.state.message ? <h4>{this.state.message}</h4> : null}</div>
                </div>
                <div className="login-buttons">
                <button onClick={this.showLog}>Returned User</button>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>);
    }
    
    render() {
        return( this.state.redirect ? <Redirect to="/main" />
            : ( this.state.signForm ? this.signupForm() : this.loginForm())
            );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: function(data) {
            dispatch(setUser(data));
        }
    };
}

Login = connect(null, mapDispatchToProps)(Login);