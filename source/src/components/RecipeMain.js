import React from 'react';
import EditableRecipeList from './EditableRecipeList';
import CommentRecipeList from './CommentRecipeList';
import ToggleableRecipeForm from './ToggleableRecipeForm';
import helpers from '../utils/helpers';

class RecipeMain extends React.Component {

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
              <div className="fh5co-text">
                <div className='extra content'>
                         
                <EditableRecipeList
                  recipes={this.state.recipes}
                  onFormSubmit={this.handleEditFormSubmit}
                  onTrashClick={this.handleTrashClick}
                />
                <ToggleableRecipeForm
                  onFormSubmit={this.handleCreateFormSubmit}
                />
                  
              </div>
            </div>
          </div>
  
    );
  }
}

export default RecipeMain;