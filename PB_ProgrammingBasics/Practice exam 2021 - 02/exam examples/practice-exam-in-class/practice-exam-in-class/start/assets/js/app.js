window.addEventListener("load", init);

// global variables
const allGroceryProducts = {
  name: "Grocery inventory list",
  products: [
    {
      product: "Milk",
      image: "milk.png",
      price: 1.89,
    },
    {
      product: "Cheese",
      image: "cheese.png",
      price: 3.49,
    },
    {
      product: "Coca cola",
      image: "coca-cola.png",
      price: 0.89,
    },
    {
      product: "Tooth brush",
      image: "toothe-brush.png",
      price: 8.99,
    },
  ],
};

const imageUrl = "./assets/images/";
const listDiv = document.getElementById("groceryList");
const groceryName = document.getElementById("groceryName");
const groceryPrice = document.getElementById("groceryPrice");
const totalPrice = document.getElementById("totalPrice");
let total = 0;
const button = document.getElementById("buy");

/**
 * Function to initialize the application
 * @param {*} event
 */
function init() {
  for (let i = 0; i < allGroceryProducts.products.length; i++) {
    const imageElement = allGroceryProducts.products[i];
    const image = document.createElement("img");
    image.src = `${imageUrl}${allGroceryProducts.products[i].image}`;
    image.classList = "groceryImage";
    image.alt = `${allGroceryProducts.products[i].product}`;

    image.addEventListener("click", function() {
      viewInList(imageElement);
    });

    listDiv.appendChild(image);
  }

  button.addEventListener("click", function() {
    const currentPrice = parseFloat(groceryPrice.innerHTML.match(/[\d\.]+/)[0]);
    // (/[\d\.]+/) => finds the first occurrence of one or more digits (\d) or a dot (.)
    // [0]: This accesses the first element of the array returned by match.
    // parseFloat(...): This converts the matched string into a floating-point number
    total += currentPrice;
    totalPrice.innerHTML = total.toFixed(2);
  });
}

function viewInList(imageElement) {
  groceryName.innerHTML = `Product name: ${imageElement.product}`;
  groceryPrice.innerHTML = `Product price: ${imageElement.price}`;
}
