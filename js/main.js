// Урок 17 (2 задачи)
// Дз:
// Завдання 1. Запитати у користувача кількість категорій витрат за минулий місяць,
// запитати які це категорії і скільки коштів на них було витрачено і записати все це у об'єкт.
// Написати функцію яка вирахує загальну суму всіх витрат.
// Результат вивести повідомленням (За минулий місяць Ви витратили … грн)
let month = prompt('Введіть місяць за який провести розрахунок');
let expensesNum = +prompt("Введіть кількість категорій витрат");
console.log(expensesNum);
let expenses = {};

for (let i = 1; i <= expensesNum; i++) {
  let expensesCat = prompt("Введіть назву категорії");
  let expensesValue = +prompt(`Скільки коштів Ви витратили на ${expensesCat}`);

  if (expensesCat !== null && expensesCat !== "" && expensesValue !== null && expensesValue !== "") {
    expenses[expensesCat] = expensesValue;

  } else {
    i--;
  };
}

function totalExpenses(object) {
  let total = 0;
  for (const key in object) {
    total += object[key];
  }
  return total;
}

let myExpenses = totalExpenses(expenses);

alert(`За ${month} місяць Ви витратили ${myExpenses} грн`);


