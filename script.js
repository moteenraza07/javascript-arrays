// Step 1 Declaring Arrays

let arrayList = ["moteen", 30, true, "mobeen", 32];
console.log(arrayList);

// Step 2 Accessing Arrays

let firstElement = arrayList[0];
let middleElement = arrayList[2];
let lastElement = arrayList[arrayList.length - 1];
console.log(firstElement);
console.log(middleElement);
console.log(lastElement);

// Step 3 Using Array Properties

let arrayLength = arrayList.length;
console.log(arrayLength);

// Step 4 Array Methods

// removing the last element from the array which is 32
arrayList.pop(32);
console.log(
  arrayList,
  " - This removes the item thats the last one in the array which in this case be luna"
);

// adding an element to the end of the array by using the push method
arrayList.push("Luna");
console.log(arrayList, " - This added luna to the end of the array");

//copies portion of the array and returns it into a new array
let shortArray = arrayList.slice(2, 4);
console.log(shortArray);

let singleElement = arrayList.shift();
console.log(
  singleElement,
  "Returns the first element in the array which in this case would be moteen"
);

console.log(
  arrayList,
  " - this is the new array since shift was used to remove the first element in the array"
);

// Step 5 iterating through arrays

// using modern iteration forEach
arrayList.forEach((value, index) => {
  console.log(`${value} : ${index}`);
});

// adding my elements integer data type to the array
arrayList.push(20, 50, 13, 28);
console.log(arrayList);

// using traditional for loop
let iterator = arrayList.values();
for (let value of iterator) {
  console.log(value);
}

// Step 6 Array Destructing

const [age, value, firstName, ...rest] = arrayList;
console.log(age, `I am ${age} years old`);
console.log(value, `The statement is ${value}`);
console.log(firstName, `My brother's first name is ${firstName}`);
console.log(rest, "The remaining of the array");
