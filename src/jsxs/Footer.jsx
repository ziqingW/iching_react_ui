import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

export class Footer extends React.Component {
    
    render () {
        return(
            <div className="footer">
                <div className="footer-wrap">
                    <Link to="/main"><img alt="yingyang" src={require("../imgs/yingyang.png")} /></Link>
                    <div>
                        <p>Powered by <a className="author-link" href="https://www.linkedin.com/in/ziqing-wang-34549537/">Ziqing</a></p>
                    </div>
                </div>
            </div>
            );
    }
}