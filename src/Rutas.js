import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import LoginComponent from './components/login/login'
// <Route path='/roster' component={Roster}/>


const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={LoginComponent}/>
    </Switch>
);

export default Routes;
