/**
 * Задание 2.
 *
 * Написать функцию-сумматор всех своих параметров.
 *
 * Функция принимает произвольное количество параметров.
 * Однако каждый из них обязательно должен быть числом.
 *
 * Генерировать ошибку, если:
 * - Если функция была вызвана менее, чем с двумя аргументами;
 * - Хоть один из аргументов не является допустимым числом (в ошибке указать его порядковый номер).
 *
 * Условия:
 * - Использовать тип функции arrow function;
 * - Использовать объект arguments запрещено.
 */

/*
Task 2.
Write a function-summarizer for all its parameters.
The function accepts an arbitrary number of parameters.
However, each of them must be a number.
Generate an error if:
The function is called with less than two arguments;
At least one of the arguments is not a valid number (indicate its ordinal number in the error).
Conditions:
Use the arrow function type;
The use of the arguments object is prohibited.
*/

const sumAll = (...parameters) => {
	if (parameters.length < 2) {
		throw new Error('Функцию необходимо вызвать хотя-бы с двумя аргументами.');
	}

	let accumulator = 0;

	for (const parameter of parameters) {
		if (typeof parameter !== 'number' || Number.isNaN(parameter)) {
			throw new Error(
				`Аргумент ${
					parameters.indexOf(parameter) + 1
				} является не корректным числом.`
			);
		}

		accumulator = accumulator + parameter;
	}

	return accumulator;
};

console.log(sumAll(1, 8, 16, 666, 1.3));
console.log(sumAll(1, 2, 'string', 5));
