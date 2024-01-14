window.addEventListener("load", init);

//global variables
const allGroceryProducts = {
  name: "Grocery inventory list",
  products: [
    {
      product: "Milk",
      image: "milk.png",
      price: 1.89
    },
    {
      product: "Cheese",
      image: "cheese.png",
      price: 3.49
    },
    {
      product: "Coca cola",
      image: "coca-cola.png",
      price: 0.89
    },
    {
      product: "Tooth brush",
      image: "toothe-brush.png",
      price: 8.99
    }
  ]
};

const baseUrl = "./assets/images/";
let imageDiv;
let totalPrice = 0.0;
let productPriceP;


/**
 * Function to initialize the application
 * @param {*} event
 */
function init() {
  //fill in all references and add the various event listeners
  console.log("in init");
  imageDiv = document.getElementById('groceryList');
  imageDiv.addEventListener('click', clickImageHandler);
  document.getElementById('buy').addEventListener('click', clickBuyHandler);
  productPriceP = document.getElementById("groceryPrice");
  createImage();
}

/**
 * Function to create an image
 */
function createImage() {
  for (let index = 0; index < allGroceryProducts.products.length; index++) {
    console.log(allGroceryProducts.products[index].image);
    const img = document.createElement('img');
    img.src = baseUrl + allGroceryProducts.products[index].image;
    img.alt = allGroceryProducts.products[index].product;
    console.log(img);
    imageDiv.append(img);
  }
}

/**
 * Function to handle the image click event
 * @param {event} event 
 */
function clickImageHandler(event) {
  const productNameH3 = document.getElementById("groceryName");
  console.log(event.target.alt);
  allGroceryProducts.products.forEach(function (product) {
    if (event.target.alt === product.product) {
      console.log(product.product);
      productPriceP.innerHTML = product.price;
      productNameH3.innerHTML = product.product;
    }
  })
}

function clickBuyHandler(event){
  const totalPriceSpan = document.getElementById("totalPrice");
  console.log(productPriceP.innerHTML);
  totalPrice += parseFloat(productPriceP.innerHTML);
  totalPriceSpan.innerHTML = totalPrice;
}