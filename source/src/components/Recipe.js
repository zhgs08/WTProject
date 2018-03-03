import React from 'react';

class Recipe extends React.Component {
  componentDidMount() {
      this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  render() {
    return (
      <div className="gtco-container">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="fh5co-card-item image-popup">
                          <img src="http://d3ba08y2c5j5cf.cloudfront.net/wp-content/uploads/2014/11/Singapore-10-favourite-desserts-1024x686.jpg" alt="Image" className="img-responsive"/>
              <div className="overlay"><i className="ti-plus"></i></div>
                <div className="fh5co-text">
                  <h2>{this.props.title}</h2>
                  <p>{this.props.description}</p>
                <div className='extra content'>
                    <span 
                      className='right floated edit icon'
                      onClick={this.props.onEditClick}
                      >
                      <i className='edit icon' />
                    </span>
                    <span 
                      className='right floated trash icon'
                      onClick={this.handleTrashClick}  
                      >
                      <i className='trash icon' />
                    </span>
                    <span 
                      className='right floated comment icon'
                      onClick={this.handleTrashClick}  
                      >
                      <i className='comment icon' />
                    </span>
                  </div>
              </div>
            </div>
          </div>
       
      </div>
    );
  }
}

export default Recipe;