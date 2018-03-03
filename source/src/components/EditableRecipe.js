import React from 'react';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

class EditableRecipe extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      editFormOpen: false,
    };
  }

  handleEditClick = () => {
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

  handleSubmit = (recipe) => {
    this.props.onFormSubmit(recipe);
    this.closeForm();
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <RecipeForm
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          img={this.props.img}
          category={this.props.category}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Recipe
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          img={this.props.img}
          category={this.props.category}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }
}

export default EditableRecipe;