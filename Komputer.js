//Bank
const displayedAmount = document.getElementById("money");
const bankBtn = document.getElementById("button");
displayedAmount.innerText = 200;
let newAccount = 200;
let borrowedMoney = 0;

function loan() {
  let amount = prompt(
    "Please enter the amount you wish to borrow:",
    newAccount
  );

  if (/[a-zA-Z]/g.test(amount)) {
    window.alert("Numbers only!!");
  } else if (amount > newAccount) {
    window.alert("You can't borrow more than 2X");
  } else if (amount == "") {
    window.alert("Please type an amount");
  } else {
    newAccount = newAccount += parseInt(amount);
    displayedAmount.innerHTML = newAccount;
    borrowedMoney = parseInt(amount);
    bankBtn.innerText = "Outstanding loan: " + borrowedMoney + " Kr.";
    bankBtn.disabled = true;
  }
}

// Work
const workBtn = document.getElementById("work-btn");
const payment = document.getElementById("payment");
let salary = [];

function work() {
  salary = parseInt(salary + 100);
  payment.innerHTML = salary;
  document.getElementById("payment-btn").disabled = false;
}

function payBack() {
  if (borrowedMoney == 0) {
    newAccount = newAccount + salary;
    displayedAmount.innerHTML = newAccount;
    salary = 0;
    bankBtn.innerText = "Get a loan";
    bankBtn.disabled = false;
  }
  if (salary >= borrowedMoney) {
    salary = salary - borrowedMoney;
    displayedAmount.innerHTML = newAccount;
    payment.innerHTML = salary;
    borrowedMoney = 0;
    bankBtn.innerText = "Get a loan";
    bankBtn.disabled = false;
  } else if (salary < borrowedMoney) {
    displayedAmount.innerHTML = newAccount;
    borrowedMoney = borrowedMoney - salary;
    salary = 0;
    payment.innerHTML = salary;
    bankBtn.innerText = "Outstanding loan: " + borrowedMoney + " Kr.";
  }
  if (salary == 0) {
    document.getElementById("payment-btn").disabled = true;
  }
}

// Laptops
const laptopsElement = document.getElementById("laptops-dropdown");
let laptops = [];

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
  .then((response) => response.json())
  .then((data) => (laptops = data))
  .then((laptops) => addToLaptopsMenu(laptops));

const addToLaptopsMenu = (laptops) => {
  laptops.forEach((x) => addToLaptopMenu(x));
  // Default values
  infoH1.innerText = laptops[0].title;
  infoDescription.innerText = laptops[0].description;
  infoPrice.innerText = "Price " + laptops[0].price;
  infoStock.innerText = "Stock: " + laptops[0].stock;
  infoImg.src =
    "https://noroff-komputer-store-api.herokuapp.com/" + laptops[0].image;
  laptopPrice = laptops[0].price;
  infoSpec.innerText = laptops[0].specs.join("\n ");
};
const addToLaptopMenu = (laptop) => {
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.title));
  laptopsElement.appendChild(laptopElement);
};

// Info
const infoSection = document.getElementById("info");
const infoH1 = document.getElementById("info-h1");
const infoDescription = document.getElementById("info-description");
const infoSpec = document.getElementById("info-specs");
const infoPrice = document.getElementById("info-price");
const infoStock = document.getElementById("info-stock");
const infoImg = document.getElementById("info-img");
const infoButton = document.getElementById("info-btn");
let laptopPrice;

function handleClick(e) {
  infoSection.style.display = "flex";
  const selectedLaptop = laptops[e.target.selectedIndex];
  infoH1.innerText = selectedLaptop.title;
  infoDescription.innerText = selectedLaptop.description;
  infoPrice.innerText = "Price " + selectedLaptop.price;
  infoStock.innerText = "Stock: " + selectedLaptop.stock;
  infoImg.src =
    "https://noroff-komputer-store-api.herokuapp.com/" + selectedLaptop.image;
  laptopPrice = selectedLaptop.price;
  infoSpec.innerText = selectedLaptop.specs.join("\n");
}

laptopsElement.addEventListener("change", handleClick);

function buyButton() {
  if (laptopPrice <= newAccount) {
    window.alert("You bought a laptop");
    newAccount = newAccount - laptopPrice;
    displayedAmount.innerHTML = newAccount;
  } else {
    window.alert("You can't afford this computer");
  }
}
