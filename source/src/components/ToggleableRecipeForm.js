import React from 'react';
import RecipeForm from './RecipeForm';

class ToggleableRecipeForm extends React.Component {
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

  handleFormSubmit = (recipe) => {
    this.props.onFormSubmit(recipe);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <RecipeForm
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
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableRecipeForm;