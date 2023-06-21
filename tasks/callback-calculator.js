/**
 * Задание 5.
 *
 * Написать калькулятор на функциях.
 *
 * Программа должна выполнять четыре математические операции:
 * - Сложение (add);
 * - Вычитание (subtract);
 * - Умножение (multiply);
 * - Деление (divide).
 *
 * Каждую математическую операцию должна выполнять отдельная функция.
 * Каждая такая функция обладает двумя параметрами-операндами,
 * и возвращает результат нужной операции над ними.
 *
 * Эти вспомогательные функции использует главная функция calculate,
 * которая обладает тремя параметрами:
 * - Первый — числовой тип, первый операнд;
 * - Второй — числовой тип, второй операнд;
 * - Третий — функцию, ссылка на ранее созданную вспомогательную функцию.
 *
 * Условия:
 * - Никаких проверок типов данных совершать не нужно;
 * - Обязательно использовать паттерн «callback».
 */

/*
Task 5.
Write a calculator using functions.
The program should perform four mathematical operations:
Addition (add);
Subtraction (subtract);
Multiplication (multiply);
Division (divide).
Each mathematical operation should be performed by a separate function.
Each function should have two operand parameters and return the result of the desired operation on them.
These helper functions are used by the main function calculate,
which has three parameters:
First - numeric type, the first operand;
Second - numeric type, the second operand;
Third - function, a reference to the previously created helper function.
Conditions:
No data type checks are required;
It is mandatory to use the "callback" pattern.
*/

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculate = (a, b, callback) => callback(a, b);
console.log(calculate(5, 9, sum));
console.log(calculate(1, 4, subtract));
console.log(calculate(3, 12, multiply));
console.log(calculate(14, 7, divide));
