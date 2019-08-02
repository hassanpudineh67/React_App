import React, {Component} from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchRandomUser from './Components/FetchRandomUser.js';
import InfoTitles from './Components/InfoTitles.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav.js';
import About from './Routes/About.js';
import Shop from './Routes/Shop.js';
class App extends Component {

    render() {
        return (
            <Router>
                    <div className="App">
                        <Nav/>
                        <Switch>
                            <Route path="/shop" component={Shop}/>
                            <Route path="/about" component={About}/>
                            <Route path="/" component={FetchRandomUser}/>
                                <InfoTitles name="نام" />
                                <InfoTitles name="نام خانوادگی"/>
                                <InfoTitles name= "سن"/>
                                <InfoTitles name="ایمیل"/>
                        </Switch>
                    </div>
            </Router>
        );
    }
}

export default App;
