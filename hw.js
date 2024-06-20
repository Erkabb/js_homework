//ex1
let count = (arr, too) => {
  console.log("before:", arr);
  arr.push(too);
  return arr;
};
result = count([3, 4, 2, 1, 6], 9);
console.log("result:", result);

//ex2
let newArray = (array, lengthArr) => {
  for (let l = 1; l < lengthArr; l++) {
    array.push(l + 1);
  }
  return array;
};
result2 = newArray([], 5);
console.log("Ur dun", result2);

//ex length urttai elementiin utga 100-300 hoorond

let createArray = (len, min, max) => {
  let arr = [];
  for (let i = 0; i < len; i++) {
    let rndToo = 0;
    while (rndToo < min) {
      rndToo = Math.floor(Math.random() * max);
    }
    arr.push(rndToo);
  }
  return arr;
};
let a = createArray(5, 100, 300);
console.log("Array:", a);

//ex3

sumandAvg = (Newarr) => {
  let sum = 0,
    avg = 0;
  console.log("Array: ", Newarr);
  for (let i = 0; i < Newarr.length; i++) {
    sum = sum + Newarr[i];
    avg = sum / Newarr.length;
  }
  return { niilber: sum, dundaj: avg };
};

let num = prompt("too oruulna uu:");
let newArr = [];
let tArr = num.split(" ");
for (let i = 0; i < tArr.length; i++) {
  newArr.push(Number(tArr[i]));
}

let conc = sumandAvg(newArr);
console.log("sum and avg:", conc);

// Number() "90.90" => 90.90
// parseInt()  "10.90" => 10
// parseFloat =>

//ex4

let text = prompt("Uguulber oruulna uu:");
let textArr = text.split(" ");
let result3 = "";
console.log(textArr);
for (let i = 0; i < textArr.length; i++) {
  let first = textArr[i];
  let firstword = textArr[i][0].toUpperCase();
  //   console.log("g:", firstword);
  result3 = result3.concat(firstword + first.slice(1), " ");
  console.log(result3);
}

console.log("G:", textArr);
console.log(textArr[0][0]);

//ex5

function reverseText(text) {
  return text.split("").reverse().join("");
}

const teArr = ["hell", "well", "sell"];
function reverseArray(inputArr) {
  let r = [];
  for (let i = 0; i < inputArr.length; i++) {
    console.log(reverseText(inputArr[i]));
    r.push(reverseText(inputArr[i]));
  }
  return r;
}
let ra = reverseArray(teArr);
console.log(teArr);
console.log(ra);
reverseArray(teArr);
