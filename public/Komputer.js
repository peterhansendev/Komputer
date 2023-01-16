//Bank

const displayedAmount = document.getElementById("money");
const totalDebt = document.getElementById("totalDebt");
const bankBtn = document.getElementById("button");
displayedAmount.innerText = 200;
totalDebt.innerText = 0;
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
    totalDebt.innerText = borrowedMoney;
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

  fetch('https://komputer.vercel.app/api/item/computerinfo', {
    method: "GET",

  } )
  .then((response) => response.json())
  .then((data) => console.log(data));  
}

function payBack() {
  if (borrowedMoney == 0) {
    newAccount = newAccount + salary;
    displayedAmount.innerHTML = newAccount;
    salary = 0;
    totalDebt.innerText = "0";
    bankBtn.disabled = false;
  }
  if (salary >= borrowedMoney) {
    salary = salary - borrowedMoney;
    displayedAmount.innerHTML = newAccount;
    payment.innerHTML = salary;
    borrowedMoney = 0;
    totalDebt.innerText = "0";
    bankBtn.disabled = false;
  } else if (salary < borrowedMoney) {
    displayedAmount.innerHTML = newAccount;
    borrowedMoney = borrowedMoney - salary;
    salary = 0;
    payment.innerHTML = salary;
    totalDebt.innerText = borrowedMoney;
  }
  if (salary == 0) {
    document.getElementById("payment-btn").disabled = true;
  }
}

// Laptops
const laptopsElement = document.getElementById("laptops-dropdown");
let laptops = [];

fetch("https://komputer.vercel.app/computerinfo")
  .then((response) => response.json())
  .then((data) => (laptops = data))
  .then((laptops) => addToLaptopsMenu(laptops));

const addToLaptopsMenu = (laptops) => {
  laptops.forEach((x) => addToLaptopMenu(x));
  // Default values
  infoH1.innerText = laptops[0].name;
  infoDescription.innerText = laptops[0].description;
  infoPrice.innerText = "Price " + laptops[0].price;
  infoStock.innerText = "Stock: " + laptops[0].stock;
  infoImg.src = laptops[0].image;
  laptopPrice = laptops[0].price;
  //infoSpec.innerText = laptops[0].specs.join("\n ");
};
const addToLaptopMenu = (laptop) => {
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.name));
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
  //infoSection.style.display = "flex";
  const selectedLaptop = laptops[e.target.selectedIndex];
  infoH1.innerText = selectedLaptop.name;
  infoDescription.innerText = selectedLaptop.description;
  infoPrice.innerText = "Price " + selectedLaptop.price;
  infoStock.innerText = "Stock: " + selectedLaptop.stock;
  infoImg.src = selectedLaptop.image;
  laptopPrice = selectedLaptop.price;
  //infoSpec.innerText = selectedLaptop.specs.join("\n");
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

fetch('https://komputer.vercel.app/api/item/computerinfo')
  .then((response) => response.json())
  .then((data) => console.log(data));
  


//Backend communication

const baseUrl = "https://komputer.vercel.app";
let input = "okk"

async function getInfo() {
  fetch('https://komputer.vercel.app/api/item/computerinfo')
  .then((response) => response.json())
  .then((data) => console.log(data));
  if (input == "") {
    return;
  }
  
  const res = await fetch(baseUrl + "/computerinfo", {
    method: "GET",
      headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  const data = await res.json();
  input.valueOf = data.info();
}

async function postInfo() {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel: "input.valueOf",
    }),
  });
}
