let helpers = (function () {
  
  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  function newRecipe(attrs = {}) {
    const recipe = {
      title: attrs.title || 'Recipe',
      description: attrs.description || 'Description',
      img: attrs.img || "http://img.taste.com.au/rI_yFqAp/taste/2016/11/raspberry-honey-dessert-cake-92136-1.jpeg",
      category: attrs.category || 'Category',
      id: guid(),
    };
    return recipe;
  }

  function newComment(attrs = {}) {
    const comment = {
      username: attrs.username,
      userComment: attrs.userComment,
      id: guid(),
    };
    return comment;
  }

  function findById(array, id, cb) {
    array.forEach((el) => {
      if (el.id === id) {
        cb(el);
        return;
      }
    });
  }


  return {
    newRecipe,
    newComment, 
    findById,
    guid,
  };
}());


export default helpers;