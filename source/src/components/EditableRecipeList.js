import React from 'react';
import EditableRecipe from './EditableRecipe';

class EditableRecipeList extends React.Component {
	render() {
    const recipes = this.props.recipes.map((recipe) => (
      <EditableRecipe
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        description={recipe.description}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
      />
    ));
    return (
      <div id='recipes'>
        {recipes}
      </div>
    );
  }
}

export default EditableRecipeList;