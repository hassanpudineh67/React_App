import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchRandomUser from './Components/FetchRandomUser.js';
import Header from './Components/Header.js';
import InfoTitles from './Components/InfoTitles.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav.js';

class App extends Component {

    render() {
        return (
            <Router>
                    <div className="App">
                        <Nav/>
                        <FetchRandomUser/>
                        <InfoTitles name="نام"/>
                        <InfoTitles name="نام خانوادگی"/>
                        <InfoTitles name= "سن"/>
                        <InfoTitles name="ایمیل"/>
                        <Navbar name='پروفایلِ من'/>
                        <Navbar name='پیام های دریافتی'/>
                        <Navbar name='پیام های ارسالی'/>
                        <Navbar name='اسپم ها'/>
                    </div>
            </Router>
        );
    }
}

export default App;
