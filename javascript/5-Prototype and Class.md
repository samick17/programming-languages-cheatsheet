# JavaScript-5 Prototype and Class

## Prototype

```javascript

function BaseObject(name) {
	this.name = name;
}
BaseObject.prototype.getName = function() {
	return this.name;
}

const baseObject = new BaseObject('base object');
// then you can call "getName"
console.log(baseObject.getName());

```

## Class & Polymorphism

```javascript

class BaseItem {

	constructor(name) {
		this.type = 'item';
		this.name = name;
	}

	use() {
		console.log(`BaseItem "${this.name}" was used!`);
	}

}
class Potion extends BaseItem {

	constructor(name) {
		super(name);
		this.type = 'potion';
	}

	use() {
		console.log(`Potion "${this.name}" was used!`);
	}

}
// Usage
const item1 = new BaseItem('item1');
item1.use(); // BaseItem "item1" was used!
const item2 = new Potion('mana potion');
item2.use(); // Potion "mana potion" was used!

```
## Inherit by Prototype

```javascript

function inherits(childObject, parentObject) {
	var copyOfParent = Object.create(parentObject.prototype);
	copyOfParent.constructor = childObject;
	childObject.prototype = copyOfParent;
}
function BaseItem(name) {
	this.type = 'item';
	this.name = name;
}
BaseItem.prototype.use = function() {
	console.log(`BaseItem "${this.name}" was used!`);
};
function Potion(name) {
	this.type = 'potion';
	this.name = name;
}
inherits(Potion, BaseItem); // This is equivalent to "class inheritance"
Potion.prototype.use = function() {
	console.log(`Potion "${this.name}" was used!`);
};
// Usage
const item1 = new BaseItem('item1');
item1.use(); // BaseItem "item1" was used!
const item2 = new Potion('mana potion');
item2.use(); // Potion "mana potion" was used!

```
