import React, {Component} from 'react';
import Main from './Main';
import UserPage from './UserPage';

class User extends Component {
	constructor(){
		super();
		this.state = {
			id: 0,
			text: '',
			editing: false
		}
	}
	handleAdd(e){
		e.preventDefault();
	    let arr = this.props.userFiles;
	    arr.push({id: this.state.id, text: this.state.text});
	      
	    let n = this.state.id;
	    n.toString();
	    this.setState({
	      userFiles: arr,
	      text: '',
	      id: n + 1
	    });
	}
	componentDidMount () {
	    this.setState({ 
	        changedText: this.state.text,
	    });
  	}
	handleChange(e){
		this.setState({
          text: e.target.value
      })
	}
	handleEditing (event) {
	    this.setState({ 
	        editing: true, 
	    });
  	}
  	handleEditingDone (event) {
        this.setState({ editing: false });
    }
    handleEditingChangeText (event) {
        var _changedText = event.target.value;
        this.setState({ 
            changedText: _changedText
        });
    }
    

	render(){	
		var editStyle = {};
	    editStyle.display = 'none';
	    if (this.state.editing) {
	      editStyle.display = 'block';
	    }
		return(
			<div>
				<form className="input-group">
					<input className="form-control" type="text" onChange={this.handleChange.bind(this)} value= {this.state.text}/>

				</form>
				<div style = {editStyle}>   
		            <input type="text" onChange={this.handleEditingChangeText.bind(this)}
		                value={this.state.changedText}/>
		            <button onClick={this.handleEditingDone.bind(this)}> Save</button>
		        </div>
				<button className="btn btn-success" onClick = {this.handleAdd.bind(this)}>ADD</button>
				<div>
				    {this.props.userFiles.map((files, i) => {
					    return(
					      <section key={files.id}>
					        <UserPage
					          files={files.text}
					        
					           />
					      </section>
					    )
					})}
				</div>
			</div>
			);
	}
}
export default User;