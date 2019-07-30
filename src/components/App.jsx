import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Header from './Header';
import Home from './Home';
import Schedule from './Schedule';
import Error404 from './Error404';
import Admin from './Admin';

class App extends React.Component {

    
    
    render() {

        
    

        return (
            <div>
                <style jsx>{`
                .App {text-align: center;
                        
                }
                .App-body {background-image: linear-gradient(to bottom right, #4d004d, #42cbf5, #ffad33);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    font-size: calc(10px + 2vmin);
                    color: white;
                }
                `}</style>
                <div className="App">
                    <Header />
                    <Switch>
                        <div className="App-body">
                            <Route exact path='/' component={Home} />
                            <Route path='/schedule' component={Schedule} />

                            <Route component={Error404} />
                            <Route path='/admin' component={Admin} />
                        </div>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;