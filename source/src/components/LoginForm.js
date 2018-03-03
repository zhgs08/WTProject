import React, {Component} from 'react';
import Home from './Home';


class LoginForm extends Component {

  constructor(){
    super();
    this.state = {
      login: false,
      sign: false,
      isLoged: false,
      id: '',
      name: '',
      email: '',
      username:  '',
      password:  '',
    }
  }

    handleChangeUsername(e){
      this.setState({
          username: e.target.value
      })
    }
    handleChangeName(e){
      this.setState({
        name: e.target.value
      })
    }

    handleChangeEmail(e){
      this.setState({
        email: e.target.value
      })
    }
    handleChangePassword(e){
      this.setState({
        password: e.target.value
      })
    }
   
    handleSubmit(){
      this.setState({
        userClicked: true
      })
    }
   
    handleRegister(){
      this.setState({
        userRegistered: true,
        isLoged:false

      })
    }

    handleRegistered(e){
    console.log('hello ')
    e.preventDefault();
      let list = this.props.users;
        list.push({
          id: this.state.id, 
          name: this.state.name, 
          email: this.state.email, 
          username: this.state.username, 
          password: this.state.password});

        let n = this.state.id;
        n.toString();
        this.setState({
        users: list,
        id: n+1,
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,

        });
     }

    handleLogin(){
      console.log('hi')
      let usernameCheck = this.state.username;
      let passwordCheck = this.state.password;
      let username;
      let password;
      console.log(username);
      console.log(password);
        this.props.users.map((user,index) => 
            username = user.username,
            )
        this.props.users.map((user,index) => 
            password = user.password,
            )
        if(usernameCheck !== username && passwordCheck !== password){
            this.setState({
              isLoged: true,
            })
        }else{
          this.setState({
              isLoged: false,
          })
        }   
        this.setState({
        username: '',
        password: ''
          });
    }

    handleLogin = () => {
      this.setState ({
       login: true});
    }

    handleSigned = () => {
      this.setState ({
       sign: true,

     });
      
    }

  render(){
    if(this.state.sign == false) {
    return(
      <div>
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <input type = "text" placeholder = "Username" 
                onChange = {this.handleChangeUsername.bind(this)}
                value = {this.state.username}
                />
                <input type = "password" placeholder = "Password" 
                  onChange = {this.handleChangePassword.bind(this)}
                  value = {this.state.password}
                />
                <button className='ui basic blue button' onClick = {this.handleLogin.bind(this)}> Log in 
                </button>
                <p> if you don't have an account, please <a onClick = {this.handleSigned.bind(this)}> Sign in </a> </p>
                </div>
            </div>
          </div>
        </div>
         </div>
      );
    } else {
      return (
        <div className='ui centered card'>
          <div className='ui centered card'>
            <div className='content'>
              <div className='ui form'>
                <div className='field'>
                <form onFormSubmit={this.handleSigned}>
                  <input type = "text" placeholder="Name" onChange = {this.handleChangeName.bind(this)} value = {this.state.name} />
                  <input type = "text" placeholder="Email" onChange = {this.handleChangeEmail.bind(this)} value = {this.state.email} />
                  <input type = "text" placeholder="Username" onChange = {this.handleChangeUsername.bind(this)} value = {this.state.username} />
                  <input type = "password" placeholder="Password" onChange = {this.handleChangePassword.bind(this)} value = {this.state.password} />
                  <button className='ui basic blue button' onClick = {this.handleRegistered.bind(this)} > Sign in </button>   
                   </form>           
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;