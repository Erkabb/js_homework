// var ab = 20,
//   aa = 40;

// function print() {}

// const a = 100,
//   b = 20;
// const c = a + b;

// const printf = () => {};
// console.log("Answer:", c);

//module  => import || export

// const { add, minus } = require("./math");
// console.log(add(10, 30));

// console.log(minus(40, 10));

//object destructing
const person = {
  name: "tergel",
  age: 19,
  hevle: function () {},
};
console.log(person.name);
console.log(person.age);

// const name=person.name;
// const age=person.age;

const { name, age } = person;

console.log("Ner:", name);
console.log("Nas:", age);

//array destructing => array deer indexiin daraallaar

const arr = ["saraa", 30];
const [ner, nas] = arr;

// const ner=arr[0];
// const nas=arr[1];

function check(rank) {
  if (rank === 7) {
    return true;
  } else {
    return false;
  }
}

//towclol \ ternary

const check1 = (rank) => rank === 7;

let ranks = [1, 3, 5, 11, 8, 7];
let index = ranks.findIndex((rank) => rank === 7);
console.log(index);
const idx = ranks.indexOf(7);

//array method MAP

const nA = [];
for (let item of ranks) {
  console.log("value:", item);
  nA.push(item * 2);
}
console.log(ranks);
console.log(nA);

const newArr = ranks.map((val, i) => {
  return i * 2;
});
console.log(newArr);

const neArr = ranks.filter((val) => val > 7);
console.log(neArr);

ranks.forEach((item) => {
  console.log(item);
});

const sum = ranks.reduce((pV, cV) => pV + cV, 0);
console.log(sum);

//ex1

const productData = [
  {
    productName: "Sandwich",
    unitPrice: 17000,
    amount: 15,
    totalPrice: 255000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Beef",
    unitPrice: 27000,
    amount: 10,
    totalPrice: 405000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Coke",
    unitPrice: 3000,
    amount: 50,
    totalPrice: 150000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Juice",
    unitPrice: 2500,
    amount: 50,
    totalPrice: 125000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Icecream",
    unitPrice: 2000,
    amount: 70,
    totalPrice: 140000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Chocolate",
    unitPrice: 5500,
    amount: 40,
    totalPrice: 220000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Milk",
    unitPrice: 4000,
    amount: 30,
    totalPrice: 120000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Yogurt",
    unitPrice: 2000,
    amount: 25,
    totalPrice: 50000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Apple",
    unitPrice: 8000,
    amount: 45,
    totalPrice: 360000,
    casherID: 1,
    date: "2024-06-21",
  },
  {
    productName: "Bread",
    unitPrice: 2500,
    amount: 13,
    totalPrice: 32500,
    casherID: 1,
    date: "2024-06-21",
  },
];

//ex7.1 (Niit borluulatiin dun)
let SumofPrice = productData.reduce(
  (pV, objectPrice) => pV + objectPrice.totalPrice,
  0
);
// {}  let sum = 0;
//   for (let i = 0; i < objectPrice.length; i++) {
//     sum = sum + objectPrice[i].totalPrice;
//   }
//   return sum;
// };

console.log("Borluulaltiin niit dun:", SumofPrice);

//ex7.2 (niit barranii borluulagdsan too)

let sumofAmount = productData.reduce((pV, sumT) => pV + sumT.amount, 0);
console.log("niit barani borluulagdsan too:", sumofAmount);

// let sumofAmount = (objectPrice) => {
//   let sumA = 0;
//   for (let i = 0; i < objectPrice.length; i++) {
//     sumA = sumA + objectPrice[i].amount;
//   }
//   return sumA;
// };

//ex7.3 (Hamgiin ih zaragdsan 5 buteegdehuun)

// let topProducts = productData.filter((product) => {
//   product.amount.sort(function (a, b) {
//     return b - a;
//   });
// });
// console.log("topfive:", topProducts);
//ex7.4 (hamgiin baga 5 zaragdsan buteegdehuun)

let lessFive = (objectPrice) => {
  let amount = [];

  for (let i = 0; i < objectPrice.length; i++) {
    amount.push(objectPrice[i].amount);
  }

  amount.sort(function (a, b) {
    return a - b;
  });
  // console.log("ha:", amount);≠≠
  let amountcopy = amount.slice(0, 5);
  return amountcopy;
};

let lessfive = lessFive(productData);
console.log("hamgiin bagaborluulagdsan buteegdehuun:", lessfive);

//17th of july NPM=node package manager

import chalk from "chalk";

console.log(chalk.bgBlueBright("hello"));
