import React from 'react';
import CommentRecipe from './CommentRecipe';

class CommentRecipeList extends React.Component {
	render() {
    const comments = this.props.comments.map((comment) => (
      <CommentRecipe
        key={comment.id}
        id={comment.id}
        username={comment.username}
        userComment={comment.userComment}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
      />
    ));
    return (
      <div id='comments'>
        {comments}
      </div>
    );
  }
}

export default CommentRecipeList;