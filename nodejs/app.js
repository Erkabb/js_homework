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
