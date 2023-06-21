/*
Вам нужна функция, которая будет обрабатывать два чисоа нужным Вам образом и округлять результат в случае необходимости.

Напишите функцию, которая принимает:
  - два числа a и b (если не переданы, они должны быть получены с помощью Math.random);
  - коллбэк, который совершает какую-либо операцию с этими числами и возвращает результат;
  - необязательные опции в виде объекта options
    опция disallowNegative должна включать проверку чисел a и b (если числа меньше 0, выводится сообщение об ошибке)
    опция roundingType должна быть строкой и активировать округление результата с помощью Math.round, Math.ceil или Math.floor
    // опция roundingCb должна также быть коллбэком и округлять результат

    вызовите функцию:
      - коллбэк должен быть анонимным (быть определенным непосредственно при вызове функции рядом с другими аргументами внутри круглых скобок, без использования вспомогательных переменных)
      - попробуйте два разных варианта коллбэка, которые совершают разные математические действия.
      - помимо коллбэка передайте два любых числа и включите округление числа с помощью дополнительной опции;
      - вызовите функцию без дополнительных опций (ошибки Reference Error при этом быть не должно)
      - вызовите функцию таким образом, чтобы возникла ошибка при вызове отрицательного числа;
      - напишите вариант вызова функции, при котором дополнительные опции заданы, но числа принимают дефолтные значения (Math.random)
    */


/*
You need a function that processes two numbers in a specific way and rounds the result if necessary.

Write a function that takes:

two numbers, a and b (if not passed, they should be obtained using Math.random);

a callback function that performs some operation with these numbers and returns the result;

optional options as an options object:

the disallowNegative option should include a check for numbers a and b (if the numbers are less than 0, an error message is displayed);
the roundingType option should be a string and activate rounding of the result using Math.round, Math.ceil, or Math.floor;
the roundingCb option should also be a callback function and round the result.
Call the function:

the callback function should be anonymous (defined directly when calling the function alongside other arguments inside parentheses, without using auxiliary variables);
try two different variants of the callback function that perform different mathematical operations.
in addition to the callback function, pass two arbitrary numbers and enable rounding of the number using an additional option;
call the function without any additional options (it should not produce a Reference Error);
call the function in a way that generates an error when a negative number is used;
write a variant of calling the function where the additional options are provided, but the numbers take default values (Math.random).
*/

function calculate(cb, a = Math.random(), b = Math.random(), options = {}) {
	if (options.disallowNegative) {
		if (a < 0 || b < 0) throw new Error('negative numbers are not allowed');
	}
	let result = cb(a, b);
	if (options.roundingType) {
		switch (options.roundingType) {
			case 'ceil':
				result = Math.ceil(result);
				break;
			case 'floor':
				result = Math.floor(result);
				break;
			case 'round':
				result = Math.round(result);
			// no default
		}
	}
	// if (options.roundingCb) result = options.roundingCb(result);
	return result;
}

console.log(
	calculate((a, b) => a + b, 1, 0, {
		roundingType: 'round',
		disallowNegative: true,
		// roundingCb: Math.ceil,
	})
);

console.log(
	calculate((a, b) => a + b, undefined, undefined, {
		roundingType: 'ceil',
		disallowNegative: true,
		// roundingCb: Math.ceil,
	})
);
