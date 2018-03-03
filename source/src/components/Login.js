import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			users: [
				{
					userId: 0,
					name: 'Gaukhar Zharkeyeva',
					email: 'zhgs@gmail.com',
					username: 'zhgs',
					password: 'zhgs',
				}
			],
			userFiles: [
				{
					id: 0,
					text: 'The first recipe',
				},
			],


		    text: '',
		}
	}
	render() {
	    return (
		    	<div className="gtco-container">
		    		<div className="fh5co-text">
						<LoginForm
							users = {this.state.users}
							userId = {this.state.userId}
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