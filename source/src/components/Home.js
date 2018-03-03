import React from 'react';
import EditableRecipeList from './EditableRecipeList';
import ToggleableRecipeForm from './ToggleableRecipeForm';
import helpers from '../utils/helpers';
import Login from './Login';

class Home extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          description: "You only live once",
          title: "Cupcake",
          id: helpers.guid(),
          img: "http://d3ba08y2c5j5cf.cloudfront.net/wp-content/uploads/2014/11/Singapore-10-favourite-desserts-1024x686.jpg",
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
     
      comments: [
        {
          id: "",
          username: "",
          userComment: "",
        },
      ],
      text: '',
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
          comments: newArr,
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

export default Home;