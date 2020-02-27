# JavaScript-1 Basic

This is a guide for the people who are new to programming & javascript.

## Environment

You can use either NodeJS or browser to execute.

 - NodeJS (https://nodejs.org/en/)
 - Chrome (Open Developer Console by F12 or Ctrl + Shift + I)

## Variable Declarations

```javascript

var name = 'app';
let name = 'app';
const name = 'app';

```

## Variable Assignment

"var" is different from "let" (https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)

```javascript

var name = 'app';
name = 'app123';

let name = 'app';
name = 'app123';

const name = 'app';
name = 'app123'; // Throws an error: "Assignment to constant variable." 

```

## Basic types of javascript

  - Boolean - can be true or false
  - Null - means no value
  - Undefined - a declared variable but has not been given a value
  - Number - integer, floating number.
  - String - an array of characters.
  - Symbol - a unique value that's no equal to any or other value

  Reference link: https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b

## For Loop & For Each

```javascript

const array1 = [1,3,5];

// The index is started from 0
for(let i = 0; i < array1.length; i++) {
	let value = array1[i];
	console.log(value);
}

for(let i = array1.length - 1; i >= 0; i--) {
	let value = array1[i];
	console.log(i, value);
}
// 0 1
// 1 3
// 2 5

const person1 = {
	name: 'HarryPotter',
	age: 18,
	gender: 'male'
};

// for-in
for(let i in person1) {
	let obj = person1[i];
	console.log(i, obj);
}
// name "HarryPotter"
// age 18
// gender "male"

// for-of ES2015+ only
for(let obj of person1) {
	console.log(obj);
}

```
