import React from 'react';
import EditableRecipeList from './EditableRecipeList';
import ToggleableRecipeForm from './ToggleableRecipeForm';
import CommentRecipeList from './CommentRecipeList';
import ToggleableCommentForm from './ToggleableCommentForm';
import helpers from '../utils/helpers';

class Home extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          description: "Test description 1",
          title: "Test title 1",
          id: helpers.guid(),
        },
        {
          description: "Test description 2",
          title: "Test title 2",
          id: helpers.guid(),
        }
      ],
      comments: [
        {
          username: "zhgs",
          userComment: "tasty",
        },
      ]
    };
  }

 
  handleCreateFormSubmit = (recipe) => {
    this.createRecipe(recipe);
  };

  createRecipe = (recipe) => {
    const t = helpers.newRecipe(recipe);
    this.setState({
      recipes: this.state.recipes.concat(t),
    });
  };


  handleEditFormSubmit = (recipe) => {
    this.updateRecipe(recipe)
  };


  updateRecipe = (newRecipe) => {
  
    const newArr = this.state.recipes.map((recipe) => {
      if (recipe.id === newRecipe.id) {
        return Object.assign({}, recipe, {
          title: newRecipe.title,
          description: newRecipe.description,
        });
      } else {
        return recipe;
      }
    });
    
    this.setState({
      recipes: newArr,
    });    
  };

  handleCommentFormSubmit = (comment) => {
    this.newComment(comment)
  };


  newComment = (newComment) => {
  
    const newArr = this.state.comments.map((comment) => {
      if (comment.id === newComment.id) {
        return Object.assign({}, comment, {
          username: newComment.username,
          userComment: newComment.userComment,
        });
      } else {
        return comment;
      }
    });
    
    this.setState({
      comments: newArr,
    });    
  };


  handleTrashClick = (recipeId) => {
    this.deleteRecipe(recipeId);
  };

  deleteRecipe = (recipeId) => {
    this.setState({
      recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId),
    })
  };

	render() {
	    return (
		    	<div className="gtco-container">
			    	<div className="row">
  						<div className="col-md-8 col-md-offset-2 text-center gtco-heading">
  							<h2 className="cursive-font primary-color">Popular Dishes</h2>
  							<p>All in Good Taste!</p>
  						</div>
					  </div>
					  <EditableRecipeList
			            recipes={this.state.recipes}
			            onFormSubmit={this.handleEditFormSubmit}
			            onTrashClick={this.handleTrashClick}
			      />
			      <ToggleableRecipeForm
			            onFormSubmit={this.handleCreateFormSubmit}
			      />
				</div>
    	);
  	}
}

export default Home;