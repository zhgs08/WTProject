import React, {Component} from 'react';
import img from './img.jpg';

class Comment extends Component {
	constructor () {
        super();
        this.state = { editing: false, getInfo: false,
            comment: '',
            //comments: []
        }
    }


    handleChangeContent(e){
        this.setState({
          comment: e.target.value
      })
    }
    handleAdd(e){
        e.preventDefault();
        let comment = this.props.comments;
        comment.push({ comment: this.state.comment });
          
        this.setState({
          comments: comment,
          comment: '',
        });
    }
  render () {
    return (
        <div>
        
            <div className = "info">
                <h2>{this.state.changedName} </h2>
                <img className="imgExpand" src = {this.props.image} />
                <p>        
                    {this.props.content}
                </p>
                {this.props.comments.map((comment, intex)=>
                    <p>
                        <label >{this.props.username}:</label>  {comment.comment}
                    </p>
                )}
                <div>
                    <form className="input-group">
                    <input type="text" onChange= {this.handleChangeContent.bind(this)} value={this.state.comment} />
                    <button className="btn btn-cta" onClick = {this.handleAdd.bind(this)}> Comment</button>
                </form>
                </div>
            </div>
        </div>

    );
	}
}
export default Comment;