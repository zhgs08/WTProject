import React from 'react';
import LoginForm from './LoginForm';
import Home from './Home';

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			users: [ 
				{
					id: 1,
					name: '',
					email: '',
					username: '',
					password: '',
				
				}
			]
		}
	}
	render() {
	    return (
		    	<div className="gtco-container">
		    		<div className="fh5co-text">
						<LoginForm
							users = {this.state.users}
							id = {this.state.id}
							name = {this.state.name}
							email = {this.state.email}
							username = {this.state.username}
							password = {this.state.password}
						/>
					</div>
				</div>
    	);
  	}
}

export default Login;