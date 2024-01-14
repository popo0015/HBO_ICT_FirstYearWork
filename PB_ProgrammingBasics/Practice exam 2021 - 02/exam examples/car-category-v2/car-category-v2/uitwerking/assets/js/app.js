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

/**
 * Function to initialize the application
 * @param {*} event
 */
function init(event) {
  const sbmButton = document.getElementById("sbmButton");
  sbmButton.addEventListener("click", clickHandler);
}

/**
 * Function to handle the click event
 * @param {*} event
 */
function clickHandler(event) {
  event.preventDefault();
  console.log("clicked");
  let vehicleType = document.getElementById("inputVehicleType").value;
  let height = document.getElementById("inputHeight").value;
  let category = checkAnswer(vehicleType, height);
  writeMessage(category);
}

/**
 * Function to check the answer
 * @param vHType - vehicle type
 * @param height - height of the vehicle
 * @return - returns an category object with name and price
 */
function checkAnswer(vHType, height) {
  let label = "?";
  let price = "?";
  console.log("height:", height);
  console.log("vHType:", vHType);
  // studenten mogen elke loop type gebruiken die ze willen.
  carCategories.forEach(function (element, index, array) {
    if (height >= element.minHeight && height <= element.maxHeight) {
      console.log(element.category);
      label = element.category;
      price = element.price;
    } else {
      console.log("dump");
    }
  });
  return { label, price };
}

/**
 * Function to write a message to the DOM.
 * @param category - category object with category name and price
 */
function writeMessage(category) {
  if (category.label == "?") {
    const divMessage = document.getElementById("message");
    const p = document.createElement("p");
    p.innerText = 'Je voertuig is te hoog voor onze tolwegen!'
    p.classList.add("error");
    divMessage.append(p);
  } else {
    const pLabel = document.getElementById("category-label");
    const pPrice = document.getElementById("category-price");
    pLabel.innerText = category.label;
    pPrice.innerText = `${category.price} \u20AC`;
  }
}
