import React from 'react';
import CommentForm from './CommentForm';

class ToggleableCommentForm extends React.Component {
	 constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleFormSubmit = (comment) => {
    this.props.onFormSubmit(comment);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <CommentForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='comment icon' />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableCommentForm;