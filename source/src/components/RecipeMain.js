import React from 'react';
import EditableRecipeList from './EditableRecipeList';
import CommentRecipeList from './CommentRecipeList';
import ToggleableRecipeForm from './ToggleableRecipeForm';
import helpers from '../utils/helpers';
import Login from './Login';

class RecipeMain extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recipes: [
        {
          description: "Test description 1",
          title: "Test title 1",
          id: helpers.guid(),
          img: "",
          category: "Dessert",
        },
        {
          description: "Test description 2",
          title: "Test title 2",
          id: helpers.guid(),
          img: "http://img.taste.com.au/rI_yFqAp/taste/2016/11/raspberry-honey-dessert-cake-92136-1.jpeg",
          category: "Dessert",
        }
      ],
      username: 'zhgs',
      password: 'zhgs',
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
          img: newRecipe.img,
          category: newRecipe.category,
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

  handleChangeUsername (text) {
    this.setState ({username: text});
  }

  handleChangePassword (text) {
    this.setState ({password: text});
  }

  render() {
    if (!this.state.username || !this.state.password) {
      return (
        <div>
          <Login />
        </div>
      );
    }
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