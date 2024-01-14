window.addEventListener("load", init);

//global variables
const carCategories = [
  {
    category: "A",
    minHeight: 0,
    maxHeight: 1.8,
    price: 2.56
  },
  {
    category: "B",
    minHeight: 1.9,
    maxHeight: 3,
    price: 3.05
  },
  {
    category: "C",
    minHeight: 3.1,
    maxHeight: 5,
    price: 5.67
  },
  {
    category: "D",
    minHeight: 5.1,
    maxHeight: 8,
    price: 2.45
  }
];

let errorDiv = document.getElementById("message");
let pError = document.createElement("p");
errorDiv.append(pError);

let categoryName;
let priceCategory;
let categoryLabel;
let categoryPrice;
let height;

/**
 * Function to initialize the application
 */
function init() {
  const buttonSubmit = document.querySelector("button");

  categoryLabel = document.getElementById("category-label");
  categoryPrice = document.getElementById("category-price");
  categoryLabel.innerHTML = "";
  categoryPrice.innerHTML = "";

  buttonSubmit.addEventListener("click", submit);
}

/**
 * Function to pick the correct category and price deending on the height
 */
function calculateCategory(height) {
  for (i = 0; i < carCategories.length; i++) {
    if (height > carCategories[i].minHeight && height < carCategories[i].maxHeight) {
      categoryName = carCategories[i].category;
      console.log(categoryName);
      priceCategory = carCategories[i].price;
      console.log(priceCategory);
    }
  }
}

/**
 * Function that is executed when the submit button is clicked
 */
function submit() {
  height = document.querySelector("input").value;
  console.log("submited");
  calculateCategory(height);

  categoryLabel.innerHTML = categoryName;
  categoryPrice.innerHTML = priceCategory;
}