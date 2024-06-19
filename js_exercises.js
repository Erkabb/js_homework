//ex1

function maxminavg(array) {
  console.log("Array:", array);
  let max = array[0],
    min = array[0],
    sum = 0,
    avg = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    avg = sum / array.length;
    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < array[0]) {
      min = array[i];
    }
  }
  //   console.log("Max:", max);
  //   console.log("Min:", min);
  //   console.log("Avg:", avg);

  return { baga: min, ih: max, dundaj: avg };
}
let result = maxminavg([2, 4, 3, 1, 7, 89]);
console.log("ur dun:", result);

//ex2
let sum1 = 0;
let sumofprice = (arr1) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].items.length; j++) {
      sum1 = sum1 + arr1[i].items[i].price;
    }
  }

  return sum1;
};

let sum = sumofprice([
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
]);
console.log("Borluulaltiin niilber:", sum);
//ex3

function findall(arr2) {
  console.log("Array:", arr2);

  let result = new Array(arr2.length);
  console.log("res", result);
  for (let i = 0; i < arr2.length; i++) {
    result[i] = {
      original: arr2[i],
      square: arr2[i] * arr2[i],
      cube: arr2[i] * arr2[i] * arr2[i],
    };
  }
  return result;
}
let foundall = findall([1, 2, 4, 5]);
console.log(foundall);

//ex4

function maximumsalary(object) {
  // let ajilchid=object.employee ==> array dtrh array ru handah
  // let maxSalary=ajilchid[0].salary
  max = object.employees[0].salary;
  for (let i = 0; i < object.employees.length; i++) {
    if (object.employees[i].salary > max) {
      max = object.employees[i].name;
    }
  }

  return max;
}
const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};
let maximum = maximumsalary(company);
console.log("Hamgiin undur tsalintai ajiltan:", maximum);
