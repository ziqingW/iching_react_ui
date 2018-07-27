import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from './Navigation.jsx';
import { Link } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import { User } from './User.jsx';
import axios from 'axios';
import clone from 'clone';
import '../css/history.css';

export class History extends React.Component {
    
    constructor (props) {
        super (props);
        this.state = {
            history: []
        };
    }
    
    componentDidMount() {
        this.getHistory();
    }
    
    getHistory = () => {
        axios.post("https://ichingapi.herokuapp.com/api_history", {userId: this.props.userId})
            .then(response => {
                let history = clone(response.data);
                this.setState({
                    history: history
                });
            })
            .catch( err => {
                console.log(err);
            });
    }
    
    render () {
        return (
            <div className="coin-back">
                <User />
                <Navigation />
                <div className="history-back">
                    <h3>List of answered questions</h3>
                    {this.state.history.length > 0 ? 
                    (<table>
                        <thead>
                        <tr className="history-panel-head">
                            <th>Time</th>
                            <th>Question</th>
                            <th>Symbol Now</th>
                            <th>Symbol Future</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.history.map( history => {
                            return (
                            <tr className="history-panel-content" key={history.id}>
                                <td>
                                    <p>{history.time}</p>
                                </td>
                                <td>
                                    <p>{history.question}</p>
                                </td>
                                <td className="history-gua">
                                    <Link to={"/glossary/hex/" + history.gua.number}><p>No.{history.gua.number}:</p></Link><p>{history.gua.names[0]}</p>
                                </td>
                                <td className="history-gua">
                                    <Link to={"/glossary/hex/" + history.togua.number}><p>No.{history.togua.number}:</p></Link><p>{history.togua.names[0]}</p>
                                </td>
                            </tr>);
                            })
                            }
                            </tbody>
                        </table>
                    ): <p>You haven't asked any question yet.</p> 
                    }
                    </div>
                    <Footer />
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        userId : state.userId
    };
}

History = connect(mapStateToProps)(History);