import React from 'react';

class RecipeForm extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      description: this.props.description || '',
      img: this.props.img || '',
      category: this.props.category ||  '',
    }
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };


  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  };

   handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      description: this.state.description,
    });
  };

  render() {
    const submitText = this.props.id ? 'Submit' : 'Create';
    return (
      <div className='gtco-container'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input
                type='text'
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='field'>
              <label>Description</label>
              <input
                type='text'
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>
            <div className='field'>
              <label>Category</label>
              <select className="form-control">
                              <option value={this.state.category} onChange={this.handleCategoryChange}> Desserts </option>
                              <option value={this.state.category} onChange={this.handleCategoryChange}> Cookies </option>
                              <option value={this.state.category} onChange={this.handleCategoryChange}> Pancakes </option>
                            </select>
            </div>
            <div className='ui two bottom attached buttons'>
              <button
                className='ui basic blue button'
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button
                className='ui basic red button'
                onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default RecipeForm;