import React from 'react';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const Header = () => {
    return(
        <div>
            <style jsx>{`
            .App-Header {background-color: #282c34;
                        min-height: 25vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-size: calc(10px + 2vmin);
                        color: white;
            }
            .App-logo {animation: App-logo-spin infinite 20s linear;
                        height: 17vmin;
                        margin-top: 20px;
                        pointer-events: none;
            }

            @keyframes App-logo-spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
            }
            nav ul{
                list-style: none;
                margin: 0;
                padding: 0;
              }
              
              nav li{
                display: inline-block;
                margin: 20px;
              }
              
              nav a {
                text-decoration: none;
                color: lightblue;
              }
              
              nav a:hover,
              nav a:active{
                color: #fa923f;
              }
            
            `}</style>
            <div className="App-Header">
                <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
                <nav>
                    <ul>
                        <li><Link to="/schedule">Schedule</Link></li>
                        <li><Link to="/1on1">Make Appointment</Link></li>
                        <li><Link to="store">Online Store</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Radium(Header);