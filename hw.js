// //ex1
// let count = (arr, too) => {
//   console.log("before:", arr);
//   arr.push(too);
//   return arr;
// };
// result = count([3, 4, 2, 1, 6], 9);
// console.log("result:", result);

// //ex2
// let newArray = (array, lengthArr) => {
//   for (let l = 1; l < lengthArr; l++) {
//     array.push(l + 1);
//   }
//   return array;
// };
// result2 = newArray([], 5);
// console.log("Ur dun", result2);

// //ex length urttai elementiin utga 100-300 hoorond

// let createArray = (len, min, max) => {
//   let arr = [];
//   for (let i = 0; i < len; i++) {
//     let rndToo = 0;
//     while (rndToo < min) {
//       rndToo = Math.floor(Math.random() * max);
//     }
//     arr.push(rndToo);
//   }
//   return arr;
// };
// let a = createArray(5, 100, 300);
// console.log("Array:", a);

// //ex3

// sumandAvg = (Newarr) => {
//   let sum = 0,
//     avg = 0;
//   console.log("Array: ", Newarr);
//   for (let i = 0; i < Newarr.length; i++) {
//     sum = sum + Newarr[i];
//     avg = sum / Newarr.length;
//   }
//   return { niilber: sum, dundaj: avg };
// };

// let num = prompt("too oruulna uu:");
// let newArr = [];
// let tArr = num.split(" ");
// for (let i = 0; i < tArr.length; i++) {
//   newArr.push(Number(tArr[i]));
// }

// let conc = sumandAvg(newArr);
// console.log("sum and avg:", conc);

// // Number() "90.90" => 90.90
// // parseInt()  "10.90" => 10
// // parseFloat =>

// //ex4

// let text = prompt("Uguulber oruulna uu:");
// let textArr = text.split(" ");
// let result3 = "";
// console.log(textArr);
// for (let i = 0; i < textArr.length; i++) {
//   let first = textArr[i];
//   let firstword = textArr[i][0].toUpperCase();
//   //   console.log("g:", firstword);
//   result3 = result3.concat(firstword + first.slice(1), " ");
// }
// console.log(result3);
// // console.log("G:", textArr);
// // console.log(textArr[0][0]);

// //ex5

// function reverseText(text) {
//   return text.split("").reverse().join("");
// }

// const teArr = ["hell", "well", "sell"];
// function reverseArray(inputArr) {
//   let r = [];
//   for (let i = 0; i < inputArr.length; i++) {
//     // console.log(reverseText(inputArr[i]));
//     r.push(reverseText(inputArr[i]));
//   }
//   return r;
// }
// let ra = reverseArray(teArr);
// console.log(teArr);
// console.log(ra);
// reverseArray(teArr);

// //ex6;

// function findText(inText, outText) {
//   if (inText.includes(outText)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const sentence = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// let keyword = prompt("garag oruulna uu:");
// let findingText = findText(sentence, keyword);
// console.log("oruulsan keyword text-d baigaa eseh:", findingText);
// // console.log(sentence.indexOf(keyword));

// //ex7

// const productData = [
//   {
//     productName: "Sandwich",
//     unitPrice: 17000,
//     amount: 15,
//     totalPrice: 255000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Beef",
//     unitPrice: 27000,
//     amount: 10,
//     totalPrice: 405000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Coke",
//     unitPrice: 3000,
//     amount: 50,
//     totalPrice: 150000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Juice",
//     unitPrice: 2500,
//     amount: 50,
//     totalPrice: 125000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Icecream",
//     unitPrice: 2000,
//     amount: 70,
//     totalPrice: 140000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Chocolate",
//     unitPrice: 5500,
//     amount: 40,
//     totalPrice: 220000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Milk",
//     unitPrice: 4000,
//     amount: 30,
//     totalPrice: 120000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Yogurt",
//     unitPrice: 2000,
//     amount: 25,
//     totalPrice: 50000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Apple",
//     unitPrice: 8000,
//     amount: 45,
//     totalPrice: 360000,
//     casherID: 1,
//     date: "2024-06-21",
//   },
//   {
//     productName: "Bread",
//     unitPrice: 2500,
//     amount: 13,
//     totalPrice: 32500,
//     casherID: 1,
//     date: "2024-06-21",
//   },
// ];

// //ex7.1 (Niit borluulatiin dun)
// let SumofPrice = (objectPrice) => {
//   let sum = 0;
//   for (let i = 0; i < objectPrice.length; i++) {
//     sum = sum + objectPrice[i].totalPrice;
//   }
//   return sum;
// };

// let Sum = SumofPrice(productData);
// console.log("Borluulaltiin niit dun:", Sum);

// //ex7.2 (niit barranii borluulagdsan too)

// let sumofAmount = (objectPrice) => {
//   let sumA = 0;
//   for (let i = 0; i < objectPrice.length; i++) {
//     sumA = sumA + objectPrice[i].amount;
//   }
//   return sumA;
// };

// let SumA = sumofAmount(productData);
// console.log("Buh buteegdehuuni niit borluulagdsan too:", SumA);

// //ex7.3 (Hamgiiin ih zaragdsan 5 buteegdehuun)

// let topFive = (objectPrice) => {
//   let amount = [];

//   for (let i = 0; i < objectPrice.length; i++) {
//     amount.push(objectPrice[i].amount);
//   }

//   amount.sort(function (a, b) {
//     return b - a;
//   });
//   // console.log("j:", amount);
//   let amountcopy = amount.slice(0, 5);
//   return amountcopy;
// };

// let maxprofive = topFive(productData);
// console.log("hamgiin ih borluulagdsan buteegdehuun:", maxprofive);

// //ex7.4 (hamgiin baga 5 zaragdsan buteegdehuun)

// let lessFive = (objectPrice) => {
//   let amount = [];

//   for (let i = 0; i < objectPrice.length; i++) {
//     amount.push(objectPrice[i].amount);
//   }

//   amount.sort(function (a, b) {
//     return a - b;
//   });
//   // console.log("ha:", amount);
//   let amountcopy = amount.slice(0, 5);
//   return amountcopy;
// };

// let lessfive = lessFive(productData);
// console.log("hamgiin bagaborluulagdsan buteegdehuun:", lessfive);
