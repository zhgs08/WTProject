import React, {Component} from 'react';

class UserAccount extends Component {
	render(){
		return(
			<div>
				<h4> Hello, {this.props.users.name} </h4>
			</div>
			);
	}
}
export default UserAccount;