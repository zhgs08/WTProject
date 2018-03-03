import React from 'react';
import {Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import RecipeMain from './RecipeMain';

class Navigation extends React.Component {
	render() {
    return (
      <HashRouter>
      <div className='container'>
              		<div className="navbar navbar-expand-lg bg-dark navbar-dark">
                			<ul className="navbar-nav">
                  			<NavLink className="nav-link" to="/"><i className="home icon" /></NavLink>
                        <NavLink className="nav-link" to="/addrecipe"> Add Recipe </NavLink>
                        <NavLink className="nav-link" to="/login"> Sing in </NavLink>
                  		</ul>
              		</div>
              		<div>
                		<Route exact path = "/" component={Home}/>
                    <Route exact path = "/addrecipe" component={RecipeMain}/>
                    <Route exact path = "/login" component={Login}/>
              		</div>
             
        </div>
      </HashRouter>
    );
  }
}

export default Navigation;