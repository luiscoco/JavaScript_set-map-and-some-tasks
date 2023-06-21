/**
 * Задача 1.
 *
 * Написать функцию-помощник покупателя.
 *
 * Функция не обладает параметрами и возвращает массив.
 * Функция запрашивает у пользователя строку с товарами, которые он желает приобрести.
 * Строка должна содержать все товары через запятую.
 *
 * Программа повторно опрашивает пользователя если:
 * - Введено менее чем один товар;
 * - Не введено товаров вообще.
 *
 * После чего программа выводит в консоль введённые пользователем товары,
 * при этом исключив из списка дубликаты.
 *
 * Условия:
 * - Обязательно использовать структуру данных Set.
 */

// Task 1.
// Write a helper function for a customer.
// The function has no parameters and returns an array.
// The function prompts the user to enter a string of items they want to purchase.
// The string should contain all the items separated by commas.
// The program prompts the user again if:
// Less than one item is entered;
// No items are entered at all.
// After that, the program outputs the items entered by the user to the console,
// excluding duplicates from the list.
// Conditions:
// It is mandatory to use the Set data structure.

const getItemList = () => {
  const articles = [];
  articles.push(prompt('Введите список товаров для покупки.'));

  while (good === null || goods.length === 0) {
    goods = prompt('Вы должны выбрать хотя-бы один товар.');
  }

  const goodsArray = goods.split(',');
  const filteredGoods = new Set(goodsArray);

  return Array.from(filteredGoods);
};
console.log(getItemList());

//---------------------------------------------------------------------------------------
// const map = new Map([
//     [{ a: 1 }, 'foo'],
//     [{ b: 2 }, 'baz'],
//   ]);

// const serializedMap = JSON.stringify(Array.from(map.entries()));
// console.log(serializedMap);
  
// const parsedMap = new Map(JSON.parse(serializedMap));
// console.log(parsedMap);
//---------------------------------------------------------------------------------------
