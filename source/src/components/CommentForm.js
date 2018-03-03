import React from 'react';

class CommentForm extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      username: this.props.username || '',
      userComment: this.props.userComment || '',
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  handleCommentChange = (e) => {
    this.setState({
      userComment: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      username: this.state.username,
      userComment: this.state.userComment,
    });
  };

  render() {
    const submitText = this.props.id ? 'Submit' : 'Create';
    return (
      <div className='gtco-container'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Username</label>
              <input
                type='text'
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className='field'>
              <label>Comment</label>
              <input
                type='text'
                value={this.state.userComment}
                onChange={this.handleCommentChange}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
                className='ui basic blue button'
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button
                className='ui basic red button'
                onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CommentForm;