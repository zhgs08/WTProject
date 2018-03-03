import React,{Component} from 'react';
import style from '../assets/style.css';
import Recipe from './Recipe';


const ResultItem = ({ category, name, description }) =>
  <div className="box1">
    <div className="name1">
    {name}
    </div>
    <div>
    {description}
    </div>
  </div>;

const Result = ({ state: { products, displayCategory } }) =>
  <div className="result">
    {products
      .filter(({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, name, description}) =>
        <ResultItem category={category} name={name} description={description} />
      )}
  </div>;

const ButtonCategory = ({ setCategory, category }) =>
  <button
    className={`btn-${category}`}
    onClick={() => setCategory(category)}
  >
    {category}
  </button>;

const UI = ({
  state,
  state: { productCategories },
  setCategory,
  allProducts
}) =>
  <div className="box flex-row">
    <div className="box flex-col">
      <h3>Filter by Category</h3>
      {productCategories.map(category =>
        <ButtonCategory setCategory={setCategory} category={category} />
      )}
    </div>
    <div className="box flex-col">
      <h3>Results</h3>
      <Result state={state} />
    </div>
  </div>;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
      products: PRODUCTS,
      productCategories: PRODUCT_CATEGORIES
    
    };
    this.setCategory = this.setCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }
  
  handleChange() {
    var input, filter, items;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    var result = document.getElementsByClassName("box1");
    for (var i=0;i<result.length;i++) {
      var name = result[i].getElementsByClassName("name1")[0].innerHTML.toUpperCase();
      if(filter == name.substring(0, filter.length)) {
        result[i].style.display = "";
      } else {
        result[i].style.display = "none";
      }
    }
  }

  render() {
    return (
      <div >
        <div className = "flex-row"> 
           <input  type="text" id="myInput" placeholder="Search" onChange={this.handleChange} />
      
          <button><i className="search icon" /></button>
        </div>
       
           <UI setCategory={this.setCategory} state={this.state} />;
      </div>
      );
   
  }
}

// data
const PRODUCTS = [
  { category: "dessert", name: "Strawberry Angel Food Dessert", description: "Angel food pieces are topped with sweetened cream cheese, whipped topping and strawberries in glaze in this chilled, layered dessert."},
  { category: "dessert", name: "Lemon Poppy Seed Dessert Cake", description: "Win the potluck or weeknight dessert with this light, lemony and deliciously tart cake. Mix together a lemon cake mix with vanilla pudding mix, eggs, vegetable oil, water and poppy seeds. Bake the batter and cool, then cover with lemon pie filling. Finish with a dreamy lemon pudding and whipped topping cream."},
  { category: "dessert", name: "Chocolate Eclair Dessert", description: "This is a no-bake pudding dessert that's so quick and easy to make--everyone loves it. I always keep the ingredients on hand in case I need a quick dessert. It's best if it sits overnight before serving."},
  { category: "dessert", name: "Hot Fudge Ice Cream Bar Dessert", description: "This is an incredibly easy rich and satisfying ice cream dessert made with ice cream sandwiches and fudge sauce. This keeps in the freezer very well and can be eaten straight from the freezer."},
  { category: "dessert", name: "Ice Cream Sandwich Dessert", description: "No one will believe this awesome dessert is just dressed-up ice cream sandwiches!" },
  { category: "dessert", name: "Hot Fudge Sundae Dessert Bars", description: "Just like the famous ice cream dessert. Very yummy."},
  { category: "chicken", name: "Chicken Parmesan", description: "My version of chicken parmesan is a little different than what they do in the restaurants, with less sauce and a crispier crust."},
  { category: "chicken", name: "Fruity Curry Chicken Salad", description: "A healthy and tasty chicken salad with a fruity twist - great on a croissant or in a honey pita. Note: This salad is best if eaten the day after preparation. This allows the ingredients time to mingle, giving a fuller flavor. If desired, use nonfat mayonnaise." },
  { category: "chicken", name: "Chicken Pot Pie IX", description:"A delicious chicken pie made from scratch with carrots, peas and celery." },
  { category: "chicken", name: "Chicken Fried Chicken", description: "A fun chicken recipe the kids can help prepare. They love crushing the crackers. It does not matter if the measurements aren't perfect, just wing it!"},
  { category: "pizza", name: "This is a great recipe when you don't want to wait for the dough to rise. You just mix it and allow it to rest for 5 minutes and then it's ready to go!! It yields a soft, chewy crust. For a real treat, I recommend you use bread flour and bake it on a pizza stone, but all-purpose flour works well too. Enjoy!" },
  { category: "pizza", name: "Bread Machine Pizza Dough", description: "This is a great bread machine pizza dough. It is quick, easy, and yummy. You can add any spices to increase the flavor, but I like to add basil and rosemary."},
  { category: "pizza", name: "Veggie Pizza", description:"I never have leftovers when I serve this. You can use low-fat or nonfat sour cream for this recipe if you'd like."},
  { category: "meat", name: "Classic and Simple Meat Lasagna", description: "Whole wheat noodles and lean ground beef make this tasty favorite a little lighter." },
  { category: "meat", name: "Charley's Slow Cooker Mexican Style Meat", description: "This recipe can be used with chicken, beef, pork and even venison. It freezes well, and can be made into burritos, tacos, or any number of other Mexican-style dishes. This dish uses a lot of spice, so please be sure to adjust to your taste." },
  { category: "meat", name: "Restaurant-Style Taco Meat Seasoning", description: "This tastes very close to the taco seasoning favored by a very popular fast-food taco restaurant. You can make this at home, and let your family prepare tacos the way they like." },
  { category: "meat", name: "BBQ Pork for Sandwiches", description: "This is so easy and very tasty. Serve on buns with French fries or potato chips."},
  { category: "fish", name: "Indian Fish Curry", description: "A very spicy dish. This recipe is inspired by my mother's Bengali fish recipe she used to make in India." },
  { category: "fish", name: "Fish Tacos", description: "I'm from San Diego and these taste just like home! We live in the south now, and nobody has heard of these! Serve with homemade pico de gallo, and lime wedges to squeeze on top!"},
  { category: "fish", name: "Scrumptious Salmon Cakes", description: "This is one of my husband's favorite meals."}
  
];

// get unique category items
const uniqueItems = (x, i, a) => a.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();


export default Main;
