import React, {Component} from 'react';


class LoginForm extends Component {

  constructor(){
    super();
    this.state = {
      userClicked: false,
      userRegistered: false,
      errorChecking: false,
      userEntered: false,

      userId: 1,
      name: '',
      email: '',
      username: '',
      password: '',
    }
  }

  handleChangesUsername(e){
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
    handleChangesPass(e){
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
        errorChecking:false

      })
    }

  handleRegisterDone(e){
    e.preventDefault();
      let arr = this.props.users;
        arr.push({userId: this.state.userId, name: this.state.name, email: this.state.email, 
                  username: this.state.username, password: this.state.password});
        let n = this.state.userId;
        n.toString();
        this.setState({
      users: arr,
      name: '',
      email: '',
      username: '',
      password: '',
      userId: n + 1,
      userEntered: true,
      userClicked: false,
      userRegistered: false,
      errorChecking: false,
        });
  }

  
  handleLogin(){
    let checking = this.state.username;
    let passwordCheck = this.state.password;
    let inlist;
    let password;

      this.props.users.map((user,index) => 
          inlist = user.username,
          )
      this.props.users.map((user,index) => 
          password = user.password,
          )
      if(checking !== inlist && passwordCheck !== password){
          this.setState({
            errorChecking: true
          })
      } else {
        this.setState({
        userClicked: false,
        userRegistered: false,
        errorChecking: false,
        userEntered: true
        })
      }   
      this.setState({
      username: '',
      password: ''
        });
  }

  handleChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }
  handleChangePass(e){
    this.setState({
      password: e.target.value
    })
  }


  render(){

    var userBtnView = {};
    var loginUserView = {};
    var registerUserView = {};

    var errorMessage ={};
    var userEnteredView = {};
    var optionView = {};

    userEnteredView.display = 'none';

    if(!this.state.errorChecking){
      errorMessage.display = 'none';
    }else{
      errorMessage.display = 'block';

    }

    if(this.state.userClicked){
      userBtnView.display = 'none';
      registerUserView.display ='none';
      loginUserView.display ='block';
    }else{
      loginUserView.display = 'none';
      registerUserView.display ='none';
    }
    if(this.state.userRegistered){
      loginUserView.display ='none';
      registerUserView.display = 'block';
    }
    if(this.state.userEntered){
      userEnteredView.display = 'block';
      optionView.display = 'none';
    }

    return(
      <div>
        <div className= "ui centered card" style = {optionView} >
              <button className='ui basic blue button' onClick = {this.handleSubmit.bind(this)}> User </button>
        </div>
        <div style = {loginUserView} className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <input type = "text" placeholder = "Username" 
                onChange = {this.handleChangeUsername.bind(this)}
                value = {this.state.username}
                />
                <input type = "password" placeholder = "password" 
                  onChange = {this.handleChangePass.bind(this)}
                  value = {this.state.sPassword}
                />
                <button className='ui basic blue button' onClick = {this.handleLogin.bind(this)}> Log in </button>
                <p> if you don't have an account, please <a onClick = {this.handleRegister.bind(this)}> Sign in </a> </p>
              </div>
            </div>
          </div>
        </div>

         <div style = {registerUserView} className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <input type = "text" placeholder="Enter your first name" onChange = {this.handleChangeName.bind(this)} value = {this.state.name} />
                <input type = "text" placeholder="Enter your email" onChange = {this.handleChangeEmail.bind(this)} value = {this.state.email} />
                <input type = "text" placeholder="Username" onChange = {this.handleChangesUsername.bind(this)} value = {this.state.username} />
                <input type = "password" placeholder="New password" onChange = {this.handleChangesPass.bind(this)} value = {this.state.password} />
                <button className='ui basic blue button' onClick = {this.handleRegisterDone.bind(this)} > Sign in </button>
              </div>
            </div>
          </div>
        </div>
          </div>
      );
  }
}

export default LoginForm;