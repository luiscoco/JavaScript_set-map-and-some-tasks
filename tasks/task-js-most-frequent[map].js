/*
Напишите функцию getMostFrequent, которая будет принимать массив и возвращать наиболее часто встречающийся в массиве элемент.
функция должна выводить в консоль сообщение: `most frequent is <element>, which occures <number> times`.
Учтите что в массиве могут содержаться значения любых типов, в том числе и объекты.
подсказка: используйте Map
*/

/*
Write a function getMostFrequent that takes an array and returns the most frequently occurring element in the array.
The function should log the message to the console: most frequent is <element>, which occurs <number> times.
Note that the array can contain values of any type, including objects.
Hint: Use Map.
*/

const arr = [
	3,
	'a',
	'a',
	'a',
	2,
	3,
	'a',
	{ a: 2 },
	3,
	'a',
	2,
	4,
	9,
	3,
	{ a: 2 },
];

function getMostFrequent(arr) {
	const map = new Map();
	for (const el of arr) {
		if (!map.has(el)) map.set(el, 1);
		map.set(el, map.get(el) + 1);
	}
	console.log(map);
	const frequencies = Array.from(map).sort((a, b) => {
		return a[1] - b[1];
	});
	const mostFrequent = frequencies[frequencies.length - 1];
	console.log(
		`most frequent is ${mostFrequent[0]}, which occured ${mostFrequent[1]} times`
	);
	return mostFrequent[0];
}
const mostFrequent = getMostFrequent(arr);
