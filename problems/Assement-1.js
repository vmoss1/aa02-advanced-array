function getProduct(nums) {
  let product = 1;
  for (let num of nums) {
    product *= num;
  }
  return product;
}

function highestProduct(numsList) {
  let highestProduct = 0;
  let highestI = 0;

  for (let i = 0; i < numsList.length; i++) {
    let numList = numsList[i];
    let ProductList = getProduct(numList);
    if (ProductList > highestProduct) {
      highestProduct = ProductList;
      highestI = i;
    }
  }
  return highestI;
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 7];
const arrayC = [20, 100, 1, 2];
const arrayD = [1, 3, 2, 300];

let score = 0;

if (getProduct(arrayA) === 120) score++;
if (getProduct(arrayB) === 21) score++;
if (getProduct(arrayC) === 4000) score++;
if (getProduct(arrayD) === 1800) score++;

if (highestProduct([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestProduct([arrayA, arrayB]) === 0) score++;
if (highestProduct([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
