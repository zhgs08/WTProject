import React from 'react';
import {Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Category from './Category';

import style from '../assets/style.css';

class Navigation extends React.Component {
	render() {
    return (
      <HashRouter>
      <div className='container'>
              		<div className="navbar">
                			<ul className="navbar-nav">
                  			<NavLink className="nav-link" to="/"><i className="home large icon" /></NavLink>
                        <NavLink className="nav-link" to="/category"> Category </NavLink>
                        <NavLink className="nav-link" to="/login"> Sing in </NavLink>
                  		</ul>
              		</div>
              		<div>
                		<Route exact path = "/" component={Home}/>
                    <Route exact path = "/category" component={Category}/>
                    <Route exact path = "/login" component={Login}/>
              		</div>
             
        </div>
      </HashRouter>
    );
  }
}

export default Navigation;