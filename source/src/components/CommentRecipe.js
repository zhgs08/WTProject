import React from 'react';
import Recipe from './Recipe';
import CommentForm from './CommentForm';

class CommentRecipe extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      editFormOpen: false,
    };
  }

  handleCommentClick = () => {
    this.openForm();
  }

  openForm = () => {
    this.setState({
      editFormOpen: true,
    })
  };

  handleFormClose = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.setState({
      editFormOpen: false,
    })
  };

  handleSubmit = (comment) => {
    this.props.onFormSubmit(comment);
    this.closeForm();
  };

  render() {
    if (this.state.CommentFormOpen) {
      return (
        <CommentForm
          id={this.props.id}
          username={this.props.username}
          userComment={this.props.userComment}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Recipe
          id={this.props.id}
          username={this.props.title}
          userComment={this.props.userComment}
          onCommentClick={this.handleCommentClick}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }
}

export default CommentRecipe;