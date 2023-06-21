'use strict';
// # Map

// ~ creation and convertion
{
	// = can be created from nested array with key-value pairs:
	const arr = [
		['first', 1],
		['second', 2],
		['third', 3],
	];

	const map = new Map(arr);
	console.log(map);

	// = we can get such an array from object, using Object.entries(), and then convert it into Map
	const obj = {
		name: 'John',
		age: 30,
	};

	const map2 = new Map(Object.entries(obj));
	console.log(map2);

	// = reverse transformation map => object, using Object.fromEntries()
	console.log(Object.fromEntries(map2));
}

// ~ methods
{
	const map = new Map();

	const obj = {};
	obj['1'] = 'str';
	obj[1] = 'num';
	console.log(obj);

	// = set
	map.set('1', 'str'); // string as a key
	map.set(1, 'num'); // number as a key

	console.log(map);

	// unlike Object, Map keeps the type of the key, so 1 in this case won't be converted to Number and 2 different values will be preserved

	map.set(true, 'bool');
	map.set({ name: 'John' }, 'objectKeyValue'); // object as a key
	map.set([0, 1, 2], 'arrayKeyValue'); // array as a key
	// set chaining 🕮 <cyberbiont> aab2a8af-b76e-4c1b-877b-62dd3c0e3631.md

	console.log(map);

	// = size
	console.log(map.size);

	// = get
	// access the value - get
	console.log(map.get(1));
	console.log(map.get('1'));

	// = has
	//  presence of property (like 'prop' in obj for object)
	console.log(map.has('1'));

	// = delete
	// property deletion
	map.delete('1');
	console.log(map.has('1'));

	// = clear
	// clear the whole map
	map.clear();
	console.log(map);

	// you cannot access a specific element on map by index, like you do with array[0]; you need to convert it into array first
}

// ~ iteration
{
	const pricesMap = new Map([
		['cucumber', 500],
		['tomato', 350],
		['onion', 50],
	]);

	// = keys(), values(), entries()
	// (similar to Object.keys(), Object.values(), Object.entries())
	for (const key of pricesMap.keys()) console.log(key);
	for (const value of pricesMap.values()) console.log(value);
	for (const [key, value] of pricesMap.entries()) console.log(key, value);

	// also works without .entries()
	//  because for..of by default uses Map.entries() method while doing the iteration:
	for (const [key, value] of pricesMap) console.log(key, value);

	// = forEach
	pricesMap.forEach((value, key, map) => {
		console.log(key, value);
	});
}

// @if level !== 'basic'
// ~ serializing a map
{
	const map = new Map([
		[{ a: 1 }, 'foo'],
		[{ b: 2 }, 'baz'],
	]);

	const serializedMap = JSON.stringify(Array.from(map.entries()));
	console.log(serializedMap);

	const parsedMap = new Map(JSON.parse(serializedMap));
	console.log(parsedMap);
}
// @endif

// let mySerialMap = JSON.stringify(Array.from(myMap.entries()));

// TODO ? ask the question Objects vs maps
// @if true
/*
// 🕮 <ltc> 18d3df19-778b-4ef2-ab39-54295aa2ecd6.md
# Map vs Object for collections:

- there is a size property;
- map is easily iterable, and no prototype keys
- we can have any type of keys, including objects;
- keys are always sorted in the order of their addition (objects do not guarantee that)
- map is more performance-effective then object if we add/delete properties often;
*/

// @endif
// # set
/*
“set of values” (without keys), where each value may occur only once
*/

// ~ creation
// can be created from any iterable (usually array)
{
	const set = new Set([2, 2, 4, 4, 1, 1]);
	console.log(set);
	// 🕮 <cyberbiont> 9ca04f69-942e-48a7-a269-c5b78e23c6c6.md
}
{
	const set = new Set('abracadabra');
	console.log(set);
}

// ~ methods
{
	const set = new Set();

	const john = { name: 'John' };
	const pete = { name: 'Pete' };
	const mary = { name: 'Mary' };

	// = add
	// The main feature is that repeated calls of set.add(value) with the same value don’t do anything.
	// That’s the reason why each value appears in a Set only once.
	set.add(john);
	set.add(pete);
	set.add(mary);
	set.add(john);
	set.add(mary);

	// = size
	console.log(set.size, set);

	// = has
	console.log(set.has(john));

	// = delete
	set.delete(john);
	console.log(set.has(john));
	console.log(set);

	// = clear
	set.clear();
	console.log(set);

	// ! you cannot access a specific element on set like you do with array[0]; you need to convert it into array first
}

// ~ iteration
{
	// = for ... of
	const set = new Set(['orange', 'apple', 'banana']);

	for (const value of set) console.log(value);

	// = forEach
	set.forEach((value, valueAgain, array) => {
		console.log(value);
	});

	// 🕮 <cyberbiont> b1070e17-6e29-4076-83f2-ad683bd3ee58.md
}

// ~ usage example
// using Set to extract only unique values from array
{
	const array = [1, 5, 6, 6, 7, 5, 8];
	const arrayOfUniqueValues = Array.from(new Set(array));
	console.log(arrayOfUniqueValues);
}

// # weak map
/*
if we need objects to be the keys of collection, using WeakMap allows us to make them garbage-collectable

If we use an object as the key in WeakMap, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

Usually this is what we want, if we have some temporary collection of values, like cache
*/

{
	// ! keys MUST be objects
	const weakMap = new WeakMap();

	const obj = {};

	weakMap.set(obj, 'ok'); // works fine (object key)

	// can't use a string as the key
	// weakMap.set('test', 'Whoops'); // Error, because "test" is not an object}
}

{
	let john = { name: 'John' };

	const weakMap = new WeakMap();
	weakMap.set(john, 'Connor');

	console.log(weakMap.get(john));

	john = null; // overwrite the reference

	// john is removed from memory!
	console.log(weakMap.get(john));
}

// ~ methods
// ! WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.
/*
WeakMap has only the following methods:
	weakMap.set(key, value)
	weakMap.get(key)
	weakMap.delete(key)
	weakMap.has(key)
*/

// # WeakSet
/*
behaves similarly to WeakMap
- may contain only objects
- An object exists in the set while it is reachable from somewhere else.
- Like Set, it supports add, has and delete, but not size, keys() and no iterations.

- usecase - a temporary (additional) storage for someting like “yes/no” facts. A membership in WeakSet may mean something about the object.
*/
// ~ usage example
// Example: a list of users, that has visited our site
{
	const visitedSet = new WeakSet();

	let john = { name: 'John' };
	let pete = { name: 'Pete' };
	let mary = { name: 'Mary' };

	visitedSet.add(john); // John visited us
	visitedSet.add(pete); // Then Pete
	visitedSet.add(john); // John again

	// visitedSet has 2 users now

	// check if John visited?
	console.log(visitedSet.has(john)); // true
	console.log(visitedSet.has(john));
	// check if Mary visited?
	console.log(visitedSet.has(mary)); // false

	john = null;
	console.log(visitedSet.has(john));

	// visitedSet will be cleaned automatically
}
