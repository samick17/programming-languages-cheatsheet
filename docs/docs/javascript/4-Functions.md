# JavaScript-4 Functions

## Functions

```javascript

	function add(a, b) {
		return a + b;
	}

	function writeItemsWithProgress(items, onProgressCallback) {
		for(let i = 0; i < items.length; i++) {
			let item = items[i];
			//　do somethint with item
			onProgressCallback(i / items.length * 100);
		}
	}

	console.log(add(3, 5));
	writeItemsWithProgress([1, 3, 5, 7, 3, 1, 2], function(progress) {
		console.log(progress);
	});

	// Lambda function (Or called Arrow function)

	const foo = () => {
		console.log('----');
	};

	// writeItemsWithProgress can be changed to:
	writeItemsWithProgress([1, 3, 5, 7, 3, 1, 2], (progress) => {
		console.log(progress);
	});

```

## Pass function as an argument

Also known as callback function, used to report state for async function.
For example: Import file(s) / Export file(s).

```javascript

	function importFile(data, onProgressCallback) {
		onProgressCallback(0);
		// handle the data and report progress
		onProgressCallback(0.5);
		// handle the data and report progress
		onProgressCallback(1);
	}
	importFile({}, function(progress) {
		console.log('Progress: ', progress);
	});
	// Progress: 0
	// Progress: 0.5
	// Progress: 1


```

## Function as a return value

```javascript

	function createObjectHandlerByExt(ext) {
		return function(object) {
			console.log('Load object', object, ' extension: ', ext);
		};
	}
	const jsonHandler = createObjectLoaderBy('json');
	jsonHandler({
		name: 'myObject'
	});
	//
	// Load object {name: 'myObject'} extension: json

	const xmlHandler = createObjectLoaderBy('xml');
	jsonHandler({
		name: 'myObject'
	});
	// Load object {name: 'myObject'} extension: xml

```

## Closures

A function which access variables defined by outside.
The recordPlayer is a closure function.

```javascript

	function start() {
		let gameName = 'PacMan';
		function recordPlayer(name) {
			return gameName + ' - ' + name;
		}
		return recordPlayer();
	}

	start();

```

## Pure function

A pure function is a function which:

  - Given the same input, will return the same output.
  - Produces no side effects. (Independent of state).
