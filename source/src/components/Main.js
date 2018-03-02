import React, {Component} from 'react';
import img from './img.jpg';

class Main extends Component {
	constructor () {
    super();
    this.state = { editing: false, getInfo: false}
  }

  componentDidMount () {
    this.setState({ 
        changedName: this.props.files,
    });
  }

  handleEditing (event) {
    this.setState({ 
        editing: true, 
    });
  }

    handleEditingDone (event) {
        this.setState({ editing: false });
    
    }

    handleEditingChangeName (event) {
        var _changedName = event.target.value;
        this.setState({ 
            changedName: _changedName
        });
    }
    handleEditingChangePhone (event) {
        var _changedPhone = event.target.value;
        this.setState({ 
            changedPhone: _changedPhone
        });
    }
    handleEditingChangeImg (event) {
        var _changedImg = event.target.value;
        this.setState({ 
            changedImg: _changedImg
        });
    }

    handleSubmit(event){
        console.log(this.state.getInfo)
        this.setState({ 
            getInfo: true, 
        });
    }
    getInfoDone(event){
        this.setState({getInfo: false})
    }
  render () {
    var files = this.props.files;

    var viewStyle = {};
    var editStyle = {};
    var contactInfo = {};

    if (this.state.editing) {
      viewStyle.display = 'none';
    } else {
      editStyle.display = 'none';
    }
    if (this.state.getInfo) {
        viewStyle.display = 'none';
    }else{

        contactInfo.display = 'none';
    }
    return (
    <div>
        <div style={viewStyle} >
        	<div className="row">
				<div className="col-4">
					<button onClick = {this.handleSubmit.bind(this)}><img className="img" src ={img}/>A1 Beginner</button>
				</div>
				
			</div>
			
            
        </div>
        
        <div style={contactInfo}>
            <h2>A1 Beginner </h2>
            <img className="rounded float-center" src={img} alt="contact image" height="100" width="100" />
            <div className="text">
                <h3>{this.props.files}</h3>
                <p> {this.state.changedPhone}</p>
                <p> {this.state.changedEmail}</p>
            </div>
            <button onClick = {this.getInfoDone.bind(this)}>OK</button>
        </div>
    </div>
    );
	}
}
export default Main;