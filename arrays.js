// Is array copied
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4

// Array Operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length + 1) / 2] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggie");

// Calling in an array context
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // this

// Sum input numbers
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Please enter a number: ", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
}

alert( sumInput() );

// A maximal subarray
arr = [1, -2, 3, 4, -9, 6]
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}
