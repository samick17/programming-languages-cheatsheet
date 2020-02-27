# JavaScript-2 Array

## Declare an array variable

```javascript

const array = [];
// Add element to an array, by "push" function
array.push(1);
array.push(3);
array.push(5);
console.log(array); // [1, 3, 5]

```

### Array.prototype.push(...items)

```javascript

const array = [];
array.push(2, 4, 6);
console.log(array); // [2, 4, 6]

array.push.apply(array, [1, 5, 7, 9]);
console.log(array); // [2, 4, 6, 1, 5, 7, 9]

```

### Array.prototype.indexOf(item)

```javascript

const array = [1, 3, 5];
array.indexOf(1); // will be 0
array.indexOf(3); // will be 1
array.indexOf(5); // will be 2

```

### Array.prototype.slice(?start, ?end)

```javascript

// "slice" will make another array and copy the element from one another
const array = [1, 5, 7, 9];
const array2 = array.slice();

array1.push(20);
array2.push(30);

console.log(array1); // [1, 5, 7, 9, 20]
console.log(array2); // [1, 5, 7, 9, 30]

```

### Array.prototype.splice(start, ?deleteCount, ...items)

 - splice can insert element(s) into array.

 - splice can remove element(s) into array.

```javascript

const array = [1, 3, 5];

// Remove the second element
array.splice(1, 1);
console.log(array); // [1, 5]

// Remove 2 elements from index 0
array.splice(0, 2);
console.log(array); // []

// Insert an element into array from index 0
array.splice(0, 0, 3);
console.log(array); // [3]

// Insert 1, 5 into array from index 1
array.splice(1, 0, 1, 5);
console.log(array); // [3, 1, 5]

```

### Array.prototype.filter(callbackfn, ?thisArg)

```javascript

const array = [
	{
		name: 'David',
		atk: 20
	},
	{
		name: 'Henry',
		atk: 25
	},
	{
		name: 'John',
		atk: 19
	}
];

const arrayThatAtkLessThan21 = array.filter(function(character) {
	return character.atk < 21;
});
// Result: 
// [
// 	{
// 		name: 'David',
// 		atk: 20
// 	},
// 	{
// 		name: 'John',
// 		atk: 19
// 	}
// ];
// Or you can use the anonymous function
const arrayThatAtkLessThan21 = array.filter((character) => {
	return character.atk < 21;
});


```

### Array.prototype.join(seperator)

```javascript

const array = ['a', 'b', 'c'];
console.log(array.join(''));
// Output:
// abc

const array = ['a', 'b', 'c'];
console.log(array.join(','));
// Output:
// a,b,c

```


### Array.prototype.concat(array)

concat will create a new array instance and return the new one.

```javascript

const array = [];
const array1 = [1, 3, 5]
const array2 = array.concat(array1);

// Result:
// array will be []
// array1 will be [1, 3, 5]
// array2 will be [1, 3, 5]

console.log(array1);

```

For more information: https://vegibit.com/most-useful-javascript-array-functions/
