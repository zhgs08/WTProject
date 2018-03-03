import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Input} from 'semantic-ui-react'

class AddComment extends Component{

    constructor(props){
        super(props);

        this.state = {
            comment:{
                id:'',
                username:'',
                userComment:'',
            }
        }
        this.state.username = this.props.username;
    }

    handleChange = (e) =>{
        const comment = this.state.comment;
        comment.userComment = e.target.value;
        comment.id = this.props.lastIndex + 1

        this.forceUpdate();
    }

    handlePostComment = (comment, id) =>{
        comment.username = this.state.username;
        this.props.postComment(comment, id - 1)
        ReactDOM.findDOMNode(this.refs.form).value = "";
    }

    render(){
        return(
            <div className="add-comment">
                <Input className="add-comment-input" type="text" placeholder="Add Comment..." onChange={this.handleChange} />

                <Button color='blue' onClick={this.handlePostComment.bind(this, this.state.comment, this.state.id)}  className="add-comment-btn">Submit</Button>

            </div>
        );
    }
}

export default AddComment